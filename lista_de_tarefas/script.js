// Seleciona os elementos do DOM
const tarefaInput = document.getElementById('tarefaInput');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const textoTarefa = tarefaInput.value.trim();

    if (textoTarefa !== '') {
        // Cria um novo item da lista
        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = textoTarefa;

        // Cria um botão de remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.classList.add('remove-btn');
        removerBtn.onclick = function() {
            listaTarefas.removeChild(novaTarefa);
            salvarTarefas(); // Salva as tarefas após remover
        };

        // Adiciona o botão de remover ao item da lista
        novaTarefa.appendChild(removerBtn);

        // Adiciona o item à lista
        listaTarefas.appendChild(novaTarefa);

        // Limpa o campo de entrada
        tarefaInput.value = '';

        salvarTarefas(); // Salva as tarefas após adicionar
    }
}

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    const tarefas = [];
    const itensTarefa = document.querySelectorAll('#listaTarefas li');
    itensTarefa.forEach(item => {
        tarefas.push(item.textContent.replace('Remover', '').trim());
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para carregar as tarefas do localStorage
function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
        const tarefas = JSON.parse(tarefasSalvas);
        tarefas.forEach(tarefa => {
            tarefaInput.value = tarefa; // Define o valor do campo de entrada para a tarefa carregada
            adicionarTarefa(); // Adiciona a tarefa à lista
        });
    }
}

// Adiciona um evento de clique ao botão "Adicionar"
adicionarBtn.addEventListener('click', adicionarTarefa);

// Adiciona um evento de "Enter" ao campo de entrada
tarefaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

// Carrega as tarefas ao carregar a página
carregarTarefas();
