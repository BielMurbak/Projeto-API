document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-form").addEventListener("submit", function (event) {
      event.preventDefault(); 

      const email = document.getElementById("email").value.trim();

      if (email === "") {
          showError("O campo de email não pode estar vazio.");
          return;
      }

      verificarEmail(email);  // Função para verificar o email
  });
});

function verificarEmail(email) {
  const url = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/People";

  fetch(url)
      .then((response) => {
          if (!response.ok) {
              throw new Error("Erro ao conectar com o servidor.");
          }
          return response.json();
      })
      .then((data) => {
          const emailExistente = data.some((pessoa) => pessoa.Email === email); // Verifica se o email existe na lista

          if (emailExistente) {
              window.location.href = "taskBoard.html";  
             

          } else {
              showError("Email não encontrado ou inválido.");
          }
      })
      .catch((error) => {
          showError("Erro ao conectar com o servidor.");
          console.error(error);
      });
}

// Função para exibir a mensagem de erro
function showError(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block"; // Exibe a mensagem de erro
}



function listarEmails() {
const url = "https://personal-ga2xwx9j.outsystemscloud.com/TaskBoard_CS/rest/TaskBoard/People";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao conectar com o servidor.");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Emails disponíveis na API:");
    data.forEach((pessoa) => {
      console.log(pessoa.email); // Mostra os emails no console
    });
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
}

// Chama a função para listar os emails
listarEmails();


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









