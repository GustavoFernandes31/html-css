const visor = document.getElementById('leitor');
const containerBotoes = document.querySelector('.botoes');

containerBotoes.addEventListener('click', (event) => {
    // Garante que o elemento clicado foi um botão
    if (!event.target.matches('button')) return;

    const textoBotao = event.target.innerText;

    // Ação do botão LIMPAR
    if (event.target.id === 'limpar') {
        visor.innerText = '0';
        return;
    }

    // Ação do botão IGUAL (=)
    if (textoBotao === '=') {
        try {
            visor.innerText = eval(visor.innerText);
        } catch (error) {
            visor.innerText = 'Erro!';
        }
        return;
    }

    // Se o visor estiver em '0' ou 'Erro!', substitui pelo valor digitado
    if (visor.innerText === '0' || visor.innerText === 'Erro!') {
        visor.innerText = textoBotao;
    } else {
        visor.innerText += textoBotao;
    }
});