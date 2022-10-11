debugger
let usuario = prompt("Ingrese su nombre de usuario");
let contraseña = prompt("Ingrese su contraseña");
let contraseña2 = prompt("Ingrese nuevamente su contraseña");
let cuenta = login(contraseña, contraseña2);


function login(contraseña,contraseña2){
    if (contraseña === contraseña2){
    user =  usuario;
    password =contraseña2;
}else{
    alert("Las contraseñas no coinciden");
}
    
}
alert("Su usuario es: " + user + " ,su contraseña es: " + password);