const frases = [
    "A criatividade é a inteligência se divertindo.",
    "Programar é como resolver um quebra-cabeça.",
    "A prática leva à perfeição.",
    "Nunca pare de aprender algo novo.",
    "O futuro é construído com código."
];

let fraseAtual = ""; // Variável para armazenar a frase atual
let tempoInicio = null; // Variável para armazenar o tempo de início

function iniciar() {
    // Seleciona uma frase aleatória da lista
    fraseAtual = frases[Math.floor(Math.random() * frases.length)];
    
    // Atualiza o conteúdo da frase na página
    document.getElementById("frase").textContent = fraseAtual;

    // Limpa o campo de entrada e habilita-o
    const entrada = document.getElementById("entrada");
    entrada.value = ""; // Limpa qualquer texto anterior
    entrada.disabled = false; // Habilita o campo
    entrada.focus(); // Foca no campo de entrada

   // Limpa qualquer resultado anterior
   document.getElementById("resultado").textContent = "";

   // Registra o tempo de início
   tempoInicio = new Date().getTime();

   // Adiciona um evento para verificar a entrada enquanto o usuário digita
   entrada.addEventListener("input", verificar);
}

function verificar() {
   const entrada = document.getElementById("entrada").value;

   // Verifica se a entrada corresponde à frase atual
   if (entrada === fraseAtual) {
       const tempoFim = new Date().getTime(); // Captura o tempo final
       const tempoTotal = ((tempoFim - tempoInicio) / 1000).toFixed(2); // Calcula o tempo total em segundos

       // Exibe uma mensagem de sucesso com o tempo total
       document.getElementById("resultado").innerHTML = `
           <span class="success">Parabéns! Você completou em ${tempoTotal} segundos.</span>
       `;
       document.getElementById("entrada").disabled = true; // Desativa o campo após completar
   } else if (!fraseAtual.startsWith(entrada)) {
       // Se a entrada não corresponder ao início da frase atual, exibe uma mensagem de erro
       document.getElementById("resultado").innerHTML = `
           <span class="fail">Ops! O texto digitado está incorreto.</span>
       `;
   }
}
