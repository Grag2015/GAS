function main()
{
  
  // ��������� 0 - ���/���� ����� �� �������, 1 - ���/���� ����� �� �������, 2 - ��� ������, 3- ��� � �����, 4 - ������_�����, 
  // 5 - ����� �� ������, 6 - ����� �� ����, 7 - ���������� ������� �� ��������, 8 - ���.������������ ������ (���./ �� 60 ���.), 9 - ���� � ������� ����, 10 - ����������� �������, 11 - �������, 12 - �������� ������� � �������� ��������
  var projects = [];
  // ���������� 
 projects[0] = [1, 1, 'https://docs.google.com/spreadsheets/d/1uJ0gkBcp7qi5t6JfRI7ubzlQYoCRwHZfU3d-pMBd0Ug/edit',"����/����������", mailparser2, "375297044455", "375297030305", 2, 15, "LEADS", PhoneNormRB, "", "oknamasterby1"];
   // ������ ���� 
  projects[1] = [1, 1, 'https://docs.google.com/a/artox-media.by/spreadsheets/d/1SZAbx6Rj0RixIAL-GEn3_xFiLGVlnycDVIdhY3RL3DY/edit',"����/shkaf-kupe.for-all.by", mailparser1, "375297363635", "375297060676", 3, 15, "LEADS", PhoneNormRB, "land1", "modern-houseby"]; 
   // ���-�����
  projects[2] = [1, 1, 'https://docs.google.com/spreadsheets/d/1F3HZqj-uT6jqglnfsqBltXn2bEVijN2J-UiZrI2PcDY/edit',"����/Shef-kuhni", mailparser15, "375297453366", "", 3, 15, "LEADS", PhoneNormRB, "land", "geos-shefkuhnib"];
   // Artox-lid.by
projects[3] = [1, 1, 'https://docs.google.com/spreadsheets/d/1FDrbl2MSg7nfIPPjPUSTu4QR3sPH9XLE4Cd0fIskyb4/edit',"����/ARTOX-lid", mailparser13, "375297029595", "", 3, 15, "LEADS", PhoneNormRB, "", ""];
  // ������ ���� 2 shkafy-vygodno.by
  projects[4] = [1, 1, 'https://docs.google.com/a/artox-media.by/spreadsheets/d/1SZAbx6Rj0RixIAL-GEn3_xFiLGVlnycDVIdhY3RL3DY/edit',"����/shkafy-vygodno.by", mailparser16, "", "375297049595", 3, 15, "LEADS", PhoneNormRB, "land2", "shkafy-vygodnoby"]; 
  // shop.dom.by
  projects[5] = [1, 1, 'https://docs.google.com/spreadsheets/d/1LX2zM1kDuASZa2k76KJo7mylLQPklTcfYfq0dmXGurs/edit',"����/dom.by", mailparser20, "", "", 5, 15, "LEADS", PhoneNormRB, "land", ""];
   // pro-filter.by
  projects[6] = [1, 1, 'https://docs.google.com/spreadsheets/d/1GxQGhEJgPqhVjVpyOZayJc-rj2Kw2-pEkfQdcTU8jI0/edit',"����/pro-filter.by", mailparser28, "375297552515", "", 5, 10, "LEADS", PhoneNormRB, "land", "pro-filterby"];
   // ��������� 
    projects[7] = [1, 0, 'https://docs.google.com/spreadsheets/d/1vjFxLHnc_z_nJRkdBXEM0y88us5S76soShe7yW-OV24/edit',"new-avtoshkola.by", mailparser25_new_avtoshkola, "", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
   // ��� ����� natayantour  
 projects[8] = [1, 1, 'https://docs.google.com/spreadsheets/d/19_qh-IiwVLr1szbhSPN31IncC8l5MI2EvHMEcjSjnxg/edit',"����/natayantour", mailparser26_natayantour, "375297614236", "", 3, 15, "LEADS", PhoneNormRB, "land", "natayantourby"];
    // Hit-Kredit
 projects[9] = [1, 1, 'https://docs.google.com/spreadsheets/d/1gNT0BD31Q82ZKRCQHBuUbsLq5e_TU7CCe2kfbV1Nf4A/edit',"����/Hit-kredit", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRB, "land", "hit-kreditby"];
    // New-shkaf.by
 projects[10] = [1, 1, 'https://docs.google.com/spreadsheets/d/1xpx7kwLljGWDhgkOyQToKT0bt9lYNsmNYjFOTs2d7ds/edit',"����/New-shkaf", mailparser28, "375298204317", "", 3, 15, "LEADS", PhoneNormRB, "land", "new-shkafby"];
   // �����
projects[11] = [1, 0, 'https://docs.google.com/spreadsheets/d/1o5gQ0q_T3KT54mBud0ZDY54WgJm6WlVzQtfQrfLrHII/edit',"����/Baboon - LP", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRF, "land", ""];
   // Eurokuhni.by
 projects[12] = [1, 1, 'https://docs.google.com/spreadsheets/d/1TsKMEmUQnuH-vpnjqZkgvwvrPSWIedcQBYLarppce-U/edit',"����/EuroKuhni.by", mailparser28, "375297755664", "", 3, 15, "LEADS", PhoneNormRB, "land", "euro-kuhni2015"];
  // Bandit-club
 projects[13] = [1, 1, 'https://docs.google.com/spreadsheets/d/18BVTDN5FC06RjcjSanClWO8Tp4fzBjkSAqZgx4PGcpo/edit',"����/Bandit-Club.by", mailparser28, "375297497649", "", 3, 15, "LEADS", PhoneNormRB, "land", "banditby2015"];
// City-promo
 projects[14] = [1, 1, 'https://docs.google.com/spreadsheets/d/1l5409SEDpdPTcNCv-TUtTaMagXqv3p2_0Yr-inEdxGI/edit',"����/city-promo", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRF, "land2", ""];
 // Good-KUHNI.by
 projects[15] = [1, 1, 'https://docs.google.com/spreadsheets/d/1LaXLAtQtFaVr_ixkJZctC67pcfy-xRIBOUHqJqqbA7c/edit',"����/Good-KUHNI.by", mailparser28, "", "375297488834", 3, 15, "LEADS", PhoneNormRB, "land", "primebeli2016"];
   // Sun-city.by
 projects[16] = [1, 1, 'https://docs.google.com/spreadsheets/d/1YOPXWWzP85dlJTFcSJDMlyJJMtEgD3h7pfpdpuobM88/edit',"����/Sun-city.by", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRB, "land", "s-city2016"];
   // yogapractik
 projects[17] = [1, 1, 'https://docs.google.com/spreadsheets/d/1sCyAUUSQySo6yjTbZctpSCdvpquVMpOugIxYp_BERec/edit',"����/YogaPractik.ru", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRF, "land", "yoga-practik2015"];
// ������ ������
projects[18] = [1, 1, 'https://docs.google.com/spreadsheets/d/1LsSni5ueDrmWgVOf37Prtyr7_GyZzGG9lsMR7ennWeA/edit',"����/service-help.by", mailparser28, "", "375298205975", 3, 10, "LEADS", PhoneNormRB, "land", "service-help2015"];
  // SEO �����
 projects[19] = [1, 0, 'https://docs.google.com/spreadsheets/d/1t6avfdbqsqVxQYVbttMXOxgDUmwxNS1n17a9xaEcTMQ/edit',"����/ARTOX-SEO.ru", mailparser28, "", "", 3, 10, "LEADS", PhoneNormRB, "land", ""];
   // Euroshkaf.by
 projects[20] = [1, 1, 'https://docs.google.com/spreadsheets/d/1xpx7kwLljGWDhgkOyQToKT0bt9lYNsmNYjFOTs2d7ds/edit',"����/EuroShkaf.by", mailparser28, "375298206541", "", 3, 15, "LEADS", PhoneNormRB, "land2", "Euroshkafby"];
    // �����-���.���
 projects[21] = [1, 1, 'https://docs.google.com/spreadsheets/d/1taFAgHAyBza2_xI_OwOHk95LLEZuDdHjbN-aC8f_Vz0/edit',"����/Shkafy-tut", mailparser28, "375295656178", "", 3, 15, "LEADS", PhoneNormRB, "land", "Panamera-2015"];
  // �����-���.���
 projects[22] = [1, 1, 'https://docs.google.com/spreadsheets/d/1Y-h75L6XDcJU3ySNWGjWO8GtaXnVQDBc2poCPfX4Sws/edit',"����/Kuhni-tut", mailparser28, "375336967882", "", 3, 15, "LEADS", PhoneNormRB, "land", "mebart2015"];
  // ������� ������.���
 projects[23] = [1, 1, 'https://docs.google.com/spreadsheets/d/1M8dFXGr7S2YiXT8pvG0EIb90VvEn-rCpKkqycZpC6F4/edit',"����/radaway", mailparser28, "375297684624", "", 3, 15, "LEADS", PhoneNormRB, "land", "Kabiny-Radaway"];
    // Artox-seo.by
 projects[24] = [1, 1, 'https://docs.google.com/spreadsheets/d/14JNqp2fs439DgSh4kAvMPc9X8yisoCatQw6pa5IvmUM/edit',"����/ARTOX-SEO.by", mailparser28, "375297679302", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
   // Doremi.by
 projects[25] = [1, 1, 'https://docs.google.com/spreadsheets/d/1dTkqEbgHSjq_dXrST_IKPRDKbgWcmk8IsnUvxK0aPgw/edit',"����/Doremi.by", mailparser28, "375297094242", "", 3, 15, "LEADS", PhoneNormRB, "land", "Kuhni-Doremi"];
   // ���-������
projects[26] = [1, 1, 'https://docs.google.com/spreadsheets/d/1ZcnvIOevJkFhuFjk_ebvUAU0ndeFw3wwuy1VswzFOM0/edit',"����/���-������", mailparser28, "375295661797", "", 3, 15, "LEADS", PhoneNormRB, "land", "mam-dom-2015"];
   // �������
projects[27] = [1, 1, 'https://docs.google.com/spreadsheets/d/1yDnr8wDATHK73HIduG2h_ysmfDtGeciYfTR8V5gG-7k/edit',"����/�������", mailparser28, "375295637349", "", 3, 5, "LEADS", PhoneNormRB, "land", "Lada.by-2016"];
 // ����� ����
projects[28] = [1, 0, 'https://docs.google.com/spreadsheets/d/1uRc3XGwo4dXbX8AdhLV7ASY7XHiUwyqhCBi7ZNCxchw/edit',"����/dom-sindika", mailparser8, "", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
 // �����
projects[29] = [1, 1, 'https://docs.google.com/spreadsheets/d/1yDnr8wDATHK73HIduG2h_ysmfDtGeciYfTR8V5gG-7k/edit',"����/�����", mailparser28, "375295654500", "", 3, 5, "LEADS", PhoneNormRB, "land2", "JK-Polyus"];
// ����������
projects[30] = [1, 1, 'https://docs.google.com/spreadsheets/d/1yDnr8wDATHK73HIduG2h_ysmfDtGeciYfTR8V5gG-7k/edit',"����/����������", mailparser28, "375336967889", "", 3, 5, "LEADS", PhoneNormRB, "land3", "JK-Naberejnyi"];
 // ������ ����������
projects[31] = [1, 1, 'https://docs.google.com/spreadsheets/d/1w5i60GQYlGi36oPe7PGuHuxbdTO-ARZMfnsthruU1FY/edit',"����/Artoxpay", mailparser28, "375295642474", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
  
  
  
  
  
  // ����� ����
 /*  */
  
  
  
  
  
  
  
  
  
  /*       
  
  // �� �����
  projects[2] = [0, 0, 'https://docs.google.com/spreadsheets/d/1cnha9CHl82M15dUnpGuyBn7lyCUonFIYNPTftMFTPOc/edit',"����/�� �����", "", "", "", 2, 15, "LEADS", PhoneNormRB, "", ""];
  // ��� ������
  projects[3] = [0, 0, 'https://docs.google.com/spreadsheets/d/1kWwKVS_PaphldxRFAc45LyGXIpmPA1QMlFSPbBZkCX0/edit',"����/mebelgls", mailparser6, "", "", 2, 15, "LEADS", PhoneNormRB, "", ""];
  // ���-���� ���
  projects[4] = [0, 0, 'https://docs.google.com/spreadsheets/d/1LiOORCOCjIgsazZztNi7iO-Q-jse8QJ6fNlu2C5QpJA/edit',"����/���-����-���", mailparser4, "", "", 2, 15, "LEADS", PhoneNormRB, "", ""];
  // ���-���� ��
  projects[5] = [0, 0, 'https://docs.google.com/spreadsheets/d/1V5voZtScyZBRPetMzQPcJTevposv8YcEYI9eRzZkhPA/edit',"����/���-����-��", mailparser3, "", "", 2, 15, "LEADS", PhoneNormRB, "", ""];
 // ���-���� ��� (��)
  projects[6] = [0, 0, 'https://docs.google.com/spreadsheets/d/1LiOORCOCjIgsazZztNi7iO-Q-jse8QJ6fNlu2C5QpJA/edit',"����/���-����-���-��", mailparser5, "", "", 2, 15, "LEADS2", PhoneNormRB, "", ""];
   // �������-������� sro123.info mailparser7
  projects[7] = [0, 0, 'https://docs.google.com/spreadsheets/d/18G9Q-YYYFh4I_kxwgN0M8FCAXZmBPb3bn6tCCabRn0M/edit',"����/sro123.info", mailparser14, "", "", 3, 15, "LEADS", PhoneNormRF, "land1", "sro123-artox"];
   // 24����
projects[11] = [0, 0, 'https://docs.google.com/spreadsheets/d/17lTPYBKTuMBH1PLsV6zkGzq5oFhzTviZW94vz8Mikl8/edit',"����/24okna", mailparser11, "375298206524", "", 3, 15, "LEADS", PhoneNormRB, "", "24oknaby"];
  // Alfa-credit.by (��� �������, ������ ������)
  projects[12] = [0, 0, 'https://docs.google.com/spreadsheets/d/1EUrOu6b981ct5lsNGtmRO2NBv0bDAW-8RapRrMAhoio/edit',"����/Alfa-credit.by", mailparser12, "", "", 10, 15, "LEADS", PhoneNormRB, "", "alfa-bancredit-2015"]; 
  // �������-������� 12sro.ru 
  projects[15] = [0, 0, 'https://docs.google.com/spreadsheets/d/18G9Q-YYYFh4I_kxwgN0M8FCAXZmBPb3bn6tCCabRn0M/edit',"����/12sro.ru", mailparser17, "", "", 3, 15, "LEADS", PhoneNormRF, "land2", "sro-new-artox"];
 // ������ kredit-bveb.by
  projects[16] = [0, 0, 'https://docs.google.com/spreadsheets/d/16MjgkrsdO8zMd88Y270Irp2M2arJb39P4ykSetEdyts/edit',"����/kredit-bveb.by", mailparser18, "", "", 5, 15, "LEADS", PhoneNormRB, "land", "kredit-bveb"];
   // Clipso potolki.clipso.by
  projects[17] = [0, 0, 'https://docs.google.com/spreadsheets/d/1M0fu9W2gDW3moI1ajp2c2GVoqMW2RPp-nnayKkpIltk/edit',"����/Clipso.by", mailparser19, "", "", 5, 15, "LEADS", PhoneNormRB, "land", "potolki.clipso.by"];
    // bodylab-fit.by
  projects[20] = [0, 0, 'https://docs.google.com/spreadsheets/d/15DaQhSSThdwFQEmXEC77253gMaRs4MGd8289hZExxr8/edit',"����/bodylab", mailparser22, "", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
    // Wooden-house
 projects[40] = [1, 1, 'https://docs.google.com/spreadsheets/d/1KvDfhZffbsR-xEYJKc5hOoABnzzujLOHxTRnMtkVkh8/edit',"����/wooden-house", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRB, "land", "grservice2016"];
    // Devita-opt
 projects[42] = [1, 1, 'https://docs.google.com/spreadsheets/d/1-h-sLINAudNnW_T1JtgP4dfIYUddKzsQc1yzD0Hy-XI/edit',"����/OPT-DeVitaBel.ru", mailparser28, "375336967900", "", 3, 15, "LEADS", PhoneNormRF, "land", "devitabel"];
  // watches24.by
 projects[46] = [1, 1, 'https://docs.google.com/spreadsheets/d/12l5w_6OPDrcFgoNpv1h8lgl1Jlgo6EopUa49h7cuY-M/edit',"����/Watches24.by", mailparser28, "375336967882", "", 3, 15, "LEADS", PhoneNormRB, "land", ""];
   // ����� ������  
  projects[11] = [0, 0, 'https://docs.google.com/spreadsheets/d/1so9v1an2RebM2mKB8c5XQrA0PPSQyGT7iLTrXQ4MYJw/edit',"����/city-dance.by", mailparser24_city_Dance, "", "", 3, 15, "LEADS", PhoneNormRB, "land", "city-dance2015"];
   // geos-kuhni61
 projects[32] = [1, 0, 'https://docs.google.com/spreadsheets/d/1q3XQ6UjQk7O9p8PNfE1F9NYoImsoi98cg8_fp_A_fso/edit',"����/geos-kuhni61", mailparser15, "", "", 3, 15, "LEADS", PhoneNormRF, "land", "geos-kuhni61ru"];
  // ����������� ������ cleanliness
 projects[33] = [1, 1, 'https://docs.google.com/spreadsheets/d/1W0iQNM7SG_NhIYm7P99cZE9DlifxR6OPlKd6ZkZhGLg/edit',"����/CleanFLY", mailparser28, "375297684624", "", 3, 15, "LEADS", PhoneNormRB, "land", "cleanfly"];
 // geoskuhni36
 projects[34] = [1, 0, 'https://docs.google.com/spreadsheets/d/1yagwZocEkI9q39zWNzrgF2rh_Wetnm9m7HRVELP4S5g/edit',"����/GeosKUHNI36", mailparser15, "", "", 3, 15, "LEADS", PhoneNormRF, "land", "geoskuhni36ru"];
  // New-okna.by
projects[35] = [1, 1, 'https://docs.google.com/spreadsheets/d/1vbWRns0pGlFatsb0OYpq2Ioq8uXrJ5MWSS0hVjacqa4/edit',"����/NEW-okna", mailparser28, "375297679302", "", 3, 15, "LEADS", PhoneNormRB, "land", "okna-vitaplast"];
  // Dream-Cars.by
 projects[29] = [1, 1, 'https://docs.google.com/spreadsheets/d/1f7IXPxXWl80Ue2X6bglVWPNiyr6MreVXcrsIUvUekBY/edit',"����/Dream-Cars.by", mailparser28, "", "375295637349", 3, 15, "LEADS", PhoneNormRB, "land", "dream-cars2016"];
   // ElektroCity.by
 projects[21] = [1, 1, 'https://docs.google.com/spreadsheets/d/1lADe0psMbzGvANDokF6zInBtC83Ij-96i8BWJvLU16k/edit',"����/ElektroCity.by", mailparser28, "375297448882", "", 3, 15, "LEADS", PhoneNormRB, "land", "electro-master2016"];
  // ����7
 projects[14] = [1, 1, 'https://docs.google.com/spreadsheets/d/1a3bWV-bwlU2ixxnUpMmPFVLAX7hGU7VIDkwt6InIrpY/edit',"����/okna7.by", mailparser28, "", "", 3, 15, "LEADS", PhoneNormRB, "land", "okna7.by"];
  // ������ ��� 
  projects[10] = [1, 0, 'https://docs.google.com/spreadsheets/d/1XBzF4ssufNUc7q4E_41OP8XIamrnfdTOefhvpNw4cNo/edit',"����/fermer-tut", mailparser23_fermer_tut, "", "", 5, 15, "LEADS", PhoneNormRF, "land2", "fermer-tutru"];
 
  // ������� ������� ���
 projects[13] = [1, 1, 'https://docs.google.com/spreadsheets/d/1DO8S5UIgOFEzXaEBsissZubSfA1Mj7OFYcfK0a7UML4/edit',"����/PregradNet", mailparser27_PregradNet, "375297619820", "", 3, 15, "LEADS", PhoneNormRB, "land", "pregradnet-vsplesk"];
  
  // ����.���
 projects[17] = [1, 1, 'https://docs.google.com/spreadsheets/d/1Nmm3GkekfbvP1vVOIJ8di935WBLk5LqCfz3rdfLy-jg/edit',"����/����.���", mailparser28, "375297880803", "", 3, 15, "LEADS", PhoneNormRB, "land", "mvisa2015"];
  // ���������������
 projects[37] = [1, 1, 'https://docs.google.com/spreadsheets/d/1SF7DfRrQtK42GCbn8LeozL2OxNP4yK1FpGG-C_I6-Gs/edit',"����/SpaceCam.by", mailparser28, "375297090602", "", 3, 15, "LEADS", PhoneNormRB, "land", "spacecamby"];
  // Potoloknew
 projects[34] = [1, 1, 'https://docs.google.com/spreadsheets/d/1hMjZJjle5ZAAgAtZfEORpmRX1h-YDHiEEyxfQjE3rl4/edit',"����/POTOLOKNEW.by", mailparser28, "375297448333", "", 3, 10, "LEADS", PhoneNormRB, "land", "klasbi2015"];
  // Intim-games
 projects[33] = [1, 1, 'https://docs.google.com/spreadsheets/d/1grVIAcJnNMfIpQEEm3rzek9Nud_rE0KoEgj34O8MtEM/edit',"����/Intim-Games.by", mailparser28, "", "375295654500", 3, 10, "LEADS", PhoneNormRB, "land", "intim-toys2015"];
  // �������
  projects[3] = [1, 0, 'https://docs.google.com/spreadsheets/d/1XBzF4ssufNUc7q4E_41OP8XIamrnfdTOefhvpNw4cNo/edit',"����/Veterok365", mailparser9, "", "", 5, 15, "LEADS", PhoneNormRF, "land1", "veterok365ru"];
  // 24���� (��������� �� ����������)
  projects[5] = [1, 1, 'https://docs.google.com/spreadsheets/d/1bd8mwMDdQPgYBAFKAd-S-uSfp3T12XeJJTfUf6FbH6w/edit',"����/okna", mailparser11, "375298206524", "", 3, 15, "LEADS", PhoneNormRB, "land2", "24oknaby"];
// �����������
projects[10] = [1, 0, 'https://docs.google.com/spreadsheets/d/1Z3BXhPzfYWtHqg1D5m-YbYEvUhtDYFIfUZRui4-nzho/edit',"����/multimediaprom.ru", mailparser8, "", "", 3, 15, "LEADS", PhoneNormRF, "land", "multimediaprom2015"];
  // 24�����
 projects[11] = [1, 1, 'https://docs.google.com/spreadsheets/d/1KrA_6LQI6KP8uDfV8r51OUpPOlF08reblzL47ULwyTY/edit',"����/24kuhni", mailparser28, "375297606262", "", 3, 15, "LEADS", PhoneNormRB, "land", "kuhni24by"];
  // Iceagency btl-ice.ru
  projects[2] = [1, 0, 'https://docs.google.com/spreadsheets/d/1l5409SEDpdPTcNCv-TUtTaMagXqv3p2_0Yr-inEdxGI/edit',"����/btl-ice.ru", mailparser8, "", "", 3, 15, "LEADS", PhoneNormRF, "land", "btliceagencyru"];

// Kuhni360.by
 projects[14] = [1, 1, 'https://docs.google.com/spreadsheets/d/1jSWu1TEZC6LNylFKzFJoNKt4iSNd7fwnTR8QPHmJPu8/edit',"����/Kuhni360", mailparser28, "375297605479", "", 3, 15, "LEADS", PhoneNormRB, "land", "mliga2015"];
// �����-����
 projects[21] = [1, 1, 'https://docs.google.com/spreadsheets/d/1bd8mwMDdQPgYBAFKAd-S-uSfp3T12XeJJTfUf6FbH6w/edit',"����/�����-����", mailparser28, "375336967920", "", 3, 10, "LEADS", PhoneNormRB, "land", ""];
 // univer-diplom.by
 projects[22] = [1, 1, 'https://docs.google.com/spreadsheets/d/1_pwqwyXxjaZWWBB8czmwT07fnKmYqX9Ib0LZckKbyYA/edit',"����/Univer-diplom", mailparser28, "375336967889", "", 3, 15, "LEADS", PhoneNormRB, "land", "zaochnikby2016"];
  // ofice-shop.by
 projects[23] = [1, 1, 'https://docs.google.com/spreadsheets/d/1jh1ngXrTI6CL4Sggr36tXUdZKeHhfrB31F4FuJ-meWQ/edit',"����/�ffice-SHOP.by", mailparser28, "375333196270", "", 3, 15, "LEADS", PhoneNormRB, "land", "office-shop2016"];
 // ���������� �������
projects[24] = [1, 1, 'https://docs.google.com/spreadsheets/d/1Y56MRchoieOnJrU4HVTzH3o_dsJ6-ONaD0y4CzDkTtQ/edit',"����/�������", mailparser28, "", "375336967900", 3, 15, "LEADS", PhoneNormRB, "land", ""];
// Steklatut.by
 projects[13] = [1, 1, 'https://docs.google.com/spreadsheets/d/1hVRAk7-oJI-HSdaFZubDZvThNDRhyBzs-C8Az10Gd4E/edit',"����/Steklatut.by", mailparser28, "375297676202", "", 3, 15, "LEADS", PhoneNormRB, "land", "mobiscar2016"];




*/
  
  
  
  // ����������� ������ �� �������
  var ring_rprt = 1;  // 1-���., 0-����.
  
  // ���������� ���������� ����������
  var url, name, phone, date2, time2, email, source, utm_source, utm_medium, utm_campaign, utm_content, utm_term, type, source2, note, duration;
  // ��������� �������
  var ReportUrl, TagMail, ParserMail, PhoneY, PhoneG, MessCount, LeadDur, rep_sheet, PhoneNorm, land;
  // ��������������� ����������
  var myArray, MsgBody, MsgSubj, reg, date1, day1, month1, year1, hour, min, attachments;
  

  // ������ �� �������
  if (ring_rprt==1)
  {
    var label = GmailApp.getUserLabelByName("����/Calls");
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
          // ������ ������ � ������ � �����
          attachments = messages[j].getAttachments()[0].getDataAsString(); 
          url = "=HYPERLINK(\"https://mail.google.com/mail/u/0/?ui=2&ik=83490c8cd2&view=att&th=" + messages[j].getId() + "&attid=0.1&disp=inline&safe=1&zw&saduie=AG9B_P8KPjpv5lNlF60qvT0uutzU" + "\",\"url\")";
          
          mailparser_mts_RecordToReport(attachments);          
          // ��������� ��������� ��� ������������� (����� � ��������� ��� ��� �� ���������)
          messages[j].markRead();
          
        }
      }
    }
  }
 
  
  
  // �������� ����� � ������ �������

  for (var i = 0; i < projects.length; i++) 
  {
    // ������������ �������, � ������� � ���������� ������� ������� �����
    if (projects[i][0]==1)
    {
      // ���������� � ���������� ��������� �������
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
        // ����� ��� ��������� �� �������
        var messages = threads[k].getMessages();
        // ��� ������� ��������� �� �������
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
  RestRep(projects);
  
  function mailparser1(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� shkaf-kupe.for-all.by
    var reg 
    if (MsgBody.match(/���: (.*)?</i)!=null)
    {
      reg = MsgBody.match(/���: (.*)?</i)[0]
      reg = reg.replace( /���: /i, "");
      name = reg.replace( /</i, "");
    } else  {name = "-";}
    if (MsgBody.match(/�������(.*)?</i)!=null)
    {
      reg = MsgBody.match(/�������(.*)?</i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /</i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    note=""; 
    email="";
    duration = "";
  }
  
  function mailparser2(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� oknamaster.by
    var reg 
    if (MsgBody.match(/���: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/���: (.*)?\n/i)[0]
      reg = reg.replace( /���: /i, "");
      name = reg.replace( /\n/i, "");
    } else  {name = "-";}
    if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
      reg = reg.replace( /E-mail: /i, "");
      email = reg.replace( /\n/i, "");
    } else  {email = "-";}
    if (MsgBody.match(/�����: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/�����: (.*)?\n/i)[0]
      reg = reg.replace( /�����: /i, "");
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
    if (MsgBody.match(/�������: (.*)?(\n|$)/i)!=null)
    {
      reg = MsgBody.match(/�������: (.*)?(\n|$)/i)[0]
      reg = reg.replace( /<.*?>/ig, "");
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    
    type="������";
    //source2="";
    email="";
    duration = "";
    note=MsgSubj;
  }
  
  function mailparser3(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� ���-���� ��
    var reg 
    if (MsgBody.match(/��: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��: /i, "");
      name = reg.replace( /(<br>|\n)/ig, "");
    } else  {name = "-";}
    /*if (MsgBody.match(/E-mail: (.*)?\n/i)!=null)
    {
    reg = MsgBody.match(/E-mail: (.*)?\n/i)[0]
    reg = reg.replace( /E-mail: /i, "");
    email = reg.replace( /\n/i, "");
    } else  {email = "-";}*/
    if (MsgBody.match(/����: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/����: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /����: /i, "");
      note = reg.replace( /(<br>|\n)/ig, "");
    } else  {note = "-";}
    
    if (MsgBody.match(/�������: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/�������: (.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    email="";
    duration = "";
  }
  
  function mailparser4(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� ���-���� ���
    var reg 
    if (MsgBody.match(/��: (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��: (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��: /i, "");
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
    
    if (MsgBody.match(/���������� �������: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/���������� �������: (.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    //utm_parser(MsgBody);
    type="������";
    source2="";
    source="";
    note="";
    duration = "";
  }
  
  
  function mailparser5(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� ���-���� ���-��
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    //utm_parser(MsgBody);
    type="������";
    source2="";
    source="";
    name="-";
    duration = "";
  }
  
  function mailparser6(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� ���������
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form :/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    name="-";
    duration = "";
  }
  
  function mailparser7(MsgBody, date1 ,MsgSubj) 
  {
    // ������������ ��� �� sro123.info
    var reg 
    MsgBody = MsgBody.replace( /<.*?>/ig, "");
    if (MsgBody.match(/����� ������ �� .*/i)!=null)
    {
      reg = MsgBody.match(/����� ������ �� .*/i)[0]
      name = reg.replace( /����� ������ �� /i, "");
    } else  {name = "-";}
    if (MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/E-mail : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /E-mail : /i, "");
      email = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {email = "";}
    
    if (MsgBody.match(/�������:(\n)?.*?\n/i)!=null)
    {
      reg = MsgBody.match(/�������:(\n)?.*?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    //utm_parser(MsgBody);
    type="������";
    source2="";
    source="";
    note="";
    duration = "";
  }
  
  
  
  
  function mailparser8(MsgBody, date1 ,MsgSubj) 
  {
    // LP ���������
    var reg 
    if (MsgBody.match(/���:<\/td>.*?<\/td>/i)!=null)
    {
      reg = MsgBody.match(/���:<\/td>.*?<\/td>/i)[0]
      reg = reg.replace( /���:/i, "");
      name = reg.replace( /<.*?>/ig, "");
    } else  {name = "-";}
     if (MsgBody.match(/E-mail:<\/td>.*?<\/td>/i)!=null)
    {
      reg = MsgBody.match(/E-mail:<\/td>.*?<\/td>/i)[0]
      reg = reg.replace( /E-mail:/i, "");
      email = reg.replace( /<.*?>/ig, "");
    } else  {email = "";}
    
  if (MsgBody.match(/�������:<\/td>.*?<\/td>/i)!=null)
  {
     reg = MsgBody.match(/�������:<\/td>.*?<\/td>/i)[0]
     reg = reg.replace( /\D/ig, "");
     phone = reg.replace( /<.*?>/i, "");
  } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
    //  phone = "";
    }
     {
      note = MsgSubj;
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������"; 
    duration = "";
  }

    
  
  
  
  
  
  
  

 /*
 function mailparser8(MsgBody, date1 ,MsgSubj) 
  {
    // LP ���������
    var reg 
    if (MsgBody.match(/���: (.*)?</i)!=null)
    {
      reg = MsgBody.match(/���: (.*)?</i)[0]
      reg = reg.replace( /���: /i, "");
      name = reg.replace( /</i, "");
    } else  {name = "-";}
    if (MsgBody.match(/�������(.*)?</i)!=null)
    {
      reg = MsgBody.match(/�������(.*)?</i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /</i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    reg = MsgBody.replace(/(<.*?>|\n)/ig, " ");
    if (reg.match(/�������������� ����������:.*?��� ���������/ig)!=null)
    {
      reg = reg.match(/�������������� ����������:.*?��� ���������/ig)[0]
      reg = reg.replace( /�������������� ����������:/i, "");
      reg = reg.replace( /��� ���������/i, "");
      reg = reg.replace( /���� ����� �������:/i, "");
      reg = reg.replace( /��������������� �����:/i, "");
      reg = reg.replace( /��� �����:/i, "");
      reg = reg.replace( /--/i, "");
      reg = reg.replace( /^( )*i, "");
       note = MsgSubj + ': ' + reg.replace( /( )*$/i, "");
    } else  
    {
      note = MsgSubj;
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������"; 
    email="";
    duration = "";
  }



function mailparser8(MsgBody, date1 ,MsgSubj) 
  {
    // LP ���������
    var reg 
    if (MsgBody.match(/���: (.*)?</i)!=null)
    {
      reg = MsgBody.match(/���: (.*)?</i)[0]
      reg = reg.replace( /���: /i, "");
      name = reg.replace( /</i, "");
    } else  {name = "-";}
    
  if (MsgBody.match(/�������(.*)?</i)!=null)
  {
     reg = MsgBody.match(/�������(.*)?</i)[0]
     reg = reg.replace( /\D/ig, "");
     phone = reg.replace( /</i, "");
  } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
    //  phone = "";
    }
     {
      note = MsgSubj;
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������"; 
    email="";
    duration = "";
  }












*/







  
  function mailparser9(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� �������
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  function mailparser10(MsgBody, date1, MsgSubj) 
  { // ��� ���-�����
    var reg 
    if (MsgBody.match(/��: (.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/��: (.*)?\n/i)[0]
      reg = reg.replace( /��: /i, "");
      name = reg.replace( /(\n|<.*?>)/ig, "");
    } else  {name = "-";}
    if (MsgBody.match(/�������(.*)?\n/i)!=null)
    {
      reg = MsgBody.match(/�������(.*)?\n/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    note=MsgSubj; 
    email="";
    duration = "";
  }
  
  function mailparser11(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� 24����
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    //source2="";
    //source="";
    type="������";
    duration = "";
    
  }
  
  function mailparser12(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� Alfa-credit.by
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
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      // ��� ���� ����� Note ����� ������������
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
    // � ���� e-mail ������� ip-�����
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    //duration = "";
  }
  
  function mailparser13(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� ARTOX-lid
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : (<.*?>)?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }  
  
  function mailparser14(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� SRO-DOPUSK-24.RU
    var reg 
    if (MsgBody.match(/���: ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/���: ((.*)?\n)+/ig)[0]
      note = MsgSubj.replace( /(��� sro-dopusk-24.ru - )/i, "");
      reg = reg.replace( /(���: )(.*?)\n/i, "");
      reg = reg.replace( /������� : (.*)?\n/ig, "");
      reg = reg.replace( /��� : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url(2)? : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
    
    if (MsgBody.match(/��� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��� : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/������� :.*/i)!=null)
    {
      reg = MsgBody.match(/������� :.*/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }  
  
  function mailparser15(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� geos-shefkuhni �����
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  function mailparser16(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� shkafy-vygodno.by
    var reg 
    if (MsgSubj.match(/shkafyvygodno: .*/ig)!=null)
    {
      reg = MsgSubj.replace(/shkafyvygodno: /i, "");
      // ��� ���� ����� Note ����� ������������
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
    
    if (MsgBody.match(/��� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��� : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/Phone.*/i)!=null)
    {
      reg = MsgBody.match(/Phone.*/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
    function mailparser17(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� 12sro.ru 
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  function mailparser18(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� kredit-bveb.by
    var reg 
    if (MsgBody.match(/���: ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/���: ((.*)?\n)+/ig)[0]
      note = MsgSubj.replace( /(��� sro-dopusk-24.ru - )/i, "");
      reg = reg.replace( /(���: )(.*?)\n/i, "");
      reg = reg.replace( /������� : (.*)?\n/ig, "");
      reg = reg.replace( /(���|�������) : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url(2)? : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, ""); 
      reg = reg.replace( /������� BelWeb \- /ig, "");
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      // ��� ���� ����� Note ����� ������������
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
    
    if (MsgBody.match(/��� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��� : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/������� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/������� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /������� : /i, "");
      name = name + " " + reg.replace( /(<.*?>|\n)/ig, "");
    }
    
    if (MsgBody.match(/������� :.*/i)!=null)
    {
      reg = MsgBody.match(/������� :.*/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  } 
  
    function mailparser19(MsgBody, date1, MsgSubj) 
  { // ������� ������
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  function mailparser20(MsgBody, date1, MsgSubj) 
  { // ���.���
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
    function mailparser21(MsgBody, date1, MsgSubj) 
  { // ����������.
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, "");
      reg = reg.replace( /Object :/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
    function mailparser22(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� bodylab-fit.by
    var reg 
    if (MsgBody.match(/���: ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/���: ((.*)?\n)+/ig)[0]
      reg = reg.replace( /(���: )(.*?)\n/i, "");
      reg = reg.replace( /������� : (.*)?\n/ig, "");
      reg = reg.replace( /(���|�������) : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url(2)? : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, ""); 
      reg = reg.replace( /������� BelWeb \- /ig, "");
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      // ��� ���� ����� Note ����� ������������
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
    
    if (MsgBody.match(/��� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/��� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /��� : /i, "");
      name = reg.replace( /(<.*?>|\n)/ig, "");
    } else  {name = "";}
    
    if (MsgBody.match(/������� : (.*)?(<br>|\n)/i)!=null)
    {
      reg = MsgBody.match(/������� : (.*)?(<br>|\n)/i)[0]
      reg = reg.replace( /������� : /i, "");
      name = name + " " + reg.replace( /(<.*?>|\n)/ig, "");
    }
    
    if (MsgBody.match(/������� :.*/i)!=null)
    {
      reg = MsgBody.match(/������� :.*/i)[0]
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  } 
  
  
  function mailparser23_fermer_tut(MsgBody, date1, MsgSubj) 
  {
    // ������������ ��� �� Fermer-tut
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      reg = reg.replace( /(<.*?>)/ig, "");
      reg = reg.replace( /\D/ig, "");
      phone = reg.replace( /\n/i, "");
    } else  
    {
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  
 
   function mailparser24_city_Dance(MsgBody, date1, MsgSubj) 
  { // ����� ������.
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, "");
      reg = reg.replace( /Object :/ig, "");
      reg = reg.replace( /Combobox1 : /ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  
   function mailparser25_new_avtoshkola(MsgBody, date1, MsgSubj) 
  { // ���������.
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, "");
      reg = reg.replace( /Object :/ig, "");
      reg = reg.replace( /Combobox1 : /ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  
  
  function mailparser26_natayantour(MsgBody, date1, MsgSubj) 
  { // ��� ����� natayan.
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, "");
      reg = reg.replace( /Object :/ig, "");
      reg = reg.replace( /Combobox1 : /ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  
  
  
  function mailparser27_PregradNet(MsgBody, date1, MsgSubj) 
  { // �������� PregradNet.
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address.*?\d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /CallBack : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail(.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, "");
      reg = reg.replace( /Object :/ig, "");
      reg = reg.replace( /Combobox1 : /ig, "");
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    type="������";
    //source2="";
    //source="";
    duration = "";
  }
  
  
  
  
  function mailparser28(MsgBody, date1, MsgSubj) 
  {
    // okna7.by
    var reg 
    if (MsgBody.match(/IP Address : ((.*)?\n)+/ig)!=null)
    {
      reg = MsgBody.match(/IP Address : ((.*)?\n)+/ig)[0]
      reg = reg.replace( /IP Address : \d+\.\d+\.\d+\.\d+/i, "");
      reg = reg.replace( /Phone : (.*)?\n/ig, "");
      reg = reg.replace( /Form : /ig, "");
      reg = reg.replace( /Name : (.*)?\n/ig, "");
      reg = reg.replace( /E-mail : (.*)?\n/ig, "");
      reg = reg.replace( /(�������� : (.*)?\n|�������� :)/ig, "");
      reg = reg.replace( /(����� : (.*)?\n|����� :)/ig, "");
      reg = reg.replace( /(Utm Url : (.*)?\n|Utm Url :)/ig, "");
      reg = reg.replace( /(Others : (.*)?\n|Others :)/ig, "");
      reg = reg.replace( /(Url Utm :(.*)?\n|Url Utm :)/ig, ""); 
      reg = reg.replace( /\n/ig, " ");
      reg = reg.replace( /^( )*/ig, "");
      // ��� ���� ����� Note ����� ������������
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
      // �������� ����, ���� �� ������� ���������� �������� "" - ��� ���������� � ����������
      phone = "";
    }
    date2=DateNorm(date1);
    time2=TimeNorm(date1);
    utm_parser(MsgBody);
    //source2="";
    //source="";
    type="������";
    duration = "";
    
  }
  
  
  
  
  // ������� �����������
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
      reg = reg.replace( /#.*/i, ""); // ��� ������ yandex#geos3
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
    // �� ��������� ����� ����������� �������� 
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
    // ������������ ��� �������� ������� �� �������� ���
    // ������ ������ ���� � ������
    var type="������"; 
    var period = attachments.match( /�� ������ � \d{2}\.\d{2}\.\d{4}.*?��.*?\d{2}:\d{2}:\d{2}/i);
    var attachments = attachments.replace( /�� ������ � \d{2}\.\d{2}\.\d{4}.*?��.*?\d{2}:\d{2}:\d{2}/i, "");
    var source1 = attachments.match( /<b>\d{12}</i);
    source1[0] = source1[0].replace( /\D/ig, "");
    
    //���������� �������
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
          source="�����������";
        }
      }
      var attachments = attachments.replace( /<b>\d{12}</i, "");
      var attachments = attachments.replace( /<b>\d{20}</i, "");
      
      var res_date = attachments.match(/\d{2}\.\d{2}\.\d{4}/ig);
      var res_time = attachments.match(/\d{1,2}:\d{2}:\d{2}/ig);
      var res_dur = attachments.match(/>(\d{1,2}:\d{1,2}|1)</ig);
      attachments = attachments.replace(/\s/gi, " ");
      var res_phone = attachments.match(/\d{1,2}:\d{2}:\d{2}.*?<\/td>.*?<\/td>/ig);
      
      // �������� 
      if (res_date!=null)
      {
        if (res_date.length!=res_time.length || res_time.length!=res_phone.length || res_phone.length!=res_dur.length) 
        {
          var msg = "������ ��� �������� ������ �� �������";
          return false;
        }
        // ��� ������ ������ � ������ �� �������
        var t=0;
        for (var j = 0; j < res_phone.length; j++)
        { //���� ��� ����� ��������� (������������ <--)
          if (res_phone[j].match(/--/)!= null & res_dur[j].match(/\d{1,2}:/ig)!= null)
          { 
            // ���� ������ �������� �� ������������
            var tmp1 = res_dur[j].match(/\d{1,2}:/ig)[0];
            tmp1 = tmp1.replace( /:/ig, "");
            var tmp2 = res_dur[j].match(/:\d{1,2}/ig)[0];
            tmp2 = tmp2.replace( /:/ig, "");
            if (Number(tmp1) > 0 || Number(tmp2) >= LeadDur)
            {
              // ������� ������ 
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
  // ��������� ������ 
  //1-A - URL
  //2-B- ���	
  //3-C - �������	
  //4-D - E-mail	
  //5-E - ��� (������/������)	
  //6-F - ������������	
  //7-G - ����	
  //8-H - �����	
  //9-I - ��� ��������� ����
  //10-J - ������ ����	
  //11-K - ��������� ����	
  //12-L - ������ �������
  //13-M - ����������� �� �������
  //14-N - ��������
  //15-O - �������
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
  // ������� ��������� ����������� ������ � ��������
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
    first.getRange(lastRow+1,10).setValue("����������");
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
{ // ������ ������ ������� ���������� � ��������� �.����� '8232607704
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
  // ����� ��� ���������
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
{ // ������ �������� ��
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
  // ����� ��� ���������
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

function RestRep(projects){
  
   // ������ �� ��������
  var label = GmailApp.getUserLabelByName("�������");
  var threads = label.getThreads(0, 2);
  var temp = threads.length;
  var cl;
  var rest;
  var reg, msg, MsgBody, MsgSubj;
  
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
         //attachments = messages[j].getAttachments()[0].getDataAsString(); 
          MsgBody=MsgBody.replace(/\n/ig, " ");
          if (MsgBody.match(/<table(.*)?<\/table>/ig)!=null)
          {
            if (MsgSubj.match(/Google:/i)!=null){
              msg="google";
            } else {
              msg="yandex";
            }
              
            reg = MsgBody.match(/<table(.*)?<\/table>/ig)[0]
            var proj_rest = reg.match(/<tr bgcolor=(3D)?"#FFFFFF".*?<td>.*?<\/td><td>.*?<\/td>/ig);
            for (var k = 0; k < proj_rest.length; k++) 
            {// �������
              cl=proj_rest[k].replace(/<tr bgcolor=(3D)?"#FFFFFF".*?<td>(.*?)<\/td><td>.*?<\/td>/i, "$2");
              rest=proj_rest[k].replace(/<tr bgcolor=(3D)?"#FFFFFF".*?<td>.*?<\/td><td>(.*?)<\/td>/i, "$2");
              for (var t = 0; t < projects.length; t++) 
              {
                if (projects[t][12]==cl)
                  {
                    var  ReportUrl=projects[t][2];
                    var ss = SpreadsheetApp.openByUrl(ReportUrl);
                    add="";
                    if (projects[t][11]=="land2"){
                      add = "2";
                    }
                    //var first = ss.getSheetByName("Summary");
                    //first.activate();
                    //var lastRow = first.getLastRow();
                    if (ss.getRangeByName("rest_" + msg + add)!=null){
                      ss.getRangeByName("rest_" + msg + add).setValue(rest);
                      ss.getRangeByName("rest_" + msg + add).setNote("�������� " + String(DateNorm(messages[j].getDate())));
                    }
                  }
              }
            
            }
            
          } else  {name = "-";}
          messages[j].markRead();
          
        }
      }
    }
}