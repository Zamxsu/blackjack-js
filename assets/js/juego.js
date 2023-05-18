

   

let deck     = [];
const tipos  = ['C','D','H','S']
const especiales = ['A','J','Q','K']

let puntosJugador = 0,
    puntosComputadora = 0;


// Referencias del HTML

const btnPedir =  document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')

const puntaje =  document.querySelector('.puntos-jugador')
const puntajeComputadora = document.querySelector('.puntos-computadora')

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')


// Esta funcion crea una nueva baraja

const crearDeck = () => {

    for(let i = 2 ; i <= 10; i++ ){
        for(  let tipo of tipos ){
            deck.push( i + tipo)
        }
    }

    for( let tipo of tipos){
        for(let esp of especiales){
            deck.push( tipo + esp)
        }
    }


    deck = _.shuffle( deck )
    console.log( deck )
    return deck;



}

crearDeck();


// Esta funcion me permitira tomar una carta

const pedirCarta = () => {

    if ( deck.length === 0){
        throw 'No hay cartas en el deck!';
    }

    const carta = deck.pop();
    
    // console.log( deck );
    // console.log( carta );
    return carta;

}


// pedirCarta();

// Esta funcion me dara el valor de la carta

const valorCarta = ( carta ) => {
    
    const valor = carta.substring( 0 , carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}              



// Inicio nuevo tema 
// Dom en Consola Google
// Creando ahora un evento click

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta()

    puntosJugador =  puntosJugador + valorCarta( carta );

    puntaje.innerText = puntosJugador;

    const imgCarta = document.createElement('img')

    imgCarta.src = `assets/cartas/${  carta   }.png`
    imgCarta.classList.add('carta')

    divCartasJugador.append( imgCarta )


    if( puntosJugador > 21 ){
        console.warn('Lo siento mucho, perdiste')
        btnPedir.disable = true
        btnDetener.disable = true 
        turnoDeComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ){
        console.warn('21, Genial!')
        btnPedir.disable = true
        btnDetener.disable = true 
        turnoDeComputadora( puntosJugador );

    }

});


// Creando la parte de la computadora! 

const turnoDeComputadora = ( puntosMinimos ) => {
    do {

        const carta = pedirCarta()

        puntosComputadora =  puntosComputadora + valorCarta( carta );
    
        puntajeComputadora.innerText = puntosComputadora;
    
        const imgCarta = document.createElement('img')
    
        imgCarta.src = `assets/cartas/${  carta   }.png`
        imgCarta.classList.add('carta')
    
        divCartasComputadora.append( imgCarta )
        
    } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );


        setTimeout(() => {
            if( puntosComputadora === puntosMinimos ){
                alert('Empate! ')
            } else if ( puntosMinimos > 21 ) {
                alert('Perdiste!')
            } else if ( puntosComputadora > 21 ) {
                alert('Ganaste! ')
            } else {
                alert('Perdiste! ')
            }
        }, 20 );
}


btnDetener.addEventListener('click', () => {

    btnPedir.disable = true  
    btnDetener.disable = true  

    turnoDeComputadora ( puntosJugador );



})

btnNuevo.addEventListener('click', () => {

    deck =  crearDeck();

    puntosJugador =  0;
    puntosComputadora = 0;

    puntaje.innerText = 0;
    puntajeComputadora.innerText = 0;

    divCartasComputadora.innerHTML = ''
    divCartasJugador.innerHTML = ''

    btnPedir.disable = false;
    btnDetener.disable =  false;


})
















