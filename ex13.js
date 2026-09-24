const users = [
    {
        nome: "Samuel",
        idade: 26,
        email: "samuel@gmail.com",
        senha: "teste123"
    },
    {
        nome: "João",
        idade: 17,
        email: "joao@gmail.com",
        senha: "12345678"
    }
]

const produtos = [
    {
        nome: "Nescau",
        preco: "2.20",
        restrito: false
    },
    {
        nome: "cafe",
        preco: 15.00,
        restrito: false
    },
    {
        nome: "São Braz",
        preco: 10.00,
        restrito: true
    },
    {
        nome: "Derby",
        preco: 12.00,
        restrito: true
    }
]

function login(email, senha){
    if(email === "" || senha === ""){
        console.log("Email e senha são obrigatórios")
        return
    }

    //find para encontrar o user pelo email
    const userData = users.find(user => user.email === email)

    if(userData === undefined){
        console.log("Email ou senha inválidos")
        return
    }

    if(senha !== userData.senha){
        console.log("Email ou senha inválidos!")
        return
    }

    return userData
}

function listarProdutos(idade){
     if(idade < 18){
        //filter para filtrar os produtos restritos
        const produtosPermitidos = produtos.filter (produto => produto.restrito == false)

        return produtosPermitidos
    }

    return produtos
}

async function acessarSistema(email, senha){
    const userData = await Promise.resolve(login(email, senha))

    if(userData === undefined){
    return
}

    const produtos = listarProdutos(userData.idade)

    console.log(produtos)
}

acessarSistema("samuel@gmail.com", "teste12")

