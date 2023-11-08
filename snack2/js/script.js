const squads = [
    {
        nome:"Juventus",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Roma",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Atalanda",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Milan",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Inter",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Lazio",
        puntiFatti:0,
        falliSubiti:0,
    },
    {
        nome:"Napoli",
        puntiFatti:0,
        falliSubiti:0,
    }
]
console.log("array con nome, punti fatti e falli subiti",squads);
numeriProprietá(squads);

//destrutturazione dell'array principale 
const [squad1,squad2,squad3,squad4,squad5,squad6,squad7] = squads;
//tolgo a tutte le squadre i punti fatti
const squad1NoPunti = togliPunti(squad1);
const squad2NoPunti = togliPunti(squad2);
const squad3NoPunti = togliPunti(squad3);
const squad4NoPunti = togliPunti(squad4);
const squad5NoPunti = togliPunti(squad5);
const squad6NoPunti = togliPunti(squad6);
const squad7NoPunti = togliPunti(squad7);
//creo un nuovo array in cui inserisco i nuovi object delle squadre senza i punti fatti, ma con solo nome e falli subiti
const newArray = [];
newArray.push(squad1NoPunti,squad2NoPunti,squad3NoPunti,squad4NoPunti,squad5NoPunti,squad6NoPunti,squad7NoPunti,)
console.log("array con solo nome e falli subiti",newArray);








/**
 * Funzione per generare un numero casuale tra min e max
 * @param {number} min numero minimo
 * @param {number} max numero massimo
 * @returns {number} numero casuale tra min e max
 */
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Funzione che scriverá nelle proprietá delle squadre i valori di falli subiti e di punti fatti , usando la funzione per generare dei numeri casuali
 * @param {Array} squadre array di object contenente le squadre
 * @returns {void}
 */
function numeriProprietá(squadre){
    squadre.forEach(curSquad => {
        curSquad.falliSubiti = getRndInteger(0,100);
        curSquad.puntiFatti = getRndInteger(0,100)
    });
}


/**
 * Funzione che toglie il valore punti fatti all'interno dell'object della suqadra e ne crea uno nuovo
 * @param {object} squad object della squadra a cui verrá tolto il valore punti fatti
 * @returns {object} object della squadra contenente solo il nome e i falli subiti
 */
function togliPunti(squad) {
    const {nome,falliSubiti} = squad;
    newSquad ={
        nome,
        falliSubiti
    }
    return newSquad
}