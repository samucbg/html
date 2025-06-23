const palavras = ["javascript", "programacao", "desenvolvimento", "computador", "tecnologia"];
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativasRestantes = 6; // Total de partes do boneco
let letrasCorretas = [];
let letrasErradas = [];

document.getElementById("tentativas").innerText = tentativasRestantes;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function desenharBoneco(erros) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    ctx.beginPath();
    
    // Desenha a linha que conecta a base da cabeça ao topo da forca
    if (erros >= 1) {
        ctx.moveTo(100, 50); // Base da cabeça
        ctx.lineTo(100, 0); // Conexão com o topo da forca
        ctx.stroke();
        
        // Desenha a cabeça
        ctx.arc(100, 30, 20, 0, Math.PI * 2); // Cabeça
        ctx.stroke();
    }
    
    // Desenha o tronco
    if (erros >= 2) {
        ctx.moveTo(100, 50);
        ctx.lineTo(100, 130); // Tronco
        ctx.stroke();
    }
    
    // Desenha o primeiro braço
    if (erros >= 3) {
        ctx.moveTo(100, 70);
        ctx.lineTo(60, 90); // Braço esquerdo
        ctx.stroke();
    }
    
    // Desenha o segundo braço
    if (erros >= 4) {
        ctx.moveTo(100, 70);
        ctx.lineTo(140, 90); // Braço direito
        ctx.stroke();
    }
    
    // Desenha a primeira perna
    if (erros >= 5) {
        ctx.moveTo(100, 130);
        ctx.lineTo(60, 170); // Perna esquerda
        ctx.stroke();
    }
    
    // Desenha a segunda perna e exibe o pop-up após terminar o desenho
    if (erros === 6) {
        ctx.moveTo(100, 130);
        ctx.lineTo(140, 170); // Perna direita
        ctx.stroke();
        
        setTimeout(() => {
            alert(`Você perdeu! A palavra era "${palavraSecreta}". 😢 Não desanime! Tente novamente e mostre quem manda!`);
            reiniciarJogo();
        }, 500); // Espera meio segundo antes de mostrar o pop-up
    }
}

function atualizarPalavra() {
    let exibirPalavra = palavraSecreta.split('').map(letra => letrasCorretas.includes(letra) ? letra : '_').join(' ');
    
    document.getElementById("palavra").innerText = exibirPalavra;

    if (!exibirPalavra.includes('_')) {
        alert("Parabéns! Você venceu! 🎉");
        reiniciarJogo();
    }
}

function adivinhar() {
    const letraInput = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = '';

    if (letraInput && !letrasCorretas.includes(letraInput) && !letrasErradas.includes(letraInput)) {
        if (palavraSecreta.includes(letraInput)) {
            letrasCorretas.push(letraInput);
            document.getElementById("corretas").innerText = letrasCorretas.join(', ');
            atualizarPalavra();
        } else {
            letrasErradas.push(letraInput);
            tentativasRestantes--;
            document.getElementById("erradas").innerHTML = letrasErradas.map(letra => `<span class="letra-errada">${letra}</span>`).join(', ');
            document.getElementById("tentativas").innerText = tentativasRestantes;

            desenharBoneco(6 - tentativasRestantes); // Desenha a parte correspondente do boneco

            if (tentativasRestantes === 0) {
                desenharBoneco(6); // Completa o desenho do boneco antes de mostrar o pop-up
            }
        }
    }
}

function reiniciarJogo() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    tentativasRestantes = 6;
    letrasCorretas = [];
    letrasErradas = [];
    
    document.getElementById("corretas").innerText = '';
    document.getElementById("erradas").innerHTML = '';
    
   // Reseta o número de tentativas e limpa o canvas
   document.getElementById("tentativas").innerText = tentativasRestantes; 
   desenharBoneco(0); // Reseta o desenho do boneco
    
   atualizarPalavra();
}

// Inicializa o jogo
atualizarPalavra();
