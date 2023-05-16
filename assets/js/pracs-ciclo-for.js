
console.warn('Practica Ciclo For')

// Poner cada curso de un colegio en un ciclo for

let baraja = [];
const palo =  ['T', 'D', 'P','C']
const gradosEspeciales = ['A', 'J', 'Q', 'K']


const creandoBaraja =  () => {

    for( let i = 2; i <= 10; i++){
        for(  let pal of palo ){
            baraja.push( i + pal)
        }
    }

    for( let esp of gradosEspeciales){
        for( let pal of palo){
            baraja.push( esp + pal )
        }
    }


    console.log( baraja )

}

creandoBaraja();

const sacarCartas = () => {

   
   
   
    const cartaEliminada = baraja.pop()
    console.log( baraja )
    console.log( cartaEliminada )


}

sacarCartas();


const valorCarta = ( carta ) => {
    
    const valor = carta.substring( 0 , carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}              


 const valor = valorCarta( pedirCarta() )
 console.log({ valor })


