document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const body = {
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value
    };

    console.log("Tentando login...", body);

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Login inválido");
        }
        return response.json();
    })
    .then(data => {
        console.log("Login OK:", data);

        window.location.href = "telamenu.html";
    })
    .catch(error => {
        console.error(error);
        alert("Email ou senha incorretos");
    });
});
