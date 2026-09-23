const alunos = [
    {
        nome: "Samuel",
        idade: 26,
        notas: [7, 8, 9]
    },
    {
        nome: "João",
        idade: 20,
        notas: [5, 4, 3]
    },
    {
        nome: "Maria",
        idade: 22,
        notas: [8.3, 9.9, 6.1]
    },
    {
        nome: "Pedro",
        idade: 21,
        notas: [3.5, 6.8, 9.1]
    }
]

console.log(alunos[3])

console.log(alunos[3].idade)


console.log(alunos[3].notas[2])

console.log(alunos[3].idade, alunos[3].notas)



function calcularMedia(){
    console.log("Função executada!")
}

calcularMedia()
calcularMedia()
calcularMedia()
calcularMedia()


function calcularMedia(n1, n2, n3){
    const media = (n1 + n2 + n3) / 3
    return media
}

calcularMedia(7, 7, 7)

//exibir 
console.log(calcularMedia(7, 7, 7))


console.log(calcularMedia(alunos[2].notas[0], alunos[2].notas[1], alunos[2].notas[2]))


//laço de repetição para calcular a média de cada aluno
//for (nesses laços de repetição mais simples) , map (percorerr uma lista e transfrmar outra coisa), wine(enquanto,laço de reperição infinito), forite (pegar um objeto de repetição)

// FOR do prório javscript (i: index; let: repete 0 mais um; lenght: quantidade de vezes que vai repetir, i++: condição vai se repetir; o que ele faz quando o laço termina e adiciona mais um )
for(let i = 0; alunos.length > i; i++){
    const aluno = alunos[i]

   const media = calcularMedia(aluno.notas[0], aluno.notas[1], aluno.notas[2])

   if(media >= 6){
    console.log(`${aluno.nome} a média é ${media} - APROVADO`) 
    continue
   }

   console.log(`${aluno.nome} a média é ${media} - REPROVADO`)
}

