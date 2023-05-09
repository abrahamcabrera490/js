'use strict'


//LOCAL STORAGE


//Comprobar disponibilidad de localstorage

if(typeof(Storage))
{
    console.log("Local Storage Displinible");

}
else
{
    console.log("No compatible con loca storage");
}


//Guardar Datos en local Storage

localStorage.setItem("Titulo:", "Curso De Abraham CAbrera Js")


//Recuperar elemento y meterlo en etiqueta

document.querySelector("#parrafo").innerHTML = localStorage.getItem("Titulo:");


//Guardar Objetos


var usuario = {
   Nombre: "Rodolfo",
   Email: "el rodo Papu",
   Apellido: "PAPU"
}

localStorage.setItem("usuario", JSON.stringify(usuario));


var usuario2 = JSON.parse(localStorage.getItem("usuario"));

console.log(usuario2);

document.querySelector("#parrafo").append(usuario2.Nombre);