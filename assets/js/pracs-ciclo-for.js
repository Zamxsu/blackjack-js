

   

let deck     = [];
const tipos  = ['C','D','H','S']
const especiales = ['A','J','Q','K']

// Funciones de elementos HTML

let puntosJugador = 0,
    puntosComputadora = 0;


const btnPedir =  document.querySelector('#btnPedir')
const puntaje  = document.querySelector('.puntos-jugador')
const divCartasJugador = document.querySelector('#jugador-cartas')

// Esta funcion crea una nueva baraja

const crearDeck = () => {

    for(let i = 2 ; i <= 10; i++ ){
        for( tipo of tipos ){
            deck.push( i + tipo)
        }
    }

    for( let tipo of tipos){
        for(let esp of especiales){
            deck.push( tipo + esp)
        }
    }


    deck = _.shuffle( deck )
    // console.log( deck )
    return deck;



}

crearDeck();


// Esta funcion me permitira tomar una carta

const pedirCarta = () => {

    if ( deck.length === 0){
        throw 'No hay cartas en el deck!';
    }

    const carta = deck.pop();
    
    console.log( deck );
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


 const valor = valorCarta( pedirCarta() )
//  console.log({ valor })


// Boton para pedir carta 

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
    } else if ( puntosJugador === 21 ){
        console.warn('21, Genial!')
        btnPedir.disable = true
    }


});

 


















