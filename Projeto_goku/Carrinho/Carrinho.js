window.onload = function() {
  let carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : {};
  let divCarrinho = document.getElementById('carrinho');
  const produtos = {
    produto1: 'Camisa Goku Adidas',
    produto2: 'Camisa Goku base',
    produto3: 'Camisa Goku preta',
    produto4: 'Camisa Goku Nike',
    produto5: 'Camisa Goku Estinto Superior',
    produto6: 'Camisa Goku Gt'
  };

  if (Object.keys(carrinho).length === 0) {
    let cardVazio = document.createElement('div');
    cardVazio.className = 'card';

    let cardBodyVazio = document.createElement('div');
    cardBodyVazio.className = 'card-body';

    let mensagemVazia = document.createElement('p');
    mensagemVazia.className = 'card-text';
    mensagemVazia.textContent = 'O carrinho está vazio';
    cardBodyVazio.appendChild(mensagemVazia);

    cardVazio.appendChild(cardBodyVazio);
    divCarrinho.appendChild(cardVazio);
  } else {
  for (let idProduto in carrinho) {
    let quantidade = carrinho[idProduto];

    let card = document.createElement('div');
    card.className = 'card';
  
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = produtos[idProduto];
    cardBody.appendChild(title);

    let text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = 'Quantidade: ' + quantidade;
    cardBody.appendChild(text);

    let btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover Produto';
    btnRemover.addEventListener('click', function() {
      if (carrinho[idProduto] > 1) {
        carrinho[idProduto]--;
      } else {
        delete carrinho[idProduto];
      }
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      location.reload();
    });
    cardBody.appendChild(btnRemover);

    card.appendChild(cardBody);
    divCarrinho.appendChild(card);
  }
  }
  const valorTotalCarrinho = calcularValorTotal();
  const elementoValorTotal = document.getElementById('valorTotal');
  elementoValorTotal.textContent = 'R$' + valorTotalCarrinho.toFixed(2);
}

const precos = {
  'produto1': 49.90,
  'produto2': 49.90,
  'produto3': 49.90,
  'produto4': 49.90,
  'produto5': 49.90,
  'produto6': 49.90
};

function calcularValorTotal() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho'));
  let valorTotal = 0;
  for (let idProduto in carrinho) {
    if (precos[idProduto]) {
      valorTotal += carrinho[idProduto] * precos[idProduto];
    }
  }
  return valorTotal;
}

