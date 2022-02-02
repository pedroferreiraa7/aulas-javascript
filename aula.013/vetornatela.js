let valores = [0,3,4,6,7]

console.log(valores)


/*
for(let pos= 0; pos<valores.length;pos++){
    console.log(`a posiçao ${pos} tem o valor ${valores[pos]}`)
    console.log(valores)
    valores.sort()
}
nao precisa faze isso faz a de baixo e bem mais simples e facil !!
*/


for(let pos in valores){
    console.log(`a posiçao ${pos} tem o valor de ${valores[pos]}`)
    
}

