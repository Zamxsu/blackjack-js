console.warn( 'Este es el incio de una practica al azar! ')

let deck = [];
let letras = ['J', 'Q','K', 'A'];
let palos = ['T','D','C','P']

const aquiCreamosElDeck = () => {

    for( let i = 2; i <= 10; i++ ){
        for( let palo of palos){
            deck.push( i + palo )
        }
    
        
    }

    for( let palo of palos){
        for( let letra of letras){
            deck.push( letra + palo )

        }
    }

    deck = _.shuffle( deck )
    console.log( deck )


}

aquiCreamosElDeck();

// Operador condicional ternario 

let numero = 2;

    ( numero > 10) ? 'Numero es mayor a 10' : '10 es mayor a numero!'