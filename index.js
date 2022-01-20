
//JavaScript:



//Insertando variables desde HTML

var texto = document.getElementById("texto");
var botonE = document.getElementById("botonE");
botonE.addEventListener("click", clickE);
var textofinal = document.getElementById("textofinal");
var botonD = document.getElementById("botonD");
botonD.addEventListener("click", clickD);
var botonC = document.getElementById("botonC");
botonC.addEventListener("click", clickC);
texto.focus();

var character = document.getElementById("texto").value;
const regex = /[^a-z !ñ]+/

//Funciones:




//Función Encriptar



function clickE() {

//Validadores de carácteres especiales y mayúsculas

if (texto.value.match(regex)) 
{alert ("No utilizar números, mayúsculas ni carácteres especiales")}


else 

//Ejecución de la codificación

{
var cadena =document.getElementById("texto").value;
cadena=cadena.replaceAll("e", "enter");
cadena=cadena.replaceAll("i", "imes");
cadena=cadena.replaceAll("o", "ober");
cadena=cadena.replaceAll("a", "ai");
cadena=cadena.replaceAll("u", "ufat");
textofinal.value=cadena 
}

}







//Función Desencriptar



function clickD() {

//Validadores de carácteres especiales y mayúsculas

if (texto.value.match(regex)) 
{alert ("No utilizar números, mayúsculas ni carácteres especiales")}

else 

//Ejecución de la decodificación

{
var cadena =document.getElementById("texto").value;
cadena=cadena.replaceAll("enter", "e");
cadena=cadena.replaceAll("imes", "i");
cadena=cadena.replaceAll("ober", "o");
cadena=cadena.replaceAll("ufat", "u");
cadena=cadena.replaceAll("ai", "a");
textofinal.value=cadena
}

}


//Función Copiar

function clickC() {

	var content = document.getElementById('textofinal');
    content.select();
    document.execCommand('copy');
	alert("¡Copiado!");

}





