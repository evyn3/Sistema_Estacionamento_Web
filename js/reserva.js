function reservar() {
    const horaEntrada = document.getElementById("horaEntrada").value;
    const horaSaida = document.getElementById("horaSaida").value;
    const dataEntrada = document.getElementById("dataEntrada").value;
    const dataSaida = document.getElementById("dataSaida").value;
    const vagaNumero = document.getElementById("vagaNumero").value;
    const placa = document.getElementById("placa").value;

  if (!horaEntrada || !horaSaida || !dataEntrada || !dataSaida || !vagaNumero || !placa) {
    alert("Preencha todos os campos!");
    return;
  }

  const reserva = {
    inicio: `${dataEntrada}T${horaEntrada}`,
    fim: `${dataSaida}T${horaSaida}`,
    numeroVaga: vagaNumero,
    placaVeiculo: placa
  };

  fetch("http://localhost:8080/reservas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reserva)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao reservar");
      }
      return response.text();
    })
    .then(data => {
      console.log("Resposta do backend:", data);
      document.getElementById("modal").style.display = "flex";
    })
    .catch(error => {
      console.error("ERRO REAL:", error);
      alert("Erro ao realizar reserva. Verifique os dados.");
    });
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  