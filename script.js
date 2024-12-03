
//logica para salvar gmail do usuario
function SalvarGmail(){
const gmail = document.getElementById('email').value.trim();  

if(gmail == ""){
    alert("O campo está vazio");
}

if (localStorage.getItem("gmail") === null) {
    localStorage.setItem("gmail", gmail);
    alert("Gmail criado e salvo com sucesso!");
    location.href = "taskBoard.html";
}

else{

  if(gmail == localStorage.getItem("gmail")){
    alert("gmail correto");
    location.href = "taskBoard.html";
  }else{
    alert("gmail incorreto");
  }

}
}
//fim da logica para salvar gmial do usuario


document.getElementById('trilho2').addEventListener('click', () => {
  console.log('Clique detectado!');
});