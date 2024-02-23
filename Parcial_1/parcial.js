//document.getElementById('box9').addEventListener('focus', function() {
 //   this.innerHTML = "<p class='overlay-text'>Focus</p>";
//});

//let div = document.createElement("box");
//div.append("Some text");


document.addEventListener('DOMContentLoaded', function() {
  const botonesTexto = document.querySelectorAll('.texto');

  function agregarElementos() {
      const nuevoParrafo = document.createElement('p');
      nuevoParrafo.textContent = 'Reino fungi';

      const nuevoEnlace = document.createElement('a');
      nuevoEnlace.textContent = 'Enlace para conocer más sobre el tema ';
      nuevoEnlace.setAttribute('href', 'https://concepto.de/reino-fungi/');
      nuevoEnlace.setAttribute('target', '_blank');

      const ultimoElemento = document.body.lastElementChild;
      document.body.insertBefore(nuevoParrafo, ultimoElemento.nextSibling);
      document.body.insertBefore(nuevoEnlace, ultimoElemento.nextSibling);

      botonesTexto.forEach(function(boton) {
          boton.removeEventListener('click', agregarElementos);
      });
  }

  botonesTexto.forEach(function(boton) {
      boton.addEventListener('click', agregarElementos);
  });
});

  function agregarImagen() {
   
    const imagen = document.createElement('img');
    imagen.setAttribute('src', 'images.jpeg'); 
    // estas indicaciones se hacen como si trabajaramos en css
    imagen.style.position = 'absolute';
    imagen.style.top = '80%';
    imagen.style.left = '80%';
    imagen.style.transform = 'translate(-50%, -50%)';

    
    document.body.appendChild(imagen);
}

  document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('agregarElemento');

    boton.addEventListener('click', function() {
      
        const texto = document.createElement('p');
        texto.textContent = 'La micología médica : Es importante destacar que, con el descubrimiento de los trastornos y las afecciones que, en personas y animales, provoca la interacción con ciertos hongos o su ingesta, surgió la micología médica. Esta rama de la medicina analiza la incidencia de los hongos sobre la salud, que puede incluir desde intoxicaciones hasta infecciones';

       
        texto.style.position = 'absolute';
        texto.style.top = '80%';//ajustamos la posciciones en este caso del texto
        texto.style.left = '35%';
        texto.style.transform = 'translate(-50%, -50%)';
        texto.style.marginBottom = '1px';
          texto.style.border='solid black'
        document.body.appendChild(texto);
    });
});

function changeLabel() {
    var button = document.getElementById("myButton");
    button.innerHTML = "Micología";

  }