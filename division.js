let number_one = prompt("Ingrese número"); 
let number_two = prompt("Ingrese el mismo número");
let eject = division(number_one, number_two);

function division(a,b){
    if (a === b){
        return a/b;
    }else {
        alert("Números ingresados no son iguales");
    }
} 
alert("El número es divisible entre si mismo y su cociente es: " + eject);