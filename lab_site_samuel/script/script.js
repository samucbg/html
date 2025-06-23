function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
 
    const mensagemErro = document.getElementById('mensagemErroLogin');
 
    // Simulação de validação simples
    if (email === '' || senha === '') {
        mensagemErro.textContent = 'Por favor, preencha todos os campos.';
        mensagemErro.style.display = 'block';
        return false; // Impede o envio do formulário
    }
 
    // Aqui você pode adicionar lógica adicional para verificar credenciais
 
    alert('Login realizado com sucesso!');
    return true; // Permite o envio do formulário
 }
 
 function validarCadastro() {
    let valid = true;
    let errorMessage = '';
 
    // Validações dos campos do cadastro
    const nome = document.getElementById('nome').value;
 
    if (nome.trim() === '') {
        errorMessage += 'O nome é obrigatório.\n';
        valid = false;
    }
 
    // Adicione outras validações conforme necessário...
 
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    const mensagemErro = document.getElementById('mensagemErro');
 
    if (valid) {
        mensagemSucesso.textContent = 'Cadastro realizado com sucesso!';
        mensagemSucesso.style.display = 'block'; // Mostra a mensagem de sucesso
        mensagemErro.style.display = 'none'; // Oculta a mensagem de erro
        return true; // Permite o envio do formulário
    } else {
        mensagemErro.textContent = `Erro ao cadastrar:\n${errorMessage}`;
        mensagemErro.style.display = 'block'; // Mostra a mensagem de erro
        mensagemSucesso.style.display = 'none'; // Oculta a mensagem de sucesso
        return false; // Impede o envio do formulário
    }
 }