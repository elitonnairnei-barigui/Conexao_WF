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



	

	/////////////////////////////////////////
		// 1. Localiza a linha (tr) dentro da tabela TABLEEMPRESAMARCA
		const linha = document.querySelector('#TABLEEMPRESAMARCA tr');
		
		if (linha) {
		    // 2. Cria a nova célula <td>
		    const novoTd = document.createElement('td');
		    
		    // 3. Define o conteúdo que vai dentro dela (pode ser texto ou HTML)
		    novoTd.innerHTML = '<span>Empresa CNPJ</span>'; 
		    
			// 4. Insere a nova <td> no final da <tr>
		    linha.appendChild(novoTd);
			
			///////////////////////////////////////////////////////////
			const novoEmpresaCNPJ = `<select id="meuSelectCustomizado">
			        <option value="0" selected="selected">Todas</option>
			        <option value="7">Teste1</option>
			        <option value="237">Teste2</option>
			        <option value="203">Teste3</option>
			        <option value="10">Teste4</option>
			        <option value="1">Teste5</option>
			    </select>`;
			linha.insertAdjacentHTML('beforeend', `<td>${novoEmpresaCNPJ}</td>`);
			///////////////////////////////////////////////////////////////
			console.log('teste Eliton........nnnn')
			function buscarTabela() {
			  const url = 'https://wf.grupobarigui.com.br/wp_empresacontrato.aspx';
			
			  GM_xmlhttpRequest({
			    method: "GET",
			    url: url,
			    onload: function (response) {
			      if (response.status >= 200 && response.status < 300) {
			        const htmlText = response.responseText;
			
			        // Parse do HTML retornado
			        const parser = new DOMParser();
			        const doc = parser.parseFromString(htmlText, 'text/html');
			
			        // Extração dos dados da tabela
			        const linhas = doc.querySelectorAll('table tr');
			        const dados = Array.from(linhas)
			          .map(linha => {
			            const colunas = linha.querySelectorAll('td, th');
			            return Array.from(colunas).map(col => col.textContent.replace(/\s+/g, ' ').trim());
			          })
			          .filter(linha => linha.length > 0 && linha.some(celula => celula !== ''));
			
			        console.log('✅ Dados extraídos via Userscript sem CORS:', dados);
			      } else {
			        console.error('❌ Erro na resposta HTTP:', response.status, response.statusText);
			      }
			    },
			    onerror: function (err) {
			      console.error('❌ Erro de rede ao buscar a tabela:', err);
			    }
			  });
			}
			
			// Chame a função após o carregamento seguro da página
			//buscarTabela();
			//linha.insertAdjacentHTM(
			
		    // (Opcional) Adicionar classes ou estilos na nova td:
		    // novoTd.className = 'minha-classe';
		    // novoTd.style.backgroundColor = '#4CAF50';
		}	
		// Configura para observar a inclusão/remoção de elementos filhos
		observer.observe(selecionado, { childList: true, subtree: true });
	}
	
})();
