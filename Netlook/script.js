const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const currentTheme = document.getElementById('currentTheme');
const selectedUserMessage = document.getElementById('selectedUser');
const userButtons = document.querySelectorAll('.user-select');

function setTheme(theme) {
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
    themeToggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
    currentTheme.textContent = `Tema atual: ${theme}`;
    localStorage.setItem('preferredTheme', theme);
}

function initTheme() {
    const stored = localStorage.getItem('preferredTheme');
    if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
        return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

// Atualiza cor do tema no texto do botão e status
const updateThemeLabel = () => {
  const isLight = body.classList.contains('light');
  themeToggle.textContent = isLight ? 'Modo escuro' : 'Modo claro';
  currentTheme.textContent = 'Tema atual: ' + (isLight ? 'claro' : 'escuro');
};

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  updateThemeLabel();
});

userButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.user').forEach((user) => user.classList.remove('selected'));
        button.closest('.user').classList.add('selected');

        const username = button.dataset.username || 'usuário';
        const profileImg = button.querySelector('img').src;
        
        // Salvar dados do perfil no localStorage
        localStorage.setItem('perfilAtivoNome', username);
        localStorage.setItem('perfilAtivoImagem', profileImg);
        
        selectedUserMessage.textContent = `Perfil selecionado: ${username}. Bem-vindo(a), ${username}!`;

        setTimeout(() => {
            selectedUserMessage.textContent = `Pronto para assistir como ${username}.`;
            // Redirecionar para o catálogo após uma breve espera
            setTimeout(() => {
                window.location.href = 'catalogo/catalogo.html';
            }, 500);
        }, 1400);
    });
});

initTheme();
updateThemeLabel();