function Cadastrar() {
    var email = document.getElementById('email-input-cadastro').value;
    var caixatextoCadastro = document.getElementById('msg-erro-cadastro');
    var senha = document.getElementById('password-input-cadastro').value;
  
    if (localStorage.getItem(email) !== null) {
      caixatextoCadastro.innerHTML = 'Usuário Já Cadastrado';
      return;
    }
  
    localStorage.setItem(email, senha);
    caixatextoCadastro.innerHTML = 'Cadastro Realizado';
    setTimeout(function() {
      window.location.href = '../html/index1.html'
    },1000);
    
  }
  
  function Login() {
    var emailLogin = document.getElementById('email-input-login').value;
    var senhaLogin = document.getElementById('password-input-login').value;
    var caixatextoLogin = document.getElementById('msg-erro-login');
  
    if (localStorage.getItem(emailLogin) === null) {
      caixatextoLogin.innerHTML = 'Usuário não encontrado';
      return;
    }
  
    if (localStorage.getItem(emailLogin) !== senhaLogin) {
      caixatextoLogin.innerHTML = 'Senha Incorreta';
      return;
    }
  
    caixatextoLogin.innerHTML = 'Login Realizado';
    window.location.href = '../html/index3.html'
    
  }

  