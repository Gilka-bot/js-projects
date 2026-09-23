const user = {
    nome: "Samuel",
    email: "samuel@gmail.com",
    senha: "123456"
}

const email = "samuel@gmail.com"
const senha = "123457"


if(email !== user.email || senha !== user.senha){
    console.log("Email ou senha inválidos!")
    return
}

console.log(`Bem vindo ${user.nome}!`)

//Treinamento de objeto