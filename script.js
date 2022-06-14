function logar() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  if (email == "admin@gmail.com" && senha == "admin") {
    alert("Sucesso");
  } else {
    alert("Usúario ou senha incorretos, favor tentar novamente");
  }
}
