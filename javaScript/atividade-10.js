const user = {
    nome: "Francisco",
    idade: 17
}

const produtos = [
    {nome: "Maçã", preco: 2.50},
    {nome: "Iphone", preco: 5500}
]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50},
    {mome: "JackDaniels", preco: 100}
]

if(user.idade >= '18'){
    console.log(produtos, produtosMaiorDeIdade)
} else{
    console.log(produtos)
}