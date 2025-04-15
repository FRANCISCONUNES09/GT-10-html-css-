const user = {
    nome: "Francisco",
    altura: 1.58,
    peso: 70
}

//criar uma função que receba o objeto user
// e calcule o IMC
// IMC = peso / (altura * altura)

function calcularIMC(user){
    const imc = user.peso / (user.altura * user.altura)

    if(imc < 16){
       return console.log("Magreza grave")
    } 

    if(imc >= 16 && imc < 17){
        return console.log("Magreza moderada")
    }

     if(imc >= 17 && imc < 18.5){
        return console.log("Magreza Leve")
    }

    if(imc >= 18.6 && imc < 24.9){
       return console.log("Normal")
    } 
    
    if(imc >= 25 && imc < 29.9){
        return console.log("Sobrepeso")
    } 
    
    if(imc >= 30 && imc < 34.9){
       return console.log("Obesidade de grau I")
    } 
    
    if(imc >= 35 && imc < 39.9){
        return console.log("Obesidade de grau II")
    } 
    
    if(imc >= 40){
        return console.log("Obesidade de grau III")
    }
}

calcularIMC(user)
