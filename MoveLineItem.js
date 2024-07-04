//---------------------------------// 
//--- SCRIPT NAME: MOVELINEITEM ---//
//--- AUTHOR: JAKUB OLICHWIER -----//
//---------------------------------//

//ADMINISTRATION
var scriptVer = '1.4.0';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');

Administration(scriptId, scriptVer);

//MAIN
var timerValue = 400; //dont set below 200
var firstItem = prompt("Line Item number", 1);
var secondItem = prompt("Move item no. " + firstItem + " before item no.:", 1);
var inputElements = document.querySelectorAll('[id^="line_number"]');
var idFirst = 0;
var idSecond = 0;
var regex1 = /\((\d+)\)/;
var regex2 = /^line_number\d+$/;

inputElements.forEach(item => {
    if (item.value === firstItem) {
        idFirst = item.id;
        if (regex2.test(idFirst) && idSecond !== 0) return;
    }
    
    if (item.value === secondItem) {
        idSecond = item.id;
        if (regex2.test(idSecond) && idFirst !== 0) return;
    }
});

if(idFirst == 0) ShowMessage(`Item '${firstItem}' doesn't exist! `, false, '', "red")
if(idSecond == 0) ShowMessage(`Item '${secondItem}' doesn't exist! `, false, '', "red")

//getting C1 position of the first Line Item
var tbodyFirst = document.getElementById(idFirst).closest('tbody');
var hrefFirst = tbodyFirst.querySelector('[href^="javascript: removeLineItem"]').getAttribute("href");
var match1 = parseInt((regex1.exec(hrefFirst))[1]);

//getting C1 position of the second Line Item
var tbodySecond = document.getElementById(idSecond).closest('tbody');
var hrefSecond = tbodySecond.querySelector('[href^="javascript: removeLineItem"]').getAttribute("href");
var match2 = parseInt((regex1.exec(hrefSecond))[1]);

//setting direction of Line Item movment: -1 down; 1 up
var direction = match1 > match2 ? -1 : 1;
console.log(`Direction = ${direction}`);

//making moving asynchronous to apply delay between each movement -> slowing down so that c1 can keep up 
async function task(i) {	
	var element1 = document.querySelector(`a[href='javascript: removeLineItem(${i})']`);
	var element2 = document.querySelector(`a[href='javascript: removeLineItem(${i + direction})']`);

	if (!element2) {
		moveLineItem(i, i + direction + direction);
		console.log(`moveLineItem(${i}, ${i + direction + direction})`);
	} 
	else if (element1){
		moveLineItem(i, i + direction);
		console.log(`moveLineItem(${i}, ${i + direction})`);
	}
 
	await timer(timerValue);
}

async function moveItem() {	
	if (match1 !== null && match2 !== null) {
		var firstPosition = match1;	
		var secondPosition = match2;
		
		if (firstPosition >= 0 && secondPosition >= 0 && firstPosition !== secondPosition) {		
			for (let i = firstPosition; i !== secondPosition; i += direction) {
				await task(i);
			}
		}
	}	
}

//function call than CLEANING - removing script from DOM to allow load script next time if required
moveItem().then($(`#${scriptId}`).remove());

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