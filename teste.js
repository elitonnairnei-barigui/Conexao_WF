(function() {
    'use strict';

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
		const cor_selecionado = '#dffade' //#d7eaf5'
		const cor_disponivel = '#edfafc'

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
