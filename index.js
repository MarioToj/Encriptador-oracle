

const palabrasClave = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
};

const copiarT = () => {

  let texto = document.getElementById('mostrarTexto')
  let button = document.getElementById('botonCopiar')

  navigator.clipboard.writeText( texto.textContent )
  button.textContent = 'Copiar'
}

function myFunction() {

  let x = document.getElementById("myDIV");
  let texto = document.getElementById('mostrarTexto')

  // var z = document.getElementById("mostrarButton");
  // z.style.display = "none";

  if (!texto) {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }

}


function palabraEncriptada(frase) {

  let palabraEn = '';
  for (let i = 0; i < frase.length; i++) {
    const char = frase[i];
    if (palabrasClave[char.toLowerCase()]) {
      palabraEn += palabrasClave[char.toLowerCase()];
    } else {
      palabraEn += char;
    }
  }

  let miSpan = document.getElementById("mostrarTexto");
  let miBoton = document.getElementById("mostrarBoton");

  if (palabraEn.length > 0) {

    miSpan.innerHTML = palabraEn
    miBoton.innerHTML = '<button id="botonCopiar" class="btn btn-info" onclick="copiarT()">Copiar</button>';
    copiarT()
    myFunction()
  }else{
   return
  }
  return palabraEn;
  
}


function getValue() {
  let valorInput = document.getElementById("myInput").value;

  document.getElementById("myInput").value = ''
  console.log('Palabra Encriptada', palabraEncriptada(valorInput));
}

function desencriptar(cadena) {
  let desencriptada = cadena.replace(/ai/gi, "a");
  desencriptada = desencriptada.replace(/enter/gi, "e");
  desencriptada = desencriptada.replace(/imes/gi, "i");
  desencriptada = desencriptada.replace(/ober/gi, "o");
  desencriptada = desencriptada.replace(/ufat/gi, "u");

  let miSpan = document.getElementById("mostrarTexto");
  miSpan.innerHTML = desencriptada

  let miBoton = document.getElementById("mostrarBoton");
  
  if (desencriptada.length > 0) {
    miBoton.innerHTML = '<button id="mi-boton" class="btn btn-info" onclick="copiarT()">Copiar</button>';
    copiarT()
    myFunction()
  }else{
    return 
  }

  return desencriptada;
}

function getdesValue() {
  let valorInput = document.getElementById("desmyInput").value;

  document.getElementById("desmyInput").value = ''
  console.log('Palabra des Encriptada', desencriptar(valorInput));
  
}

