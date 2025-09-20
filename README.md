# 🛒 Carrinho de Compras

> **⚠️ Em Desenvolvimento ⚠️**
>
> Este projeto ainda não foi finalizado. Novas funcionalidades e melhorias serão adicionadas em breve.

Este projeto é uma simulação de um carrinho de compras interativo. A aplicação permite que o usuário selecione produtos de uma lista, defina a quantidade desejada e adicione ao carrinho, que calcula o subtotal de cada item e o valor total da compra em tempo real.

## ✨ Funcionalidades

* **Adição de Produtos:** Permite selecionar um produto e a quantidade para adicionar ao carrinho.
* **Cálculo Automático:** O valor total é atualizado automaticamente a cada produto adicionado.
* **Agrupamento de Itens:** Se um produto já existente for adicionado novamente, o sistema apenas atualiza a quantidade e o subtotal, em vez de criar uma nova entrada.
* **Limpeza do Carrinho:** Um botão "Limpar" esvazia completamente o carrinho e zera o valor total.
* **Feedback Visual:** A imagem de destaque na página é alterada dinamicamente conforme o produto selecionado na lista.

## 🧠 Principais Aprendizados

Durante o desenvolvimento deste projeto, os seguintes conceitos foram aplicados e aprofundados:

* **Manipulação Avançada do DOM:** Criação (`createElement`), adição (`appendChild`) e leitura de elementos HTML para construir a lista de produtos do carrinho de forma dinâmica.
* **Lógica de Programação:** Implementação de funções para calcular subtotais e o total, além de lógica condicional para verificar se um item já existe no carrinho.
* **Manipulação de Strings e Tipos:** Extração de informações (nome e preço) a partir de strings e conversão de tipos de dados (`parseInt`, `parseFloat`) para realizar cálculos.
* **Formatação de Moeda:** Uso do método `toLocaleString('pt-BR', ...)` para formatar os valores monetários corretamente para o padrão brasileiro.
* **Validação de Entradas:** Verificação para garantir que o usuário selecione um produto e insira uma quantidade válida
