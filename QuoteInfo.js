//-------------------------------// 
//--- SCRIPT NAME: QUOTE INFO ---//
//--- AUTHOR: JAKUB OLICHWIER ---//

//ADMINISTRATION
var scriptVer = '1.3.0';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');
var param1 = document.getElementById(scriptId).getAttribute('param1');

Administration(scriptId, scriptVer);

//MAIN
var infoMapPB_PL = new Map();
var infoMapPB_EN = new Map();
var infoMapCEE_EN = new Map();
//Front Page Introduction	
var introductionTxtPB_PL = `Szanowni Państwo,

Dziękujemy za przesłane zapytanie ofertowe. W załączeniu nasza oferta.

Mamy nadzieję, że nasza propozycja spotkała się z Państwa zainteresowaniem. W przypadku konieczności udzielenia dodatkowych wyjaśnień miło nam będzie przedstawić Państwu szczegółowy komentarz na temat warunków handlowych oraz technicznych rozwiązań naszej firmy.

Uznając komercyjny charakter każdej procedury przetargowej, staraliśmy się odpowiedzieć na Państwa potrzeby w sposób jak najbardziej konkurencyjny i jak najlepiej spełniający kryteria zapytania.

W przypadku uwag do przedstawionej przez nas oferty, prosimy o kontakt, postaramy się dostosować naszą propozycję do Państwa wymagań.

Podstawa opracowania: Zapytanie ofertowe

Przedmiot i zakres opracowania ofertowego:
Przedmiotem opracowania jest oferta na dostawę systemu zasilania gwarantowanego.

Opracowanie obejmuje: określenie kosztów zakupu, warunków dostawy i uruchomienia.

Vertiv Poland Sp. z o.o. nie bierze odpowiedzialności za ofertę złożoną na podstawie niekompletnych bądź błędnych danych przekazanych przez klienta.
`;

var introductionTxtPB_EN = `Dear Sirs,

Thank you for your inquiry. Please find attached our quotation.
We trust that our offer will meet your expectations. In case of need for additional explanations we will be delighted to
provide you with detailed comments and technical solutions from our company.
Please feel free to contact us in case you will have any comments. We will try to adjust our offer to your requirements.

Vertiv Poland Sp. z o.o. do not take responsibility for quotation issued based on incomplete or wrong data given by the customer.
`;

infoMapPB_PL.set('intro', introductionTxtPB_PL);
infoMapPB_EN.set('intro', introductionTxtPB_EN);
infoMapCEE_EN.set('intro', introductionTxtPB_EN);


//Dane kontaktowe
var contactTxtPB_PL = `Account Manager | Central Eastern Europe

`;
var contactTxtPB_EN = `Account Manager | Central Eastern Europe

`;
var contactTxtCEE_EN = `
`;

infoMapPB_PL.set('contact', contactTxtPB_PL);
infoMapPB_EN.set('contact', contactTxtPB_EN);
infoMapCEE_EN.set('contact', contactTxtCEE_EN);

