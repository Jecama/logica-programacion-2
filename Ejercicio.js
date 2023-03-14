let temperatura = prompt("Ingrese la temperatura en grados Celsius:");

// Comprobamos si el valor ingresado es un número
while (isNaN(temperatura)) {
  alert("Por favor ingrese un valor numérico.");
  temperatura = prompt("Ingrese la temperatura en grados Celsius:");
}

// Convertimos la temperatura a grados Fahrenheit y Kelvin
let fahrenheit = (temperatura * 1.8) + 32;
let kelvin = temperatura + 273.15;

// Imprimimos los resultados en la consola
console.log("La temperatura en grados Fahrenheit es: " + fahrenheit);
console.log("La temperatura en grados Kelvin es: " + kelvin);