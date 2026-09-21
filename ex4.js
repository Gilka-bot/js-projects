//Crie um algoritmo que calcule a área da parede
//O valor do pintor
//E quantidade de tinta necessária (Em baldes)

const altura = 3
const largura = 5
const valorPintor = 15
const rendimentoTinta = 12 // m2 por balde

const area = altura * largura
const valor = valorPintor
const balde = area / rendimentoTinta

console.log(`A area da parede é ${area} \n o valor do pintor é ${valor} 
    \n a quantidade de tinta necessário é ${balde}`)