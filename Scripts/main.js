import { armarInformacion } from './funciones.js';

const btnEjecutar = document.getElementById("ejecutar");
const btnRecordar = document.getElementById("recordar");
const btnResultados = document.getElementById("resultados");

btnEjecutar.addEventListener('click', ingresarPersona);
btnRecordar.addEventListener('click', desplegarTodos);
btnResultados.addEventListener('click', verHistorial);

let info = '';
let tARespuesta = document.getElementById("laRespuesta");


let votos = {
  Java: 0,
  Python: 0,
  "C++": 0,
  Otro: 0
};

let historial = [];

function ingresarPersona() {
  let nombre = document.getElementById("elNombre").value.trim();   
  let lenguaje = document.getElementById("elLenguaje").value; 
  let res;

  if (nombre.length === 0) {
    res = ' El nombre no fue ingresado o es inválido';
    document.getElementById("error").innerHTML = res;
    console.log(res);
  } else {
    document.getElementById("error").innerHTML = "";
    res = armarInformacion(nombre, lenguaje);
    info += res + '\n'; 
    tARespuesta.textContent = res;

    votos[lenguaje]++;
    historial.push({ nombre, lenguaje });
  }
}

function desplegarTodos() {
  tARespuesta.textContent = info;
}

function verHistorial() {
  let texto = "Resultados de la encuesta:\n";
  for (let lenguaje in votos) {
    texto += `${lenguaje}: ${votos[lenguaje]} votos\n`;
  }

  document.getElementById("laRespuesta").value = texto; 
}
