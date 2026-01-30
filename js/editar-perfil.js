const token = localStorage.getItem("token");

if (!token) {
    alert("Você precisa estar logado");
    window.location.href = "login.html";
}

// carregar dados atuais
fetch("http://localhost:8080/clientes/me", {
    headers: {
        "Authorization": "Bearer " + token
    }
})
.then(res => res.json())
.then(data => {
    document.getElementById("nome").value = data.nome;
    document.getElementById("email").value = data.email;
    document.getElementById("telefone").value = data.telefone;
    document.getElementById("cnh").value = data.cnh;
});

// enviar atualização
document.getElementById("formEditar").addEventListener("submit", e => {
    e.preventDefault();

    const body = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cnh: document.getElementById("cnh").value,
        senha: document.getElementById("senha").value
    };

    fetch("http://localhost:8080/clientes/me", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        if (!res.ok) throw new Error();
        alert("Dados atualizados com sucesso!");
        window.location.href = "perfil.html";
    })
    .catch(() => alert("Erro ao atualizar dados"));
});

function voltar() {
    window.location.href = "perfil.html";
}
