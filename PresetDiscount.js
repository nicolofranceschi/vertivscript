//-------------------------------------// 
//--- SCRIPT NAME: PRESET DISCOUNT ----//
//--- AUTHOR: JAKUB OLICHWIER ---------//
//-------------------------------------//
var codesMap = new Map([
["02010529", "0,4"],
["04114664", "0,4"],
["02312839", "0,4"],
["0411A37R", "0,4"],
["MTPD", "0,35"],
["D31", "0,3"],
["D43", "0,3"],
["LPL-TRN-DEL", "0,57"],
["LKL-TRN-DEL", "0,57"],
["LPL-BAT-RAC", "0,57"],
["LPS-B-OKS-FEE", "0,75"],	
["LPL-MIS-MOT", "0,57"],
["LPS-EXT-WAR", "0,57"],
["IS-UNITY-DP", "0,3"],
["IS-UNITY-SNMP", "0,3"],
["IS-RELAY", "0,3"],
["RDU", "0,3"],
["10H63289KE", "0,4"],
["RMKIT18-32", "0,4"],
["UF-RMKIT2438", "0,4"],
["EXS", "0,35"],
["EXM", "0,4"],
["GXT5", "0,35"],
["ITA2", "0,35"],
["APMP", "0,3"],
["APM2", "0,45"],
["APMZ", "0,40"],
["LI8", "0,45"],
["023500U7", "0,4"],
["02010026", "0,4"],
["ITA-", "0,35"],
["02010024", "0,5"],
["02312277", "0,5"],
["02313004", "0,5"],
["LPL-BAT-RAC", "0,57"],	
["PS-ACP-ST", "0,63"],	
["PS-ACP-TR-QSTART-MS", "0,63"],	
["VB20", "0,55"],	
["VB60", "0,55"],	
["10H32447P", "0,4"],	
["10H46934P", "0,4"],	
["10B14266G8", "0,4"],
["02350174", "0,4"],
["SN-", "0,4"],
["LYU", "0,5"],
["LEX", "0,5"],
["LEN", "0,5"],
["LLE", "0,5"],
["LHP", "0,5"],
["iV", "0,4"],
["IMPB", "0,4"],
["04113255", "0,5"],
["LCS", "0,6"],
["00B46158PEXS4", "0,4"],
["10B46212P1D12", "0,4"],
["SU56731AB000AA0", "0,4"],
["0235A02J", "0,4"],
["RUPS-WE3-006", "0,4"],
["RUPS-PE5-006", "0,4"],
["LIBSG", "0,5"],
["LIBTP", "0,5"],
["ACPAPMZF3BETFK", "0,5"],
["TFG", "0,5"],
["PS-ACP-TR-QSTART-L", "0,6"],
["PS-ACP-LI-ON-STARTUP", "0,6"],
["WT-", "0,63"],
["LIBHPL", "0,55"],
["LIBTP", "0,55"],
["10H32479P01", "0,4"],
["10B14842GPK4", "0,5"],
["10B14822G5SN", "0,5"],
["PS-ACP-ST-APM2", "0,57"],
["PS-ACP-ST-APMPLUS", "0,57"],
["02312937", "0,4"],
]);

//ADMINISTRATION
var scriptVer = '1.4.1';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');
var param2 = document.getElementById(scriptId).getAttribute('param2');

Administration(scriptId, scriptVer);

//MAIN
var c1Map = new Map();
var elementList = [...document.querySelectorAll('[id^="reference_num"]')];
var answer = window.confirm("\nClick OK to update ALL items \nClick CANCEL to update Discount=0 items only");
var delay = 100;
var counter = 1;

elementList.forEach((item) => {
	let elementValue = item.innerHTML.trim();
	let key = "";		
	let id = getIdNumber(item);
	
	if(item.tagName == "TD") elementValue = item.innerHTML;		
	else if(item.tagName == "INPUT") elementValue = item.value;
	
	if (codesMap.has(elementValue)) key = elementValue;
	else {	
		for (const [keyArr, valueArr] of codesMap) {
			// if (elementValue.includes(keyArr)) {
			if (elementValue.startsWith(keyArr)) {
			  key = keyArr;
			  break;
			}
		}
	}
	
	if (key !== "") {
		//var rgxp = new RegExp("^" + key, "gi");
		var rgxp = new RegExp("^" + key, "i");
			if (key.match(rgxp) || rgxp.test(key)) {
				console.log("elementValue=" + elementValue + " | key=" + key + " | SPM=" + codesMap.get(key));					
				if (answer) c1Map.set("discount_amt_display" + id, codesMap.get(key));
				else if (document.getElementById("discount_amt_display" + id).value == 0) c1Map.set("discount_amt_display" + id, codesMap.get(key));
		}
	}
});

if(c1Map.size > 0){
	param2 = parseFloat(param2.replace(",","."))
	console.log("Updating SPM fields ...");	

	c1Map.forEach((value, key) => {			
		setTimeout(function(counter, value, key) {			
			return function() {
				value = parseFloat(value.replace(",","."))
				//console.log(counter + ". " + key + " = " + value + " * " + param2);
				
				print((value * param2).toString().replace(".",","), key);
				ShowMessage('Updating SPM fields ... ' + counter + "/" + c1Map.size);
				
				if(counter === c1Map.size)
					ShowMessage(`PresetDiscount completed! (${c1Map.size} items)`);				
			}
		}(counter, value, key),  delay * counter);
		
		counter++;			
	});		
}
else {
	ShowMessage("No SPM fields affected! Run ExpandAll first!", 'false', '', 'red');
}

$(`#${scriptId}`).remove()
//---------------------------------------------	

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

