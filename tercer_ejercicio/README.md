#Ejercicio 3

para la ejecucion de este ejercicio se necesita tener node instalado en tu ordenador
en caso de que no posea node puede ejecutarlo desde la consola del developer tools de chrome

para resolver este ejercicio, cree una funcion que retorna lo recibido por parametro
es NaN o un numero para posteriormente proceder a usarlo dentro de la funcion principal
dentro de la funcion principal recibo la password por parametro como un string que luego 
convierto en array con split(), cree un array que contiene los caracteres especiales y 
las demas variables para irla cambiando el status a medida que avanza la ejecucion para 
validar si tiene letras mayusculas y minusculas, cree una variable en la cual haciendo 
uso de includes() en la variable en la que tenia el array con caracteres especiales 
le paso el valor de la posicion exacta que tengo por medio de la iteracion del array de mi contraseña
si dependiendo si existe o no me devolvera true o false dicho esto condiciono si esa variable es false
entonces es una letra, pasada esta validacion efectuo otra validacion donde verifico si la letra es mayuscula,
de ser mayuscula entonces la variable pertinente es cambiada a true de lo contrario entonces minuscula es 
igual a true, para validar que las letras no se repitan creo un condicional donde pregunto si la posicion
exacta del array con su valor si no es un numero, al no ser un numero entonces creo una variable
donde al contador principal del array le sumo uno y lo guardo en una variable, hecho eso para la segunda 
iteracion condiciono dentro del mismo que el valor que contiene el array en esa vuelta no sea identico a la 
posicion anterior aplique el procedimiento parecido para las demas validaciones donde se hace la diferencia 
es en la de los caracteres especiales, alli hice uso del metodo de la burbuja donde comparo el valor
del array general con el de caracteres especiales para verificar que sea caracter especial, luego de 
pasar ese condicional sumo 1 al contador dependiendo del numero de caracteres dado a que debe tener al menos
dos caracteres segun dice la premisa despues verifico que no sean iguales a lo largo del recorrido voy creando un array
con los diversos mensajes dependiendo de cada validacion
 
