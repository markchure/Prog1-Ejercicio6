var max = 10;
var menor = Number.MAX_VALUE;
var mayor = Number.MIN_VALUE;

for(var i=1; i<=max; i++){
  var numero = parseInt(prompt("Ingrese un número (" + i + "/" + max + "): "));

  if(numero<menor){
    menor = numero;
  } 

  if(numero>mayor){
    mayor = numero;
  }
}

var diferencia = mayor - menor;
console.log("La diferencia es: " + diferencia);