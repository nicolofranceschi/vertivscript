//---------------------------------// 
//--- SCRIPT NAME: CHANGE PRICE ---//
//--- AUTHOR: JAKUB OLICHWIER -----//
//---------------------------------//

//ADMINISTRATION
var scriptVer = '1.2.0';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');

Administration(scriptId, scriptVer);

//MAIN
var enteredValue = prompt("Change price by % [Add/Remove Margin]: ", 0);
var delay = 50;

if(enteredValue){
	var counter = 1;
	var elementList = [...document.querySelectorAll('[id^="ext_net_price"]')];
	elementList = elementList.filter(obj=> obj.id.match(/\d_\d/g) || obj.id.match(/ext_net_price\d/g) && obj.tagName.toLowerCase()==='input');

	elementList.forEach(function (item, index) {
		setTimeout(function () {
			console.log(parseFloat(item.value.replace(",",".")),parseFloat(enteredValue))
			let elementFloatValue = parseFloat(item.value.replace(",",".")) / (1 - parseFloat(enteredValue)/100)		
			let elementStringValue = elementFloatValue.toFixed(2).toString().replace(",",".")
			console.log(elementFloatValue, elementStringValue)
			
			ShowMessage('Changing price ... ' + counter + "/" + elementList.length);
			
			print(elementStringValue, item.id)
			counter++;			
			console.log(item.id + "=" + elementStringValue);
			
			if(index == elementList.length - 1) ShowMessage(`All Prices changed by ${enteredValue}% (${elementList.length} items)`);
			else popMessageLine('Please wait...', 'alert', 1000);
		}, index * delay);
	});
}

$(`#${scriptId}`).remove()
//---------------------------- 


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