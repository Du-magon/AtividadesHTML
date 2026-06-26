function marcarPaginaAtual() {
  const paginaAtual = document.body.dataset.pagina;
  const linksDoMenu = document.querySelectorAll("[data-link]");

  linksDoMenu.forEach((link) => {
    if (link.dataset.link === paginaAtual) {
      link.classList.add("ativo");
      link.setAttribute("aria-current", "page");
    }
  });
}

function inicializar() {
  marcarPaginaAtual();
}

document.addEventListener("DOMContentLoaded", inicializar);
