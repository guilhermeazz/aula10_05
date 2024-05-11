function validatePassword() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar_senha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, digite novamente.");
        return false;
    }

    if (senha.length < 7) {
        alert("A senha deve ter pelo menos 7 caracteres.");
        return false;
    }

    var regexLetra = /[a-zA-Z]/;
    var regexNumero = /[0-9]/;
    if (!regexLetra.test(senha) || !regexNumero.test(senha)) {
        alert("A senha deve conter pelo menos uma letra e um número.");
        return false;
    }

    return true;
}