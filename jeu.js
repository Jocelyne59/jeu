// tableau de mot 
const words= ["coupure","bonheur","empathie","littérature","peuls","jardin","confiance"];
// tirage du mot aleatoire + stockage
let randomIndex=Math.floor(Math.random()*words.length);
let randomWord=words[randomIndex];
console.log(randomWord);


// mise à jour paragraphe à chaque tirage

let paragraphe=document.getElementById("letterPlace");
paragraphe.innerHTML=randomWord

// initialiser le jeu

initGame()

//fonction d'initialisation du jeu

function initGame() {


    let wordToDisplay="";

    for(let i=0 ; i<randomWord.length; i++){

        wordToDisplay = wordToDisplay + "-";

}

// saisie de l'UI , chaque essai de l'UI = tentative -1
function userAttempt(){
    let trials=8;
    for (userTry=0 ;userTry ++; trials=-1;) {
        document.getElementById("tentative");
        span.innerHTML=trials;
    }
}

}

// check la saisie de l'UI
function checkGuess() {
	//récupérer la saisie
	

}

// en cas de victoire (function IsVictory)




 