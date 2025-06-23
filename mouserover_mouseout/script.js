function aumentarTexto() {
    document.getElementById("meuTexto").style.fontSize = "24px"; // Aumenta o tamanho do texto
}

function reduzirTexto() {
    document.getElementById("meuTexto").style.fontSize = "16px"; // Retorna ao tamanho original
}

// Adiciona os eventos de mouse ao elemento
const textoElement = document.getElementById("meuTexto");
textoElement.addEventListener("mouseover", aumentarTexto);
textoElement.addEventListener("mouseout", reduzirTexto);
