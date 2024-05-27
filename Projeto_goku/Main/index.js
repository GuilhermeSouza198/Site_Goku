document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.card');

  function filterCards(searchTerm) {
    cards.forEach(function (card) {
      var title = card.querySelector('.card-title').textContent.trim().toLowerCase();
      var price = card.querySelector('.card-text').textContent.trim().toLowerCase();

      var matchesSearch = title.includes(searchTerm) || price.includes(searchTerm);

      card.style.display = matchesSearch ? '' : 'none';
    });
  }

  document.getElementById('searchInput').addEventListener('input', function (event) {
    var searchTerm = event.target.value.trim().toLowerCase();
    if (searchTerm === '') {
      cards.forEach(function (card) {
        card.style.display = '';
      });
    } else {
      filterCards(searchTerm);
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var cartItems = []; 


  function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice }); 
    updateCartDisplay();
  }


  function updateCartDisplay() {
    var cartDisplay = document.getElementById('cartDisplay');
    cartDisplay.innerHTML = ''; 


    cartItems.forEach(function(item) {
      var itemElement = document.createElement('li');
      itemElement.textContent = item.name + ' - R$ ' + item.price;
      cartDisplay.appendChild(itemElement);
    });
  }


  var addToCartButtons = document.querySelectorAll('.btn.btn-primary');
  addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      var card = event.target.closest('.card');
      var itemName = card.querySelector('.card-title').textContent.trim();
      var itemPrice = card.querySelector('.card-text').textContent.trim().replace('R$ ', ''); 

      addToCart(itemName, itemPrice); 
    });
  });
});

function adicionarAoCarrinho(idProduto) {
  let carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : {};
  carrinho[idProduto] = (carrinho[idProduto] || 0) + 1;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

window.adicionarAoCarrinho = function(idProduto) {
  let carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : {};
  carrinho[idProduto] = (carrinho[idProduto] || 0) + 1;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
  
  alert("Pedido adicionado ao carrinho");
  let quantidadeTotal = Object.values(carrinho).reduce((a, b) => a + b, 0);
  document.querySelector('.btn-cart .quantity').textContent = quantidadeTotal;
  
} 

document.addEventListener('DOMContentLoaded', function () {
  var btnCart = document.querySelector('.btn-cart');
  
  btnCart.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Button clicked');
    window.location.href = '/Carrinho/Carrinho.html';
  });
});
