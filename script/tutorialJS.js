//reference: https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/playlists

var a = 3;

//funzione eseguita prima dell'assegnazione di a
(mostraA = function(a = 5) { //la funzione può essere chiamata con mostraA
	console.log('assegnazione di a nella funzione: ' + a)
})()
console.log('assegnazione di a: ' + a)
mostraA(a)
mostraA() //se non viene messo nessun parametro a risulta = 5, come da dichiarazione della funzione

//----------------------------------------------------------------------------------------------

// var moltiplica = function(x,y){
// 	return 2*3;
// };
// console.log(moltiplica(3,4))

// la stessa funzione può essere scritta come: 

var moltiplica = (x,y) => x*y;
console.log(moltiplica(2,3))

// var addizionaDividi = (a,b,c) => {
// 	if (c>0){
// 		return a + (b/c);
// 	} else {
// 		return 'divisione per 0 non consentita';
// 	}
// }
// console.log(addizionaDividi(2,3,1));

// la stessa funzione può essere scritta in forma contratta come:

var addizionaDividi = (a,b,c) => { 
	return (c>0) ? (a + (b/c)) : 'divisione per 0 non consentita'  
} // se non viene usato il return quando ci sono {} la funzione restituisce undefined
console.log(addizionaDividi(2,3,1))

// oppure 

var addizionaDividi = (a,b,c) => (c>0) ? (a + (b/c)) : 'divisione per 0 non consentita'  

console.log(addizionaDividi(2,3,1))

//----------------------------------------------------------------------------------------------
// Construtto '?' più complesso

var trovaMaggiore = (n1,n2,n3) => 
	(n1>n2) ? ' il primo numero e\' il maggiore' : (n2>n3) ? ' il secondo numero e\' il maggiore' : ' il terzo numeor e\' il maggiore'
console.log(trovaMaggiore(3,2,1))
console.log(trovaMaggiore(1,3,2))
console.log(trovaMaggiore(1,2,3))

//----------------------------------------------------------------------------------------------

// OGGETTI

// Costruttore
var persona = function(nome, eta) {
	this.nome = nome,
	this.eta = eta
}

var matteo = new persona('matteo',17)
console.log(matteo.nome)

//creazione oggetto con variabilli
var nome = 'marco';
var eta = 20
var marco = {nome: nome, eta: eta}
console.log(marco);


//PICCOLO RIEPILOGO
var macchina = function(marca,modello,porte = 5,ruote = 4){
	this.marca = marca;
	this.modello = modello;
	this.porte = porte;
	this.ruote = ruote;
}

var polo = new macchina('volkswagen','polo')
var c3 = new macchina('citroen','C3',3)


var miaMacchina = (macchina) => (macchina.marca === 'volkswagen') ? 'Questa e\' la mia macchina' : 'La citroen non mi interessa'
console.log(miaMacchina(polo));
console.log(miaMacchina(c3));

//----------------------------------------------------------------------------------------------
// For in e for of

var computer = {
	marca: 'asus',
	processore: 'intel',
	schedaVideo: 'nVidia',
	porteUSB: 6,
	lettoreDVD: 2,
}

var componenti = []
var attributiComputer = []

for (componente in computer) {
	componenti.push(componente) //aggiunge l'attributo dell'oggetto ad un vettore
	attributiComputer.push(componente + ': ' + computer[componente]); 
	// aggiunge l'attrbuto del'oggetto chiamato 'componente' più il valore dell'attributo del ciclo: computer[componente]
}
console.log(componenti) //visualizzazione di soli attributi dell'oggetto
console.log(attributiComputer); //visualizzazione dell'oggetto completo

var vettore = [1,2,3,4,5]
var vettoreIncrementato = [];

for (let i of vettore){ //i risulta essere il contenuto di ogni singolo elemento di del vettore.
	i++;
	vettoreIncrementato.push(i);
}
console.log(vettoreIncrementato) //Viene visualizzata una copia di vettore ma con gli elementi incrementati di 1

//ESEMPIO COMPLESSIVO

var computer = function(marca,processore,schedaVideo,porteUSB,lettoreDVD){
	this.marca = marca,
	this.processore = processore,
	this.schedaVideo = schedaVideo,
	this.porteUSB = porteUSB,
	this.lettoreDVD = lettoreDVD
}

var pc1 = new computer('asus','intel','redeon',3,true);
var pc2 = new computer('apple','intel','nVidia',6,false);


var scorriComputer = (pc) => {
	trovato = false;
	for (componente in pc){
		if (pc[componente] == 'apple') trovato = true ; //il '?' non puo' essere usato se non c'è un else
	}
	return trovato
}

console.log(scorriComputer(pc1) ? 'e\' apple' : 'non e\' apple')

//----------------------------------------------------------------------------------------------

var saluto = 'ciao mondo'
var vuota = ''
var esempio = saluto || vuota //Se saluto è '' oppure undefined lui mette la seconda stringa
//Con la && è esattamente l'opposto, preferisce la strigna vuota o undefined
console.log(esempio)








































