// document.getElementById("formCadastro").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const senha = document.getElementById("senha").value;

//     const cliente = {
//         nome: nome.value,
//         telefone: telefone.value,
//         cpf: cpf.value,
//         cnh: cnh.value,
//         email: email.value,
//         senha: senha.value
//     };

//     console.log("Cliente cadastrado:", cliente);

//     alert("Cadastro realizado com sucesso!");

// });

document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const body = {
        cpf: document.getElementById("cpf").value,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        senha: document.getElementById("senha").value,
        cnh: document.getElementById("cnh").value
    };

    console.log("Enviando cadastro...");

    fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar");
        }
        return response.json();
    })
    .then(data => {
        alert("Cadastro realizado com sucesso!");
        console.log(data);
        // Após cadastro, redireciona para a tela de login
        window.location.href = "login.html";
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao realizar cadastro");
    });
});


// document.getElementById("formCadastro").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const cliente = {
//         cpf: document.getElementById("cpf").value,
//         nome: document.getElementById("nome").value,
//         email: document.getElementById("email").value,
//         telefone: document.getElementById("telefone").value,
//         senha: document.getElementById("senha").value,
//         cnh: document.getElementById("cnh").value
//     };

//     fetch("http://localhost:8080/auth/register", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(cliente)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Erro ao cadastrar");
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert("Cadastro realizado com sucesso!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//         alert("Erro ao realizar cadastro");
//     });
// });


// document.getElementById("formCadastro").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const cliente = {
//         nome: document.getElementById("nome").value,
//         telefone: document.getElementById("telefone").value,
//         cpf: document.getElementById("cpf").value,
//         cnh: document.getElementById("cnh").value,
//         email: document.getElementById("email").value,
//         senha: document.getElementById("senha").value
//     };

//     fetch("http://localhost:8080/clientes", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(cliente)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Erro ao cadastrar");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("Cliente cadastrado:", data);
//         alert("Cadastro realizado com sucesso!");
//         document.getElementById("formCadastro").reset();
//     })
//     .catch(error => {
//         console.error(error);
//         alert("Erro ao realizar cadastro");
//     });
// });

