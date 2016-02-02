function main()
{
  
  // настройки 0 - вкл/выкл отчет по заявкам, 1 - вкл/выкл отчет по звонкам, 2 - урл отчета, 3- тег в почте, 4 - парсер_почты, 
  // 5 - номер на Яндекс, 6 - номер на гугл, 7 - количество цепочек на проверку, 8 - мин.длительность звонка (сек./ до 60 сек.), 9 - лист с отчетом Лиды, 10 - нормировщик номеров, 11 - лендинг
  var projects = [];
  // флагбай 
 projects[0] = [1, 1, 'https://docs.google.com/spreadsheets/d/1zsStF0qWOyHgMJ1ThHMwkse9hwANdaYzrSrladBrfYE/edit',"Flag", mailparser1, "375292081455", "", 3, 15, "LEADS", PhoneNormRB, ""];
   // модерн хаус 
  projects[1] = [0, 0, 'https://docs.google.com/a/artox-media.by/spreadsheets/d/1SZAbx6Rj0RixIAL-GEn3_xFiLGVlnycDVIdhY3RL3DY/edit',"Лиды/shkaf-kupe.for-all.by", mailparser2, "375297363635", "375297060676", 3, 15, "LEADS", PhoneNormRB, "land1"]; 
    // Iceagency btl-ice.ru
  projects[2] = [0, 0, 'https://docs.google.com/spreadsheets/d/1l5409SEDpdPTcNCv-TUtTaMagXqv3p2_0Yr-inEdxGI/edit',"Лиды/btl-ice.ru", mailparser3, "", "", 3, 15, "LEADS", PhoneNormRB, "land"];
  // Ветерок
  projects[3] = [0, 0, 'https://docs.google.com/spreadsheets/d/1XBzF4ssufNUc7q4E_41OP8XIamrnfdTOefhvpNw4cNo/edit',"Лиды/Veterok365", mailparser4, "", "", 3, 15, "LEADS", PhoneNormRB, "land1"];  
 
  
  
  // выключатель отчета по звонкам
  var ring_rprt = 1;  // 1-вкл., 0-выкл.
  
  // объявление глобальных переменных
  var url, name, phone, date2, time2, email, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term, type, source2, note, duration;
  // параметры проекта
  var ReportUrl, TagMail, ParserMail, PhoneY, PhoneG, MessCount, LeadDur, rep_sheet, PhoneNorm, land;
  // вспомогательные переменные
  var myArray, MsgBody, MsgSubj, reg, date1, day1, month1, year1, hour, min, attachments;
  

  // отчеты по звонкам
  if (ring_rprt==1)
  {
    var label = GmailApp.getUserLabelByName("Calls");
    var threads = label.getThreads(0, 1);
    for (var i = 0; i < threads.length; i++) 
    {  
      var messages = threads[i].getMessages();
      var temp = messages.length;
      for (var j = 0; j < messages.length; j++)
      {
        if (messages[j].isUnread()==true) 
        {
          MsgBody=messages[j].getBody();
          MsgSubj=messages[j].getSubject();
          // парсим звонки и вносим в отчет
          attachments = messages[j].getAttachments()[0].getDataAsString(); 
          url = "=HYPERLINK(\"https://mail.google.com/mail/u/0/?ui=2&ik=83490c8cd2&view=att&th=" + messages[j].getId() + "&attid=0.1&disp=inline&safe=1&zw&saduie=AG9B_P8KPjpv5lNlF60qvT0uutzU" + "\",\"url\")";
          
          mailparser_mts_RecordToReport(attachments);          
          // маркируем сообщение как непрочитанное (чтобы в следующий раз его не открывать)
          messages[j].markRead();
          
        }
      }
    }
  }
 
  
  
  // Выбираем папку с лидами проекта

  for (var i = 0; i < projects.length; i++) 
  {
    // обрабатываем проекты, в которых в настройках включен парсинг почты
    if (projects[i][0]==1)
    {
      // записываем в переменные параметры проекта
      ReportUrl=projects[i][2]; 
      TagMail=projects[i][3];
      ParserMail=projects[i][4];
      PhoneY=projects[i][5]; 
      PhoneG=projects[i][6];
      MessCount=projects[i][7];
      LeadDur=projects[i][8];
      rep_sheet=projects[i][9];
      PhoneNorm=projects[i][10];
      land=projects[i][11];
      var label = GmailApp.getUserLabelByName(TagMail);
      var threads = label.getThreads(0, MessCount);
      for (var k = 0; k < threads.length; k++) 
      {  
        // берем все сообщения из цепочки
        var messages = threads[k].getMessages();
        // для каждого сообщения из цепочки
        for (var j = 0; j < messages.length; j++)
        {
          if (messages[j].isUnread()==true) 
          {
            MsgBody=messages[j].getBody();
            MsgSubj=messages[j].getSubject();
            
            date1=messages[j].getDate();
            ParserMail(MsgBody,date1,MsgSubj);
            url = "=HYPERLINK(\"https://mail.google.com/mail/u/0/?ui=2&ik=83490c8cd2&view=dom&th=" + messages[j].getId() + "\",\"url\")";
            if (phone=="")
            {
              messages[j].markRead();
            }
            else
            {
              //function RecordToReport(ReportUrl, url, date, time, name, phone, type, duration, source, email, note, source2, rep_sheet) 
              if (RecordToReport(ReportUrl, url, date2, time2, name, phone, type, duration, source, email, note, source2, rep_sheet, "", PhoneNorm, land))
              {
                messages[j].markRead();
              }
            }
          }
        }
        
        
      }
    }
  }
  
  function mailparser1(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп shkaf-kupe.for-all.by
    var reg 
    if (MsgBody.match(/Имя:(.*)?/i)!=null)
    {
      reg = MsgBody.match(/Имя:(.*)?/i)[0]
      reg = reg.replace( /Имя:/i, "");
      name = reg.replace( /<.*?>/ig, "");
    } else  {name = "-";}
    if (MsgBody.match(/Телефон:(.*)?</i)!=null)
    {
      reg = MsgBody.match(/Телефон:(.*)?</i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /</i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    
    if (MsgBody.match(/Email:(.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Email:(.*)?\n/i)[0]
      reg = reg.replace( /Email:/i, "");
      reg = reg.replace( /\n/i, "");
      reg = reg.replace( /:/i, ""); // замена : на пустое
      email= reg.replace( /<.*?>/ig, "");
    } else  {email = "-";}
         
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="Заявка";
    note=""; 
    duration = "";
  }
  
  function mailparser2(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп oknamaster.by
    var reg 
    if (MsgBody.match(/Имя: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Имя: (.*)?\n/i)[0]
      reg = reg.replace( /Имя: /i, "");
      name = reg.replace( /\n/i, "");
    } else  {name = "-";}
    if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
      reg = reg.replace( /E-mail: /i, "");
      email = reg.replace( /\n/i, "");
    } else  {email = "-";}
    if (MsgBody.match(/Заказ: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Заказ: (.*)?\n/i)[0]
      reg = reg.replace( /Заказ: /i, "");
      note = reg.replace( /\n/i, "");
    } else  {note = "-";}
    source="";
    source2="";
    utm_parser(MsgBody);
    if (MsgBody.match(/Refer: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Refer: (.*)?\n/i)[0]
      reg = reg.replace( /Refer: /i, "");
      reg = reg.replace( /\n/i, "");
      source = source + reg.replace( /<wbr>/i, "");
    }
    if (MsgBody.match(/Phrase: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Phrase: (.*)?\n/i)[0]
      reg = reg.replace( /Phrase: /i, "");
      reg = reg.replace( /\n/i, "");
      source2 = source2 + reg.replace( /<wbr>/i, "");
    }  
    if (MsgBody.match(/Телефон: (.*)?(\n|$)/i)!=null)
    {
      reg = MsgBody.match(/Телефон: (.*)?(\n|$)/i)[0]
      reg = reg.replace( /<.*?>/ig, "");
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    
    type="Заявка";
    //source2="";
    email="";
    duration = "";
    note=MsgSubj;
  }
  
  function mailparser2(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп Шик-авто РФ
    var reg 
    if (MsgBody.match(/От: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/От: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /От: /i, "");
      name = reg.replace( /(<br>|\n)/ig, "");
    } else  {name = "-";}
    /*if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
    reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
    reg = reg.replace( /E-mail: /i, "");
    email = reg.replace( /\n/i, "");
    } else  {email = "-";}*/
    if (MsgBody.match(/Тема: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Тема: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Тема: /i, "");
      note = reg.replace( /(<br>|\n)/ig, "");
    } else  {note = "-";}
    
    if (MsgBody.match(/Телефон: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Телефон: (.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="Заявка";
    //source2="";
    email="";
    duration = "";
  }
  
  function mailparser3(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп Шик-авто Рио
    var reg 
    if (MsgBody.match(/От: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/От: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /От: /i, "");
      name = reg.replace( /(<br>|\n)/ig, "");
    } else  {name = "-";}
    /*if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
    reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
    reg = reg.replace( /E-mail: /i, "");
    email = reg.replace( /\n/i, "");
    } else  {email = "-";}*/
    if (MsgBody.match(/Email: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Email: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Email: /i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Контактный телефон: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Контактный телефон: (.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    //utm_parser(MsgBody);
    type="Заявка";
    source2="";
    source="";
    note="";
    duration = "";
  }
  
  
  function mailparser4(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп Шик-авто Рио-ЯЛ
    var reg 
    if (MsgBody.match(/IP Address : (.*)?\n(.*)?\n/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : (.*)?\n(.*)?\n/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      note = reg.replace( /(<.*?>|E-mail|\n)/ig, "");
    } else  {note = "-";}
    /*if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
    reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
    reg = reg.replace( /E-mail: /i, "");
    email = reg.replace( /\n/i, "");
    } else  {email = "-";}*/
    if (MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail : /i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Phone : (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Phone : (.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    //utm_parser(MsgBody);
    type="Заявка";
    source2="";
    source="";
    name="-";
    duration = "";
  }
  
  
  
  // Парсеры закончились
  
  
  function utm_parser(MsgBody)
  {
    if (MsgBody.match(/http(.*?)($|\n| )/ig)!=null)
    {
      var reg = MsgBody.match(/http(.*?)($|\n| )/ig)[0];
      reg = reg.replace( /<.*?>/ig, "");
      reg = reg.replace( /\n/ig, "");
      reg = reg.replace( /&amp;/ig, "&");
      reg = reg.replace( /<.{1,3}$/i, "");
      source2 = reg;
    } else
    {
      source2="";
    }
    
    if (MsgBody.match(/utm_source=(.*?)(&|$| |\n)/i)!=null)
    {
      var reg = MsgBody.match(/utm_source=(.*?)(&|$| |\n)/i)[0];
      reg = reg.replace( /utm_source=/i, "");
      reg = reg.replace( /#.*/i, ""); // для случая yandex#geos3
      utm_source = reg.replace( /&/i, "");
    } else
    {
      utm_source="";
    }
    
    if (MsgBody.match(/utm_medium=(.*?)&/i)!=null)
    { 
      var reg = MsgBody.match(/utm_medium=(.*?)&/i)[0];
      reg = reg.replace( /utm_medium=/i, "");
      utm_medium = reg.replace( /&/i, "");
    } else
    {
      utm_medium="";
    }
    
    if (MsgBody.match(/utm_campaign=(.*?)(&|$| |\n)/i)!=null)
    {
      var reg = MsgBody.match(/utm_campaign=(.*?)(&|$| |\n)/i)[0];
      reg = reg.replace( /utm_campaign=/i, "");
      utm_campaign = reg.replace( /&/i, "");
      if(utm_campaign.match(/rsya/i)!=null)
      {
        utm_campaign="rsya";
      } else
      {
        if(utm_campaign.match(/kms/i)!=null)
        {
          utm_campaign="kms";
        } else
        {
          if(utm_campaign.match(/remarketing/i)!=null)
          {
            utm_campaign="remarketing";
          }
        }
      }
    } else
    {
      utm_campaign="";
    }
    if (MsgBody.match(/utm_content=(.*?)&/i)!=null)
    {
      var reg = MsgBody.match(/utm_content=(.*?)&/i)[0];
      reg = reg.replace( /utm_content=/i, "");
      utm_content = reg.replace( /&/i, "");
    } else
    {
      utm_content="";
    }
    if (MsgBody.match(/utm_term=(.*?)&/i)!=null)
    {
      var reg = MsgBody.match(/utm_term=(.*?)&/i)[0];
      reg = reg.replace( /utm_term=/i, "");
      utm_term = reg.replace( /&/i, "");
    } else
    {
      utm_term="";
    }
    // на основании меток присваиваем источник 
    if(utm_campaign == "rsya")
    {
      source = "rsya";
    } else
    {
      if(utm_campaign == "kms")
      {
        source = "kms";
      } else
      {
        if(utm_campaign == "remarketing")
        {
          source = "rem-" + utm_source;
        } else
        {
          source = utm_source;
        }
      }
      
    }
    
  }
  
  function mailparser_mts_RecordToReport(attachments) 
  {
    // используется для парсинга звонков из кабинета мтс
    // убрать первые дату и номера
    var type="Звонок"; 
    var period = attachments.match( /за период с \d{2}\.\d{2}\.\d{4}.*?по.*?\d{2}:\d{2}:\d{2}/i);
    var attachments = attachments.replace( /за период с \d{2}\.\d{2}\.\d{4}.*?по.*?\d{2}:\d{2}:\d{2}/i, "");
    var source1 = attachments.match( /<b>\d{12}</i);
    source1[0] = source1[0].replace( /\D/ig, "");
    
    //перебираем проекты
    for (var k = 0; k < projects.length; k++) 
    {
      if (projects[k][5]==source1 || projects[k][6]==source1)
      {
        ReportUrl=projects[k][2]; 
        TagMail=projects[k][3];
        ParserMail=projects[k][4];
        PhoneY=projects[k][5]; 
        PhoneG=projects[k][6];
        MessCount=projects[k][7];
        LeadDur=projects[k][8];
        rep_sheet=projects[k][9];
        PhoneNorm=projects[k][10];
        land=projects[k][11];
        k = k+1000;
      }
    }
    
    if (k > 999)
    {
      if (source1 == PhoneY) 
      {
        source="yandex";
      } else
      {
        if (source1 == PhoneG) 
        {
          source="google";
        }
        else
        {
          source="неопределен";
        }
      }
      var attachments = attachments.replace( /<b>\d{12}</i, "");
      var attachments = attachments.replace( /<b>\d{20}</i, "");
      
      var res_date = attachments.match(/\d{2}\.\d{2}\.\d{4}/ig);
      var res_time = attachments.match(/\d{1,2}:\d{2}:\d{2}/ig);
      var res_dur = attachments.match(/>(\d{1,2}:\d{1,2}|1)</ig);
      attachments = attachments.replace(/\s/gi, " ");
      var res_phone = attachments.match(/\d{1,2}:\d{2}:\d{2}.*?<\/td>.*?<\/td>/ig);
      
      // проверка 
      if (res_date!=null)
      {
        if (res_date.length!=res_time.length || res_time.length!=res_phone.length || res_phone.length!=res_dur.length) 
        {
          var msg = "ошибки при парсинге отчета по звонкам";
          return false;
        }
        // для каждой записи в отчете по звонкам
        var t=0;
        for (var j = 0; j < res_phone.length; j++)
        { //если это номер входящего (обозначается <--)
          if (res_phone[j].match(/--/)!= null & res_dur[j].match(/\d{1,2}:/ig)!= null)
          { 
            // если звонок проходит по длительности
            var tmp1 = res_dur[j].match(/\d{1,2}:/ig)[0];
            tmp1 = tmp1.replace( /:/ig, "");
            var tmp2 = res_dur[j].match(/:\d{1,2}/ig)[0];
            tmp2 = tmp2.replace( /:/ig, "");
            if (Number(tmp1) > 0 || Number(tmp2) >= LeadDur)
            {
              // очищаем данные 
              var date = res_date[j].replace( /\./ig, "/");
              var time = res_time[j];
              var duration = res_dur[j].replace( /(>|<)/ig, "");
              var name="-";
              var email="-";
              var note="";
              res_phone[j] = res_phone[j].replace(/\d{1,2}:\d{2}:\d{2}/i, "");
              var phone = res_phone[j].replace( /\D/ig, "");
              
              if (!RecordToReport(ReportUrl, url, date, time, name, phone, type, duration, source, email, note, "", rep_sheet, "", PhoneNorm, land))
              {
                return false;
              }
              t++;
            }
          }
        }
      }
    }
    return true;
  }
  
  
} 



// "Mon Jun 22 2015 09:43:24 GMT+0300 (EAT)" ---> "22/06/2015"
function DateNorm(date1)
{
  var day1 = addZero(date1.getDate());
  var month1 = addZero(parseInt(date1.getMonth(), 10) + 1);
  var year1 = date1.getFullYear(); 
  var date = String(day1) + "/" + String(month1) + "/" + String(year1);
  return date;
}

function addZero(i) 
{
  return (i < 10)? "0" + i: i;
}

function RecordToReport(ReportUrl, url, date, time, name, phone, type, duration, source, email, note, source2, rep_sheet, script_vers, PhoneNorm, land) 
{
  // структура отчета 
  //1-A - URL
  //2-B- Имя	
  //3-C - Телефон	
  //4-D - E-mail	
  //5-E - Лид (звонок/заявка)	
  //6-F - Длительность	
  //7-G - Дата	
  //8-H - Время	
  //9-I - Доп параметры лида
  //10-J - Статус лида	
  //11-K - Обработка лида	
  //12-L - Статус клиента
  //13-M - Подробности от клиента
  //14-N - источник
  //15-O - интерес
  //16-P - land
  // The code below opens a spreadsheet using its id and logs the name for it.
  // Note that the spreadsheet is NOT physically opened on the client side.
  // It is opened on the server only (for modification by the script).
  var ss = SpreadsheetApp.openByUrl(ReportUrl);
  var first = ss.getSheetByName(rep_sheet);
  //first.activate();
  //var lastRow = first.getLastRow();
  var values = first.getRange("C:G").getValues();
  var maxrow = first.getRange("C:G").getLastRow();
  // Находит последнюю заполненную строку в столбцах
  for (var j = 0; j < values.length && (values[j][0]!="" || values[j][2]!="" || values[j][4]!=""); j++){}
  var lastRow = j;
  if (lastRow >= values.length){
    first.appendRow(["", "", ""]);
  }
  
  try {
    first.getRange(lastRow+1,1).setValue(url);
    first.getRange(lastRow+1,2).setValue(name);
    first.getRange(lastRow+1,3).setValue(PhoneNorm(phone));
    first.getRange(lastRow+1,4).setValue(email);
    first.getRange(lastRow+1,5).setValue(type);
    first.getRange(lastRow+1,6).setValue(duration);
    first.getRange(lastRow+1,7).setValue(date);
    first.getRange(lastRow+1,8).setValue(time);
    first.getRange(lastRow+1,9).setValue(note);
    first.getRange(lastRow+1,10).setValue("Уточняется");
    first.getRange(lastRow+1,14).setValue(source);
    first.getRange(lastRow+1,15).setValue(source2);
    first.getRange(lastRow+1,16).setValue(land);
  } catch (err) {
     
    return false;
  }
  return true;
}

// "Mon Jun 22 2015 09:43:24 GMT+0300 (EAT)" ---> "09:43"
function TimeNorm(date1)
{
  var hour = date1.getHours();
  var min = date1.getMinutes();
  var time = String(hour) + ":" + String(min);
  return time;
}

function PhoneNormRB(phone) 
{ // парсим только сотовых операторов и городские г.Минск '8232607704
  if (phone.match(/\d{9}/) == null)
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
    if (tmp1=="29" || tmp1=="44" || tmp1=="33" || tmp1=="25" || tmp1=="17")
    {
      phonenorm = " (" + tmp1 + ") "+ phonenorm;
      if (tmp == "375" || tmp == "8" || tmp == "80" || tmp == "+375" || tmp == "")
      {
        phonenorm = "'+375" + phonenorm;
      } else
      {
        return phone;
      }
    } else
    {
      return phone;
    }
  }
  return phonenorm;
}

function PhoneNormRF(phone) 
{ // парсим телефоны РФ
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
  tmp1 = tmp.match(/\d{3}$/);
  if (tmp1==null)
  {
    return phone;
  } else
  { 
    tmp1 = tmp.match(/\d{3}$/)[0];
    tmp = tmp.replace(/\d{3}$/, "");
    phonenorm = " (" + tmp1 + ") "+ phonenorm;
    if (tmp == "8" || tmp == "7" || tmp == "+7" || tmp == "+8")
    {
      phonenorm = "'+7" + phonenorm;
    } else
    {
      return phone;
    }
    
  }
  return phonenorm;
}

