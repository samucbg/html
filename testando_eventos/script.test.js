const fs = require('fs');
const path = require('path');

describe('Testando Eventos', () => {
    let html;

    beforeAll(() => {
        html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
        document.body.innerHTML = html;
        require('./script.js'); // Importa o script após definir o HTML
    });

    test('deve alterar a mensagem ao clicar no botão', () => {
        const botao = document.getElementById('botao');
        botao.click();
        expect(document.getElementById('mensagem').innerText).toBe('Botão foi clicado');
    });

    test('deve mostrar mensagem com o nome ao enviar o formulário', () => {
        const inputNome = document.getElementById('nome');
        const formulario = document.getElementById('formulario');

        inputNome.value = 'Carlos';
        formulario.dispatchEvent(new Event('submit'));

        expect(document.getElementById('resultado').innerText).toBe('Olá, Carlos!');
    });

    test('deve mostrar mensagem de erro se o nome estiver vazio', () => {
        const inputNome = document.getElementById('nome');
        const formulario = document.getElementById('formulario');

        inputNome.value = '';
        formulario.dispatchEvent(new Event('submit'));

        expect(document.getElementById('resultado').innerText).toBe('Por favor, digite um nome!');
    });
});
