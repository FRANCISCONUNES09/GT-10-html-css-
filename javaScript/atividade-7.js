//uma listas de modelo de carro 

const modelos = ["volkswagen", "hyundai", "toyota", "nissan"]

//adicionar um modelo no final da lista
modelos.push("Mercedes")

//contagem
console.log(modelos.length) //5

modelos.push("320i")

//remover o ultímo modelo
modelos.pop() //320i
console.log(modelos.length)

//remover um modelo específico
modelos.splice(1, 1) //remove o modelo na posição 1

console.log(modelos)
