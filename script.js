let turn = 0;  //variable de turno inicimo en 0
const dashboard = []; // Variable de cuadro de 9 botones, vacio
let button; 
let color;

//cojemos todos los botones y lo recorremos con forEach colocando 
//los parametros de cada uno de los botones y comensamos por el primero
//creamaos una fucion flecha y a cada click iniciamos el evento junto
//con la función con sus eventos. 

document.querySelectorAll('button').forEach((eachButton, initial) => // flecha parametros sin retorno 
eachButton.addEventListener('click', (event) => pushButton(event, initial))); //colocamos otra flecha para iniciar función.


// creamos la fnción pushButton con 2 parametros el evento y la posicion del cuadro
function pushButton(event, position){
   turn ++; //acomulamos turnos
   button = event.target; //pulsar la variable boton en el comienso del evento
   color = turn % 2 ? 'salmon' : 'green' //variable color cambia cada cliqueo con 2 opciones
   button.style.backgroundColor = color; 
   dashboard[position] = color; // paremetro ligado al color
   if (winner())alert('Felicidades has Ganado '  + color); //si se cumple Función 

}

//posibilidades del Juego fución winner

function winner(){
    if (dashboard[0] == dashboard[1] && dashboard[0] == dashboard[2] && dashboard[0]){
        return true;
    }
    if (dashboard[3] == dashboard[4] && dashboard[3] == dashboard[5] && dashboard[3]){
        return true;
    }
    if (dashboard[6] == dashboard[7] && dashboard[6] == dashboard[8] && dashboard[6]){
        return true;
    }
    if (dashboard[0] == dashboard[3] && dashboard[0] == dashboard[6] && dashboard[0]){
        return true;
    }
    if (dashboard[1] == dashboard[4] && dashboard[1] == dashboard[7] && dashboard[1]){
        return true;
    }
    if (dashboard[2] == dashboard[5] && dashboard[2] == dashboard[8] && dashboard[2]){
        return true;
    }
    if (dashboard[0] == dashboard[4] && dashboard[0] == dashboard[8] && dashboard[0]){
        return true;
    }
    if (dashboard[2] == dashboard[4] && dashboard[2] == dashboard[6] && dashboard[2]){
        return true;
    }
    return false;

}




    
