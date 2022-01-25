document.querySelector('#menu').a.addEventListener("click",fact1);

function fact1(){
	document.getElementById('fact').innerHTML = 
	"The Eiffel Tower is 133 years old. <br> <img id='EiffelTower' src='images/Eiffel Tower.jpg' alt='Eiffel Tower'>";
}

document.querySelector('#menu').b.addEventListener("click",fact2);

function fact2(){
	document.getElementById('fact').innerHTML = 
	"The latest measurements show that the height of Mount Everest is 8,848.86 meters. <br> <img id='MountEverest' src='images/Mount Everest.jpg' alt='Mount Everest'>";
}

document.querySelector('#menu').c.addEventListener("click",fact3);

function fact3(){
	document.getElementById('fact').innerHTML = 
	"There are no Facts #3 here <br> <img id='Nofact' src='images/nofact.jpg' alt='Nofact'>";
}

document.querySelector('#menu').d.addEventListener("click",fact4);

function fact4(){
	document.getElementById('fact').innerHTML = 
	"Challenger Deep is the world's deepest place on the surface of the earth it has a depth of 11,034 meters <br> <img id='DeepSea' src='images/DeepSea.jpg' alt='DeepSea'>";
}

document.querySelector('#menu').e.addEventListener("click",fact5);

function fact5(){
	document.getElementById('fact').innerHTML = 
	"Global average warming of 1.2 °C in 2020 <br> <img id='earth' src='images/earth.jpg' alt='earth'>";
}



var buttons;

buttons = document.querySelector('#menu').getElementsByTagName('input');

var tbuttons;

tbuttons = document.querySelector('#theme').getElementsByTagName('input');


document.querySelector('#theme').x.addEventListener("click",theme1);

function theme1(){
	document.querySelector('body').style.backgroundColor = "#5F7367";
	document.querySelector('Section').style.backgroundColor = "#B07BAC";
	document.querySelector('Section').style.color = "#5F7367";
	document.querySelector('Section').style.border = "3px solid #D9D7DD";
	for(var i = 0 ; i < buttons.length ; i++){
		buttons[i].style.backgroundColor = "#B07BAC";
		buttons[i].style.color = "#5F7367";
		buttons[i].style.border = "3px solid #D9D7DD";
	}
	for(var i = 0 ; i < tbuttons.length ; i++){
		tbuttons[i].style.backgroundColor = "#B07BAC";
		tbuttons[i].style.color = "#5F7367";
		tbuttons[i].style.border = "3px solid #D9D7DD";
	}
}

document.querySelector('#theme').y.addEventListener("click",theme2);

function theme2(){
	document.querySelector('body').style.backgroundColor = "#91A6FF";
	document.querySelector('Section').style.backgroundColor = "#7B4B94";
	document.querySelector('Section').style.color = "#91A6FF";
	document.querySelector('Section').style.border = "3px solid #FAFF7F";
	for(var i = 0 ; i < buttons.length ; i++){
		buttons[i].style.backgroundColor = "#7B4B94";
		buttons[i].style.color = "#91A6FF";
		buttons[i].style.border = "3px solid #FAFF7F";
	}
	for(var i = 0 ; i < tbuttons.length ; i++){
		tbuttons[i].style.backgroundColor = "#7B4B94";
		tbuttons[i].style.color = "#91A6FF";
		tbuttons[i].style.border = "3px solid #FAFF7F";
	}
}

document.querySelector('#theme').z.addEventListener("click",theme3);

function theme3(){
	document.querySelector('body').style.backgroundColor = "#4F6D7A";
	document.querySelector('Section').style.backgroundColor = "#C1ABA6";
	document.querySelector('Section').style.color = "#4F6D7A";
	document.querySelector('Section').style.border = "3px solid #FAE3C6";
	for(var i = 0 ; i < buttons.length ; i++){
		buttons[i].style.backgroundColor = "#C1ABA6";
		buttons[i].style.color = "#4F6D7A";
		buttons[i].style.border = "3px solid #FAE3C6";
	}
	for(var i = 0 ; i < tbuttons.length ; i++){
		tbuttons[i].style.backgroundColor = "#C1ABA6";
		tbuttons[i].style.color = "#4F6D7A";
		tbuttons[i].style.border = "3px solid #FAE3C6";
	}
}