//Załącznik B:
var warunkiTxtPB_PL =`Termin płatności: zaliczka 30% przy zamówieniu, pozostała część 30 dni od daty wystawienia faktury, pod warunkiem zabezpieczenia w postaci gwarancji bankowej lub ubezpieczeniowej.

Warunki płatności mogą ulec zmianie po weryfikacji kondycji finansowej kontrahenta.

Waluta płatności: Walutą fakturowania jest PLN. Wartość zamówienia wyrażona w walucie EUR, zostanie przeliczona na PLN po ogłoszonym przez NBP kursie średnim z dnia złożenia przez klienta zamówienia.

Vertiv Poland Sp. z o.o. zobowiązuje się do dostawy urządzeń w terminie uzgodnionym w zamówieniu lub umowie.

W przypadku gdy termin odbioru urządzeń nie zostanie dotrzymany z przyczyn leżących po stronie kupującego Spółka Vertiv Poland  będzie miała prawo pozostawić urządzenia w magazynie CAT LC POLSKA, Ożarowska 40/42, Hala D, 05-850 Duchnice do dyspozycji nabywcy i na jego koszt. Jednocześnie zostanie wystawiona dla nabywcy faktura sprzedaży.

Rabat: Ceny po rabacie, netto

Inne warunki: Do uzgodnienia z Dyrektorem Zarządzającym Vertiv Poland Sp. z o.o.

WARUNKI DOSTAWY 

Oferta zawiera cenę transportu z posadowieniem na miejscu przeznaczenia (poziom „0”, bez utrudnień). Klient zapewnia płaską, wolną od przeszkód drogę transportową na miejsce przeznaczenia. W przypadku przesunięcia terminu dostawy z winy Zamawiającego naliczona zostanie opłata za magazynowanie sprzętu.

WARUNKI URUCHOMIENIA

Oferta zawiera:
- przekazanie wytycznych Producenta dla potrzeb przygotowania instalacji elektrycznej AC, DC, sygnałowej, monitoringu oraz czujnika temperatury,
- podłączenie do przygotowanych przez Zamawiającego instalacji sygnałowej oraz dla czujników temperatury,
- uruchomienie systemu w terminach uzgodnionych w harmonogramie prac; wycena zawiera koszt wykonania uruchomienia w dniach roboczych, w godzinach pracy 8-17 (tylko trójfazowe zasilacze UPS)
- jednorazowe szkolenie z zakresu bezpiecznej obsługi systemu w języku polskim w dniu uruchomienia systemu (tylko trójfazowe zasilacze UPS)

W przypadku konieczności kolejnych wyjazdów szkoleniowych, dodatkowe koszty ponosi Zamawiający.

Oferta nie zawiera - chyba, że w zestawieniu ofertowym wyszczególniono inaczej:
- zapewnienia odpowiednich warunków dla dostarczonych urządzeń (czystość pomieszczeń, warunki temperaturowe, zabezpieczenie fizyczne pomieszczeń), w przypadku niezapewnienia przez Zamawiającego odpowiednich warunków do dostawy urządzeń, Vertiv zastrzega sobie prawo do odstąpienia od realizacji dostawy do czasu przygotowania pomieszczeń; całkowite koszty kolejnej dostawy obciążają Zamawiającego,
- kosztów wykonania tras i instalacji kablowych DC,
- kosztów wykonania, dostawy i podłączenia zewnętrznego bypassu serwisowego,
- kosztów wykonania tras i instalacji kablowych (przepustów i uszczelnień) AC,
- koszty wykonania i dostawy konstrukcji wsporczych pod UPS i baterie,
- kosztów wykonania instalacji komunikacyjnej, sygnałowej oraz dla czujników temperatury,
- kosztów wykonania wszelkich połączeń wyrównawczych urządzeń jeśli bednarka nie znajduje się w pomieszczeniu z UPS, konstrukcji wsporczych,
- kosztów związanych z obecnością Kierownika Budowy z odpowiednimi uprawnieniami,
- dodatkowych opłat związanych z obecnością na budowie, tj. partycypacja w kosztach wywozu śmieci, zużycia energii elektrycznych, wody, ekip sprzątających, itp.,
- kosztów wynajmu obciążnic, opłat za energię elektryczną na potrzeby testów oraz obecności inżynierów Vertiv 
w trakcie trwania testów.
- uruchomienia jednofazowych zasilaczy UPS

SUROWIEC I USPRAWIEDLIWIONE OPÓŹNIENIE W WYKONANIU ZOBOWIĄZANIA

W przypadku wzrostu cen towarów ( miedzi, stali, betonu, ołowiu itp.) o 3% lub więcej w okresie pomiędzy Datą wyceny a datą zamówienia, Sprzedający jest uprawniony do odpowiedniego dostosowania ceny produktów, których ten wzrost dotyczy. Jako punkt odniesienia dla określenia wzrostu cen stosuje się indeks LME (London Metal Exchange – Londyńska Giełda Metali) lub miesięczne indeksy cen CRU w odniesieniu do odpowiednich użytych materiałów pochodzących z najbardziej adekwatnego rynku”.

Ponadto Sprzedający nie ponosi odpowiedzialności za opóźnienia w wykonaniu lub za niewykonanie z powodu niedostępności lub opóźnień w transporcie braku dostępności lub opóźnień w dostawie materiałów, komponentów, części lub pracy wymaganych do zaprojektowania i/lub wyprodukowania Towarów, Oprogramowania lub realizacji przez Sprzedającego na mocy niniejszej umowy; niedotrzymania zobowiązań przez dostawców; nieprzewidziane okoliczności, działania lub zaniechania Kupującego lub jakiekolwiek zdarzenia lub przyczyny pozostające poza uzasadnioną kontrolą Sprzedającego. Dostawy lub inne działania mogą zostać zawieszone na odpowiedni okres lub anulowane przez Sprzedającego pod warunkiem zawiadomienia Kupującego w przypadku wystąpienia którejkolwiek z powyższych sytuacji, ale saldo niniejszej Wyceny pozostanie niezmienione w wyniku powyższych okoliczności. Jeśli Sprzedający stwierdzi, że jego zdolność do zaspokojenia całkowitego popytu na Towary, części i/lub Oprogramowanie albo do uzyskania materiałów używanych bezpośrednio lub pośrednio do produkcji Towarów, Części i/lub Oprogramowania jest utrudniona, ograniczona lub niemożliwa do zrealizowania z przyczyn określonych w niniejszym zapisie, Sprzedający może opóźnić lub anulować wykonanie, dokonać sprawiedliwej korekty ceny Sprzedającego za Towary, Części, i/lub Oprogramowania, i/lub rozdzielić dostępne dostawy Towarów, Części, Oprogramowania, i/lub takiego materiału (bez obowiązku nabycia innych dostaw takich Towarów, Części, oprogramowania lub materiału) pomiędzy swoich nabywców na takiej podstawie, jaką Sprzedający uzna za słuszną, bez ponoszenia odpowiedzialności za jakiekolwiek niepowodzenie realizacji, które może z tego wynikać.

KLAUZULA DOTYCZĄCA SANKCJI

A. Zgodnie z Rozporządzeniem 833/2014, w zakresie w jakim znajduje ono zastosowanie, Kupujący nie będzie sprzedawał, eksportował ani reeksportował, bezpośrednio lub pośrednio, do Federacji Rosyjskiej lub do użytku w Federacji Rosyjskiej żadnych towarów dostarczonych na podstawie lub w związku z niniejszą Ofertą/Umową, które wchodzą w zakres art. 12g Rozporządzenia Rady (UE) nr 833/2014. 
B. Kupujący dołoży wszelkich możliwych starań, aby cel określony w punkcie (A) nie został udaremniony przez osoby trzecie znajdujące się na dalszych etapach łańcucha handlowego, w tym przez  dalszych ewentualnych odsprzedawców. 
C. Kupujący ustanowi i będzie utrzymywał odpowiednio działający mechanizm monitorowania w celu wykrywania zachowań osób trzecich na dalszych etapach łańcucha handlowego, w tym ewentualnych odsprzedawców, które mogłyby udaremnić cel określony w punkcie (A). 
 
- Każde naruszenie ustępów (A), (B) lub (C) będzie stanowić istotne naruszenie istotnego elementu niniejszej Oferty/Umowy, a Sprzedający będzie uprawniony do dochodzenia odpowiednich środków zaradczych, w tym między innymi do: (i) rozwiązania niniejszej Umowy oraz (ii) odszkodowania do łącznej wysokości niniejszej Oferty/Umowy.
 
D. Kupujący niezwłocznie poinformuje Sprzedającego o jakichkolwiek problemach w stosowaniu punktów (A), (B) lub (C), w tym o jakichkolwiek istotnych działaniach osób trzecich, które mogłyby wpłynąć na stosowanie punktu (A). Kupujący udostępni Sprzedającemu wszelkie informacje dotyczące przestrzegania zobowiązań wynikających z ustępów (A), (B) i (C) w terminie dwóch tygodni od zażądania takich informacji.
`;

