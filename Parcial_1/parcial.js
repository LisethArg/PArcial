//document.getElementById('box9').addEventListener('focus', function() {
 //   this.innerHTML = "<p class='overlay-text'>Focus</p>";
//});

let div = document.createElement("box");
div.append("Some text");



console.log(div.childNodes); // NodeList [ <p> ]


  // Agregar el nuevo elemento al cuerpo de la página
  document.body.appendChild(nuevoElemento);


 // Crear un nuevo elemento
 var nuevoElemento = document.createElement("box2");
 nuevoElemento.textContent = "Nuevo elemento desde el botón";
 
// Crea un nuevo elemento párrafo, y lo agrega al final del cuerpo del documento
var p = document.createElement("p");
document.body.appendChild(p);

function changeLabel() {
    var button = document.getElementById("myButton");
    button.innerHTML = "Micología";
  }