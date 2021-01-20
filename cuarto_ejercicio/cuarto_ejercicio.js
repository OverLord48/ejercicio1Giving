/*
README
Problema 4: 
Dado un arreglo de números cualesquiera sacar la siguiente información:

- Cantidad de elementos del arreglo.
- Porcentaje de números pares e impares.
- Porcentaje de números mayores a 1000.
- Cuál es el mayor y menor valor.
- Asuma los siguientes indicadores: 
  * Tome en cuenta que el mayor número representa el 100%, 
  * indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.

*/

const infoArr = (...numeros) => {
  let cantidad = numeros.length
  let arrayPar = numeros.filter((numero) => {
    return numero % 2 == 0
  });
  
  let arrayImpar = numeros.filter((numero) => {
    return numero % 2 != 0
  });
  
  let sumaArr = numeros.reduce((a, b) => {
    return a + b
  });

  porcentajeImpar = Math.round((arrayImpar.length / cantidad) * 100)
  porcentajePar = Math.round((arrayPar.length / cantidad) * 100)
  
  
  let arrayMayores = []
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] >= 1000){
      arrayMayores.push(numeros[i])
    }
  }
  let menorVal = Math.min.apply(null, numeros)
  let mayorVal = Math.max.apply(null, numeros)
  let porcentajeArrMayor = Math.round((arrayMayores.length / cantidad) * 100)
  let porcentajeTotal = (menorVal / 100) * mayorVal
  let promedioNum = sumaArr / cantidad
  let total = Math.round((promedioNum / 100) * mayorVal)
  
  const values = {
    'cantidad_elementos':cantidad,
    'valor_mayor':mayorVal,
    'valor_menor':menorVal,
    'porcentaje_numeros_par':porcentajePar,
    'porcentaje_numeros_impar':porcentajeImpar,
    'porcentaje_numeros_mayores_a_1000':porcentajeArrMayor,
    'promedio_total_de_numeros':promedioNum,
    'porcentaje_total':porcentajeTotal,
    'porcentaje_promedio':total
  }
  return values
}

const eval = infoArr(1,2,3,1,3,1000,2,2,2,2,2,2,10,10)
console.log(eval)

