const user = {
    nome: "samuel",
    idade: 26,
    cores: ["azul", "verde", "amarelo"],
    carro: {
        marca: "BMW",
        modelo: "X5",
        ano: 2025,
        cor: "preto",
        combustivel: ["gasolina", "etanol", "eletrico"]
    }
}

console.log(user.nome)
console.log(user.cores [0])

//console para mostrar a marca, modelo e último combustível do carro

console.log(user.marca)
 console.log(user.carro.modelo)
  console.log(user.carro.combustivel [2])

  //ou

  console.log(user.carro.marca, user.carro.modelo, user.carro.combustivel[2])