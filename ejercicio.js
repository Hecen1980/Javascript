const passwordSave = "Targaryen";
const userSave ="Hecen1980";
debugger
let User = prompt("Ingrese su ususario: ");

let comentario = "Digite su contraseña";
let saludo = "Bienvendio usuario @" + User;
validation();
 
 function validation(){
if ( User === userSave){
   let passwordUser = prompt(comentario);
     if(passwordUser===passwordSave){
      document.write(saludo);     
    }else if (passwordUser != passwordSave){

        alert("Contraseña incorrecta");
    }
        
}else{
    alert("Su Usuario es incorrecto")
}
}