var warunkiTxtPB_EN =`Payment deadline: advance payment of 30% on the order, the remaining part is 30 days from the date of invoice, provided it is secured by a bank or insurance guarantee.

Payment terms may change after verification of the contractor's financial condition.

Vertiv Poland Sp. z o.o. undertakes to deliver the equipment within the time agreed in the offer / order / agreement.
If the date of collection of devices is not kept due to reasons attributable to the buyer, Vertiv Poland Sp. z o.o.  will have the right to leave the equipment in the CAT LC POLSKA warehouse (Ożarowaska 40/42, Hala D, 05-850 Duchnice) at the purchaser's disposal and at his expense. At the same time, a sales invoice will be issued to the buyer.

Payment currency: EUR 
Discount: Discounted prices, net

Other conditions: To be agreed with the Managing Director of Vertiv Poland Sp. z o.o.


CONDITIONS OF DELIVERY

The offer includes the price of transportation with the foundation at the destination (level "0", without obstacles). The customer provides a flat, barrier free way to the destination. In the case of postponement of the delivery time due to the fault of the Purchaser, a hardware storage fee will be charged.

STARTUP CONDITIONS

The offer includes:
- providing the manufacturer's guidelines for the preparation of AC, DC, signal, monitoring and temperature sensors,
- connection to the signaling system prepared by the Purchaser and for temperature sensors,
- start up the system at the dates agreed upon in the work schedule; The valuation includes the cost of commissioning on working days, working hours 8-18,
- one-time training on safe system operation in Polish on the day of system start-up.
In the case of additional training trips, additional costs will be borne by the Purchaser.

Offer does not include:

- ensure appropriate conditions for the delivered equipment (cleanliness of the premises, temperature conditions, physical security of the premises), in case the Purchaser fails to provide adequate conditions for delivery of the equipment, Vertiv  reserves the right to waive the delivery until the preparation of the premises; The total cost of the next delivery is charged to the Purchaser,
- execution, delivery and connection of external service bypass,
- the cost of routing and cable installations (passages and seals) AC,
- costs of execution and delivery of support structures under UPS and batteries,
- the cost of implementation of communication, signaling and temperature sensors,
- the cost of performing any equipotential bonding of the equipment if the coil is not in the UPS room, supporting structures,
- costs associated with the presence of a Building Manager with the appropriate authority,
- additional attendance fees, ie participation in waste disposal costs, electricity consumption, water, cleaning crews, etc.
- the cost of renting the load, electrical charges for testing and the presence of Vertiv engineer during the tests.	
`;
var warunkiTxtCEE_EN =`	
`;

