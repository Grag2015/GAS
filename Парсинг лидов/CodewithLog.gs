//лог - https://docs.google.com/spreadsheets/d/1GUJLIkXyJ8vcCCJQhza5Jl0EHUUtlMFQHs3xIA4ya_s/edit
function main()
{
  // версия скрипта - дата + номер изменения уникальный в течение дня
  var script_vers="'03082015_v2";
  
  // настройки 0 - вкл/выкл отчет по заявкам, 1 - вкл/выкл отчет по звонкам, 2 - урл отчета, 3- тег в почте, 4 - парсер_почты, 
  // 5 - номер на Яндекс, 6 - номер на гугл, 7 - количество цепочек на проверку, 8 - мин.длительность звонка (сек./ до 60 сек.), 9 - лист с отчетом Лиды, 10 - нормировщик номеров, 11 - лендинг
  var projects = [];
  // окнамастер *
  projects[0] = [0, 1, 'https://docs.google.com/spreadsheets/d/1uJ0gkBcp7qi5t6JfRI7ubzlQYoCRwHZfU3d-pMBd0Ug/edit',"Лиды/окнамастер", mailparser2, "375297044455", "375297030305", 2, 15, "LEADS", PhoneNormRB, ""];
  // модерн хаус *
  projects[1] = [0, 1, 'https://docs.google.com/a/artox-media.by/spreadsheets/d/1SZAbx6Rj0RixIAL-GEn3_xFiLGVlnycDVIdhY3RL3DY/edit',"Лиды/shkaf-kupe.for-all.by", mailparser1, "375297363635", "375297060676", 3, 15, "LEADS", PhoneNormRB, "land1"]; //
  // ИП Шарко
  projects[2] = [0, 0, 'https://docs.google.com/spreadsheets/d/1cnha9CHl82M15dUnpGuyBn7lyCUonFIYNPTftMFTPOc/edit',"Лиды/ИП Шарко", "", "375297094242", "375297090602", 2, 15, "LEADS", PhoneNormRB, ""];
  // ГЛС Мебель *
  projects[3] = [0, 1, 'https://docs.google.com/spreadsheets/d/1kWwKVS_PaphldxRFAc45LyGXIpmPA1QMlFSPbBZkCX0/edit',"Лиды/mebelgls", mailparser6, "375297488834", "375297497649", 2, 15, "LEADS", PhoneNormRB, ""];
  // Шик-авто Рио
  projects[4] = [0, 0, 'https://docs.google.com/spreadsheets/d/1zKxNqABPvoQW1K-VoeHzQlkEEydpkuYHb1oOxt93lYE/edit',"Лиды/Шик-авто-рио", mailparser4, "375297448882", "375297755664", 2, 15, "LEADS", PhoneNormRB, ""];
  // Шик-авто РФ
  projects[5] = [0, 0, 'https://docs.google.com/spreadsheets/d/1V5voZtScyZBRPetMzQPcJTevposv8YcEYI9eRzZkhPA/edit',"Лиды/Шик-авто-рф", mailparser3, "375298204317", "375298205975", 2, 15, "LEADS", PhoneNormRB, ""];
  // Шик-авто Рио (ЯЛ)
  projects[6] = [0, 0, 'https://docs.google.com/spreadsheets/d/1zKxNqABPvoQW1K-VoeHzQlkEEydpkuYHb1oOxt93lYE/edit',"Лиды/Шик-авто-рио-ЯЛ", mailparser5, "375297552515", "", 2, 15, "LEADS2", PhoneNormRB, ""];
  // Консалт-эксперт sro123.info mailparser7
  projects[7] = [1, 0, 'https://docs.google.com/spreadsheets/d/18G9Q-YYYFh4I_kxwgN0M8FCAXZmBPb3bn6tCCabRn0M/edit',"Лиды/sro123.info", mailparser14, "", "", 3, 15, "LEADS", PhoneNormRF, "land1"];
  // Iceagency btl-ice.ru *
  projects[8] = [0, 0, 'https://docs.google.com/spreadsheets/d/1l5409SEDpdPTcNCv-TUtTaMagXqv3p2_0Yr-inEdxGI/edit',"Лиды/btl-ice.ru", mailparser8, "", "", 3, 15, "LEADS", PhoneNormRF, ""];
  // Ветерок *
  projects[9] = [0, 0, 'https://docs.google.com/spreadsheets/d/1XBzF4ssufNUc7q4E_41OP8XIamrnfdTOefhvpNw4cNo/edit',"Лиды/Veterok365", mailparser9, "", "", 3, 15, "LEADS", PhoneNormRF, ""];
  // Шеф-кухни *
  projects[10] = [0, 1, 'https://docs.google.com/spreadsheets/d/1F3HZqj-uT6jqglnfsqBltXn2bEVijN2J-UiZrI2PcDY/edit',"Лиды/Shef-kuhni", mailparser15, "375297448333", "375297453366", 3, 15, "LEADS", PhoneNormRB, ""];
  // 24окна *
  projects[11] = [0, 1, 'https://docs.google.com/spreadsheets/d/17lTPYBKTuMBH1PLsV6zkGzq5oFhzTviZW94vz8Mikl8/edit',"Лиды/24okna", mailparser11, "375298206524", "", 3, 15, "LEADS", PhoneNormRB, ""];
  // Alfa-credit.by (без номеров, только заявки) *
  projects[12] = [0, 0, 'https://docs.google.com/spreadsheets/d/1EUrOu6b981ct5lsNGtmRO2NBv0bDAW-8RapRrMAhoio/edit',"Лиды/Alfa-credit.by", mailparser12, "", "", 10, 15, "LEADS", PhoneNormRB, ""]; 
  // Artox-lid.by *
  projects[13] = [0, 1, 'https://docs.google.com/spreadsheets/d/1qM2q8iloucUTqNy92TpLQa2BEl_645SKePip1yaGSB4/edit',"Лиды/ARTOX-lid", mailparser13, "375297029595", "", 3, 15, "LEADS", PhoneNormRB, ""];
  // модерн хаус 2 shkafy-vygodno.by *
  projects[14] = [0, 1, 'https://docs.google.com/a/artox-media.by/spreadsheets/d/1SZAbx6Rj0RixIAL-GEn3_xFiLGVlnycDVIdhY3RL3DY/edit',"Лиды/shkafy-vygodno.by", mailparser16, "375298206541", "375297049595", 3, 15, "LEADS", PhoneNormRB, "land2"]; //
   // Консалт-эксперт 12sro.ru 
  projects[15] = [1, 0, 'https://docs.google.com/spreadsheets/d/18G9Q-YYYFh4I_kxwgN0M8FCAXZmBPb3bn6tCCabRn0M/edit',"Лиды/12sro.ru", mailparser17, "", "", 3, 15, "LEADS", PhoneNormRF, "land2"];

  
  
  
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
    // Выбираем папку с лидами проекта
    var label = GmailApp.getUserLabelByName("Лиды/Calls");
    var threads = label.getThreads(0, 1);
    // перебираем цепочки
    for (var i = 0; i < threads.length; i++) 
    {  
      // перебираем сообщения из цепочки
      var messages = threads[i].getMessages();
      // для каждого сообщения из цепочки
      var temp = messages.length;
      for (var j = 0; j < messages.length; j++)
        //ищем непрочитанные сообщения
      {
        if (messages[j].isUnread()==true) 
        {
          // получаем тему и текст письма (в ХТМЛ)
          MsgBody=messages[j].getBody();
          MsgSubj=messages[j].getSubject();
          // парсим звонки и вносим в отчет
          attachments = messages[j].getAttachments()[0].getDataAsString(); 
          url = "=HYPERLINK(\"https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=1d1f9fd3fc&view=att&th=" + messages[j].getId() + "&attid=0.1&disp=inline&safe=1&zw&saduie=AG9B_P8KPjpv5lNlF60qvT0uutzU" + "\",\"url\")";
          
          mailparser_mts_RecordToReport(attachments);          
          // маркируем сообщение как непрочитанное (чтобы в следующий раз его не открывать)
          messages[j].markRead();
          
        }
      }
    }
  }
  
  
  // Выбираем папку с лидами проекта
  
  //перебираем проекты
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
          //ищем непрочитанные сообщения
        {
          if (messages[j].isUnread()==true) 
          {
            // получаем тему и текст письма (в ХТМЛ)
            MsgBody=messages[j].getBody();
            MsgSubj=messages[j].getSubject();
            // маркируем сообщение прочитанным (чтобы в следующий раз его не открывать)
            
            date1=messages[j].getDate();
            ParserMail(MsgBody,date1,MsgSubj);
            url = "=HYPERLINK(\"https://mail.google.com/mail/u/0/?ui=2&ik=1d1f9fd3fc&view=om&th=" + messages[j].getId() + "\",\"url\")";
            if (phone=="")
            {
              msg = "НЕ распарсилась (либо пустой номер) заявка с темой " + MsgSubj + " от " + date1;
              //RecordToLog(msg);
              RecordToLog2(msg, TagMail, "Заявка", date1, url, script_vers);
              messages[j].markRead();
            }
            else
            {
              //function RecordToReport(ReportUrl, url, date, time, name, phone, type, duration, source, email, note, source2, rep_sheet) 
              if (RecordToReport(ReportUrl, url, date2, time2, name, phone, type, duration, source, email, note, source2, rep_sheet, script_vers, PhoneNorm, land))
              {
                messages[j].markRead();
              }
              msg = "Распарсилась успешно Заявка ID: " + messages[j].getId() + " от " + date1;
              //RecordToLog(msg);
              RecordToLog2(msg, TagMail, "Заявка", date1, url, script_vers);
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
    if (MsgBody.match(/Имя: (.*)?</i)!=null)
    {
      reg = MsgBody.match(/Имя: (.*)?</i)[0]
      reg = reg.replace( /Имя: /i, "");
      name = reg.replace( /</i, "");
    } else  {name = "-";}
    if (MsgBody.match(/Телефон(.*)?</i)!=null)
    {
      reg = MsgBody.match(/Телефон(.*)?</i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /</i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="Заявка";
    note=""; 
    email="";
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
    
    type="Заявка";
    //source2="";
    email="";
    duration = "";
  }
  
  function mailparser3(MsgBody, date1 ,MsgSubj) 
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
  
  function mailparser4(MsgBody, date1 ,MsgSubj) 
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
  
  
  function mailparser5(MsgBody, date1 ,MsgSubj) 
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
  
  function mailparser6(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп МебельГЛС
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form :/ig, "");
      reg = reg.replace( /\n/ig, " ");
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
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
    
    if (MsgBody.match(/Phone(.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Phone(.*)?\n/i)[0]
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
    //source="";
    name="-";
    duration = "";
  }
  
  function mailparser7(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп sro123.info
    var reg 
    MsgBody = MsgBody.replace( /<.*?>/ig, "");
    if (MsgBody.match(/Новая заявка от .*/i)!=null)
    {
      reg = MsgBody.match(/Новая заявка от .*/i)[0]
      name = reg.replace( /Новая заявка от /i, "");
    } else  {name = "-";}
    if (MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail : /i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Телефон:(\n)?.*?\n/i)!=null)
    {
      reg = MsgBody.match(/Телефон:(\n)?.*?\n/i)[0]
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
  
  function mailparser8(MsgBody, date1 ,MsgSubj) 
  {
    // используется для лп btl-ice.ru
    var reg 
    if (MsgBody.match(/Имя: (.*)?</i)!=null)
    {
      reg = MsgBody.match(/Имя: (.*)?</i)[0]
      reg = reg.replace( /Имя: /i, "");
      name = reg.replace( /</i, "");
    } else  {name = "-";}
    if (MsgBody.match(/Телефон(.*)?</i)!=null)
    {
      reg = MsgBody.match(/Телефон(.*)?</i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /</i, "");
    } else  
    {
      // ключевое поле, если не удалось распарсить помечаем "" - это используем в дальнейшем
      phone = "";
    }
    reg = MsgBody.replace(/(<.*?>|\n)/ig, " ");
    if (reg.match(/Дополнительная информация:.*?Это сообщение/ig)!=null)
    {
      reg = reg.match(/Дополнительная информация:.*?Это сообщение/ig)[0]
      reg = reg.replace( /Дополнительная информация:/i, "");
      reg = reg.replace( /Это сообщение/i, "");
      reg = reg.replace( /--/i, "");
      reg = reg.replace( /^( )*/i, "");
      note = MsgSubj + ': ' + reg.replace( /( )*$/i, "");
    } else  
    {
      note = MsgSubj;
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="Заявка"; 
    email="";
    duration = "";
  }
  
  function mailparser9(MsgBody, date1, MsgSubj) 
  {
    // используется для лп Ветерок
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /^( |\t)+/ig, "");
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
      
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
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Name : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
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
    //source="";
    duration = "";
  }
  
  function mailparser10(MsgBody, date1, MsgSubj) 
  { // для Шеф-кухни
    var reg 
    if (MsgBody.match(/От: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/От: (.*)?\n/i)[0]
      reg = reg.replace( /От: /i, "");
      name = reg.replace( /(\n|<.*?>)/ig, "");
    } else  {name = "-";}
    if (MsgBody.match(/Телефон(.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/Телефон(.*)?\n/i)[0]
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
    note=MsgSubj; 
    email="";
    duration = "";
  }
  
  function mailparser11(MsgBody, date1, MsgSubj) 
  {
    // используется для лп 24окна
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
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
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Name : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
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
    //source2="";
    //source="";
    type="Заявка";
    duration = "";
    
  }
  
  function mailparser12(MsgBody, date1, MsgSubj) 
  {
    // используется для лп Alfa-credit.by
    var reg 
    var name1, name2;
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0];
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone :(.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Surname : (.*)?\n/ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
    } else  {note = "-";}
    if (MsgBody.match(/E-mail : (.*)/i)!=null)
    {
      reg = MsgBody.match(/E-mail : (.*)/i)[0];
      reg = reg.replace( /E-mail : /i, "");
      reg = reg.replace( /<.*?>/ig, "");
      duration = reg.replace( /\n/i, "");
    } else  {duration = "";}
    // в поле e-mail вноситя ip-адрес
    if (MsgBody.match(/IP Address :(.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/IP Address :(.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /IP Address : /i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0];
      reg = reg.replace( /Name : /i, "");
      name1 = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name1 = "";}
    
    if (MsgBody.match(/Surname : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Surname : (.*)?(<br>|\n)/i)[0];
      reg = reg.replace( /Surname : /i, "");
      name2 = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name2 = "";}
    name = name1 + " " + name2;
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
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
    //source="";
    //duration = "";
  }
  
  function mailparser13(MsgBody, date1, MsgSubj) 
  {
    // используется для лп ARTOX-lid
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : (<.*?>)?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
    } else  {note = "-";}
    /*if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
    reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
    reg = reg.replace( /E-mail: /i, "");
    email = reg.replace( /\n/i, "");
    } else  {email = "-";}*/
    if (MsgBody.match(/E-mail(.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail(.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail.*?(: )/i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Name : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
      reg = reg.replace( /(<.*?>)/ig, "");
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
    //source="";
    duration = "";
  }  
  
  function mailparser14(MsgBody, date1, MsgSubj) 
  {
    // используется для лп SRO-DOPUSK-24.RU
    var reg 
    if (MsgBody.match(/Лид: ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/Лид: ((.*)?\n)+/ig)[0]
      note = MsgSubj.replace( /(Лид sro-dopusk-24.ru - )/i, "");
      reg = reg.replace( /(Лид: )(.*?)\n/i, "");
      reg = reg.replace( /Телефон : (.*)?\n/ig, "");
      reg = reg.replace( /Имя : (.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url(2)? : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      note = note + ": " + reg.replace( /(<.*?>|E-mail)/ig, "");
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
    
    if (MsgBody.match(/Имя : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Имя : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Имя : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Телефон :.*/i)!=null)
    {
      reg = MsgBody.match(/Телефон :.*/i)[0]
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
    //source="";
    duration = "";
  }  
  
  function mailparser15(MsgBody, date1, MsgSubj) 
  {
    // используется для лп geos-shefkuhni новый
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
    } else  {note = "-";}
    if (MsgBody.match(/E-mail(.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail(.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail.*?(: )/i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Name : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
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
    //source="";
    duration = "";
  }
  
  function mailparser16(MsgBody, date1, MsgSubj) 
  {
    // используется для лп shkafy-vygodno.by
    var reg 
    if (MsgSubj.match(/shkafyvygodno: .*/ig)!=null)
    {
      reg = MsgSubj.replace(/shkafyvygodno: /i, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      note = reg;
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
    
    if (MsgBody.match(/Имя : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Имя : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Имя : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone.*/i)!=null)
    {
      reg = MsgBody.match(/Phone.*/i)[0]
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
    //source="";
    duration = "";
  }
  
    function mailparser17(MsgBody, date1, MsgSubj) 
  {
    // используется для лп 12sro.ru 
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(Источник : (.*)?\n|Источник :)/ig, "");
      reg = reg.replace( /(Фраза : (.*)?\n|Фраза :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // для всех полей Note можно использовать
      reg = reg.replace( /&nbsp;/ig, " ");
      reg = reg.replace( /( )+/ig, " ");
      reg = reg.replace( /$( )+/ig, "");
      
      note = reg.replace( /(<.*?>|E-mail)/ig, "");
    } else  {note = "-";}
    if (MsgBody.match(/E-mail(.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail(.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail.*?(: )/i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/Name : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/Name : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /Name : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone :.*/i)!=null)
    {
      reg = MsgBody.match(/Phone :.*/i)[0]
      reg = reg.replace( /(<.*?>)/ig, "");
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
    //source="";
    duration = "";
  }
  
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
      var res_phone = attachments.match(/(--)?(M:|V:)?(\+)?\d{10,12}/ig);
      var res_dur = attachments.match(/>(\d{1,2}:\d{1,2}|1)</ig);
      // проверка 
      if (res_date!=null)
      {
        if (res_date.length!=res_time.length || res_time.length!=res_phone.length || res_phone.length!=res_dur.length) 
        {
          var msg = "ошибки при парсинге отчета по звонкам";
          RecordToLog2(msg, TagMail, "звонок", period, url, script_vers);
          return false;
        }
        // для каждой записи в отчете по звонкам
        var t=0;
        for (var j = 0; j < res_phone.length; j++)
        { //если это номер входящего (обозначается <--)
          if (res_phone[j].match(/--/)!= null)
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
              var phone = res_phone[j].replace( /\D/ig, "");
              
              if (!RecordToReport(ReportUrl, url, date, time, name, phone, type, duration, source, email, note, "", rep_sheet, script_vers, PhoneNorm, land))
              {
                return false;
              }
              t++;
            }
          }
        }
        // заносим результаты в лог
        var msg = source1 + "/" + t + "зв.";
        //RecordToLog(msg);
        RecordToLog2(msg, TagMail, "звонок", period, url, script_vers);
      } else
      {
        // заносим результаты в лог
        var msg = source1 + "/" + 0 + "зв.";
        RecordToLog2(msg, TagMail, "звонок", period, url, script_vers);
      }
    } else
    {
      msg = source1 + "/" + "номер не найден в базе проектов скрипта";
      RecordToLog2(msg, "-", "звонок", period, url, script_vers); 
      return false;
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
  for (var j = 0;  (values[j][0]!="" || values[j][2]!="" || values[j][4]!="") && j < maxrow; j++){}
  lastRow = j;
  
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
    
    msg = "Ошибка при внесении в отчет скрипта с параметрами " + date + " " + time;
    RecordToLog2(msg, "-", "-", " ", url, script_vers); 
    return false;
  }
  return true;
}

/* function RecordToLog(msg) 
{
// The code below opens a spreadsheet using its id and logs the name for it.
// Note that the spreadsheet is NOT physically opened on the client side.
// It is opened on the server only (for modification by the script).
var log = DocumentApp.openByUrl('https://docs.google.com/document/d/1sC2cmOLccgGHEcW9Ah07PPCuYhn_i6Ge7SbGkEGK-2U/edit');
// Insert text at the end of the document.
var today = new Date();  
log.getBody().editAsText().appendText('\n'+today+": " + msg);

} */

function RecordToLog2(msg, project, type, period, url, script_vers) 
{
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Thezoile8yXo6EzSAoVsu5uuaBuOgja12GNj2RyI6P8/edit");
  var first = ss.getSheetByName("log");
  // вставляем данные в начало лога
  first.insertRowAfter(1);
  //first.activate();
  var lastRow = 1; //first.getLastRow();
  var today = new Date();
  var data = DateNorm(today);
  var time = TimeNorm(today);
  // A - Дата,	 Время	Сообщение	Проект	Тип	Период	Источник Версия_скрипта
  
  first.getRange(lastRow+1,1).setValue(data);
  first.getRange(lastRow+1,2).setValue(time);
  first.getRange(lastRow+1,3).setValue(msg);
  first.getRange(lastRow+1,4).setValue(project);
  first.getRange(lastRow+1,5).setValue(type);
  first.getRange(lastRow+1,6).setValue(period);
  first.getRange(lastRow+1,7).setValue(url);
  first.getRange(lastRow+1,8).setValue(script_vers);
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