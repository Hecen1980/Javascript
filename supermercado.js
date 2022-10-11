let user_option = prompt("Digite el producto que desea, con mayúscula inicial:");

switch (user_option){

    case 'Carne':
        alert("Carne, 1l costo: $15000");
        break;
        case 'Tomate':
        alert("Tomate, 1k costo: $2500");
        break;
        case 'Zanahoria':
        alert("Zanahoria, 1l costo: $5000");
        break;
        case 'Yogurt':
        alert("Yogurt, 1 vaso costo: $1800");
        break;
        case 'Cebolla':
        alert("Cebolla, 1l costo: $3500");
        break;
        case 'Mango':
        alert("Mango, 1k costo: $7200");
        break;
        case 'Aguacate':
        alert("Aguacate,  unidad costo: $4000");
        break;
        case 'Maracuyá':
        alert("carne 1l costo: $4600");
        break;
        case 'Leche':
        alert("Leche, caja x 1l costo: $8000");
        break;
        case 'Arepas':
        alert("Arepas, bolsa x5 costo: $6000");
        break;
        default:
            alert("En el momento no disponemos de:  " +user_option);
}

alert("Le podermos colaborar en algo más?");
