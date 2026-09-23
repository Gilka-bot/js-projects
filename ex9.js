const user = {
    nome: "Samuel",
    idade: 26,
    email: "samuel@gmail.com",
    brasileiro: true,
    genero: "masculino"
}

const filmes = [
    {
        titulo: "Vingadores",
        ano: 2012,
        genero: "Ação",
        paraMaioresDeIdade: false
    },
    {
        titulo: "Tropa de Elite",
        ano: 2007,
        genero: "Ação",
        paraMaioresDeIdade: true
    }
]

if(user.idade >= 18){
    console.log("Deve votar!")
}

if(user.idade >= 18){
    console.log(`${user.nome} Deve votar!`)
}

//&& = e
// || = ou
// == = igual
//=== = igual e do mesmo tipo
//!= = diferente
//!== = diferente e do mesmo tipo

// if(user.idade >= 18 && user.genero === "masculino"){
//     console.log(`${user.nome} Deve se alistar!`)
//     return 
// } 

// console.log("Não precisa se alistar!")

