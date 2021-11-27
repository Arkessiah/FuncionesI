// Crea una función que se llame saluda y que reciba un argumento llamado nombre. Esta función devolverá (hará return) de la suma del string "Te damos al bienvenida, " junto con el argumento nombre.
function saluda(nombre){
  return "Te damos al bienvenida, " + nombre;
}

// Crea una variable mensajeSaludo que sea igual a invocar a la función saluda usando como argumento el string "Upgrade".
var mensajeSaludo = saluda('Upgrade');

// Crea ahora una función que se llame, sumaTextos que reciba dos argumentos, textoA y textoB. Esta función devolverá por medio de return la suma de los dos strings separados por espacios.

function sumaTextos(textoA,textoB){
  return textoA + " " + textoB;
}
// Crea una variable textoFinal que sea igual a invocar la función sumaTextos con los argumentos "Estoy sumando" y "dos cadenas de texto".

var textoFinal = sumaTextos("Estoy sumando", "dos cadenas de texto");
