(function() {

    var loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
  
        var userData = JSON.parse(sessionStorage.getItem('userData'));
  
        if (userData && userData.Email === email && userData.Senha === password) {
            alert('Login bem sucedido!');
            
            window.location.href = '/Main/index.html';
        } else {
            alert('Credenciais inválidas. Por favor, tente novamente.');
        }
    });
  })();
  