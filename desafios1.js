function holaMundo(mensaje) {
    console.log(mensaje);
    //alert(mensaje);    
}

holaMundo("Hola Mundo");

function saludoNombre() {
    let nombre = prompt("Dime tu nombre: ");
    console.log(`¡Hola, ${nombre}!`);
}

saludoNombre();

function doble() {
    let numero = parseInt(prompt("Dime un número: "));
    return console.log(numero * 2);    
}

doble();

function promedio(num1,num2,num3) {
    return console.log((num1+num2+num3)/3);    
}

promedio(48,50,60);

function numeroMayor(num1,num2){
    return num1 > num2 ? console.log(num1) : console.log(num2);
}

numeroMayor(100,50);

function multiplicar() {
    let numero = parseInt(prompt("Dime un número: "));
    return console.log(numero * numero);    
}

multiplicar();