infoMapPB_PL.set('warunki', warunkiTxtPB_PL);
infoMapPB_EN.set('warunki', warunkiTxtPB_EN);
infoMapCEE_EN.set('warunki', warunkiTxtCEE_EN);

//GWARANCJA OGÓLNA
var warrantyText1PB_PL = `GWARANCJA
Gwarancja na produkty Vertiv wynosi `;
var warrantyText2PB_PL = "miesięcy od daty uruchomienia urządzeń, lecz nie dłużej niż  ";
var warrantyText3PB_PL = `miesięcy od daty dostawy. Gwarancji udziela Vertiv Poland Sp. z o.o. 

Wymagany jest przegląd serwisowy po `;

var warranty24PB_PL = warrantyText1PB_PL + "24 " + warrantyText2PB_PL + "27 " + warrantyText3PB_PL + "12 miesiącu.";
var warranty36PB_PL = warrantyText1PB_PL + "36 " + warrantyText2PB_PL + "39 " + warrantyText3PB_PL + "12 i 24 miesiącu.";
var warranty48PB_PL = warrantyText1PB_PL + "48 " + warrantyText2PB_PL + "51 " + warrantyText3PB_PL + "12, 24 i 36 miesiącu.";
var warranty60PB_PL = warrantyText1PB_PL + "60 " + warrantyText2PB_PL + "63 " + warrantyText3PB_PL + "12, 24, 36 i 48 miesiącu.";

