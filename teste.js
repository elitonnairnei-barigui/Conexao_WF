(function() {
    'use strict';
	//cabeçalho
	const cor_cabecalho = document.getElementById('ext-comp-1002');
	if (cor_cabecalho) {
		cor_cabecalho.style.backgroundColor = '#4CAF50';
	}

	const tela_inicial = document.getElementById('W0038TABLEFILTRO');

	if (tela_inicial) {
		function cor(){
			tela_inicial.style.backgroundColor += '#87a1cc';
			for (const filho of tela_inicial.children){
				//filho.style.backgroundColor += '#87a1cc';
				filho.style.cssText += 'background-color: #87a1cc !important;';
			}
		}

		cor()

		const c = new MutationObserver(function(mutations) {
			cor();
		});

		c.observe(tela_inicial, { childList: true, subtree: true });
	}	
	
	//filtro seleção
	const tela_geral = document.getElementById('gxp0_s');
	const tela_interna = document.getElementById('gxp0_b');
	
	if (tela_geral){
		function redim(tela_geral){
			tela_geral.style.width = '2168px'
		}
		redim();
		const observer_tela = new MutationObserver(function(mutations) {
			redim(selecionado);
		});
		
	}
	const disponivel = document.getElementById('vDISPONIVEL');

    disponivel.style.width = '550px';
	disponivel.style.height = '400px';

	const selecionado = document.getElementById('vSELECIONADO');

    selecionado.style.width = '550px';
	selecionado.style.height = '3500px';


	if (selecionado) {
		function aplicarCor(elemento, cor) {
			for (const filho of elemento.children) {
				filho.style.backgroundColor = cor;
			}
		}


		// Aplica inicialmente
		const cor_selecionado = '#d9edfa' //#d7eaf5'
		const cor_disponivel = '#f5f4eb'

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
