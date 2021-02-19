//insert your pseudocode below
/*
1 - Il computer scegle un numero e l'utilizatore scegli un numero
    Il programma confronta i due numeri e dice all'utilizatore se il numero che ha scelto è superiore , inferiore 
    ou eguale al numero scelto dal computer
    Se il numero scelto dall'utilizatore è diverso dal numero del computer il programma informa l'utilizatore che il numero è inferiore o superire
    Se i numeri sono eguale il programma lo dice all'utilizzatore e si ferma
2 - Avere una variabile random che contiene un numero scelto a caso tra 1 e 100 dal computer
    Avere una variabile myVariabile shelto dall'utilizatore tra 1 e 100
    Confrontare le due variabile per sapere se myVariabile è eguale, superiore o inferiore alla variabile random
    Visualizzare il messagio nello schermo

*/

//insert your code below

var random, myNumber;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


random = mathRandomInt(1, 100);
while (!(myNumber == random)) {
  myNumber = Number(window.prompt('Dare un numero tra 1 e 100'));
  if (myNumber < random) {
    window.alert('Il tuo numero è inferiore al numero scelto dal computer');
  }
  if (myNumber > random) {
    window.alert('Il tuo numero è superiore al numero scelto dal computer');
  }
}
window.alert('Hai trovato il numero giusto');
