//Esto es un comentario

//esto funciona para imprimir en pantalla
//alert("hola mundo")

//variables´
var nombre = "Dahianna";
let apellido = "Severino";
const pi = 3.14;

console.log(nombre);

 nombre = "Dahianna";
 console.log(nombre);

 //pi = 3.14; //error


 //libro de datos 
 const text0 = "hola"; //string
 const numero = 123; //number
 const booleano = true; //boolean
 const nulo = null; //null
 const objeto = { clave: "valor" }; //object
 const array = [1, 2, 3]; //array

 console.log(typeof numero, text0 );

 // operadores basico
 
 const suma = 2 + 3;
 const resta = 5 - 2;
 const multiplicacion = 2 * 4;
 const division = 10 / 2;
 const modulo = 5 % 2; 

 //pront es para pedir datos al usuario
 const nombreusuario = prompt ('ingresa tu nombre');
const edadusuario = parseInt (prompt('ingresa tu edad'));

// condicionales
if(edadusuario >= 18 ) {
    console.log (nombreusuario + ' es mayor de edad' );
} else {
    console.log(nombreusuario + ' es menor de edad');
}

//pedir dos valores al usuario y hacer todas las operaciones basicas y mostrar el resultado

const valor1 = prompt ('2 + 3');
const valor2 = prompt ('5 - 2');
const valor3 = prompt ('2 * 4');
const valor4 = prompt ('10 / 2');
const valor5 = prompt ('5 % 2');


//resultados
if(valor1 >=5 ) {
    console.log (valor1 + ' correcto');
} else{
    console.log (valor1 + ' es incorrecto');
}


if(valor2 >=3 ) {
    console.log (valor2 + ' correcto');
} else{
    console.log (valor2 + ' es incorrecto');
}


if(valor3 >=8 ) {
    console.log (valor3 + ' correcto');
} else{
    console.log (valor3 + ' es incorrecto');
}



if(valor4 >=5 ) {
    console.log (valor4 + ' correcto');
} else{
    console.log (valor4 + ' es incorrecto');
}



if(valor5 >=0.1 ) {
    console.log (valor5 + ' correcto');
} else{
    console.log (valor5 + ' es incorrecto');
}