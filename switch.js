const Usuario= "HecEn";
const Contraseña= "NEAR2022";

let user = prompt("Ingrese su usuario: ");

let comentario = "Welcome";

switch (Usuario){
    case(user):
        if ( user === Usuario){
            var password = prompt("Ingrese su contraseña");
              if(password===Contraseña){
               document.write(comentario);     
             }else if (password != Contraseña){
         
                 alert("Contraseña incorrecta");
             }
                 
         }else{
             alert("Usuario incorrecto");
         }
         break;
         default:
         alert("Usuario o contraseña incorrecta")
         }