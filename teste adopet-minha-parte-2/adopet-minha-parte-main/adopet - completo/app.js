localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('password', JSON.stringify(password));

const usuario = document.getElementById('username').value; 
const senha = document.getElementById('password ').value;
var struser;
var strpassowrd;

function pegadados () {

    usuario = document.getElementById('username').value;
    senha = document.getElementById('password').value;
}

function ledados () {
    struser = localStorage.getItem('usuario');
    strpassword = localStorage.getItem('senha')
}


document.getElementById('login').addEventListener ('click', pegadados, ledados);

if (usuario == struser && senha == strpassowrd ){
    
}





