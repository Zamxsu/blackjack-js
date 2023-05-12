   

let deck     = [];
const tipos  = ['C','D','H','S']
const letras = ['A','J','Q','K']


// Esta funcion crea una nueva baraja

const crearDeck = () => {

    for( let i = 2; i <= 10; i++) {
        for( let tipo of tipos){
            deck.push( i + tipo)
        }
    }
     
    for( let tipo of tipos) {
        for( let esp of letras){
            deck.push( esp + tipo)
        }
    }

    // console.log( deck )
    deck = _.shuffle( deck );

    console.log( deck )

}

crearDeck();

// Esta funcion me permitira tomar una carta

const pedirCarta = () => {

    if ( deck.length === 0){
        throw 'No hay cartas en el deck!';
    }

    const carta = deck.pop();
    
    console.log( deck );
    console.log( carta );
    return carta;

}


pedirCarta();

// Esta funcion me dara el valor de la carta

const valorCarta = ( carta ) => {
    const valor = carta.substring (0, carta.length - 1);
    let puntos = 0;

    if ( isNaN( valor ) ) {
        
        puntos = ( valor === 'A' ) ? 11 : 10;

    } else {
        
        puntos = valor * 1
    }


    console.log( puntos )
}  


valorCarta( '3D')






















