// El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros.
// Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar.
// Diseña un programa en el que él pueda obtener ambos valores.

let base = parseInt(prompt("Ingrese la base del terreno en metros:"));
let altura = parseInt(prompt("Ingrese la altura del terreno en metros:"));

let area = base * altura;
let perimetro = 2 * (base + altura);
console.log(`El area del terreno es: ${area} y el perimetro del terreno es: ${perimetro}`);


// Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

let nota1 = parseFloat(prompt("Ingrese la nota 1: "))
let nota2 = parseFloat(prompt("Ingrese la nota 2: "))
let nota3 = parseFloat(prompt("Ingrese la nota 3: "))

let cantNotas = 3
let suma = nota1 + nota2 + nota3
let promedio = suma / cantNotas

console.log(`El promedio de las tres notas es: ${promedio}`);


// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas. Representa esta situación y determina cuál es el valor final del
// contador.

let contador = 100;
contador += 25;
contador -= 10;
contador *= 2;
console.log(`El valor final del contador es: ${contador}`);

// Se tiene la expresión matemática siguiente:
// (20+10) /5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10) /5+3∗2−4 
// Tu reto es implementarla en JavaScript y analizar paso a paso en qué orden se ejecutan las operaciones hasta llegar al resultado final. 

let resultado = (20 + 10) / 5 + 3 * 2 - 4 (20 + 10) / 5 + 3 * 2 - 4 ( 20 + 10 ) / 5 + 3 * 2 - 4;
console.log(`El resultado de la expresión es: ${resultado}`);

// 1. Parentesis: (20 + 10) = 30
// 2. Division: 30 / 5 = 6
// 3. Multiplicacion: 3 * 2 = 6
// 4. Multiplicacion: 4 * 30 / 5 = 24
// 5. Suma y resta: 6 + 6 - 24 = -12
