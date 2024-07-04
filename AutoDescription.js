//-------------------------------------// 
//--- SCRIPT NAME: AUTO DESCRIPTION ---//
//--- AUTHOR: JAKUB OLICHWIER ---------//
//-------------------------------------//

var descriptionsMapPL = new Map([
["jsPcs", "szt."],
["jsBattery", "Bateria VRLA"],
["jsConfiguration", "Konfiguracja"],
["jsAutonomy", "Autonomia"],
["jsMinutes", "minut"],
["GXT5-2000", "Zasilacz UPS Liebert GXT5 2 kVA/kW"],
["GXT5-3000", "Zasilacz UPS Liebert GXT5 3 kVA/kW"],
["GXT5-5000", "Zasilacz UPS Liebert GXT5 5 kVA/kW"],
["GXT5-6000", "Zasilacz UPS Liebert GXT5 8 kVA/kW"],
["GXT5-8000", "Zasilacz UPS Liebert GXT5 8 kVA/kW"],
["GXT5-10", "Zasilacz UPS Liebert GXT5 10 kVA/kW"],
["ITA210", "Zasilacz UPS Liebert ITA2 10 kVA/kW"],
["ITA215", "Zasilacz UPS Liebert ITA2 15 kVA/kW"],
["ITA220", "Zasilacz UPS Liebert ITA2 20 kVA/kW"],
["ITA230", "Zasilacz UPS Liebert ITA2 30 kVA/kW"],
["ITA240", "Zasilacz UPS Liebert ITA2 40 kVA/kW"],
["EXS10", "Zasilacz UPS Liebert EXS 10 kVA/kW"],
["EXS15", "Zasilacz UPS Liebert EXS 15 kVA/kW"],
["EXS20", "Zasilacz UPS Liebert EXS 20 kVA/kW"],
["EXS30", "Zasilacz UPS Liebert EXS 30 kVA/kW"],
["EXS40", "Zasilacz UPS Liebert EXS 40 kVA/kW"],
["EXS60", "Zasilacz UPS Liebert EXS 60 kVA/kW"],
["EXS80", "Zasilacz UPS Liebert EXS 80 kVA/kW"],
["EXM10", "Zasilacz UPS Liebert EXM2 100 kVA/kW"],
["EXM12", "Zasilacz UPS Liebert EXM2 120 kVA/kW"],
["EXM16", "Zasilacz UPS Liebert EXM2 160 kVA/kW"],
["EXM20", "Zasilacz UPS Liebert EXM2 200 kVA/kW"],
["EXM25", "Zasilacz UPS Liebert EXM2 250 kVA/kW"],
["LI8E10", "Zasilacz UPS Liebert EXLS S1 100 kVA/kW"],
["LI8E12", "Zasilacz UPS Liebert EXLS S1 120 kVA/kW"],
["LI8E16", "Zasilacz UPS Liebert EXLS S1 160 kVA/kW"],
["LI8E20", "Zasilacz UPS Liebert EXLS S1 200 kVA/kW"],
["LI8E30", "Zasilacz UPS Liebert EXLS S1 300 kVA/kW"],
["LI8E40", "Zasilacz UPS Liebert EXLS S1 400 kVA/kW"],
["LI8C40", "Zasilacz UPS Liebert EXLS S1 400 kVA/kW"],
["LI8E50", "Zasilacz UPS Liebert EXLS S1 500 kVA/kW"],
["LI8E61", "Zasilacz UPS Liebert EXLS S1 600 kVA/kW"],
["LI8E80", "Zasilacz UPS Liebert EXLS S1 800 kVA/kW"],
["LI8E1B", "Zasilacz UPS Liebert EXLS S1 1200 kVA/kW"],
["APM0300", "Modułowy zasilacz UPS Liebert APM 30 kVA/kW"],
["APM0600", "Modułowy zasilacz UPS Liebert APM 60 kVA/kW"],
["APM0900", "Modułowy zasilacz UPS Liebert APM 90 kVA/kW"],
["APM1200", "Modułowy zasilacz UPS Liebert APM 120 kVA/kW"],
["APM1500", "Modułowy zasilacz UPS Liebert APM 150 kVA/kW"],
["APM0301", "Modułowy zasilacz UPS Liebert APM 30+30 kVA/kW"],
["APM0601", "Modułowy zasilacz UPS Liebert APM 60+30 kVA/kW"],
["APM0901", "Modułowy zasilacz UPS Liebert APM 90+30 kVA/kW"],
["APM1201", "Modułowy zasilacz UPS Liebert APM 120+30 kVA/kW"],
["APMP05", "Modułowy zasilacz UPS APM+250 1x50 kVA/kW"],
["APMP10", "Modułowy zasilacz UPS APM+250 2x50 kVA/kW"],
["APMP15", "Modułowy zasilacz UPS APM+250 3x50 kVA/kW"],
["APMP20", "Modułowy zasilacz UPS APM+250 4x50 kVA/kW"],
["APMP25", "Modułowy zasilacz UPS APM+250 5x50 kVA/kW"],
["APMZ", "Modułowy zasilacz UPS APM2 x60 kVA/kW"],
["APMZ60M1ADD", "\nAPM2 nadmiarowy moduł 60kW"],
["ACPAPMZF4FULLMSEA", "\nAPM2 F4 Pełny/Serwisowy Przeł. Z opakowaniem do transportu morskiego"],
["ACPAPMZF3SEA", "\nAPM2 F3 Opakowanie do transportu morskiego"],
["02313502", "Moduł mocy 30KVA dla APM2"],
["TFG", "Modułowy zasilacz UPS TRINERGY CUBE kVA,  x CORE  kVA/kW"],
["ACPAPMZF3BETFK", "\ngórny wydmuch powietrza dla APM2"],
["APMMOBACAB", "\nModułowa szafa bateryjna dla APM"],
["APMBATMODF10", "\nModuł bateryjny 30x9Ah"],
["IS-UNITY-SNMP", "\nKarta SNMP"],
["IS-UNITY-DP", "\nKarta SNMP+MODBUS/BACNET"],
["RDU101", "\nKarta SNMP"],
["IS-RELAY", "\nKarta przekaźnikowa"],
["02312277", "\nDodatkowy slot na kartę komunikacyjną"],
["10H32447P", "\nZestaw do pracy równoległej"],
["10B14266G8", "\nPrzedział kablowy - umożliwia podłączenie od góry dla UPS 160-500 kVA"],
["10H63289KE", "\nWyjście jednofazowe"],
["023500U7", "\nCzujnik kompensacji temperatury dla baterii"],
["02350174", "\nZestaw do monitorowania temperatury akumulatora"],
["10H32479P01", "\nCzujnik kompensacji temperatury dla baterii"],
["LPS-B-OKS-FEE", "Coroczny przegląd serwisowy wraz z pomiarem baterii"],
["VB60A1BBBY30000", "\nSzafa Bateryjna - 10Y: 32x25Ah TYP A3"],
["VB60A1DBBY30000", "\nSzafa Bateryjna - 10Y: 40x25Ah TYP A3"],
["VB20A4BAAC30000", "\nSzafa Bateryjna - 5Y: 4x32x9Ah TYP A3"],
["VB60A4BAAC30000", "\nSzafa Bateryjna - 10Y: 4x32x9Ah TYP A3"],
["VB60A1BCAL30000", "\nSzafa Bateryjna - 10Y: 32x35Ah TYP A3"],
["VB60A1DCAL30000", "\nSzafa Bateryjna - 10Y: 40x35Ah TYP A3"],
["VB60A1DDAL30000", "\nSzafa Bateryjna - 10Y: 40x55Ah TYP A3"],
["VB60K1DEAL30000", "\nSzafa Bateryjna - 10Y: 40x82Ah TYP K"],
["VB10A0ZZZZ30000", "\nPusta Szafa Bateryjna TYP A3"],
["VB10K0ZZZZ30000", "\nPusta Szafa Bateryjna TYP K"],
["VB10I0ZZZZ30000", "\nPusta Szafa Bateryjna TYP I"],
["VB60A1BBBY35000", "\nSzafa Bateryjna - 10Y: 32x25Ah TYP A3"],
["VB60A1DBBY35000", "\nSzafa Bateryjna - 10Y: 40x25Ah TYP A3"],
["VB20A4BAAC35000", "\nSzafa Bateryjna - 5Y: 4x32x9Ah TYP A3"],
["VB60A4BAAC35000", "\nSzafa Bateryjna - 10Y: 4x32x9Ah TYP A3"],
["VB60A1BCAL35000", "\nSzafa Bateryjna - 10Y: 32x35Ah TYP A3"],
["VB60A1DCAL35000", "\nSzafa Bateryjna - 10Y: 40x35Ah TYP A3"],
["VB60A1DDAL35000", "\nSzafa Bateryjna - 10Y: 40x55Ah TYP A3"],
["VB60K1DEAL35000", "\nSzafa Bateryjna - 10Y: 40x82Ah TYP K"],
["VB60A1BCAL20000", "\nSzafa Bateryjna - 10Y: 32x35Ah TYP A3"],
["VB60A1DCAL20000", "\nSzafa Bateryjna - 10Y: 40x35Ah TYP A3"],
["VB60A1DDAL20000", "\nSzafa Bateryjna - 10Y: 40x55Ah TYP A3"],
["VB60K1DEAL20000", "\nSzafa Bateryjna - 10Y: 40x82Ah TYP K"],
["VB10A0ZZZZ20000", "\nPusta Szafa Bateryjna TYP A3"],
["VB10K0ZZZZ20000", "\nPusta Szafa Bateryjna TYP K"],
["VB10I0ZZZZ20000", "\nPusta Szafa Bateryjna TYP I"],
["VB60A1BCAL25000", "\nSzafa Bateryjna - 10Y: 32x35Ah TYP-A3"],
["VB60A1DCAL25000", "\nSzafa Bateryjna - 10Y: 40x35Ah TYP-A3"],
["VB60A1DDAL25000", "\nSzafa Bateryjna - 10Y: 40x55Ah TYP-A3"],
["VB60K1DEAL25000", "\nSzafa Bateryjna - 10Y: 40x82AH TYPE-K"],
["LIBTP160", "\nSzafa bateryjna Li-Ion VISION - 8 MOD X 100AH"],
["LIBTP160S", "\nSzafa bateryjna Li-Ion VISION - 8 MOD X 100AH - Master BMS"],
["LIBHPLP1160S-FM", "\nSzafa bateryjna Li-Ion HPL-P1 - 10 Mod x 100Ah"],
["SN-TH", "\nModuł z pojedynczym czujnikiem temperatury oraz wilgotności."],
["04113255", "\nZestaw do pracy równoległej"],
["10H46934P010", "\nZestaw pracy równoległej 10m"],
["02010026", "\nModuł POD"],
["02313004", "\nModuł POD"],
["02010024", "\nModuł bateryjny 2U 16x9Ah"],
["0235A02J", "\nModuł bateryjny 3U 16x9Ah"],
["LIBSG128S", "\nBateria Li-Ion 128S"],
["LIBSG136S", "\nBateria Li-Ion 136S"],
["LIBTP200", "\nBateria Li-Ion 10X100AH"],
["WTCORE-TC-X", "\nFactory witness test dla CORE"],
["WT80-EXL-X", "\nFactory witness test dla EXL"],
["WTEXM2-X", "\nFactory witness test dla EXM2"],
["WT-APMP250-X", "\nFactory witness test dla APM250"],
["WT-APMP500-X", "\nFactory witness test dla APM500"],
["GXT5-EBC48VRT2UE", "\nModuł bateryjny 2U"],
["GXT5-EBC192VRT3U", "\nModuł bateryjny 3U"],
["GXT5-EBC72VRT2UE", "\nModuł bateryjny 3U"],
["ITA-BCI0020K02L3", "\nKabel łączeniowy UPS-Bateria"],
["ITA-BCI0020K02L2", "\nKable łączące dwa moduły akumulatorowe"],
["00B46158PEXS4", "\nKabel do pracy równoległej (4m)"],
["UF-RMKIT2438", "\nProwadnice do szafy rack"],
["RMKIT18-32", "\nProwadnice do szafy rack"],
["SU56731AB000AA0", "\nZewnętrzny panel monitorujący"],
["10B46212P1D12", "\nKabel dla zewnętrznego panelu monitorującego"],
["RUPS-WE3-006", "\nWydłużenie gwarancji do 5 lat dla UPS"],
["RUPS-PE5-006", "\nWydłużenie gwarancji do 5 lat dla baterii"],
["LPL-TRN-DEL", "\nTransport"],
["LKL-TRN-DEL", "\nTransport"],
["Start-UP", "\nUruchomienie UPS"],
["PS-ACP-LI-ON-STARTUP", "\nUruchomienie baterii Li-Ion"],
["PS-ACP-TR", "\nSzkolenie w dniu uruchomienia"],
["PS-PROJ-MNGMT-BASIC", "\nKoordynacja projektu"],
["LYU", "BAT"],
["LEX", "BAT"],
["LEN", "BAT"],
["LLE", "BAT"],
["LCS", "BAT"],
["LFA", "BAT"],
["LHP", "BAT"],
["10B14842GPK4", "\nZestaw półek dla baterii wewnętrznych dla konfiguracji 4x40x9Ah dla EXS 30-40kVA"],
["10B14822G5SN", "\nOpakowanie do transportu morskiego dla EXL 600-800kVA"],
["APMZ3004AAAA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym"],
["APMZ6004AAAA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym"],
["APMZ9004AAAA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym"],
["APMZ1204AAAA00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym"],
["APMZ3004EAAA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ6004EAAA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ9004EAAA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ1204EAAA00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ3004EAHA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, wytrzymałość 65KA"],
["APMZ6004EAHA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, wytrzymałość 65KA"],
["APMZ9004EAHA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, wytrzymałość 65KA"],
["APMZ1204EAHA00", "Modułowy zasilacz UPS APM2 100kVA z przełącznikiem serwisowym, wytrzymałość 65KA"],
["APMZ3004EAAC00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, górny wydmuch powietrza"],
["APMZ6004EAAC00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, górny wydmuch powietrza"],
["APMZ9004EAAC00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, górny wydmuch powietrza"],
["APMZ1204EAAC00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, górny wydmuch powietrza"],
["APMZ3001AAAA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, wersja kompaktowa"],
["APMZ6001AAAA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, wersja kompaktowa"],
["APMZ9001AAAA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, wersja kompaktowa"],
["APMZ1201AAAA00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, wersja kompaktowa"],
["APMZ3001AACA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, wytrzymałość 65KA, wersja kompaktowa"],
["APMZ6001AACA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, wytrzymałość 65KA, wersja kompaktowa"],
["APMZ9001AACA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, wytrzymałość 65KA, wersja kompaktowa"],
["APMZ1201AACA00", "Modułowy zasilacz UPS APM2 100kVA z przełącznikiem serwisowym, wytrzymałość 65KA, wersja kompaktowa"],
["APMZ3001AAAB00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, górny wydmuch powietrza, wersja kompaktowa"],
["APMZ6001AAAB00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, górny wydmuch powietrza, wersja kompaktowa"],
["APMZ9001AAAB00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, górny wydmuch powietrza, wersja kompaktowa"],
["APMZ1201AAAB00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, górny wydmuch powietrza, wersja kompaktowa"],
["APMZ3004ABAA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, IP21"],
["APMZ6004ABAA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, IP21"],
["APMZ9004ABAA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, IP21"],
["APMZ1204ABAA00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, IP21"],
["APMZ3004EGAA00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy, IP21"],
["APMZ6004EGAA00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy, IP21"],
["APMZ9004EGAA00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy, IP21"],
["APMZ1204EGAA00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy, IP21"],
["APMZ3004AAAD00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym"],
["APMZ6004AAAD00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym"],
["APMZ9004AAAD00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym"],
["APMZ1204AAAD00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym"],
["APMZ3004EAAG00", "Modułowy zasilacz UPS APM2 30kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ6004EAAG00", "Modułowy zasilacz UPS APM2 60kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ9004EAAG00", "Modułowy zasilacz UPS APM2 90kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["APMZ1204EAAG00", "Modułowy zasilacz UPS APM2 120kVA z przełącznikiem serwisowym, bateria wewnętrzna VRLA 4 łańcuchy"],
["LPS-B-OX-FEE", "Coroczny przegląd serwisowy wraz z pomiarem baterii"],
["EXM10AA01AA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego"],
["EXM10BA01AA03A0", "Zasilacz UPS EXM2 100KVA z pełnym zestawem przełączników"],
["EXM12AA01AA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego"],
["EXM12BA01AA03A0", "Zasilacz UPS EXM2 120KVA z pełnym zestawem przełączników"],
["EXM16AA01AA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego"],
["EXM16BA01AA03A0", "Zasilacz UPS EXM2 160KVA z pełnym zestawem przełączników"],
["EXM20AA01AA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego"],
["EXM20BA01AA03A0", "Zasilacz UPS EXM2 200KVA z pełnym zestawem przełączników"],
["EXM25AA01AA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego"],
["EXM25BA01AA03A0", "Zasilacz UPS EXM2 250KVA z pełnym zestawem przełączników"],
["EXM10AA01BA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i zestawem górnej wentylacji"],
["EXM12AA01BA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i zestawem górnej wentylacji"],
["EXM16AA01BA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i zestawem górnej wentylacji"],
["EXM20AA01BA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i zestawem górnej wentylacji"],
["EXM25AA01BA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i zestawem górnej wentylacji"],
["EXM10AA01CA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i górnym podejściem kablowym"],
["EXM12AA01CA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i górnym podejściem kablowym"],
["EXM16AA01CA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i górnym podejściem kablowym"],
["EXM20AA01CA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i górnym podejściem kablowym"],
["EXM25AA01CA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i górnym podejściem kablowym"],
["EXM10EA01AA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i zabezpieczeniem przed prądem zwrotnym"],
["EXM12EA01AA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i zabezpieczeniem przed prądem zwrotnym"],
["EXM16EA01AA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i zabezpieczeniem przed prądem zwrotnym"],
["EXM20EA01AA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i zabezpieczeniem przed prądem zwrotnym"],
["EXM25EA01AA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i zabezpieczeniem przed prądem zwrotnym"],
["EXM10AA01AC03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i wytrzymałością 65kA"],
["EXM12AA01AC03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i wytrzymałością 65kA"],
["EXM16AA01AC03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i wytrzymałością 65kA"],
["EXM20AA01AC03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i wytrzymałością 65kA"],
["EXM25AA01AC03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i wytrzymałością 65kA"],
["EXM10AA01AA13A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i trybem Dynamic Online"],
["EXM12AA01AA13A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i trybem Dynamic Online"],
["EXM16AA01AA13A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i trybem Dynamic Online"],
["EXM20AA01AA13A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i trybem Dynamic Online"],
["EXM25AA01AA13A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i trybem Dynamic Online"],
["EXM10AA11AA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i IP21"],
["EXM12AA11AA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i IP21"],
["EXM16AA11AA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i IP21"],
["EXM20AA11AA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i IP21"],
["EXM25AA11AA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i IP21"],
["EXM10AA21AA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i IP31"],
["EXM12AA21AA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i IP31"],
["EXM16AA21AA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i IP31"],
["EXM20AA21AA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i IP31"],
["EXM25AA21AA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i IP31"],
["EXM1AAA01AA03A0", "Zasilacz UPS EXM2 100KVA wersja CPSS z przełącznikiem bypassu serwisowego"],
["EXM1BAA01AA03A0", "Zasilacz UPS EXM2 120KVA wersja CPSS z przełącznikiem bypassu serwisowego"],
["EXM1CAA01AA03A0", "Zasilacz UPS EXM2 160KVA wersja CPSS z przełącznikiem bypassu serwisowego"],
["EXM1DAA01AA03A0", "Zasilacz UPS EXM2 200KVA wersja CPSS z przełącznikiem bypassu serwisowego"],
["EXM1EAA01AA03A0", "Zasilacz UPS EXM2 250KVA wersja CPSS z przełącznikiem bypassu serwisowego"],
["EXM10AA01AA02A0", "Zasilacz UPS EXM2 100KVA wersja C2 EMC z przełącznikiem bypassu serwisowego"],
["EXM12AA01AA02A0", "Zasilacz UPS EXM2 120KVA wersja C2 EMC z przełącznikiem bypassu serwisowego"],
["EXM16AA01AA02A0", "Zasilacz UPS EXM2 160KVA wersja C2 EMC z przełącznikiem bypassu serwisowego"],
["EXM20AA01AA02A0", "Zasilacz UPS EXM2 200KVA wersja C2 EMC z przełącznikiem bypassu serwisowego"],
["EXM25AA01AA02A0", "Zasilacz UPS EXM2 250KVA wersja C2 EMC z przełącznikiem bypassu serwisowego"],
["EXM10AB01AA03A0", "Zasilacz UPS EXM2 100KVA z przełącznikiem bypassu serwisowego i transformatorem wyjściowym YY"],
["EXM12AB01AA03A0", "Zasilacz UPS EXM2 120KVA z przełącznikiem bypassu serwisowego i transformatorem wyjściowym YY"],
["EXM16AB01AA03A0", "Zasilacz UPS EXM2 160KVA z przełącznikiem bypassu serwisowego i transformatorem wyjściowym YY"],
["EXM20AB01AA03A0", "Zasilacz UPS EXM2 200KVA z przełącznikiem bypassu serwisowego i transformatorem wyjściowym YY"],
["EXM25AB01AA03A0", "Zasilacz UPS EXM2 250KVA z przełącznikiem bypassu serwisowego i transformatorem wyjściowym YY"],
["10B20002G6", "PSU KIT BOX"],
["10B20002G7", "CONTROL BLOCK BOX"],
["02010498", "\nWspólne wejście dla 500k NSW"],
["APMP", "Modułowy zasilacz UPS APM+ x50 kVA/kW"],
["MTPD010", "Zasilacz UPS Liebert MTP 10 kVA/kW"],
["MTPD015", "Zasilacz UPS Liebert MTP 15 kVA/kW"],
["MTPD020", "Zasilacz UPS Liebert MTP 20 kVA/kW"],
["MTPD030", "Zasilacz UPS Liebert MTP 30 kVA/kW"],
["MTPD040", "Zasilacz UPS Liebert MTP 40 kVA/kW"],
["MTPD060", "Zasilacz UPS Liebert MTP 60 kVA/kW"],
["MTPD080", "Zasilacz UPS Liebert MTP 80 kVA/kW"],
["MTPD100", "Zasilacz UPS Liebert MTP 100 kVA/kW"],
["MTPD120", "Zasilacz UPS Liebert MTP 120 kVA/kW"],
["MTPD160", "Zasilacz UPS Liebert MTP 160 kVA/kW"],
["MTPD200", "Zasilacz UPS Liebert MTP 200 kVA/kW"],
["D31-010942-00G", "\nZestaw do monitorowania temperatury akumulatora dla MTP 60kVA i 100-200kVA"],
["D43-152124-01G", "\nZestaw do monitorowania temperatury akumulatora dla MTP 10-20kVA i 80kVA"],
["PS-ACP-ST", "\nUruchomienie UPS"],
["PS-ACP-ST-EXS80", "\nUruchomienie UPS"],
["PS-ACP-ST-ITA210TO20", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS-150", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS-350", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS-400", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS-450", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS-500", "\nUruchomienie UPS"],
["PS-ACP-ST-EXM2-100", "\nUruchomienie UPS"],
["PS-ACP-ST-EXM2-120-160", "\nUruchomienie UPS"],
["PS-ACP-ST-EXM2-120-160", "\nUruchomienie UPS"],
["PS-ACP-ST-APMPLUS", "\nUruchomienie UPS"],
["PS-ACP-ST-EXS10TO20", "\nUruchomienie UPS"],
["PS-ACP-ST-EXS80", "\nUruchomienie UPS"],
["PS-THM-STARTUP", "\nUruchomienie"],
["PS-ACP-TR", "\nSzkolenie w dniu uruchomienia"],
["PS-ACP-TR-QSTART-MS", "\nSzkolenie w dniu uruchomienia"],
]);

var descriptionsMapEN = new Map([
["jsPcs", "pcs."],
["jsBattery", "VRLA Battery"],
["jsConfiguration", "Configuration"],
["jsAutonomy", "Autonomy"],
["jsMinutes", "minutes"],
["LYU", "BAT"],
["LEX", "BAT"],
["LEN", "BAT"],
["LLE", "BAT"],
["LCS", "BAT"],
["LFA", "BAT"],
["LHP", "BAT"],
]);

var descriptionsMapDE = new Map([
["jsPcs", "Stk."],
["jsBattery", "VRLA Battery"],
["jsConfiguration", "Konfiguration"],
["jsAutonomy", "Autonomie"],
["jsMinutes", "Minuten"],
["GXT5-2000", "Liebert USV GXT5 2 kVA/kW"],
["GXT5-3000", "Liebert USV GXT5 3 kVA/kW"],
["GXT5-5000", "Liebert USV GXT5 5 kVA/kW"],
["GXT5-6000", "Liebert USV GXT5 8 kVA/kW"],
["GXT5-8000", "Liebert USV GXT5 8 kVA/kW"],
["GXT5-10", "Liebert USV GXT5 10 kVA/kW"],
["ITA210", "Liebert USV ITA2 USV 10 kVA/kW"],
["ITA215", "Liebert USV ITA2 USV 15 kVA/kW"],
["ITA220", "Liebert USV ITA2 20 kVA/kW"],
["ITA230", "Liebert USV ITA2 USV 30 kVA/kW"],
["ITA240", "Liebert USV ITA2 40 kVA/kW"],
["EXS10", "Liebert USV EXS 10 kVA/kW"],
["EXS15", "Liebert USV EXS 15 kVA/kW"],
["EXS20", "Liebert USV EXS 20 kVA/kW"],
["EXS30", "Liebert USV EXS 30 kVA/kW"],
["EXS40", "Liebert USV EXS 40 kVA/kW"],
["EXS60", "Liebert USV EXS 60 kVA/kW"],
["EXS80", "Liebert USV EXS 80 kVA/kW"],
["EXM10", "Liebert USV EXM2 100 kVA/kW"],
["EXM12", "Liebert USV EXM2 120 kVA/kW"],
["EXM16", "Liebert USV EXM2 160 kVA/kW"],
["EXM20", "Liebert USV EXM2 200 kVA/kW"],
["EXM25", "Liebert USV EXM2 250 kVA/kW"],
["LI8E10", "Liebert USV EXL S1 100 kVA/kW"],
["LI8E12", "Liebert USV EXL S1 120 kVA/kW"],
["LI8E16", "Liebert USV EXL S1 160 kVA/kW"],
["LI8E20", "Liebert USV EXL S1 200 kVA/kW"],
["LI8E30", "Liebert USV EXL S1 300 kVA/kW"],
["LI8E40", "Liebert USV EXL S1 400 kVA/kW"],
["LI8C40", "Liebert USV EXL S1 400 kVA/kW"],
["LI8E50", "Liebert USV EXL S1 500 kVA/kW"],
["LI8E61", "Liebert USV EXL S1 600 kVA/kW"],
["LI8E80", "Liebert USV EXL S1 800 kVA/kW"],
["LI8E1B", "Liebert USV EXL S1 1200 kVA/kW"],
["APM0300", "Liebert USV APM 30 kVA/kW modular"],
["APM0600", "Liebert Modulare USV APM 60 kVA/kW"],
["APM0900", "Liebert Modulare USV APM 90 kVA/kW"],
["APM1200", "Liebert Modulare USV APM 120 kVA/kW"],
["APM1500", "Liebert Modulare USV APM 150 kVA/kW"],
["APM0301", "Liebert Modulare USV APM 30+30 kVA/kW"],
["APM0601", "Liebert Modulare USV APM 60+30 kVA/kW"],
["APM0901", "Liebert Modulare USV APM 90+30 kVA/kW"],
["APM1201", "Liebert Modulare USV APM 120+30 kVA/kW"],
["APMP05", "Modulare USV APM+250 1x50 kVA/kW"],
["APMP10", "Modulare USV APM+250 2x50 kVA/kW"],
["APMP15", "Modulare USV APM+250 3x50 kVA/kW"],
["APMP20", "Modulare USV APM+250 4x50 kVA/kW"],
["APMP25", "Modulare USV APM+250 5x50 kVA/kW"],
["APMZ", "Modulare USV APM2 x60 kVA/kW"],
["APMZ60M1ADD", "\nAPM2 60 kW redundantes Modul"],
["ACPAPMZF4FULLMSEA", "\nAPM2 F4 Voll/Service, Verpackung für den Seetransport"],
["ACPAPMZF3SEA", "\nAPM2 F3 Verpackung für den Seetransport"],
["02313502", "APM2 30kVA Leistungsmodul (mit Verpackung)"],
["TFG", "Modulare USV TRINERGY CUBE kVA, x CORE kVA/kW"],
["ACPAPMZF3BETFK", "Oberluft für APM2"],
["APMMOBACAB", "\nModularer Batterieschrank für APM"],
["APMBATMODF10", " \n30x9Ah Batteriemodul"],
["IS-UNITY-SNMP", "\nSNMP Karte"],
["IS-UNITY-DP", "\nSNMP+MODBUS/BACNET-Karte"],
["RDU101", "\nSNMP-Karte"],
["02312277", "\nZusätzlicher Steckplatz für Kommunikationskarten"],
["IS-RELAY", "\nRelaiskarte"],
["10H32447P", "\nParallelbetriebskit"],
["10B14266G8", "\nKabeleinführung von oben – ermöglicht den Anschluss von USV 160–500 kVA"],
["10H63289KE", "\nEinphasiger Ausgang"],
["023500U7", "\n-Temperaturkompensationssensor für Batterien"],
["02350174", "\nKit zur Überwachung der Batterietemperatur"],
["10H32479P01", "\nTemperaturkompensationssensor für Batterie"],
["LPS-B-OKS-FEE", "Jährliche Wartung inklusive Batteriemessung"],
["VB60A1BBBY30000", "\nVRLA-BATTERIESCHRANK – 10J: 32x25Ah TYP A3 – 3 DRÄHTE"],
["VB60A1DBBY30000", "\nVRLA-Batterieschrank – 10 Jahre: 40 x 25 Ah, Typ A3 – 3 Drähte"],
["VB20A4BAAC30000", "\nVRLA-BATTERIESCHRANK – 5J: 4x32x9Ah TYP A3 – 3 DRÄHTE"],
["VB60A4BAAC30000", "\nVRLA-BATTERIESCHRANK - 10J: 4x32x9Ah TYP A3 - 3 DRÄHTE"],
["VB60A1BCAL30000", "\nVRLA-Batterieschrank – 10 Jahre: 32 x 35 Ah, Typ A3 – 3 Drähte"],
["VB60A1DCAL30000", "\nVRLA-Batterieschrank – 10 Jahre: 40 x 35 Ah, Typ A3 – 3 Drähte"],
["VB60A1DDAL30000", "\nVRLA-BATTERIESCHRANK -10Y: 40X55AH TYP A3 - 3 DRÄHTE"],
["VB60K1DEAL30000", "\nVRLA-BATTERIESCHRANK -10Y: 40X82AH TYP K - 3 DRÄHTE"],
["VB10A0ZZZZ30000", "\nLEERER VRLA-BATTERIESCHRANK TYP A3 – 3 DRÄHTE"],
["VB10K0ZZZZ30000", "\nLEERER VRLA-BATTERIESCHRANK TYP K – 3 DRÄHTE"],
["VB10I0ZZZZ30000", "\nLEERER VRLA-BATTERIESCHRANK TYP I – 3 DRÄHTE"],
["VB60A1BBBY35000", "\nVRLA-BATTERIESCHRANK-10Y:32x25Ah-TYP-A3-3 DRÄHTE"],
["VB60A1DBBY35000", "\nVRLA-BATTERIESCHRANK-10Y:40x25Ah-TYP-A3-3 DRÄHTE"],
["VB20A4BAAC35000", "\nVRLA-BATTERIESCHRANK-5Y:4x32x9Ah-TYPE-A3-3 DRÄHTE"],
["VB60A4BAAC35000", "\nVRLA-BATTERIESCHRANK-10Y:4x32x9Ah-TYPE-A3-3 DRÄHTE"],
["VB60A1BCAL35000", "\nVRLA-BATTERIESCHRANK-10Y:32x35Ah-TYP-A3-3 DRÄHTE"],
["VB60A1DCAL35000", "\nVRLA-BATTERIESCHRANK-10Y:40x35Ah-TYP-A3-3 DRÄHTE"],
["VB60A1DDAL35000", "\nVRLA-BATTERIESCHRANK-10Y:40X55AH-TYPE-A3-3 DRÄHTE"],
["VB60K1DEAL35000", "\nVRLA-BATTERIESCHRANK-10Y:40x82AH-TYPE-K-3 DRÄHTE"],
["VB60A1BCAL20000", "\nVRLA-BATTERIESCHRANK-10Y: 32x35Ah TYP A3 - 2 DRÄHTE"],
["VB60A1DCAL20000", "\nVRLA-BATTERIESCHRANK-10Y: 40x35Ah TYP A3 - 2 DRÄHTE"],
["VB60A1DDAL20000", "\nVRLA-BATTERIESCHRANK-10Y: 40X55AH TYP A3 – 2 DRÄHTE"],
["VB60K1DEAL20000", "\nVRLA-BATTERIESCHRANK-10Y: 40X82AH TYP K – 2 DRÄHTE"],
["VB10A0ZZZZ20000", "\nLEERER VRLA-BATTERIESCHRANK TYP A3 – 2 DRÄHTE"],
["VB10K0ZZZZ20000", "\nLEERER VRLA-BATTERIESCHRANK TYP K – 2 DRÄHTE"],
["VB10I0ZZZZ20000", "\nLEERER VRLA-BATTERIESCHRANK TYP I – 2 DRÄHTE"],
["VB60A1BCAL25000", "\nVRLA-BATTERIESCHRANK-10Y:32x35Ah-TYP-A3-2 DRÄHTE"],
["VB60A1DCAL25000", "\nVRLA-BATTERIESCHRANK-10Y:40x35Ah-TYP-A3-2 DRÄHTE"],
["VB60A1DDAL25000", "\nVRLA BATTERIEKABINE 5 MIN-10Y:40X55AH-TYPE-A3-2 DRÄHTE"],
["VB60K1DEAL25000", "\nVRLA-BATTERIESCHRANK-10Y:40x82AH-TYPE-K-2 DRÄHTE"],
["LIBTP160", " \nLi-Ion VISION Batterieschrank – 8 MOD X 100AH"],
["LIBHPLP1160S-FM", "\nLi-Ion HPL-P1 Batterieschrank – 10 MOD x 100 Ah"],
["SN-TH", "\nModul mit Temperatur- und Feuchtigkeitssensor."],
["04113255", "\nParallelbetriebskit"],
["10H46934P010", " \n10m Parallelbetriebskit"],
["02010026", " \nPOD-Modul"],
["02313004", " \nPOD-Modul"],
["02010024", " \n2U 16x9Ah Batteriemodul"],
["0235A02J", " \n3U 16x9Ah Batteriemodul"],
["LIBSG128S", " Li-Ion-Batterie 128S"],
["LIBSG136S", " Li-Ion 136S Batterie"],
["LIBTP200", " Li-Ion 10X100AH Batterie"],
["WTCORE-TC-X", " \nFactory witness test für CORE"],
["WT80-EXL-X", " \nFactory witness test für EXL"],
["WTEXM2-X", " \nFactory witness test für EXM2"],
["WT-APMP250-X", " \nFactory witness test für APM250"],
["WT-APMP500-X", " \nFactory witness test für APM500"],
["GXT5-EBC48VRT2UE", " \n2U-Batteriemodul"],
["GXT5-EBC192VRT3U", " \n3U-Batteriemodul"],
["GXT5-EBC72VRT2UE", " \nBatteriemodul 3U"],
["ITA-BCI0020K02L3", " \nUSV-Batterie-Anschlusskabel"],
["00B46158PEXS4", " \nParallelbetriebskabel (4 m)"],
["00B46158PEXS4", " \nParallelbetriebskabel (4 m)"],
["UF-RMKIT2438", " \nRack-Schienen"],
["RMKIT18-32", " \nRack-Schienen"],
["SU56731AB000AA0", " \nExternes Überwachungspanel"],
["10B46212P1D12", " \nKabel für externes Überwachungspanel"],
["RUPS-WE3-006", " \nrups-we3-006- Garantieverlängerung auf bis 5 Jahre"],
["RUPS-PE5-006", " \nVerlängerung der Garantie auf bis 5 Jahre für Batterien"],
["LPL-TRN-DEL", "\nTransport"],
["LKL-TRN-DEL", "\nTransport"],
["PS-ACP-ST", "\n USV Startup"],
["Start-UP", "\n USV Startup"],
["PS-ACP-LI-ON-STARTUP", "\nStart des Li-Ion-Batterie"],
["PS-ACP-TR", "\nTraining am Einführungstag"],
["PS-PROJ-MNGMT-BASIC", "\nProjektkoordination"],
["LYU", "BAT"],
["LEX", "BAT"],
["LEN", "BAT"],
["LLE", "BAT"],
["LCS", "BAT"],
["LHP", "BAT"],
["10B14842GPK4", "\nBATTERIE-REGAL-KIT FÜR 4x40x9Ah INTERNE BATTERIE für EXS 30-40kVA"],
["10B14822G5SN", "\nVerpackung für den Seetransport Monolitic 80-eXL / EXL 600-800kVA"],
["APMZ3004AAAA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ6004AAAA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ9004AAAA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ1204AAAA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ3004EAAA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ6004EAAA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ9004EAAA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ1204EAAA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ3004EAHA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, hält 65 kA stand"],
["APMZ6004EAHA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, hält 65 kA stand"],
["APMZ9004EAHA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, hält 65 kA stand"],
["APMZ1204EAHA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, hält 65 kA stand"],
["APMZ3004EAAC00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, mit Top-Lüfter-Kit"],
["APMZ6004EAAC00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, mit Top-Lüfter-Kit"],
["APMZ9004EAAC00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, mit Top-Lüfter-Kit"],
["APMZ1204EAAC00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, mit Top-Lüfter-Kit"],
["APMZ3001AAAA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, kompakt"],
["APMZ6001AAAA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, kompakt"],
["APMZ9001AAAA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, kompakt"],
["APMZ1201AAAA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, kompakt"],
["APMZ3001AACA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit 65 kA Widerstandsfähigkeit, kompakt"],
["APMZ6001AACA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit einer Widerstandsfähigkeit von 65 kA, kompakt"],
["APMZ9001AACA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit 65 kA Widerstandsfähigkeit, kompakt"],
["APMZ1201AACA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit einer Widerstandsfähigkeit von 65 kA, kompakt"],
["APMZ3001AAAB00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit Top-Lüfter-Kit, kompakt"],
["APMZ6001AAAB00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit Top-Lüfter-Kit, kompakt"],
["APMZ9001AAAB00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit Top-Lüfter-Kit, kompakt"],
["APMZ1201AAAB00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine interne Batterie, mit Top-Lüfter-Kit, kompakt"],
["APMZ3004ABAA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, IP21"],
["APMZ6004ABAA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, IP21"],
["APMZ9004ABAA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, IP21"],
["APMZ1204ABAA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien, IP21"],
["APMZ3004EGAA00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA, IP21"],
["APMZ6004EGAA00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA, IP21"],
["APMZ9004EGAA00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA, IP21"],
["APMZ1204EGAA00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA, IP21"],
["APMZ3004AAAD00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ6004AAAD00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ9004AAAD00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ1204AAAD00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, keine internen Batterien"],
["APMZ3004EAAG00", "APM2 30 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ6004EAAG00", "APM2 60 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ9004EAAG00", "APM2 90 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["APMZ1204EAAG00", "APM2 120 kVA Modulare USV, keine Redundanz, Software-Wartung, interne Batterie, 4 Strings VRLA"],
["LPS-B-OX-FEE", " Jährliche Serviceinspektion inklusive Batteriemessung"],
["PS-ACP-TR-QSTART-MS", "\nTraining am Einführungstag"],
["EXM10AA01AA03A0", "USV EXM2 100kVA mit Wartung Schalter"],
["EXM10BA01AA03A0", "USV EXM2 100kVA mit Vollschalter"],
["EXM12AA01AA03A0", "EXM2 120kVA mit Wartung Schalter"],
["EXM12BA01AA03A0", "USV EXM2 120kVA mit Vollschalter"],
["EXM16AA01AA03A0", "USV EXM2 160kVA mit Wartung Schalter"],
["EXM16BA01AA03A0", "USV EXM2 160kVA mit Vollschalter"],
["EXM20AA01AA03A0", "USV EXM2 200kVA mit Wartung Schalter"],
["EXM20BA01AA03A0", "USV EXM2 200kVA mit Vollschalter"],
["EXM25AA01AA03A0", "USV EXM2 250kVA mit Wartung Schalter"],
["EXM25BA01AA03A0", "USV EXM2 250kVA mit Vollschalter"],
["EXM10AA01BA03A0", "USV EXM2 100kVA mit Wartung Schalter und Oberlüftung"],
["EXM12AA01BA03A0", "USV EXM2 120kVA mit Wartung Schalter und Oberlüftung"],
["EXM16AA01BA03A0", "USV EXM2 160kVA mit Wartung Schalter und Oberlüftung"],
["EXM20AA01BA03A0", "USV EXM2 200kVA mit Wartung Schalter und Oberlüftung"],
["EXM25AA01BA03A0", "USV EXM2 250kVA mit Wartung Schalter und Oberlüftung"],
["EXM10AA01CA03A0", "USV EXM2 100kVA mit Wartung Schalter und Kabeleinführung oben"],
["EXM12AA01CA03A0", "USV EXM2 120kVA mit Wartung Schalter und Kabeleinführung oben"],
["EXM16AA01CA03A0", "USV EXM2 160kVA mit Wartung Schalter und Kabeleinführung oben"],
["EXM20AA01CA03A0", "USV EXM2 200kVA mit Wartung Schalter und Kabeleinführung oben"],
["EXM25AA01CA03A0", "USV EXM2 250kVA mit Wartung Schalter und Kabeleinführung oben"],
["EXM10EA01AA03A0", "USV EXM2 100kVA mit Wartung Schalter und Rückspeisung"],
["EXM12EA01AA03A0", "USV EXM2 120kVA mit Wartung Schalter und Rückspeisung"],
["EXM16EA01AA03A0", "USV EXM2 160kVA mit Wartung Schalter und Rückspeisung"],
["EXM20EA01AA03A0", "USV EXM2 200kVA mit Wartung Schalter und Rückspeisung"],
["EXM25EA01AA03A0", "USV EXM2 250kVA mit Wartung Schalter und Rückspeisung"],
["EXM10AA01AC03A0", "USV EXM2 100kVA mit Wartung Schalter und 65kA Widerstandskraft"],
["EXM12AA01AC03A0", "USV EXM2 120kVA mit Wartung Schalter und 65kA Widerstandskraft"],
["EXM16AA01AC03A0", "USV EXM2 160kVA mit Wartung Schalter und 65kA Widerstandskraft"],
["EXM20AA01AC03A0", "USV EXM2 200kVA mit Wartung Schalter und 65kA Widerstandskraft"],
["EXM25AA01AC03A0", "USV EXM2 250kVA mit Wartung Schalter und 65kA Widerstandskraft"],
["EXM10AA01AA13A0", "USV EXM2 100kVA mit Wartung Schalter und Dynamic Online"],
["EXM12AA01AA13A0", "USV EXM2 120kVA mit Wartung Schalter und Dynamic Online"],
["EXM16AA01AA13A0", "USV EXM2 160kVA mit Wartung Schalter und Dynamic Online"],
["EXM20AA01AA13A0", "USV EXM2 200kVA mit Wartung Schalter und Dynamic Online"],
["EXM25AA01AA13A0", "USV EXM2 250kVA mit Wartung Schalter und Dynamic Online"],
["EXM10AA11AA03A0", "USV EXM2 100kVA mit Wartung Schalter und mit IP21"],
["EXM12AA11AA03A0", "USV EXM2 120kVA mit Wartung Schalter und mit IP21"],
["EXM16AA11AA03A0", "USV EXM2 160kVA mit Wartung Schalter und mit IP21"],
["EXM20AA11AA03A0", "USV EXM2 200kVA mit Wartung Schalter und mit IP21"],
["EXM25AA11AA03A0", "USV EXM2 250kVA mit Wartung Schalter und mit IP21"],
["EXM10AA21AA03A0", "USV EXM2 100kVA mit Wartung Schalter und mit IP31"],
["EXM12AA21AA03A0", "USV EXM2 120kVA mit Wartung Schalter und mit IP31"],
["EXM16AA21AA03A0", "USV EXM2 160kVA mit Wartung Schalter und mit IP31"],
["EXM20AA21AA03A0", "USV EXM2 200kVA mit Wartung Schalter und mit IP31"],
["EXM25AA21AA03A0", "USV EXM2 250kVA mit Wartung Schalter und mit IP31"],
["EXM1AAA01AA03A0", "USV EXM2 100 kVA mit Hauptschalter CPSS (80kVA)"],
["EXM1BAA01AA03A0", "USV EXM2 120 kVA mit Hauptschalter CPSS (96kVA)"],
["EXM1CAA01AA03A0", "USV EXM2 160 kVA mit Hauptschalter CPSS (128kVA)"],
["EXM1DAA01AA03A0", "USV EXM2 200 kVA mit Hauptschalter CPSS (160kVA)"],
["EXM1EAA01AA03A0", "USV EXM2 250 kVA mit Hauptschalter CPSS (200kVA"],
["EXM10AA01AA02A0", "USV EXM2 100kVA mit Wartung Schalter + C2 EMV"],
["EXM12AA01AA02A0", "USV EXM2 120kVA mit Wartung Schalter + C2 EMV"],
["EXM16AA01AA02A0", "USV EXM2 160kVA mit Wartung Schalter + C2 EMV"],
["EXM20AA01AA02A0", "USV EXM2 200kVA mit Wartung Schalter + C2 EMV"],
["EXM25AA01AA02A0", "USV EXM2 250kVA mit Wartung Schalter + C2 EMV"],
["EXM10AB01AA03A0", "USV EXM2 100kVA mit Wartung Schalter und Ausgangstransf. JJ"],
["EXM12AB01AA03A0", "USV EXM2 120kVA mit Wartung Schalter und Ausgangstransf. JJ"],
["EXM16AB01AA03A0", "USV EXM2 160kVA mit Wartung Schalter und Ausgangstransf. JJ"],
["EXM20AB01AA03A0", "USV EXM2 200kVA mit Wartung Schalter und Ausgangstransf. JJ"],
["EXM25AB01AA03A0", "USV EXM2 250kVA mit Wartung Schalter und Ausgangstransf. JJ"],
["02010498", "\nGemeinsame Eingangsverbindungsschienen 500k NSW"],
["APMP", "Modulare USV APM+ x50 kVA/kW"],
["MTPD010", "Liebert USV MTP 10 kVA/kW"],
["MTPD015", "Liebert USV MTP 15 kVA/kW"],
["MTPD020", "Liebert USV MTP 20 kVA/kW"],
["MTPD030", "Liebert USV MTP 30 kVA/kW"],
["MTPD040", "Liebert USV MTP 40 kVA/kW"],
["MTPD060", "Liebert USV MTP 60 kVA/kW"],
["MTPD080", "Liebert USV MTP 80 kVA/kW"],
["MTPD100", "Liebert USV MTP 100 kVA/kW"],
["MTPD120", "Liebert USV MTP 120 kVA/kW"],
["MTPD160", "Liebert USV MTP 160 kVA/kW"],
["MTPD200", "Liebert USV MTP 200 kVA/kW"],
["D31-010942-00G", "\nKit zur Überwachung der Batterietemperatur fur MTP 60kVA und 100-200kVA"],
["D43-152124-01G", "\nKit zur Überwachung der Batterietemperatur fur MTP 10-20kVA und 80kVA"],
]);
//---------------------------------//
//ADMINISTRATION
var scriptVer = '1.6.2';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');
var param1 = document.getElementById(scriptId).getAttribute('param1');
var param2 = document.getElementById(scriptId).getAttribute('param2');

Administration(scriptId, scriptVer);
//console.log(`scriptId=${scriptId}; param1=${param1}; param2=${param2}`);

//MAIN
var c1DescMap = new Map();
var referenceNumList = [...document.querySelectorAll('[id^="reference_num"]')];
var descriptionsMap = eval('descriptionsMap = descriptionsMap' + param1); //description map selection based on selected language	
var batteryCodesArray = ["LYU", "LEX", "LEN", "LLE", "LCS", "LHP", "LFA"]; //BATTERY MANUFACTURER'S MARKER
var descriptionsMapUpdated = new Map(descriptionsMap);

//SECTION 1 - UPDATING SELECTED DESCRIPTIONSMAP WITH CODES NOT EXISTING IN IT
referenceNumList.forEach((item) => {
	let id = getIdNumber(item) //item id in C1 DOM
	let elementValue = item.innerHTML.trim(); //product code -> BOM item reference
	let foundElementCounter = 0;
	
	//IF ITEM CODE OR ITS PART IS NOT AVAILABLE IN DESCRIPTIONSMAP, DEFAULT DESCIPTION FROM C1 IS SET AND ADDED TO DESCRIPTIONSMAPUPDATED	
	for (var [keyArr, valueArr] of descriptionsMap) {			
		// if(elementValue.includes(keyArr)){
		if(elementValue.startsWith(keyArr)){
			foundElementCounter++;
			break;
		} 
	}
	
	if(foundElementCounter==0 && elementValue !== ""){
		//TO MAKE ITEM UNIQUE C1DEF+ID IS ADDED
		descriptionsMapUpdated.set("c1def:" + id + ":" + elementValue, "\n" + document.getElementById("description" + id).value) 
	}		
});

//SECTION 2 - SETTING SETC1DESCMAP	
referenceNumList.forEach((item) => {
	//item.value - Salable Item reference		
	let id = getIdNumber(item) //item id in C1 DOM
	let elementValue = item.innerHTML.trim(); //product code -> BOM item reference
	let key = ""; //product code	
	let fieldDescription = document.getElementById("description" + getIdNumber(item).match(/\d+/g)[0])
	let amountDesc = "";		
	let amount = 0;		
	let unitPrice = 1;
	let extUnitPrice = 1;
	let regexp = /[^\d.,-]/g;
	
	//amount of item is calculated by dividing ext price and unit price - because not everybody has column UNITS in C1
	if(document.getElementById("unit_price" + id).tagName == "TD" && document.getElementById("ext_unit_price" + id).tagName == "TD"){
		unitPrice = document.getElementById("unit_price" + id).firstChild.innerHTML.trim().replace(/\./g, '').replace(',', '.').replace('€', '').replace('&nbsp;','');
		
		extUnitPrice = document.getElementById("ext_unit_price" + id).firstChild.innerHTML.trim().replace(/\./g, '').replace(',', '.').replace('€', '').replace('&nbsp;','');
	}
	
	//console.log(`unitPrice = ${unitPrice} | extUnitPrice = ${extUnitPrice}`);

	amount = Math.floor(extUnitPrice / unitPrice);	

	if(elementValue == "" || item.value == "") return;		
	if(amount > 1) amountDesc = " - " + amount + " " + descriptionsMapUpdated.get("jsPcs") 			
				
	//CONFIGURATION CHILD ITEM - FULL CODE ONLY
	if(descriptionsMapUpdated.has(elementValue)) {
		key = elementValue;
	}
	//SALABLE ITEM - FULL CODE ONLY
	else if(descriptionsMapUpdated.has(item.value)) {
		key = item.value;
	}		
	//CONFIGURATION CHILD ITEM NOT EXISTING IN DESCRIPTIONS MAP - FULL CODE ONLY
	else if(descriptionsMapUpdated.has("c1def:" + id + ":" + elementValue)) {
		key = "c1def:" + id + ":" + elementValue;
	}		
	//PARTIAL CODE CHECKING
	else {
		for (var [keyArr, valueArr] of descriptionsMapUpdated) {
			// if (elementValue.includes(keyArr)) {
			if (elementValue.startsWith(keyArr)) {
				key = keyArr
				break;
			}
		}
	}		
	
	let rgxp = new RegExp("^" + key ,"gi");		
	let descriptionValue = document.getElementById(fieldDescription.id).value;
	
	//CONFIGURATIONS
	if(elementValue.match(rgxp)) {			
		//BATTERY CONFIGURATION DESCRIPTION
		if(batteryCodesArray.includes(key)){
			let batAmount = 0;
			let configuration = "";
			let description = descriptionsMapUpdated.get("jsBattery")
			
			if(document.getElementById("quantity"+id) !== null){
				batAmount = document.getElementById("quantity" + id).value;
			}
			
			//j - maximum number of possible strings
			for(var j = 8; j > 0; j--){
				if(batAmount % j === 0 && batAmount / j > 27 &&  batAmount / j < 51){
					configuration = `${j}x ${batAmount / j}x`;
					break;
				}
			}			
			
			description += `\n \u2022 ${descriptionsMapUpdated.get('jsConfiguration')} : ${configuration} ${elementValue.substring(3)}`;				
			description += `\n \u2022 ${descriptionsMapUpdated.get('jsAutonomy')} : kW @ ${descriptionsMapUpdated.get('jsMinutes')}`			
			
			if(descriptionValue === "" && param2 === '1' || param2 === '')
				setC1DescMap(fieldDescription.id, description);							
		}
		//OTHER CONFIGURATIONS
		else if(key != "TBC" && descriptionValue === "" && param2 === '1' || param2 === '')
				setC1DescMap(fieldDescription.id, descriptionsMapUpdated.get(key) + amountDesc);				
	}
	else if(descriptionValue === "" && param2 === '1' || param2 === '')
			setC1DescMap(fieldDescription.id, descriptionsMapUpdated.get(key) + amountDesc);

	//SALABLE ITEMS
	if(rgxp.test(item.value)) {
		setC1DescMap("description" + id, descriptionsMapUpdated.get(key) + amountDesc);
	}				
});	

//POPULATING DESCRIPTION FIELDS	
if(c1DescMap.size > 0){
	console.log("\nPOPULATING DESCRIPTION FIELDS ...");
	c1DescMap.forEach((value, key) => {print(value,key);});		
	ShowMessage("AutoDescription completed!");
}
else {
	ShowMessage("No Description fields affected! Run ExpandAll first!", "red");
}

//CLEANING - removing script from DOM to allow load script if required
$(`#${scriptId}`).remove();	

//-------------------------------------// 
//--- SUPPORTING FUNCTIONS ------------//
//--- AUTHOR: JAKUB OLICHWIER ---------//
//-------------------------------------//
function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

function ShowMessage(message, isScriptInfo = false, action = '', color = '') {
    var messageDiv = document.getElementById('messageDiv');
    var messageSpan = isScriptInfo ? document.getElementById('scriptInfo') : messageDiv.querySelector('.messageTagAlert');

    messageDiv.style.display = 'block';

    if (!messageSpan) {
        messageSpan = document.createElement('span');
        messageSpan.style.display = 'block';
        messageSpan.style.margin = '0';
        messageSpan.style.padding = '0';

        if (isScriptInfo) {
            messageSpan.setAttribute('id', 'scriptInfo');
            messageSpan.style.color = color || 'green';
            messageSpan.style.lineHeight = '20px';
            messageSpan.style.fontSize = '8pt';
            messageSpan.style.fontWeight = 'bold';
            messageSpan.style.textDecoration = 'none';
            messageSpan.style.fontFamily = 'Verdana, Arial, Helvetica, sans-serif';
            messageDiv.prepend(messageSpan);
        } else {
            messageSpan.setAttribute('align', 'left');
            messageSpan.classList.add('messageTagAlert');
            messageDiv.appendChild(messageSpan);
        }
    }

    if (color !== '') {
        messageSpan.style.color = color;
    } else if (!isScriptInfo) {
        messageSpan.removeAttribute('style');
        messageSpan.style.display = 'block';
    }

    if (action === 'add') {
        messageSpan.innerHTML += "<br />" + message;
    } else {
        messageSpan.innerHTML = message;
    }
}

function print(msg, inputElement){
	const event = new Event('input', { 'bubbles': true, 'cancelable': true });
	var textarea;
	
	if(document.getElementById(inputElement) !== null){
		textarea = document.getElementById(inputElement);
	}
	else {
		textarea = document.getElementsByName(inputElement)[0];
	}
	
	textarea.value = msg;
	textarea.onchange(event)
}

//extracts ID number from DOM element
function getIdNumber(inputElement){ 
	let firstDigit = inputElement.id.match(/\d/)
	let index = inputElement.id.indexOf(firstDigit)
		
	return inputElement.id.substring(index, inputElement.id.length)
}

function Administration(id, ver){
	var scriptId = id;
	var scriptVer = ver;
	console.clear();
	console.log(`${scriptId} ver. ${scriptVer} has started.`);
	//ScriptInfo(`Script ${scriptId} ver. ${scriptVer}`);
	
	ShowMessage("");
	ShowMessage(`${scriptId} ver. ${scriptVer}`, true);	
}

function Reload(){
	var nobrElement = document.getElementById('cell_lineitem').querySelector('nobr');
	nobrElement.click();	
}
		
function setC1DescMap(key, value){
	if(c1DescMap.has(key)){
		var tmpValue = c1DescMap.get(key)
		c1DescMap.set(key, tmpValue + value); //if entry exists then it is expanded by next item-description pair
	}
	else {
		c1DescMap.set(key, value); //new entry
	}	
}



// var descriptionsMapEN = new Map([
// ["jsPcs", "pcs."],
// ["jsBattery", "VRLA Battery"],
// ["jsConfiguration", "Configuration"],
// ["jsAutonomy", "Autonomy"],
// ["jsMinutes", "minutes"],
// ["GXT5-2000", "Liebert UPS GXT5 2 kVA/kW"],
// ["GXT5-3000", "Liebert UPS GXT5 3 kVA/kW"],
// ["GXT5-5000", "Liebert UPS GXT5 5 kVA/kW"],
// ["GXT5-6000", "Liebert UPS GXT5 8 kVA/kW"],
// ["GXT5-8000", "Liebert UPS GXT5 8 kVA/kW"],
// ["GXT5-10", "Liebert UPS GXT5 10 kVA/kW"],
// ["ITA210", "Liebert UPS ITA2 UPS 10 kVA/kW"],
// ["ITA215", "Liebert UPS ITA2 UPS 15 kVA/kW"],
// ["ITA220", "Liebert UPS ITA2 20 kVA/kW"],
// ["ITA230", "Liebert UPS ITA2 UPS 30 kVA/kW"],
// ["ITA240", "Liebert UPS ITA2 40 kVA/kW"],
// ["EXS10", "Liebert UPS EXS 10 kVA/kW"],
// ["EXS15", "Liebert UPS EXS 15 kVA/kW"],
// ["EXS20", "Liebert UPS EXS 20 kVA/kW"],
// ["EXS30", "Liebert UPS EXS 30 kVA/kW"],
// ["EXS40", "Liebert UPS EXS 40 kVA/kW"],
// ["EXS60", "Liebert UPS EXS 60 kVA/kW"],
// ["EXS80", "Liebert UPS EXS 80 kVA/kW"],
// ["EXM10", "Liebert UPS EXM2 100 kVA/kW"],
// ["EXM12", "Liebert UPS EXM2 120 kVA/kW"],
// ["EXM16", "Liebert UPS EXM2 160 kVA/kW"],
// ["EXM20", "Liebert UPS EXM2 200 kVA/kW"],
// ["EXM25", "Liebert UPS EXM2 250 kVA/kW"],
// ["LI8E10", "Liebert UPS EXL S1 100 kVA/kW"],
// ["LI8E12", "Liebert UPS EXL S1 120 kVA/kW"],
// ["LI8E16", "Liebert UPS EXL S1 160 kVA/kW"],
// ["LI8E20", "Liebert UPS EXL S1 200 kVA/kW"],
// ["LI8E30", "Liebert UPS EXL S1 300 kVA/kW"],
// ["LI8E40", "Liebert UPS EXL S1 400 kVA/kW"],
// ["LI8C40", "Liebert UPS EXL S1 400 kVA/kW"],
// ["LI8E50", "Liebert UPS EXL S1 500 kVA/kW"],
// ["LI8E61", "Liebert UPS EXL S1 600 kVA/kW"],
// ["LI8E80", "Liebert UPS EXL S1 800 kVA/kW"],
// ["LI8E1B", "Liebert UPS EXL S1 1200 kVA/kW"],
// ["APM0300", "Liebert UPS APM 30 kVA/kW modular"],
// ["APM0600", "Liebert Modular UPS APM Modular UPS 60 kVA/kW"],
// ["APM0900", "Liebert Modular UPS APM Modular UPS 90 kVA/kW"],
// ["APM1200", "Liebert Modular UPS APM 120 kVA/kW"],
// ["APM1500", "Liebert Modular UPS APM 150 kVA/kW"],
// ["APM0301", "Liebert Modular UPS APM 30+30 kVA/kW"],
// ["APM0601", "Liebert Modular UPS APM 60+30 kVA/kW"],
// ["APM0901", "Liebert Modular UPS APM Modular UPS 90+30 kVA/kW"],
// ["APM1201", "Liebert Modular UPS APM 120+30 kVA/kW"],
// ["APMP05", "Modular UPS APM+250 1x50 kVA/kW"],
// ["APMP10", "Modular UPS APM+250 2x50 kVA/kW"],
// ["APMP15", "Modular UPS APM+250 3x50 kVA/kW"],
// ["APMP20", "Modular UPS APM+250 4x50 kVA/kW"],
// ["APMP25", "Modular UPS APM+250 5x50 kVA/kW"],
// ["APMZ", "APM2 x60 kVA/kW installed"],
// ["APMZ60M1ADD", "\nAPM2 60kW redundant module"],
// ["ACPAPMZF4FULLMSEA", "\nAPM2 F4 Full/Maint SW SEAWORTHY"],
// ["ACPAPMZF3SEA", "\nAPM2 F3 SEAWORTHY"],
// ["02313502", "APM2 30kVA power module (with packaging)"],
// ["TFG", "Modular UPS TRINERGY CUBE kVA, x CORE kVA/kW"],
// ["ACPAPMZF3BETFK", "Top air blowing for APM2"],
// ["APMMOBACAB", "\nModular battery cabinet for APM"],
// ["APMBATMODF10", "\n30x9Ah battery module"],
// ["IS-UNITY-SNMP", "\nSNMP card"],
// ["IS-UNITY-DP", "\nSNMP+MODBUS/BACNET card"],
// ["RDU101", "\nSNMP card"],
// ["02312277", "\nAdditional slot for communication cards"],
// ["IS-RELAY", "\nRelay card"],
// ["10H32447P", "\nParallel operation kit"],
// ["10B14266G8", "\nTop Cable Entry - allows top connection for UPS 160-500 kVA"],
// ["10H63289KE", "\nSingle-phase output"],
// ["023500U7", "\n-Temperature compensation sensor for batteries"],
// ["02350174", "\nBattery temperature monitoring kit"],
// ["10H32479P01", "\nTemperature compensation sensor for battery"],
// ["LPS-B-OKS-FEE", "Annual maintanance including battery measurement"],
// ["VB60A1BBBY30000", "\nVRLA BATTERY CABINET - 10Y: 32x25Ah TYPE A3 - 3 WIRES"],
// ["VB60A1DBBY30000", "\nVRLA BATTERY CABINET - 10Y: 40x25Ah TYPE A3 - 3 WIRES"],
// ["VB20A4BAAC30000", "\nVRLA BATTERY CABINET - 5Y: 4x32x9Ah TYPE A3 - 3 WIRES"],
// ["VB60A4BAAC30000", "\nVRLA BATTERY CABINET - 10Y: 4x32x9Ah TYPE A3 - 3 WIRES"],
// ["VB60A1BCAL30000", "\nVRLA BATTERY CABINET - 10Y: 32x35Ah TYPE A3 - 3 WIRES"],
// ["VB60A1DCAL30000", "\nVRLA BATTERY CABINET - 10Y: 40x35Ah TYPE A3 - 3 WIRES"],
// ["VB60A1DDAL30000", "\nVRLA BATTERY CABINET - 10Y: 40X55AH TYPE A3 - 3 WIRES"],
// ["VB60K1DEAL30000", "\nVRLA BATTERY CABINET - 10Y: 40X82AH TYPE K - 3 WIRES"],
// ["VB10A0ZZZZ30000", "\nEMPTY VRLA BATTERY CABINET TYPE A3 - 3 WIRES"],
// ["VB10K0ZZZZ30000", "\nEMPTY VRLA BATTERY CABINET TYPE K - 3 WIRES"],
// ["VB10I0ZZZZ30000", "\nEMPTY VRLA BATTERY CABINET TYPE I - 3 WIRES"],
// ["VB60A1BBBY35000", "\nVRLA BATTERY CABINET-10Y:32x25Ah-TYPE-A3-3 WIRES"],
// ["VB60A1DBBY35000", "\nVRLA BATTERY CABINET-10Y:40x25Ah-TYPE-A3-3 WIRES"],
// ["VB20A4BAAC35000", "\nVRLA BATTERY CABINET-5Y:4x32x9Ah-TYPE-A3-3 WIRES"],
// ["VB60A4BAAC35000", "\nVRLA BATTERY CABINET-10Y:4x32x9Ah-TYPE-A3-3 WIRES"],
// ["VB60A1BCAL35000", "\nVRLA BATTERY CABINET-10Y:32x35Ah-TYPE-A3-3 WIRES"],
// ["VB60A1DCAL35000", "\nVRLA BATTERY CABINET-10Y:40x35Ah-TYPE-A3-3 WIRES"],
// ["VB60A1DDAL35000", "\nVRLA BATTERY CABINET-10Y:40X55AH-TYPE-A3-3 WIRES"],
// ["VB60K1DEAL35000", "\nVRLA BATTERY CABINET-10Y:40x82AH-TYPE-K-3 WIRES"],
// ["VB60A1BCAL20000", "\nVRLA BATTERY CABINET-10Y: 32x35Ah TYPE A3 - 2 WIRES"],
// ["VB60A1DCAL20000", "\nVRLA BATTERY CABINET-10Y: 40x35Ah TYPE A3 - 2 WIRES"],
// ["VB60A1DDAL20000", "\nVRLA BATTERY CABINET-10Y: 40X55AH TYPE A3 - 2 WIRES"],
// ["VB60K1DEAL20000", "\nVRLA BATTERY CABINET-10Y: 40X82AH TYPE K - 2 WIRES"],
// ["VB10A0ZZZZ20000", "\nEMPTY VRLA BATTERY CABINET TYPE A3 - 2 WIRES"],
// ["VB10K0ZZZZ20000", "\nEMPTY VRLA BATTERY CABINET TYPE K - 2 WIRES"],
// ["VB10I0ZZZZ20000", "\nEMPTY VRLA BATTERY CABINET TYPE I - 2 WIRES"],
// ["VB60A1BCAL25000", "\nVRLA BATTERY CABINET-10Y:32x35Ah-TYPE-A3-2 WIRES"],
// ["VB60A1DCAL25000", "\nVRLA BATTERY CABINET-10Y:40x35Ah-TYPE-A3-2 WIRES"],
// ["VB60A1DDAL25000", "\nVRLA BATTERY CAB 5 MIN-10Y:40X55AH-TYPE-A3-2 WIRES"],
// ["VB60K1DEAL25000", "\nVRLA BATTERY CABINET-10Y:40x82AH-TYPE-K-2 WIRES"],
// ["LIBTP160", "\nLi-Ion VISION battery cabinet - 8 MOD X 100AH"],
// ["LIBTP160S", "\nLi-Ion VISION battery cabinet - 8 MOD X 100AH - Master BMS"],
// ["LIBHPLP1160S-FM", "\nLi-Ion HPL-P1 battery cabinet - 10 MOD x 100Ah"],
// ["SN-TH", "\nModule with single temperature and humidity sensor."],
// ["04113255", "\nParallel operation set"],
// ["10H46934P010", "\n10m parallel operation kit"],
// ["02010026", "\nPOD module"],
// ["02313004", "\nPOD module"],
// ["02010024", "\n2U 16x9Ah battery module"],
// ["0235A02J", "\n3U 16x9Ah battery module"],
// ["LIBSG128S", "Li-Ion battery 128S"],
// ["LIBSG136S", "Li-Ion 136S battery"],
// ["LIBTP200", "Li-Ion 10X100AH battery"],
// ["WTCORE-TC-X", "\nFactory witness test for CORE"],
// ["WT80-EXL-X", "\nFactory witness test for EXL"],
// ["WTEXM2-X", "\nFactory witness test for EXM2"],
// ["WT-APMP250-X", "\nFactory witness test for APM250"],
// ["WT-APMP500-X", "\nFactory witness test for APM500"],
// ["GXT5-EBC48VRT2UE", "\n2U battery module"],
// ["GXT5-EBC192VRT3U", "\n3U battery module"],
// ["GXT5-EBC72VRT2UE", "\nBattery module 3U"],
// ["ITA-BCI0020K02L2", "\nConnection cables between two battery modules"],
// ["ITA-BCI0020K02L3", "\nUPS-Battery Connection Cable"],
// ["00B46158PEXS4", "\nParallel operation cable (4m)"],
// ["UF-RMKIT2438", "\nRack slides"],
// ["RMKIT18-32", "\nRack slides"],
// ["SU56731AB000AA0", "External monitoring panel"],
// ["10B46212P1D12", "\nCable for external monitoring panel"],
// ["RUPS-WE3-006", "\nrups-we3-006- warranty extension up to 5 years for"],
// ["RUPS-PE5-006", "\nExtension of warranty up to 5 years for batteries"],
// ["LPL-TRN-DEL", "\nTransport"],
// ["LKL-TRN-DEL", "\nTransport"],
// ["PS-ACP-ST", "\nStartup"],
// ["Start-UP", "\nStartup"],
// ["PS-ACP-LI-ON-STARTUP", "\nLi-Ion battery startup"],
// ["PS-ACP-TR", "\nQuickstart Course"],
// ["PS-PROJ-MNGMT-BASIC", "\nProject coordination"],
// ["LYU", "BAT"],
// ["LEX", "BAT"],
// ["LEN", "BAT"],
// ["LLE", "BAT"],
// ["LCS", "BAT"],
// ["LFA", "BAT"],
// ["LHP", "BAT"],
// ["10B14842GPK4", "\nBATTERY SHELF KIT FOR 4x40x9Ah INTERNAL BATTERY for EXS 30-40kVA"],
// ["10B14822G5SN", "\nSeaworthy packing for Monolitic 80-eXL / EXL 600-800kVA"],
// ["APMZ3004AAAA00", "APM2 30kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ6004AAAA00", "APM2 60kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ9004AAAA00", "APM2 90kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ1204AAAA00", "APM2 120kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ3004EAAA00", "APM2 30kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ6004EAAA00", "APM2 60kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ9004EAAA00", "APM2 90kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ1204EAAA00", "APM2 120kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ3004EAHA00", "APM2 30kVA installed, No redundancy, Maint SW, No internal batteries, with withstand 65kA"],
// ["APMZ6004EAHA00", "APM2 60kVA installed, No redundancy, Maint SW, No internal batteries,  with withstand 65kA"],
// ["APMZ9004EAHA00", "APM2 90kVA installed, No redundancy, Maint SW, No internal batteries, with withstand 65kA"],
// ["APMZ1204EAHA00", "APM2 120kVA installed, No redundancy, Maint SW, No internal batteries, with withstand 65kA"],
// ["APMZ3004EAAC00", "APM2 30kVA installed, No redundancy, Maint SW, No internal batteries, with top fan kit"],
// ["APMZ6004EAAC00", "APM2 60kVA installed, No redundancy, Maint SW, No internal batteries, with top fan kit"],
// ["APMZ9004EAAC00", "APM2 90kVA installed, No redundancy, Maint SW, No internal batteries, with top fan kit"],
// ["APMZ1204EAAC00", "APM2 120kVA installed, No redundancy, Maint SW, No internal batteries, with top fan kit"],
// ["APMZ3001AAAA00", "APM2 30kVA installed compact, No redundancy, Maint SW"],
// ["APMZ6001AAAA00", "APM2 60kVA installed compact, No redundancy, Maint SW, No internal Batt"],
// ["APMZ9001AAAA00", "APM2 90kVA installed compact, No redundancy, Maint SW, No internal Batt"],
// ["APMZ1201AAAA00", "APM2 120kVA installed compact, No redundancy, Maint SW, No internal Batt"],
// ["APMZ3001AACA00", "APM2 30kVA installed compact, No redundancy, Maint SW, No internal Batt, with withstand 65kA"],
// ["APMZ6001AACA00", "APM2 60kVA installed compact, No redundancy, Maint SW, No internal Batt, with withstand 65kA"],
// ["APMZ9001AACA00", "APM2 90kVA installed compact, No redundancy, Maint SW, No internal Batt, with withstand 65kA"],
// ["APMZ1201AACA00", "APM2 120kVA installed compact, No redundancy, Maint SW, No internal Batt, with withstand 65kA"],
// ["APMZ3001AAAB00", "APM2 30kVA installed compact, No redundancy, Maint SW, No internal Batt, with top fan kit"],
// ["APMZ6001AAAB00", "APM2 60kVA installed compact, No redundancy, Maint SW, No internal Batt, with top fan kit"],
// ["APMZ9001AAAB00", "APM2 90kVA installed compact, No redundancy, Maint SW, No internal Batt, with top fan kit"],
// ["APMZ1201AAAB00", "APM2 120kVA installed compact, No redundancy, Maint SW, No internal Batt, with top fan kit"],
// ["APMZ3004ABAA00", "APM2 30kVA installed, No redundancy, Maint SW, No internal batteries, IP21"],
// ["APMZ6004ABAA00", "APM2 60kVA installed, No redundancy, Maint SW, No internal batteries, IP21"],
// ["APMZ9004ABAA00", "APM2 90kVA installed, No redundancy, Maint SW, No internal batteries, IP21"],
// ["APMZ1204ABAA00", "APM2 120kVA installed, No redundancy, Maint SW, No internal batteries, IP21"],
// ["APMZ3004EGAA00", "APM2 30kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA, IP21"],
// ["APMZ6004EGAA00", "APM2 60kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA, IP21"],
// ["APMZ9004EGAA00", "APM2 90kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA, IP21"],
// ["APMZ1204EGAA00", "APM2 120kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA, IP21"],
// ["APMZ3004AAAD00", "APM2 30kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ6004AAAD00", "APM2 60kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ9004AAAD00", "APM2 90kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ1204AAAD00", "APM2 120kVA installed, No redundancy, Maint SW, No internal batteries"],
// ["APMZ3004EAAG00", "APM2 30kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ6004EAAG00", "APM2 60kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ9004EAAG00", "APM2 90kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["APMZ1204EAAG00", "APM2 120kVA installed, No redundancy, Maint SW, Internal Batt, 4 Strings VRLA"],
// ["LPS-B-OX-FEE", "Annual service inspection including battery measurement"],
// ["PS-ACP-TR-QSTART-MS", "\nQuickstart Course"],
// ["EXM10AA01AA03A0", "EXM2 100kVA with maint. switch"],
// ["EXM10BA01AA03A0", "EXM2 100kVA with full switch"],
// ["EXM12AA01AA03A0", "EXM2 120kVA with maint. switch"],
// ["EXM12BA01AA03A0", "EXM2 120kVA with full switch"],
// ["EXM16AA01AA03A0", "EXM2 160kVA with maint. switch"],
// ["EXM16BA01AA03A0", "EXM2 160kVA with full switch"],
// ["EXM20AA01AA03A0", "EXM2 200kVA with maint. switch"],
// ["EXM20BA01AA03A0", "EXM2 200kVA with full switch"],
// ["EXM25AA01AA03A0", "EXM2 250kVA with maint. switch"],
// ["EXM25BA01AA03A0", "EXM2 250kVA with full switch"],
// ["EXM10AA01BA03A0", "EXM2 100kVA with maint. switch and top ventilation"],
// ["EXM12AA01BA03A0", "EXM2 120kVA with maint. switch and top ventilation"],
// ["EXM16AA01BA03A0", "EXM2 160kVA with maint. switch and top ventilation"],
// ["EXM20AA01BA03A0", "EXM2 200kVA with maint. switch and top ventilation"],
// ["EXM25AA01BA03A0", "EXM2 250kVA with maint. switch and top ventilation"],
// ["EXM10AA01CA03A0", "EXM2 100kVA with maint. switch and top cable entry"],
// ["EXM12AA01CA03A0", "EXM2 120kVA with maint. switch and top cable entry"],
// ["EXM16AA01CA03A0", "EXM2 160kVA with maint. switch and top cable entry"],
// ["EXM20AA01CA03A0", "EXM2 200kVA with maint. switch and top cable entry"],
// ["EXM25AA01CA03A0", "EXM2 250kVA with maint. switch and top cable entry"],
// ["EXM10EA01AA03A0", "EXM2 100kVA with maint. switch and backfeed"],
// ["EXM12EA01AA03A0", "EXM2 120kVA with maint. switch and backfeed"],
// ["EXM16EA01AA03A0", "EXM2 160kVA with maint. switch and backfeed"],
// ["EXM20EA01AA03A0", "EXM2 200kVA with maint. switch and backfeed"],
// ["EXM25EA01AA03A0", "EXM2 250kVA with maint. switch and backfeed"],
// ["EXM10AA01AC03A0", "EXM2 100kVA with maint. switch and withstand 65kA"],
// ["EXM12AA01AC03A0", "EXM2 120kVA with maint. switch and withstand 65kA"],
// ["EXM16AA01AC03A0", "EXM2 160kVA with maint. switch and withstand 65kA"],
// ["EXM20AA01AC03A0", "EXM2 200kVA with maint. switch and withstand 65kA"],
// ["EXM25AA01AC03A0", "EXM2 250kVA with maint. switch and withstand 65kA"],
// ["EXM10AA01AA13A0", "EXM2 100kVA with maint. Switch and Dynamic Online"],
// ["EXM12AA01AA13A0", "EXM2 120kVA with maint. switch and Dynamic Online"],
// ["EXM16AA01AA13A0", "EXM2 160kVA with maint. switch and Dynamic Online"],
// ["EXM20AA01AA13A0", "EXM2 200kVA with maint. switch and Dynamic Online"],
// ["EXM25AA01AA13A0", "EXM2 250kVA with maint. switch and Dynamic Online"],
// ["EXM10AA11AA03A0", "EXM2 100kVA with maint. switch and with IP21"],
// ["EXM12AA11AA03A0", "EXM2 120kVA with maint. switch and with IP21"],
// ["EXM16AA11AA03A0", "EXM2 160kVA with maint. switch and with IP21"],
// ["EXM20AA11AA03A0", "EXM2 200kVA with maint. switch and with IP21"],
// ["EXM25AA11AA03A0", "EXM2 250kVA with maint. switch and with IP21"],
// ["EXM10AA21AA03A0", "EXM2 100kVA with maint. switch and with IP31"],
// ["EXM12AA21AA03A0", "EXM2 120kVA with maint. switch and with IP31"],
// ["EXM16AA21AA03A0", "EXM2 160kVA with maint. switch and with IP31"],
// ["EXM20AA21AA03A0", "EXM2 200kVA with maint. switch and with IP31"],
// ["EXM25AA21AA03A0", "EXM2 250kVA with maint. switch and with IP31"],
// ["EXM1AAA01AA03A0", "EXM2 100 kVA with maint.switch CPSS (80kVA)"],
// ["EXM1BAA01AA03A0", "EXM2 120 kVA with maint.switch CPSS (96kVA)"],
// ["EXM1CAA01AA03A0", "EXM2 160 kVA with maint.switch CPSS (128kVA)"],
// ["EXM1DAA01AA03A0", "EXM2 200 kVA with maint.switch CPSS (160kVA)"],
// ["EXM1EAA01AA03A0", "EXM2 250 kVA with maint.switch CPSS (200kVA"],
// ["EXM10AA01AA02A0", "EXM2 100kVA with maint. Switch + C2 EMC"],
// ["EXM12AA01AA02A0", "EXM2 120kVA with maint. Switch + C2 EMC"],
// ["EXM16AA01AA02A0", "EXM2 160kVA with maint. Switch + C2 EMC"],
// ["EXM20AA01AA02A0", "EXM2 200kVA with maint. Switch + C2 EMC"],
// ["EXM25AA01AA02A0", "EXM2 250kVA with maint. Switch + C2 EMC"],
// ["EXM10AB01AA03A0", "EXM2 100kVA with maint. Switch & Otput transf. YY"],
// ["EXM12AB01AA03A0", "EXM2 120kVA with maint. Switch & Otput transf. YY"],
// ["EXM16AB01AA03A0", "EXM2 160kVA with maint. Switch & Otput transf. YY"],
// ["EXM20AB01AA03A0", "EXM2 200kVA with maint. Switch & Otput transf. YY"],
// ["EXM25AB01AA03A0", "EXM2 250kVA with maint. Switch & Otput transf. YY"],
// ["10B20002G6", "PSU KIT BOX"],
// ["10B20002G7", "CONTROL BLOCK BOX"],
// ["02010498", "\nCommon input link bars 500k NSW"],
// ["APMP", "Modular UPS APM+ x50 kVA/kW"],
// ["MTPD010", "Liebert UPS MTP 10 kVA/kW"],
// ["MTPD015", "Liebert UPS MTP 15 kVA/kW"],
// ["MTPD020", "Liebert UPS MTP 20 kVA/kW"],
// ["MTPD030", "Liebert UPS MTP 30 kVA/kW"],
// ["MTPD040", "Liebert UPS MTP 40 kVA/kW"],
// ["MTPD060", "Liebert UPS MTP 60 kVA/kW"],
// ["MTPD080", "Liebert UPS MTP 80 kVA/kW"],
// ["MTPD100", "Liebert UPS MTP 100 kVA/kW"],
// ["MTPD120", "Liebert UPS MTP 120 kVA/kW"],
// ["MTPD160", "Liebert UPS MTP 160 kVA/kW"],
// ["MTPD200", "Liebert UPS MTP 200 kVA/kW"],
// ["D31-010942-00G", "\nBattery temp kit for MTP 60kVA and 100-200kVA"],
// ["D43-152124-01G", "\nBattery temp kit for MTP 10-20kVA and 80kVA"],
// ["PS-ACP-ST", "\nStartup"],
// ["PS-ACP-ST-APMPLUS-150", "\nStartup"],
// ["PS-ACP-ST-EXM2-100", "\nStartup"],
// ["PS-ACP-ST-EXM2-120-160", "\nStartup"],
// ["PS-ACP-ST-EXM2-120-160", "\nStartup"],
// ["PS-THM-STARTUP", "\nStartup"],
// ["PS-ACP-TR", "\nTraining"],
// ["PS-ACP-TR-QSTART-MS", "\nTraining"],
// ]);

