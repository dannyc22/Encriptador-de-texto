function encriptar(){
    
let texto = document.getElementById("input").value;

let textoCifrado = texto
.replace(/e/gi, "enter")
.replace(/i/gi, "imes")
.replace(/a/gi, "ai")
.replace(/o/gi, "ober")
.replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("input").value = textoCifrado;
        asignarTextoElemento('titulo','');
        asignarTextoElemento('parrafo', textoCifrado);
        document.getElementById("brodie").style.display = "none";

      } else {
        asignarTextoElemento('titulo','Ningún mensaje fue encontrado');
        asignarTextoElemento('parrafo','Ingresa el texto que deseas encriptar o desencriptar');
        document.getElementById("brodie").style.display = "inline";
        alert("Debes ingresar un texto");
      }
}

function desencriptar() {
  let texto = document.getElementById("input").value;

  let textoCifrado = texto
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("input").value = textoCifrado;
      asignarTextoElemento('titulo','');
      asignarTextoElemento('parrafo', textoCifrado);
      document.getElementById("brodie").style.display = "none";

    } else {
      asignarTextoElemento('titulo','Ningún mensaje fue encontrado');
      asignarTextoElemento('parrafo','Ingresa el texto que deseas encriptar o desencriptar');
      document.getElementById("brodie").style.display = "inline";
      alert("Debes ingresar un texto");
    }
}
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  return;
}