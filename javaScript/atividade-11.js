function alugelCarro(dias){
    if(dias > 15){
        const valorPorDia = 200
        const calculo = dias * valorPorDia
        console.log(calculo)
    } else{
        const valorPorDia = 250
        const calculo = dias * valorPorDia
        console.log(calculo)
    }
}

alugelCarro(10)
alugelCarro(15)
alugelCarro(16)