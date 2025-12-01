// DADOS (Simulando um banco de dados)
const servicosData = [
    { icon: 'fa-hands-holding-circle', title: 'Preparação', desc: 'Cuidado completo com tanatopraxia e vestimenta.' },
    { icon: 'fa-truck-medical', title: 'Transporte', desc: 'Traslado local e regional com veículos regularizados.' },
    { icon: 'fa-spa', title: 'Coroas de Flores', desc: 'Homenagens tradicionais com respeito e beleza.' }
];

const urnasData = [
    { title: 'Modelo Standard', desc: 'Acabamento em verniz simples.', tag: 'Reflorestada', color: 'from-gray-700 to-gray-900' },
    { title: 'Modelo Nogueira', desc: 'Acabamento clássico e robusto.', tag: 'Madeira Maciça', color: 'from-amber-900 to-amber-950' },
    { title: 'Modelo Luxo', desc: 'Visor completo e alças de metal.', tag: 'Premium', color: 'from-slate-600 to-slate-800' },
    { title: 'Modelo Infantil', desc: 'Delicadeza e serenidade.', tag: 'Branco Laqueado', color: 'bg-white', iconColor: 'text-gray-300' }
];

// --- COMPONENTES (Funções que retornam Strings de HTML) ---

const getHeroSection = () => `
    <header class="relative py-20 lg:py-32 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Respeito e Dignidade <br />
            <span class="text-amber-400 text-3xl md:text-5xl mt-2 block">Nos Momentos Difíceis</span>
        </h1>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Servindo as famílias de Brasiléia, Acre, com compaixão.
        </p>
        <div class="mt-10 flex justify-center gap-4">
            <button onclick="router('contato')" class="btn-gold px-8 py-3 rounded-full text-lg shadow-lg">Atendimento</button>
        </div>
    </header>
`;

// Exemplo de construção manual usando map para performance
const getServicesSection = () => {
    const cards = servicosData.map(s => `
        <div class="glass-card p-8 text-center">
            <div class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400 text-2xl">
                <i class="fa-solid ${s.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">${s.title}</h3>
            <p class="text-blue-200 text-sm">${s.desc}</p>
        </div>
    `).join('');

    return `
        <section class="py-16 max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-white mb-12 text-center">Nossos Serviços</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${cards}</div>
        </section>
    `;
};

// --- USO DO DOCUMENT FRAGMENT (Técnica Solicitada) ---
// Vamos usar o fragment para montar a lista de Urnas de forma performática
const createUrnasSection = () => {
    const section = document.createElement('section');
    section.className = 'py-16 glass-panel mx-4 md:mx-auto max-w-7xl mb-16 px-6';
    
    // Cabeçalho da seção
    const headerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-4">Urnas Disponíveis</h2>
            <p class="text-blue-200">Trabalhamos com diversos modelos de alta qualidade.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="urnas-grid"></div>
    `;
    section.innerHTML = headerHTML;

    // Criando o Fragmento
    const fragment = document.createDocumentFragment();
    const gridContainer = section.querySelector('#urnas-grid');

    urnasData.forEach(u => {
        const card = document.createElement('div');
        card.className = 'glass-card overflow-hidden group';
        const iconColor = u.iconColor || 'text-white/20';
        
        card.innerHTML = `
            <div class="h-48 ${u.color.includes('gradient') ? 'bg-gradient-to-br' : ''} ${u.color} flex items-center justify-center relative">
                <i class="fa-solid fa-box-open text-6xl ${iconColor} group-hover:scale-110 transition-transform duration-500"></i>
            </div>
            <div class="p-4">
                <h4 class="text-lg font-bold text-white">${u.title}</h4>
                <p class="text-sm text-blue-200 mb-2">${u.desc}</p>
                <span class="text-amber-400 text-sm font-bold">${u.tag}</span>
            </div>
        `;
        // Adiciona ao fragmento (ainda não está na tela)
        fragment.appendChild(card);
    });

    // Injeta tudo de uma vez no DOM (Reflow único = Performance)
    gridContainer.appendChild(fragment);
    
    return section;
};

// --- ROTEAMENTO E RENDERIZAÇÃO ---

const pages = {
    home: () => {
        const container = document.createDocumentFragment();
        
        // Converte strings HTML em elementos reais
        const heroDiv = document.createElement('div');
        heroDiv.innerHTML = getHeroSection();
        container.appendChild(heroDiv);

        const servicosDiv = document.createElement('div');
        servicosDiv.innerHTML = getServicesSection();
        container.appendChild(servicosDiv);

        // Adiciona a seção de urnas (que já retorna um elemento DOM)
        container.appendChild(createUrnasSection());

        return container;
    },
    sobre: () => {
        const div = document.createElement('div');
        div.className = "max-w-5xl mx-auto px-4 py-16";
        div.innerHTML = `
            <div class="glass-panel p-8 md:p-12">
                <h2 class="text-4xl font-bold text-white mb-8">Nossa História</h2>
                <p class="text-blue-100 mb-6">A Funerária Cristo Rei em Brasiléia...</p>
                </div>
        `;
        return div;
    },
    molduras: () => {
        const div = document.createElement('div');
        div.innerHTML = `<h1 class="text-center text-white text-4xl mt-20">Página de Molduras</h1>`;
        return div;
    },
    contato: () => {
        const div = document.createElement('div');
        div.innerHTML = `<h1 class="text-center text-white text-4xl mt-20">Fale Conosco</h1>`;
        return div;
    }
};

const router = (pageName) => {
    const appContainer = document.getElementById('app-container');
    
    // 1. Limpa o container atual
    appContainer.innerHTML = '';
    
    // 2. Verifica se a página existe, senão vai para home
    const renderFn = pages[pageName] || pages['home'];
    
    // 3. Executa a função da página que retorna o Fragmento ou Elemento
    const content = renderFn();
    
    // 4. Inserção única no DOM
    appContainer.appendChild(content);

    // 5. Atualiza Menu e Scroll
    updateActiveMenu(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updateActiveMenu = (pageName) => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageName) link.classList.add('active');
    });
};

const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    router('home');
});
