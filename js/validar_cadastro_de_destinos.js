// validar formulário de destinos

var nome = document.getElementById('nome');
var sigla = document.getElementById('sigla');

var validar = document.getElementById('btn-cadastrar-destinos');

function validar() {

    if (nome.value === '' || sigla.value === '') {
        alert("Um ou mais campo obrigatórios não foram preenchidos");
    }
    
    if (sigla.value === '') {
        sigla.focus();
    }
    if (nome.value === '') {
        nome.focus();
    }

    

}

validar.addEventListener("click", validar);


