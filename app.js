function encriptar(){
    
let texto = document.getElementById("texto").value;
let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");

let textoCifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulo.textContent = "El texto ha sido encriptado con éxito";
        parrafo.textContent = textoCifrado;
      } else {
        titulo.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
}