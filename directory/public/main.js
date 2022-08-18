
console.log("test777");


//variables 
let directory;

let txtParas; 
let selected;

//get references to interactive elements
const txtDirectory = document.getElementById("directory");

//const txtSelected = document.getElementById("selected");
//const btnAddToSpeedDiall = document.getElementById("addToSpeedDial"); 
//const btnCallSpeedDiall = document.getElementById("callSpeedDial");

//add event handlers 
window.addEventListener("load", getData);

//btnAddToSpeedDiall.addEventListener("click", addToSpeedDial); 
//btnCallSpeedDiall.addEventListener("click", callSpeedDial);

function getData(){
	fetch("directory.json")
	.then(response=>response.JSON())
	.then(data=>processData(data))
	;
}


/*function getData() { 
	/*fetch("directory.json")
		.then(res => res.json() )
		.then(data => processData(data) )
		.catch(error => console.log(`Error - ${error}`)
	);

	fetch("directory.json")
		.then((response) => response.json()) 		
		.then((data) => {
			processData(data);
	        console.log(data);		        
		});
	    
}*/

function processData(responseText) {
	directory = responseText;
	txtDirectory.innerText = "All data: " + JSON.stringify(directory); 
	txtDirectory.innerText += "\n\nObject: " + JSON.stringify(directory[0]); 
	txtDirectory.innerText += "\n\nField: " + (directory[0].name);
}


/*function processData(responseText) { 
	//localStorage.clear();
	directory = responseText;
    let dirList = "";
    for (entry in directory) {
    	console.log(entry);
		dirList += `<p class='entry'>${directory[entry].name} ( 
			${directory[entry].type} ) : ${directory[entry].number}</p>`;
	}
	txtDirectory.innerHTML = dirList; 
	//txtParas = Array.from(document.getElementsByClassName("entry"));
    //txtParas.forEach(item => item.addEventListener("click", displaySelected));
}*/


/*function displaySelected() {
	for (let i = 0; i < txtParas.length; i++) {
		txtParas[i].classList.remove("highlight"); 
	}
	this.classList.add("highlight");
	selected = this.innerHTML; 
}*/

/*
function addToSpeedDial() {
	localStorage.setItem("speedDial", selected);
}

function callSpeedDial() {
	txtSelected.innerHTML = localStorage.getItem("speedDial");
}*/


