//----------------------------------// 
//---- SCRIPT NAME: RENUMBER -------//
//---- AUTHOR: JAKUB OLICHWIER -----//
//---------------------------------//

//ADMINISTRATION
var scriptVer = '1.3.0.S';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');

Administration(scriptId, scriptVer);

//MAIN
var startNumber = prompt("Start number", 1);
var nodeList = document.querySelectorAll('[id^="line_number"]');
var elementList = Array.prototype.slice.call(nodeList);

console.log(`nodeList.length = ${nodeList.length}`);

if(startNumber){
	let nodeList = document.querySelectorAll('[id^="line_number"]');
	let elementList = Array.prototype.slice.call(nodeList);

	//removing sub configurations' numbers - it's changed automatically by C1 when main one is altered
	for (let i = 0; i < elementList.length; i++) {
		if(elementList[i].value.indexOf('.')>-1){		
			const index = elementList.indexOf(elementList[i]);

			elementList.splice(index, 1);
		}
	}

	//renumbering
	//TEXT + DIGITS
	if(!/^\d+$/.test(startNumber)){
		var numberOnly = startNumber.match(/\d+/g)
		var start = startNumber.indexOf(numberOnly)
		var end = start + numberOnly.length
		var textOnly = startNumber.substring(0, start)
		
		for (let i = 0; i < elementList.length; i++) {
			var newNumber = parseInt(numberOnly) + i
			print(textOnly + newNumber, elementList[i].id)
		}
		
	}
	//ONLY DIGITS
	else {
		for (let i = 0; i < elementList.length; i++) {
			print(parseInt(startNumber) + i, elementList[i].id)
		}	
	}	

	ShowMessage('Completed!');
	
	$(`#${scriptId}`).remove()
//----------------------------
}


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

