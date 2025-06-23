document.getElementById('botao').addEventListener('click', () => {
    document.getElementById('mensagem').innerText = 'Botão foi clicado';
});

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');

    if (nome.trim() === '') {
        resultado.innerText = 'Por favor, digite um nome!';
    } else {
        resultado.innerText = `Olá, ${nome}!`;
    }
});
