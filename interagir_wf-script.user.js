window.addEventListener('load',function() {

	'use strict';
    const disponivel = document.getElementById('vDISPONIVEL');

    disponivel.style.width = '550px';
	disponivel.style.height = '400px';

	const selecionado = document.getElementById('vSELECIONADO');

    selecionado.style.width = '550px';
	selecionado.style.height = '400px';

	const cor_cabecalho = document.getElementById('ext-comp-1002');
	if (cor_cabecalho) {
		cor_cabecalho.style.height = '34px';
		cor_cabecalho.style.left = '0px';
		cor_cabecalho.style.top = '0px';
		cor_cabecalho.style.width = '301px';
		cor_cabecalho.style.backgroundColor = '#4CAF50';
	}

	const tela_inicial = document.getElementById('W0038TABLEFILTRO');

	if (tela_inicial) {
		function cor(){
			tela_inicial.style.backgroundColor += '#4CAF50';
			for (const filho of tela_inicial.children){
				//filho.style.backgroundColor += '#4CAF50';
				filho.style.cssText += 'background-color: #4CAF50 !important;';
			}
		}

		cor()

		const c = new MutationObserver(function(mutations) {
			cor();
		});

		c.observe(tela_inicial, { childList: true, subtree: true });
	}

	if (selecionado) {
		function aplicarCor(elemento, cor) {
			for (const filho of elemento.children) {
				filho.style.backgroundColor = cor;
			}
		}


		// Aplica inicialmente
		const cor_selecionado = '#0662a1' //#d7eaf5'
		const cor_disponivel = '#f9fad4'

		aplicarCor(selecionado, cor_selecionado);
		aplicarCor(disponivel, cor_disponivel);

		// Cria um observador que escuta se novos filhos forem inseridos/removidos
		const observer = new MutationObserver(function(mutations) {
			aplicarCor(selecionado, cor_selecionado);
			aplicarCor(disponivel, cor_disponivel);
		});


		// Configura para observar a inclusão/remoção de elementos filhos
		observer.observe(selecionado, { childList: true, subtree: true });
	}

})();
