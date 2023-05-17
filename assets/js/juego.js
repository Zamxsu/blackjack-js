

   

let deck     = [];
const tipos  = ['C','D','H','S']
const especiales = ['A','J','Q','K']


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
    
    console.log( deck );
    console.log( carta );
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
 console.log({ valor })


// Inicio nuevo tema 


















