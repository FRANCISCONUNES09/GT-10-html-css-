//crie uma função pegue a idade, genero e cidade de um usuario
//se o usuario for do sexo masculino e tiver mais de 18 anos 
//Exibir Precisa se alistar
//se o usuario for do sexo masculino e tiver menos de 18 anos
//Exibir Não pode se alistar

const user = {
    nome: "Francisco",
    idade: 17,
    genero: "masculino",
    cidade: "Fortaleza"
}

function verificarAlistamento(user) {
    if(user.genero == "masculino" && user.idade >= 18){
        console.log("Precisa se alistrar")
    } else {
        console.log("Não pode se alistar")
    }
}

verificarAlistamento(user)