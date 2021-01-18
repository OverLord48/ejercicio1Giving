const multip = (x, y) => {
  let resultado = 0
  const positivo = Math.abs(y) == y
  for (let i = 0; i < Math.abs(y); i++){
    resultado = positivo ? resultado + x : resultado - x
  }
  return resultado
}

const a = multip(2, 2)
console.log(a)

/*
README
Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, 
se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.
*/