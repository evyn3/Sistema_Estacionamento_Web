const botoes = document.querySelectorAll(".menu-item");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    alert(`Você clicou em: ${botao.innerText}`);
  });
});
