//array di oggetti contenente delle bici
const bikes = [
    {
        nome:"Scott",
        peso: 11.28 ,
    },
    {
        nome:"Cannondale",
        peso: 11.1,
    },
    {
        nome:"Genesis",
        peso: 11.3,
    },
    {
        nome:"MTB Focus",
        peso: 5.9,
    }
]
//debug
console.log(bikes);
//variabile con all'interno un array che ha l'oggeto della bici piú leggera
const biciLeggera = confrontoPeso(bikes);
console.log(biciLeggera,"bici piú leggera");

//inserisco il testo nel dom con scritta la bici piú leggera
const text = document.getElementById("message");
text.innerHTML = `
    <h1>Ecco la bici da corsa piú leggera</h1>
    <h2> Nome: ${biciLeggera.nome}</h2>
    <h2> Peso: ${biciLeggera.peso}</h2>
    `



/**
 * funzione per trovare la bici piú leggera dell'array
 * @param {Array} bikes array di object contenente le bici da corsa
 * @returns {Array} array contentente l'object della bici da corsa piú leggera ( < 10)
 */
function confrontoPeso(bikes) {
    let biciLeggera = bikes[0];
    bikes.forEach((curBici) =>{
        if(curBici.peso < biciLeggera.peso){
            biciLeggera = curBici
        }
    })
    return biciLeggera
    // //variabile per il return, che avrá il valore della bici piú leggera
    // const result = bikes.filter((curBike) => curBike.peso < 10 )
    // return result
}