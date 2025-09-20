function adicionar() {
    // 1. Recuperar valores
    let produtoSelect = document.getElementById("produto");
    let produtoTexto = produtoSelect.value;
    let quantidade = parseInt(document.getElementById("quantidade").value);

    // 2. Validar a entrada (com sua nova regra)
    if (!produtoTexto) {
        alert("Selecione um produto!");
        return;
    }
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Informe uma quantidade válida!");
        return;
    } else if (quantidade > 10) {
        alert("A quantidade máxima por produto é 10.");
        return;
    }

    // 3. Extrair nome e valor do produto (COM A CORREÇÃO do replace)
    let nome = produtoTexto.split(' - R$')[0];
    let valorUnitario = parseFloat(produtoTexto.split('R$')[1].replace(/\./g, '').replace(',', '.'));

    // 4. Procurar se o item JÁ EXISTE no carrinho
    let itemExistente = document.querySelector(`#lista-produtos .carrinho__produtos__produto[data-nome="${nome}"]`);

    if (itemExistente) {
        // 5. Se o item EXISTE, atualiza a quantidade e o subtotal
        let spanQuantidade = itemExistente.querySelector('.texto-azul');
        let quantidadeAtual = parseInt(spanQuantidade.textContent);
        let novaQuantidade = quantidadeAtual + quantidade;
        let subtotal = novaQuantidade * valorUnitario;

        // Formata o subtotal com o ponto de milhar (COM A CORREÇÃO do toLocaleString)
        let subtotalFormatado = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        // Usa a variável formatada
        itemExistente.innerHTML = `<span class="texto-azul">${novaQuantidade}x</span> ${nome} <span class="texto-azul">${subtotalFormatado}</span>`;

    } else {
        // 6. Se o item NÃO EXISTE, cria um novo
        let lista = document.getElementById('lista-produtos');
        let sec = document.createElement('section');
        sec.className = 'carrinho__produtos__produto';
        sec.setAttribute('data-nome', nome);

        let subtotal = quantidade * valorUnitario;

        // Formata o subtotal com o ponto de milhar (COM A CORREÇÃO do toLocaleString)
        let subtotalFormatado = subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Usa a variável formatada
        sec.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">${subtotalFormatado}</span>`;
        lista.appendChild(sec);
    }

    // 7. Atualizar o valor total do carrinho
    atualizarValorTotal();

    // 8. Limpar campos após adicionar
    document.getElementById("quantidade").value = 1;
    produtoSelect.selectedIndex = 0;
}

function atualizarValorTotal() {
    let total = 0;
    let produtosNoCarrinho = document.querySelectorAll('#lista-produtos .carrinho__produtos__produto');

    produtosNoCarrinho.forEach(produto => {
        let textoPreco = produto.querySelector('span:last-child').textContent;
        
        // Usamos .replace(/\./g, '') para remover TODOS os pontos do número
        let valor = parseFloat(textoPreco.replace('R$', '').replace(/\./g, '').replace(',', '.'));

        // Se a conversão falhar por algum motivo, não adicionamos NaN ao total
        if (!isNaN(valor)) {
            total += valor;
        }
    });

    let campoTotal = document.getElementById('valor-total');
    // Adicionamos a formatação do Brasil para o total, para ficar consistente
    campoTotal.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function selectimg() {
    let produtoSelect = document.getElementById("produto");
    let opcaoSelecionada = produtoSelect.options[produtoSelect.selectedIndex];
    let classeDaImagem = opcaoSelecionada.dataset.imagemClasse;
    let containerImagem = document.querySelector(".conteudo-principal");

    containerImagem.className = 'conteudo-principal';
    
    if (classeDaImagem) {
        containerImagem.classList.add(classeDaImagem);
        console.log(`Classe adicionada: ${classeDaImagem}`);
    }
}

function limpar() {
	document.getElementById('lista-produtos').innerHTML = '';
	atualizarValorTotal();
}