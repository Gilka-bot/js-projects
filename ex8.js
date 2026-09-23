//Crie um algoritmo que calcule o valor total de uma locação
//Se a quantidade de dias for maior que 10
//Aplicar um acrecimo de 20% no valor total se for menos que 5 dias - último
//Aplicar um desconto de 15% no valor total

const dias =4
const valorDia = 113.42


ledcalculo = dias * valorDia

if(dias > 10){
    const desconto = calculo * 0.15
}

calculo = calculo - desconto

console.log(`O valor total é ${calculo}`)


//- último

if(dias <5){
    const acrecimo = calculo * 0.20
}

calculo = calculo + acrecimo

console.log(`O valor total é ${calculo.toFixed(2)}`)

