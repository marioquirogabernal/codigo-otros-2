var formulario = document.getElementById("formulario") // Se busco el elemento por id

formulario.addEventListener("submit", (event) =>{
  event.preventDefault(); // prevenimos el evento por defecto
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  // Comentamos los consolo log
  //console.log(nombre, edad)
  //console.log(nacionalidad)
  console.log(edad)
  if (nombre.length === 0) {
    n.classList.add("error")
  } else {
    n.classList.remove("error") // añadimos un else para quitar la clase error
  }
  if (edad < 18 || edad > 120) {
    console.log("error en edad")
    e.classList.add("error")
  } else {
    e.classList.remove("error") // añadimos un else para quitar la clase error
  }

  if (nombre.length > 0 && (edad >= 18 && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad)
  }
})

// Eliminamos boton extra
/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);*/

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados") // creamos la lista en el html

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") // modificamos a .add en vez de .added
lista.appendChild(elementoLista)

// Comentamos codigo repetido
/*var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)*/

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}