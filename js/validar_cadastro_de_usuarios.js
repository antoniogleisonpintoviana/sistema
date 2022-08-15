//validar cadastro de usuarios
var nome = document.getElementById('nome');
var senha = document.getElementById('senha');
var usuario = document.getElementById('usuario');
var tipo = document.getElementById('senha');

var cadastrar = document.getElementById('btn-cadastrar');

function validar() {
    
    if(nome.value === '' || usuario.value === '' || senha.value === ''){
        alert("Um ou mais campo obrigatórios não foram preenchidos");
    }
    
    if(nome.value === ''){
        nome.focus();
    }
    
    if(usuario.value === ''){
        usuario.focus();
    }
    
    if(senha.value === ''){
        senha.focus();
    }
    
    if(tipo.value === ''){
        tipo.focus();
    }
    



}

cadastrar.addEventListener("click", validar);


