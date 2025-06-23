document.addEventListener('DOMContentLoaded', function () {
    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('sobrenome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const dataNascimentoInput = document.getElementById('dataNascimento');
    const generoSelect = document.getElementById('genero');

    // Validações em tempo real
    nomeInput.addEventListener('input', function () {
        const nomeError = document.getElementById('nomeError');
        nomeError.textContent = nomeInput.value.trim() === '' ? 'O nome é obrigatório.' : '';
    });

    sobrenomeInput.addEventListener('input', function () {
        const sobrenomeError = document.getElementById('sobrenomeError');
        sobrenomeError.textContent = sobrenomeInput.value.trim() === '' ? 'O sobrenome é obrigatório.' : '';
    });

    emailInput.addEventListener('input', function () {
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'O e-mail é obrigatório.';
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um e-mail válido.';
        } else {
            emailError.textContent = '';
        }
    });

    senhaInput.addEventListener('input', function () {
        const senhaError = document.getElementById('senhaError');
        senhaError.textContent = senhaInput.value.length >= 6 ? '' : 'A senha deve ter pelo menos 6 caracteres.';
    });

    confirmarSenhaInput.addEventListener('input', function () {
        const confirmarSenhaError = document.getElementById('confirmarSenhaError');
        confirmarSenhaError.textContent = confirmarSenhaInput.value === senhaInput.value ? '' : 'As senhas não coincidem.';
    });

    dataNascimentoInput.addEventListener('input', function () {
        const dataNascimentoError = document.getElementById('dataNascimentoError');
        dataNascimentoError.textContent = dataNascimentoInput.value.trim() === '' ? 'A data de nascimento é obrigatória.' : '';
    });

    generoSelect.addEventListener('change', function () {
        const generoError = document.getElementById('generoError');
        generoError.textContent = generoSelect.value === '' ? 'Por favor, selecione um gênero.' : '';
    });
});

// Função para validar o formulário antes de enviar
window.validarFormulario = function() {
    let valid = true;
    let errorMessage = '';

    // Validação da confirmação da senha
    if (senhaInput.value !== confirmarSenhaInput.value) {
        errorMessage += 'As senhas não coincidem.\n';
        valid = false;
    }

    // Validação dos campos obrigatórios
    if (nomeInput.value.trim() === '') {
        errorMessage += 'O nome é obrigatório.\n';
        valid = false;
    }
    
    if (sobrenomeInput.value.trim() === '') {
        errorMessage += 'O sobrenome é obrigatório.\n';
        valid = false;
    }

    if (emailInput.value.trim() === '') {
        errorMessage += 'O e-mail é obrigatório.\n';
        valid = false;
    }

    if (senhaInput.value.length < 6) {
        errorMessage += 'A senha deve ter pelo menos 6 caracteres.\n';
        valid = false;
    }

    if (dataNascimentoInput.value.trim() === '') {
        errorMessage += 'A data de nascimento é obrigatória.\n';
        valid = false;
    }

    if (generoSelect.value === '') {
        errorMessage += 'Por favor, selecione um gênero.\n';
        valid = false;
    }

   // Exibe pop-up de sucesso ou erro
   if (valid) {
       alert('Cadastro realizado com sucesso!');
       return true; // Permite o envio do formulário
   } else {
       alert(`Erro ao cadastrar:\n${errorMessage}`);
       return false; // Impede o envio do formulário
   }
};