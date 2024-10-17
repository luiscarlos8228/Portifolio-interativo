// Função para abrir o modal específico
function abrirModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Função para fechar o modal específico
function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Fechar o modal ao clicar fora da caixa de conteúdo
window.onclick = function(event) {
    const modais = document.getElementsByClassName('modal');
    for (let i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = 'none';
        }
    }
}
