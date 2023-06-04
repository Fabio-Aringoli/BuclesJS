console.log("------------Ejercicio 01")
/* let numMultiplicacion = prompt("ingresar numero")
for(let i = 1; i <= 10; i++){
    console.log(`${numMultiplicacion} * ${i} = `, numMultiplicacion *  i)
} */



console.log("------------Ejercicio 02")
/* let cajaArr = []
let numIngresado
do{ numIngresado = Number(prompt("Ingresar numero // ingresar 0 para finalizar."))
    cajaArr.push(numIngresado)
}while(numIngresado !=0)
console.log(cajaArr) */



console.log("------------Ejercicio 03")
/* let numeroFinal = 10
let ingresar
let intentos = []

do {
    ingresar = Number(prompt("Adivinar el numero entre 1 y 100"))
    if( ingresar === numeroFinal){
        alert("Bien, encontraste al 10 en: " + intentos.length + " intentos")
        alert("Encontraste a messi!")
    }else if(ingresar > numeroFinal){
        console.log(ingresar)
        alert("Proba con un numero menor")
    }else if(ingresar < numeroFinal){
        console.log(ingresar)
        alert("Proba con un numero mayor")
    }
    intentos.push(ingresar)
} while (ingresar != numeroFinal) */



console.log("------------Ejercicio 03")
/* function mostrarDivisores(numero) {
    console.log(`Divisores de ${numero}:`);
    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) {
        console.log(i);
      }
    }
}
  let numero = parseInt(prompt("Ingresa un número:"));
  mostrarDivisores(numero); //<------SI NO SE LLAMA COMO SE MUESTRA ACA----------- ENTONCES DEVUELVE UNDEFINED 
*/

console.log("------------Ejercicio 05")

/* let frutas = ["Manzana", "Pera", "Mandarina", "Naranja", "Melon", "Kiwi", "Sandía", "Durazno", "Limon", "Mango"]
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
} */



console.log("------------Ejercicio 06")

/* let numeroArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i = 0; i < numeroArr.length; i++){
    console.log(`el doble de ${numeroArr[i]} es igual :`, numeroArr[i] * numeroArr[i])
} */



console.log("------------Ejercicio 07")
/* let familia = [
    persona = {
        nombre: "Fabio",
        apellido:"Aringoli",
        edad: 24 ,
        altura: "1.80mts"
    },
    persona = {
        nombre: "Luciano",
        apellido:"Aringoli",
        edad: 28 ,
        altura: "1.80mts"
    },
    persona = {
        nombre: "Julian",
        apellido:"Aringoli",
        edad: 32 ,
        altura: "1.80mts"
    },
    persona = {
        nombre: "Carlos",
        apellido:"Aringoli",
        edad: 65 ,
        altura: "1.70mts"
    },
    persona = {
        nombre: "Bibiana",
        apellido:"Regini",
        edad: 60 ,
        altura: "1.70mts"
    },
]
for(let i = 0; i < familia.length; i++){
    console.log(`Hola, mi nombre es ${familia[i].nombre} ${familia[i].apellido}, tengo ${familia[i].edad} años y mido ${familia[i].altura}`)
} */



console.log("------------Ejercicio 08")
/* let nuevoNumeroArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impar = []
for(let i = 0; i < nuevoNumeroArr.length; i++){
    if(nuevoNumeroArr[i] == 1 || nuevoNumeroArr[i] == 3 || nuevoNumeroArr[i] == 5 || nuevoNumeroArr[i] == 7 || nuevoNumeroArr[i] == 9){
        impar.push(nuevoNumeroArr[i])
    }
}
console.log(impar) */



console.log("------------Ejercicio 10")
/* let NumeroGrandeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroMayor
for(let i = 0; i < NumeroGrandeArr.length; i++){
    numeroMayor = Math.max(NumeroGrandeArr[i])
}
console.log(numeroMayor) */