(function() {
    'use strict';
	//Cabeçalho
	const cor_cabecalho = document.getElementById('ext-comp-1002');
	if (cor_cabecalho) {
		function f_cor_cabecalho(){
			cor_cabecalho.style.backgroundColor = '#4CAF50';
		}
		f_cor_cabecalho()
		const m_cabecalho = new MutationObserver(function(mutations) {
			f_cor_cabecalho();
		});

		m_cabecalho.observe(cor_cabecalho, { characterData: true });		
	}
	
	//Tela inicial
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

		const m_telainicial = new MutationObserver(function(mutations) {
			cor();
		});

		m_telainicial.observe(tela_inicial, { childList: true, subtree: true });
	}

	//Filtro Seleção
    const disponivel = document.getElementById('vDISPONIVEL');
    disponivel.style.width = '550px';
	disponivel.style.height = '400px';

	const selecionado = document.getElementById('vSELECIONADO');
    selecionado.style.width = '550px';
	selecionado.style.height = '400px';

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
