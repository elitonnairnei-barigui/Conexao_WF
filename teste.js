(function() {
    'use strict';

    // 1. Redimensiona as caixas de seleção
    const disponivel = document.getElementById('vDISPONIVEL');
    if (disponivel) {
        disponivel.style.width = '550px';
        disponivel.style.height = '400px';
    }

    const selecionado = document.getElementById('vSELECIONADO');
    if (selecionado) {
        selecionado.style.width = '550px';
        selecionado.style.height = '400px';
    }

    // 2. Personaliza o cabeçalho
    const cor_cabecalho = document.getElementById('ext-comp-1002');
    if (cor_cabecalho) {
        cor_cabecalho.style.backgroundColor = '#4CAF50';
    }

    // 3. Ajusta e observa a tabela de filtros da tela inicial
    const tela_inicial = document.getElementById('W0038TABLEFILTRO');
    if (tela_inicial) {
        function aplicarCorTelaInicial() {
            tela_inicial.style.backgroundColor = '#4CAF50';
            for (const filho of tela_inicial.children) {
                filho.style.setProperty('background-color', '#4CAF50', 'important');
            }
        }

        aplicarCorTelaInicial();
        const observerTela = new MutationObserver(() => aplicarCorTelaInicial());
        observerTela.observe(tela_inicial, { childList: true });
    }

    // 4. Aplica cores nas listas
    if (selecionado || disponivel) {
        const cor_selecionado = '#d7eaf5';
        const cor_disponivel = '#f9fad4';

        function aplicarCorListas() {
            if (selecionado) {
                for (const filho of selecionado.children) {
                    filho.style.backgroundColor = cor_selecionado;
                }
            }
            if (disponivel) {
                for (const filho of disponivel.children) {
                    filho.style.backgroundColor = cor_disponivel;
                }
            }
        }

        aplicarCorListas();
        const observerListas = new MutationObserver(() => aplicarCorListas());
        if (selecionado) observerListas.observe(selecionado, { childList: true });
        if (disponivel) observerListas.observe(disponivel, { childList: true });
    }

})();
