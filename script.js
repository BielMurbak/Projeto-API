
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


    // Função para alternar o tema manualmente
    function toggleTheme() {
      const isDarkMode = document.getElementById('darkmode-toggle').checked;

      if (isDarkMode) {
          applyTheme('dark');
      } else {
          applyTheme('light');
      }
  }

  // Função para aplicar o tema
  function applyTheme(theme) {
      if (theme === 'dark') {
          document.body.classList.add('dark-theme');
          document.body.classList.remove('light-theme');
      } else if (theme === 'light') {
          document.body.classList.add('light-theme');
          document.body.classList.remove('dark-theme');
      }
      // Opcional: Salvar no localStorage
      localStorage.setItem('theme', theme);
  }

  // Função para carregar o tema salvo ou da API
  async function loadTheme() {
      try {
          // Recuperar tema salvo no localStorage
          const savedTheme = localStorage.getItem('theme');
          
          if (savedTheme) {
              applyTheme(savedTheme);
              document.getElementById('darkmode-toggle').checked = savedTheme === 'dark';
          } else {
              // Buscar tema pela API
              const response = await fetch('https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/Themes');
              const data = await response.json();
              const activeTheme = data.find(theme => theme.Is_Active);

              if (activeTheme) {
                  const themeLabel = activeTheme.Label.toLowerCase();
                  applyTheme(themeLabel);
                  document.getElementById('darkmode-toggle').checked = themeLabel === 'dark';
              }
          }
      } catch (error) {
          console.error('Erro ao carregar o tema:', error.message);
      }
  }

  // Adicionar evento ao checkbox
  document.getElementById('darkmode-toggle').addEventListener('change', toggleTheme);

  // Carregar tema ao iniciar a página
  loadTheme();


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






