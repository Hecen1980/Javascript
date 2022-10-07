const UsuarioG = "Lucia";
let UsuarioI = prompt("Ingrese su usuario");
let procesoU = validarU (UsuarioI, UsuarioG);

function validarU (Ui,Ug){
    if (Ui===Ug){
        document.write("Usuario Correcto");
    } else{
    alert("su usuario esta errado");
}
}

const ClaveG ="1234";
let ClaveI = prompt("Ingrese su contraseña");
let procesoC = validarC (ClaveI, ClaveG);

function validarC (Ci,Cg){
    if (Ci===Cg){
        document.write("Clave correcta")
    }else{
    alert("su contraseña esta errada");
}
}