function main() {
  
  // объявление глобальных переменных
  var fio, name, phone; 
  var address;
  var email;
  var order;
  var sum;
  var description;
  
  // НАСТРОИТЬ
  var label = GmailApp.getUserLabelByName('Лиды/test');
  var label2 = GmailApp.getUserLabelByName('Лиды/Обработано');
  
  // берем все цепочки
  var threads = label.getThreads(0, 10);
  
  for (var k = 0; k < threads.length; k++) 
  {  
    var nsucc = 0;
    // берем все сообщения из цепочки
    var messages = threads[k].getMessages();
    // для каждого сообщения из цепочки
    for (var j = 0; j < messages.length; j++)
    {
      
      MsgBody=messages[j].getBody();
      
      //Logger.log(MsgBody);
      MsgSubj=messages[j].getSubject();
      date1=messages[j].getDate();
      if(ParserMail(MsgBody,date1,MsgSubj)){ // если в теле письма есть теги-ключи, то парсим и вносим в отчет
        if (RecordToReport(fio, order, phone, address, sum))
        { // если цепочка обработана успешно, то удаляем метку "оплачено" и добавляем метку "обработано" 
          nsucc = nsucc + 1;
        }
      }
    }
    if (nsucc>0){
      label2.addToThread(threads[k]);
      label.removeFromThread(threads[k]);

    }
  }
  
  
  function ParserMail(MsgBody,date1,MsgSubj){
    var reg;
    
    //Browser.msgBox(MsgBody);
    if (MsgBody.match(/Тел:.*?(Заказ:)/i)!=null)
    {
      reg = MsgBody.match(/Тел:.*?(Заказ:)/ig)[0];
      reg = reg.replace( /Тел:/i, "");
      reg = reg.replace( /Заказ:/i, "");
      reg = reg.replace( /<.*?>/i, "");
      phone = reg.replace( /( |\D)/ig, "");
    } else  {phone = "-";
             return false;}
    
    phone = PhoneNormUA(phone);
    
    if (MsgBody.match(/Email: .*?<\/a>/i)!=null)
    {
      reg = MsgBody.match(/Email: .*?<\/a>/i)[0];
      reg = reg.replace( /Email: /i, "");
      email = reg.replace( /<.*?>/ig, "");
    } else  {email = "-";}
    
    if (MsgBody.match(/Адрес:.*/i)!=null)
    {
      reg = MsgBody.match(/Адрес:.*/i)[0];
      reg = reg.replace( /Адрес:/i, "");
      reg = reg.replace( /(^( )+|( )+$)/ig, "");
      address = reg.replace( /<.*?>/ig, " ");
    } else  {address = "-";}
    
    if (MsgBody.match(/ФИО: .*?Адрес:/i)!=null)
    {
      reg = MsgBody.match(/ФИО: .*?Адрес:/i)[0];
      reg = reg.replace( /Адрес:/i, "");
      reg = reg.replace( /ФИО: /i, "");
      reg = reg.replace( /(^( )+|( )+$)/ig, "");
      fio = reg.replace( /<.*?>/ig, " ");
    } else  {fio = "-";}
    
    
    if (MsgBody.match(/Заказ:( )?.*?Email:/i)!=null)
    {
      reg = MsgBody.match(/Заказ:( )?.*?Email:/i)[0];
      reg = reg.replace( /Заказ:/i, "");
      reg = reg.replace( /Email:/i, "");
      order = reg.replace( /<.*?>/ig, "");
      order = reg.replace( / /ig, "");
    } else  {order = "-";}
    
    order = reg.replace( /(\n|\s)/ig, ""); 
    sum = order.match(/^\d+;/i)[0];
    sum = sum.replace( /\D/ig, "");
    order = [];
    var ordertmp = MsgBody.match(/\d+:\d+\*\d+/ig);
    
    for (var j = 0; j < ordertmp.length; j++){
      arti = ordertmp[j].match(/\d+:/i)[0];
      arti = arti.replace( /:/ig, "");
      
      counti = ordertmp[j].match(/:\d+\*/i)[0];
      counti = counti.replace( /(:|\*)/ig, "");
      
      sumi = ordertmp[j].match(/\*\d+/i)[0];
      sumi = sumi.replace( /\*/i, "");
      order[j] = [arti, counti, sumi];
    }
    
    return true;
  }
  
  
  
  function PhoneNormUA(phone) 
  { // парсим телефоны UA
    if (phone.match(/\d{10}/) == null)
    {
      return phone;
    }
    
    var tmp=phone;
    var phonenorm="";
    var tmp1 = tmp.match(/\d{2}$/)[0];
    tmp = tmp.replace(/\d{2}$/, "");
    phonenorm = "-" + tmp1;
    tmp1 = tmp.match(/\d{2}$/)[0];
    tmp = tmp.replace(/\d{2}$/, "");
    phonenorm = "-" + tmp1 + phonenorm;
    tmp1 = tmp.match(/\d{3}$/)[0];
    tmp = tmp.replace(/\d{3}$/, "");
    phonenorm = tmp1 + phonenorm;
    // берем код оператора
    tmp1 = tmp.match(/\d{2}$/);
    if (tmp1==null)
    {
      return phone;
    } else
    { 
      tmp1 = tmp.match(/\d{2}$/)[0];
      tmp = tmp.replace(/\d{2}$/, "");
      phonenorm = " (" + tmp1 + ") "+ phonenorm;
      if (tmp == "+380" || tmp == "380" || tmp == "80" || tmp == "0")
      {
        phonenorm = "'+380" + phonenorm;
      } else
      {
        return phone;
      }
      
    }
    return phonenorm;
  }
  
  // загрузка
  function GetDescription(artic){
    
    var cache = CacheService.getScriptCache();
    var cached = cache.get(artic);
    if (cached != null) {
      return cached;
    }
    var x=0;
    for (var j = 0; j < 1000000; j++){ // 5 sec.
      x=x+1;
    }
    var result = UrlFetchApp.fetch("http://www.ikea.com/ru/ru/catalog/products/"+ artic + "/");
    var contents = result.getContentText();
    cache.put(artic, contents, 36000); // cache for 10 hours
    return contents;
    
    
    
  }
  
  function ParsDescription(contents){
    var reg;//,name, description, res;
    contents = contents.replace( /(\n|\s)/ig, " ");
    contents = contents.match(/<h1>.*?<\/h1>/i)[0];
    
    if (contents.match(/<div.*?class\=.productName.>.*?<\/div>/i)!=null)
    {
      reg = contents.match(/<div.*?class\=.productName.>.*?<\/div>/i)[0];
      reg = reg.replace( /(\n|\s)/ig, " ");
      reg = reg.replace( /<.*?>/ig, " ");
      name = reg.replace(/(^( )+|( )+$)/ig, "");
      
    } else  {name = "-";}

    if (contents.match(/<div.*?(class\=.productType.>).*?<\/div>/i)!=null)
    {
      reg = contents.match(/<div.*?(class\=.productType.>).*?<\/div>/i)[0];
      reg = reg.replace( /(\n|\s)/ig, " ");
      reg = reg.replace( /<.*?>/ig, " ");
      reg = reg.replace( /\s/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      description = reg.replace( /(^( )+|( )+$)/ig, "");
    } else  {description = "-";}
     
    //res = name + " " + description;
    return description;
  }
  
  function RecordToReport(fio, order, phone, address, sum) 
  {
    // структура отчета 
    //1-A - number
    //2-B- Имя	
    //3-C - Товар	
    //4-D - Артикул	
    //5-E - Количество	
    //6-F - Телефон	
    //7-G - Адрес доставки	
    //8-H - Общая стоимость
    
    // The code below opens a spreadsheet using its id and logs the name for it.
    // Note that the spreadsheet is NOT physically opened on the client side.
    // It is opened on the server only (for modification by the script).
    // НАСТРОИТЬ
    ReportUrl = "https://docs.google.com/spreadsheets/d/1TKQ-61WAASEUU3X7FxvDoO6Cd6hFGLbmN9avtxLL1IU/edit#gid=0"
    var ss = SpreadsheetApp.openByUrl(ReportUrl);
    var first = ss.getActiveSheet(); //getSheetByName(rep_sheet);
    //first.activate();
    //var lastRow = first.getLastRow();
    var values = first.getRange("A:G").getValues();
    var maxrow = first.getRange("A:G").getLastRow();
    // Находит последнюю заполненную строку в столбцах
    for (var j = values.length-1; j > 0 && (values[j][0]=="" && values[j][2]=="" && values[j][4]==""); j--){}
    var lastRow = j+2;
    if (lastRow >= values.length){
      first.appendRow(["", "", ""]);
    }
    for (var j = values.length-1; j > 0 && (values[j][0]==""); j--){}
    var number=1;
    if (values[j][0]!=''){
      number = parseInt(values[j][0], 10)+1;
    }
    for (var i = 0; i < order.length; i++){
      var str = ParsDescription(GetDescription(order[i][0]));//"СНИГЛАР Кроватка детская, бук";
      //Browser.msgBox(str.charCodeAt(0));
      //Browser.msgBox(str.charCodeAt(1));
      //Browser.msgBox(str.charCodeAt(7));
      // Browser.msgBox(str.charCodeAt(8));
      first.getRange(lastRow+1+i,3).setValue(str);
      try {
      } catch (err) {
        
        return false;
      }
      first.getRange(lastRow+1+i,1).setValue(number);
      first.getRange(lastRow+1+i,2).setValue(fio);
      
      first.getRange(lastRow+1+i,4).setValue(order[i][0]);
      first.getRange(lastRow+1+i,5).setValue(order[i][1]);
      first.getRange(lastRow+1+i,6).setValue(phone);
      first.getRange(lastRow+1+i,7).setValue(address);
      first.getRange(lastRow+1+i,8).setValue(sum);
      

    }
    first.getRange(lastRow+1, 1, order.length).setVerticalAlignment("Middle");
    first.getRange(lastRow+1, 1, order.length).merge();
    first.getRange(lastRow+1, 2, order.length).setVerticalAlignment("Middle");
    first.getRange(lastRow+1, 2, order.length).merge();
    first.getRange(lastRow+1, 6, order.length).setVerticalAlignment("Middle");
    first.getRange(lastRow+1, 6, order.length).merge();
    first.getRange(lastRow+1, 7, order.length).setVerticalAlignment("Middle");
    first.getRange(lastRow+1, 7, order.length).merge();
    first.getRange(lastRow+1, 8, order.length).setVerticalAlignment("Middle");
    first.getRange(lastRow+1, 8, order.length).merge();
    first.getRange(lastRow+1+order.length,1,1,9).setBackground('yellow');

    return true;
  }
  
  
  
}







function test(){
  var number = parseInt('', 10)+1;
  return false;
}









