/*
README

Problema 2:  
Dada una frase cualquiera (Esta puede contener cualquier cantidad de palabras), 
invertir la frase: Que la primera palabra quede de última, la segunda de penúltima, etc. Ejemplo:

"Un día ví una vaca sin cola vestida de uniforme" -> "uniforme de vestida cola sin vaca una ví día Un"
"Que la fuerza te acompañe" -> "acompañe te fuerza la Que"

*/

const inverse = cadena => this.oracionInvertida = cadena.split(" ").reverse().join(" ");const execute = inverse("Que la fuerza te acompañe");console.log(execute)