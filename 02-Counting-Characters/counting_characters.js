//insert your pseudocode below
/*
Creare una variabile myString che deve contenere il valore che l'utilizatore ha messo
Concatenare il valore della lunghezza della variabile myString al suo valore 
Mostrare nello schermo il valore della variabile e la lugheza della variabile myString 

*/

//insert your code below

var myString;


myString = window.prompt('Srive una parola');
myString += String(myString.length);
window.alert(myString);