const token = localStorage.getItem("token");

if (!token) {
    alert("Você precisa estar logado");
    window.location.href = "login.html";
}

// Buscar dados do usuário
fetch("http://localhost:8080/clientes/me", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(res => res.json())
.then(data => {
    document.getElementById("nome").innerText = data.nome;
    document.getElementById("cpf").innerText = data.cpf;
    document.getElementById("email").innerText = data.email;
    document.getElementById("telefone").innerText = data.telefone;
    document.getElementById("cnh").innerText = data.cnh;
})
.catch(() => {
    alert("Erro ao carregar perfil");
});

// Navegação
function voltar() {
    window.location.href = "telamenu.html";
}

function irParaEdicao() {
    window.location.href = "editar-perfil.html";
}
