import { getCategories, categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Gerenciar tema
function initTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('preferredTheme');
    
    function setTheme(theme) {
        body.classList.remove('light', 'dark');
        body.classList.add(theme);
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? 'Modo claro' : 'Modo escuro';
        }
        localStorage.setItem('preferredTheme', theme);
    }
    
    if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = body.classList.contains('dark') ? 'light' : 'dark';
            setTheme(next);
        });
    }
}

// Gerenciar abas de conteúdo
function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const container = document.getElementById('main-content');
    
    // Obter o perfil ativo
    const nomePerfil = localStorage.getItem('perfilAtivoNome') || 'Luís';
    console.log('Perfil ativo:', nomePerfil);
    
    const categoriesData = getCategories(nomePerfil);
    console.log('Dados de categorias:', categoriesData);

    function loadContent(tabType) {
        console.log('Carregando aba:', tabType);
        container.innerHTML = '';
        const items = categoriesData[tabType] || [];
        console.log(`Itens em ${tabType}:`, items);
        if (items.length === 0) {
            container.innerHTML = `<p style="text-align: center; padding: 40px;">Nenhum item disponível nesta seção.</p>`;
            return;
        }
        items.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
        localStorage.setItem('selectedTab', tabType);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabType = tab.dataset.tab;
            loadContent(tabType);
        });
    });

    // Carregar aba salva ou padrão
    const savedTab = localStorage.getItem('selectedTab') || 'filmes';
    const savedTabElement = document.querySelector(`[data-tab="${savedTab}"]`);
    if (savedTabElement) {
        savedTabElement.click();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const nomePerfil = localStorage.getItem('perfilAtivoNome');
        const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

        if (nomePerfil && imagemPerfil) {
            const kidsLink = document.querySelector('.kids-link');
            const profileIcon = document.querySelector('.profile-icon');
            
            if (kidsLink) kidsLink.textContent = nomePerfil;
            if (profileIcon) profileIcon.src = imagemPerfil;
        }

        // Inicializar tema
        initTheme();
        
        // Inicializar abas
        initTabs();
    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
    }
});
