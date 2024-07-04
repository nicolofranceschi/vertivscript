//---------------------------------// 
//--- SCRIPT NAME: EXPAND ALL------//
//--- AUTHOR: JAKUB OLICHWIER -----//
//---------------------------------//

//ADMINISTRATION
var scriptVer = '1.4.1';
var scriptId = new URL(document.currentScript.src).searchParams.get('id');
var param2 = document.getElementById(scriptId).getAttribute('param1');

Administration(scriptId, scriptVer);

//MAIN
var openDelay = 1200;

// Number of records per page		
var recordsPerPage = document.getElementsByName("records_per_page")[0];
if (recordsPerPage && recordsPerPage.value !== "25") {
	print("25", recordsPerPage.name);
	ShowMessage("Line Items per Page set to 25");
}
else openDelay = 0;

// Set currency
var currency = document.getElementsByName("currency_cd")[0];
if(currency && currency.value !== "EUR_fr:--:--" && param2 === "EUR") {console.log('CHANGE param2=' + param2);print("EUR_fr:--:--", currency.name)}
else {console.log('no EUR change param2=' + param2);}

//Delay to load Line Items
setTimeout(() => {
	// SHOW EXTRAS
	var matchesExtras = Array.prototype.slice.call(document.querySelectorAll('[href^="javascript: showExtras"]'));
	var timerValue = 1200;

	async function task(i) {	
		ShowMessage(`Opening BOM level 1/2: ${i+1}/${matchesExtras.length}`);
		matchesExtras[i].dispatchEvent(new MouseEvent("click",{bubbles: true, cancellable: true}));;		
		i == matchesExtras.length - 1 ? await timer(timerValue) : await timer(timerValue/1.7);
		console.log(`matchesExtras ${i} done!`); 
	}

	async function openExtras() {	
		for (let i = 0; i < matchesExtras.length; i++) {	
			await task(i);	
		}
	}
		
	openExtras().then(timer(4000)).then(function(){
		console.log('showExtras DONE');
		// SHOW BOM
		var  matchesBOM = Array.prototype.slice.call(document.querySelectorAll('[href^="javascript: showBOM"]'));
		console.log('matchesBOM.length=' + matchesBOM.length);
		
		async function task2(i) {
			await timer(timerValue/2);			
			matchesBOM[i].dispatchEvent(new MouseEvent("click",{bubbles: true, cancellable: true}));;
			
			ShowMessage(`Opening BOM level 2/2: ${i+1}/${matchesBOM.length}`);
			console.log(`matchesBOM ${i} done!`); 
			
			if(i === matchesBOM.length - 1) {
				setTimeout(() => {
					let hideBomCount = document.querySelectorAll('[href^="javascript: hideBOM"]').length;
					ShowMessage('Done! BOMs opened/requested: ' + hideBomCount + "/" + matchesBOM.length);
					
					if(hideBomCount < matchesBOM.length) {
						ShowMessage('BOMs opened/requested: ' + hideBomCount + "/" + matchesBOM.length + " \nRepeating ...");
						openBoms();
					}
					else ShowMessage('Done! BOMs opened/requested: ' + hideBomCount + "/" + matchesBOM.length);
					
				}, 2200);
			}
		}

		async function openBoms() {	
			if (matchesBOM.length === 0) ShowMessage('Nothing to open!');
			
			for (let i = 0; i < matchesBOM.length; i++) {	
				await task2(i);	
			}
		}

		openBoms().then($(`#${scriptId}`).remove()); 	
	});
}, openDelay)

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