var warrantyText1PB_EN = `Warranty
Warranty on Vertiv products is `;
var warrantyText2PB_EN = "months from startup date,no longer than  ";
var warrantyText3PB_EN = `months from delivery date. Warranty is provided by Vertiv Poland Sp. z o.o. 

Maintenance is required after `;

var warranty24PB_EN = warrantyText1PB_EN + "24 " + warrantyText2PB_EN + "27 " + warrantyText3PB_EN + "12th months.";
var warranty36PB_EN = warrantyText1PB_EN + "36 " + warrantyText2PB_EN + "39 " + warrantyText3PB_EN + "12th and 24th months.";
var warranty48PB_EN = warrantyText1PB_EN + "48 " + warrantyText2PB_EN + "51 " + warrantyText3PB_EN + "12th, 24th i 36th months.";
var warranty60PB_EN = warrantyText1PB_EN + "60 " + warrantyText2PB_EN + "63 " + warrantyText3PB_EN + "12th, 24th, 36th and 48th months.";

var warrantyApendix = `

PRZEGLĄDY
Oferowane  przeglądy  wykonywane  będą  w  dni  robocze  (od  poniedziałku  do  piątku)  w godzinach od 8:00 do 16:00. Istnieje możliwość indywidualnej wyceny przeglądów w niestandardowych godzinach pracy inżynierów Serwisu.

SERWIS
- Należy  wykonywać  przeglądy  okresowe  urządzeń  w  wydłużonym  okresie  gwarancyjnym  (obowiązkowe)  i pogwarancyjnym (zalecane).
- Uruchomienia trójfazowych zasilaczy UPS dokonuje serwis Vertiv Poland Sp. z o.o. .
- Uruchomienia wykonywane będą w dni robocze (od poniedziałku do piątku) w godzinach od 8:00 do 16:00.
- Istnieje możliwość indywidualnej wyceny uruchomień w niestandardowych godzinach pracy inżynierów Serwisu.
`;

infoMapPB_PL.set('warranty24', warranty24PB_PL);
infoMapPB_PL.set('warranty36', warranty36PB_PL);
infoMapPB_PL.set('warranty48', warranty48PB_PL);
infoMapPB_PL.set('warranty60', warranty60PB_PL);

infoMapPB_EN.set('warranty24', warranty24PB_EN);
infoMapPB_EN.set('warranty36', warranty36PB_EN);
infoMapPB_EN.set('warranty48', warranty48PB_EN);
infoMapPB_EN.set('warranty60', warranty60PB_EN);

infoMapCEE_EN.set('warranty24', warranty24PB_EN);
infoMapCEE_EN.set('warranty36', warranty36PB_EN);
infoMapCEE_EN.set('warranty48', warranty48PB_EN);
infoMapCEE_EN.set('warranty60', warranty60PB_EN);

infoMapPB_PL.set('d0_AIR_ACP_Legal_Entity', 'PL');
infoMapPB_PL.set('d0_AIR_TERMS_AND_CONDITIONS', 'PL_PL');
infoMapPB_PL.set('d0_WORLD_COUNTRIES_LIST', 'PL');
infoMapPB_PL.set('d0_AIR_CUSTOMER', 'M');

infoMapPB_EN.set('d0_AIR_ACP_Legal_Entity', 'PL');
infoMapPB_EN.set('d0_AIR_TERMS_AND_CONDITIONS', 'PL_EN');
infoMapPB_EN.set('d0_WORLD_COUNTRIES_LIST', 'PL');
infoMapPB_EN.set('d0_AIR_CUSTOMER', 'M');

infoMapCEE_EN.set('d0_AIR_ACP_Legal_Entity', 'IT');
infoMapCEE_EN.set('d0_AIR_TERMS_AND_CONDITIONS', 'HUBIT');
infoMapCEE_EN.set('d0_WORLD_COUNTRIES_LIST', 'HR');
infoMapCEE_EN.set('d0_AIR_CUSTOMER', 'P');
//---------------------------------------------------------------------------------------------------

