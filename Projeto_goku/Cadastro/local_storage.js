(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    saveUserData();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    function saveUserData() {
        var userData = {
            Nome: document.getElementById('validationCustom01').value,
            Sobrenome: document.getElementById('validationCustom02').value,
            Email: document.getElementById('inputEmail3').value,
            Senha: document.getElementById('inputPassword5').value
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Dados salvos com sucesso!');
        window.location.href = '/Login/Login.html';
            return false;
    }
    
})();