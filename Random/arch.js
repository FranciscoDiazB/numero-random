function randomizar(){

let numero;
let maximo;
let minimo; 

maximo = parseInt(document.getElementById("txtIdMaximo").value);
minimo = parseInt(document.getElementById("txtIdMinimo").value); 

numero = Math.round(Math.random() * (maximo - minimo) + minimo); 

document.getElementById("txtIdResult").value = numero; 


}