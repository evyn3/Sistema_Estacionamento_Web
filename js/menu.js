const botoes = document.querySelectorAll(".menu-item");

// botoes.forEach(botao => {
//   botao.addEventListener("click", () => {
//     alert(`Você clicou em: ${botao.innerText}`);
//   });
// });

document.getElementById("btnPerfil").addEventListener("click", () => {
    window.location.href = "perfil.html";
});
document.getElementById("btnReserva").addEventListener("click", () => {
    window.location.href = "reserva.html";
});
