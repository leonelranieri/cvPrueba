var musicaElement = document.querySelector('.musica');
var colores = [
    'darkgrey', 'rgb(218, 189, 154)', 'darkgray',  
    'rgb(187, 216, 206)', 'rgb(228, 141, 250)',  
    'rgb(233, 212, 184)', 'darkseagreen', 'darkkhaki',  
    'silver', 'plum'  
  ];
var bordes = [
    'solid', 'dashed', 'dotted', 
]
var indiceColor = 0;
var indiceBordes = 0;

setInterval(function() {
  cambiarColorFondo();
  cambiarBordes();
}, 5000);


function cambiarColorFondo() {
  musicaElement.style.backgroundColor = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}

function cambiarBordes() {
    musicaElement.style.border = bordes[indiceBordes];
    indiceBordes = (indiceBordes + 1) % bordes.length;
}