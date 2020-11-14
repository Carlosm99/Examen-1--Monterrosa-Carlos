function nombre(){
  var nombre = document.getElementById("nombre").value;
  document.getElementById("nom").innerHTML = nombre;
  if (!nombre) {
    return alert("Debe de ingresar un nombre");
  } // si el dato es vacio
}
function nocontrol(){
  var nombre = document.getElementById("numcontrol").value;
  document.getElementById("nocontrol").innerHTML = nombre;
  if (!nombre) {
    return alert("Debe de ingresar un No.Control");
  } // si el dato es vacio
}
var valores = []; // mi arreglo

function personajesfav() {
  var datorecibido = document.getElementById("dato").value; //obtengo los datos de html

  valores.push(datorecibido); // metodo push para poner en el arreglo

  if (!datorecibido) {
    return alert("Debe de ingresar un dato");
  } // si el dato es vacio

  document.getElementById("valorespersonfav").innerHTML = valores.join(
    "," + "<br>"
  ); // me permite poner los datos en el html

  return false; // detiene la entrega del form y deja imprimir el dato
}

var pelisfavoritas = [
  "Un mundo feliz",
  "La vida inútil de Pito Pérez",
  "El club de la pelea",
]; // mi arreglo

function agregarlista() {
  var nuevodato = document.getElementById("agregar").value;
  if (!nuevodato) {
    return alert("Debe de ingresar un dato");
  } // si el dato es vacio
  pelisfavoritas.push(nuevodato);
  var node = document.createElement("option");
  var textnode = document.createTextNode(nuevodato);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  mispelisfavoritas();
}

var listapelisfav = [];
function mispelisfavoritas() {
  var elvalordepelifav = document.querySelectorAll("option");
  listapelisfav.push(elvalordepelifav);
  for (var i = 0; i < elvalordepelifav.length; i++) {
    var listElement = elvalordepelifav[i];
    listElement.removeEventListener("click", print);
    listElement.addEventListener("click", print);
  }
}
var print = function () {
  var node = document.createElement("option");
  var textnode = document.createTextNode(this.innerHTML);
  node.appendChild(textnode);
  document.getElementById("myListofavmov").appendChild(node);
};

function eliminar() {
  var listapelisfavo = [];
  var r = document.getElementById("myListofavmov");
  listapelisfavo.push(r);
  for (i = 0; i < r.length; i++)
    if (r.options[i].selected == true) {
      r.remove(i);
      i--;
    }
}
