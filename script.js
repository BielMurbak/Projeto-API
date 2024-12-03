
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

//logica pra mudar de cor o site

  const darkModeToggle = document.getElementById('darkmode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  });


//logica pra abrir mais opcoes de ver as tarefas 

const seta = document.getElementById('seta');
const aftherClick = document.getElementById("afterClick");

seta.addEventListener('click', function () {
 
  seta.classList.toggle('active');
  

  
  if (seta.classList.contains('active')) {
    aftherClick.style.display = 'block'; 
  } else {
    aftherClick.style.display = 'none';
  }
});






