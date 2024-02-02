function encriptar() {
  let textarea = document.getElementById('textarea').value;
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafo = document.getElementById('parrafo');
  let muneco = document.getElementById('muneco');

  let textoCifrado = textarea
    .replace(/a/gi, "ar")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  
  if (textarea.length != 0) {
    document.getElementById('textarea').value = textoCifrado;
    tituloMensaje.textContent = 'Excelente!, texto encriptado con éxito';
    parrafo.textContent = '';
    muneco.src = "./assets/img/happy2.svg";
  } else {
    muneco.src = "./assets/img/welcome.svg";
    tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
    parrafo.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    Swal.fire({
      icon: "error",
      title: "¡ESPERA!",
      text: "Debes ingresar algún texto",
      footer: ''
    });
  }
}


function desencriptar() {
  let textarea = document.getElementById('textarea').value;
  let tituloMensaje = document.getElementById('titulo-mensaje');
  let parrafo = document.getElementById('parrafo');
  let muneco = document.getElementById('muneco');

  let textoCifrado = textarea
    .replace(/ar/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
  if (textarea.length != 0) {
    document.getElementById('textarea').value = textoCifrado;
    tituloMensaje.textContent = 'Excelente!, texto desencriptado con éxito';
    parrafo.textContent = '';
    muneco.src = "./assets/img/desencriptador2.svg";
  } else {
    muneco.src = "./assets/img/welcome.svg";
    tituloMensaje.textContent = 'Ningún mensaje fue encontrado';
    parrafo.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    Swal.fire({
      icon: "error",
      title: "¡ESPERA!",
      text: "Debes ingresar algún texto",
      footer: ''
    });
  }
}