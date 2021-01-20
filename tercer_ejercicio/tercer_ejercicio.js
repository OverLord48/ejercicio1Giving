
/*
README

Problema 3:  
Se desea crear un validador para la contraseña de un sitio web, 
pero esta debe ser muy segura, para ello el cliente solicita los siguientes requerimientos para el password:

Debe tener al menos 16 caracteres.
Debe tener letras minúsculas y mayúsculas.
No puede tener 2 letras iguales consecutivas.
Debe contener al menos 4 números.
No puede tener 2 números iguales consecutivos. 
Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) 
pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
No se puede usar el número 0.
No se puede colocar espacios.

Nota: No debe usar expresión regular.

*/

const isNumber = (n) => {return !isNaN(parseInt(n)) && !isNaN(n-0)}
const validatePassword = (passwd) => {
let arrCaracterS = ['!','@','#','$','%','ˆ','&','*','-','_','+','=','?']
let messages = []
  if (passwd.length >= 16){
    let passArr = passwd.split("")
    let mayus = false
    let minus = false
    let numberC = false
    let number = false
    let cspecial = false
    let countNumber = 0
    let countSpecial = 0
    let length = passArr.length
    for (let i = 0; i < length; i++){
      //valida que no sea caracter especial
      let validateLetters = arrCaracterS.includes(passArr[i])
      if (validateLetters == false){
        if (passArr[i]==passArr[i].toUpperCase()){
          mayus = true;
        }
        else{
          minus = true;
        } 
        //valida que no se admitan letras iguales seguidas
        if(isNaN(passArr[i])){
        let anterior = i + 1
          if(passArr[i]===passArr[anterior]){
            messages.push("no se admiten letras iguales seguidas")
            break;
          }
        }
      }
      //valida que los numeros no sean seguidos
      if (isNumber(passArr[i])){
        countNumber += 1
        let anterior = i + 1
        if(passArr[i] === passArr[anterior] && passArr[i] != '0'){
          messages.push("no se admiten numeros iguales seguidos")
          numberC = true
        }
      }
      //validacion de caracteres especiales (verifican que no se repita seguido)
      for (let x = 0; x < length; x++){
        if (passArr[i] == arrCaracterS[x]){
          countSpecial += 1
          let anterior = i + 1
          if (passArr[i] === passArr[anterior]){
            messages.push("no se admiten carecteres especiales seguidos")
          }
        }
      }
      if (countSpecial >= 2){
        cspecial = true
      }

      if (passArr[i] == ' '){
        messages.push("no debe tener espacios en blancos")
        break;
      }

      if (passArr[i] == '0'){
        messages.push("no puede usar cero '0' en su contraseña")
        break;
      }

    }   
      if (countNumber < 4 && numberC){
        messages.push("debe tener al menos 4 numeros")
      }else{number = true}
      
      if (countSpecial <= 1 ){
        messages.push("debe tener al menos 2 caracteres especiales")
      }
      
      if(messages.length === 0){ 
        messages.push(true)
      }

    }else{
      console.log("su contraseña es muy corta")
    }
  
  return messages
}
//ingresar caracteres
const a = validatePassword("!qwlkejqlwje23#$43sdsfg")
console.log(a)