//NIE ZMIENIAĆ --->

var miejsce = prompt("Place of delivery", document.getElementById('d0_INCOTERM_LOCATION').value);
var warranty = prompt("Length of warranty in months. Min. 12, Max. 60", "12");

var infoMap = eval('infoMap = infoMap' + param1); //description map selection based on selected language	

print(infoMap.get('intro'), 'd0_INTRODUCTION');
print(infoMap.get('contact'),'d0_AIR_SALESMAN');
print(infoMap.get('warunki'), 'd0_AIR_ACP_MISCELLANEA');
print(infoMap.get('d0_AIR_ACP_Legal_Entity'),'d0_AIR_ACP_Legal_Entity');
print(infoMap.get('d0_AIR_TERMS_AND_CONDITIONS'),'d0_AIR_TERMS_AND_CONDITIONS');
print(miejsce,'d0_INCOTERM_LOCATION');
print("8",'d0_CIS_LEADTIME'); //TEMIN DOSTAWY
print(infoMap.get('d0_WORLD_COUNTRIES_LIST'),'d0_WORLD_COUNTRIES_LIST');
print("N",'d0_AIR_COE');
print(infoMap.get('d0_AIR_CUSTOMER'),'d0_AIR_CUSTOMER');
print("30",'d0_DATA_QUOTE_VALIDITY'); //WAŻNOŚC OFERTY
print("ELECTRONIC",'d0_DATA_PAYMENT_METHOD'); //PAYMENT METHOD

//gwarancja
switch(warranty){
	case '12':
		print("12_Months_From_Del",'d0_WARRANTY_SYSTEM_OTHER');
		print("",'d0_AIR_WARRANTY_2');
	break;
	
	case '24':
		print("24_Months_From_Del",'d0_WARRANTY_SYSTEM_OTHER');
		print(infoMap.get('warranty24') + warrantyApendix,'d0_AIR_WARRANTY_2');
	break;
	
	case '36':
		print("APPENDIX_A",'d0_WARRANTY_SYSTEM_OTHER')
		print(infoMap.get('warranty36') + warrantyApendix,'d0_AIR_WARRANTY_2');
	break;
	
	case '48':
		print("APPENDIX_A",'d0_WARRANTY_SYSTEM_OTHER')
		print(infoMap.get('warranty48') + warrantyApendix,'d0_AIR_WARRANTY_2');
	break;
	
	case '60':
		print("APPENDIX_A",'d0_WARRANTY_SYSTEM_OTHER')
		print(infoMap.get('warranty60') + warrantyApendix,'d0_AIR_WARRANTY_2');
	break;
	
	default:
		print("PS",'d0_WARRANTY_SYSTEM_OTHER');	
}

var ibc = document.getElementsByName("d0_ITC_BOYCOTTING_CLAUSE");
for (let i = 0; i < ibc.length; i++) {
  if(ibc[i].value="NO"){
	  print2(true, ibc[i]);
  }
}

var ipa = document.getElementsByName("d0_ITC_PROHIBITED_APPLICATION");
for (let i = 0; i < ibc.length; i++) {
  if(ipa[i].value="NO"){
	  print2(true, ipa[i])
  }
}

var iss = document.getElementsByName("d0_ITC_SUSPICIOUS");
for (let i = 0; i < ibc.length; i++) {
  if(iss[i].value="NO"){
	  print2(true, iss[i])
  }
}

var ifd = document.getElementsByName("d0_ITC_FINAL_DESTINATION");
for (let i = 0; i < ibc.length; i++) {
  if(ifd[i].value="NO"){
	  print2(true, ifd[i])
  }
}

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

function print2(value, inputElement){
	const event = new Event('input', { 'bubbles': true, 'cancelable': true });
	const radio = inputElement;
	radio.checked = value;	
	radio.onclick(event)
}