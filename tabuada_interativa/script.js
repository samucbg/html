function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const limite = parseInt(document.getElementById('limite').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpa resultados anteriores
    resultadoDiv.innerHTML = '';

    if (isNaN(numero) || isNaN(limite)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Gera a tabuada
    let tabuada = '';
    for (let i = 1; i <= limite; i++) {
        const resultado = numero * i;
        const classe = resultado % 2 === 0 ? 'par' : 'impar';
        tabuada += `<div class="${classe}">${numero} x ${i} = ${resultado}</div>`;
    }

    // Exibe a tabuada
    resultadoDiv.innerHTML = tabuada;
}
