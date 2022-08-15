

var usuario = document.getElementById('usuario');
var senha = document.getElementById('senha');
var acessar = document.getElementById('btnAcessar');

function validar() {

    
    if (usuario.value === '' || senha.value) {
        alert('Erro! campo usuário é campo senha são obrigatorio');
    }

    
}

acessar.addEventListener("click", validar);




