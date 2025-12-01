// --- BANCO DE DADOS (Simulado) ---

const servicosData = [
    { icon: 'fa-hands-holding-circle', title: 'Preparação e Higienização', desc: 'Cuidado completo com a preparação do corpo, vestimenta e tanatopraxia com o máximo respeito.' },
    { icon: 'fa-truck-medical', title: 'Transporte Funerário', desc: 'Traslado local e regional com veículos adaptados e regularizados para garantir segurança.' },
    { icon: 'fa-spa', title: 'Coroas de Flores', desc: 'Belas homenagens através de coroas de flores tradicionais.' }
];

const urnasData = [
    { title: 'Modelo Standard', desc: 'Acabamento em verniz simples.', tag: 'Madeira Reflorestada', color: 'from-gray-700 to-gray-900', iconColor: 'text-white/20' },
    { title: 'Modelo Nogueira', desc: 'Acabamento clássico e robusto.', tag: 'Madeira Maciça', color: 'from-amber-900 to-amber-950', iconColor: 'text-white/20' },
    { title: 'Modelo Luxo', desc: 'Visor completo e alças de metal.', tag: 'Acabamento Premium', color: 'from-slate-600 to-slate-800', iconColor: 'text-white/20' },
    { title: 'Modelo Infantil', desc: 'Delicadeza e serenidade.', tag: 'Branco Laqueado', color: 'bg-white', iconColor: 'text-gray-300' }
];

// ATUALIZADO: Apenas Porcelana / Sublimação
const moldurasData = [
    { 
        title: 'Porcelana 10x10', 
        size: '10cm x 10cm', 
        format: 'Quadrado',
        desc: 'Ideal para lápides menores ou composição com outras peças.',
        cssAspect: 'w-32 h-32' // Define o formato visual
    },
    { 
        title: 'Porcelana 10x15', 
        size: '10cm x 15cm', 
        format: 'Retangular',
        desc: 'O formato clássico, perfeito para fotos de busto/rosto.',
        cssAspect: 'w-32 h-48'
    },
    { 
        title: 'Porcelana 15x15', 
        size: '15cm x 15cm', 
        format: 'Quadrado',
        desc: 'Tamanho médio com ótima visibilidade e acabamento brilhante.',
        cssAspect: 'w-40 h-40'
    },
    { 
        title: 'Porcelana 20x20', 
        size: '20cm x 20cm', 
        format: 'Quadrado',
        desc: 'Grande destaque, permite fotos com maior nível de detalhes.',
        cssAspect: 'w-48 h-48'
    },
    { 
        title: 'Porcelana 20x30', 
        size: '20cm x 30cm', 
        format: 'Retangular',
        desc: 'Formato especial grande. Ideal para homenagens completas.',
        cssAspect: 'w-40 h-60'
    }
];

// --- COMPONENTES (Funções que geram HTML) ---

const getHeroSection = () => `
    <header class="relative py-20 lg:py-32 overflow-hidden text-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Respeito e Dignidade <br />
                <span class="text-amber-400 text-3xl md:text-5xl mt-2 block">Nos Momentos Difíceis</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
                Servindo as famílias de Brasiléia, Acre, com compaixão e profissionalismo.
            </p>
            <div class="mt-10 flex justify-center gap-4">
                <button onclick="router('contato')" class="btn-gold px-8 py-3 rounded-full text-lg shadow-lg">Atendimento Imediato</button>
                <button onclick="scrollToPlanos()" class="btn-glass px-8 py-3 rounded-full text-lg backdrop-blur-md">Conhecer Plano</button>
            </div>
        </div>
    </header>
`;

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
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
                    <div class="w-24 h-1 bg-amber-400 mx-auto rounded"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${cards}</div>
            </div>
        </section>
    `;
};

const getPlanosSection = () => `
    <section id="planos" class="py-16 max-w-4xl mx-auto px-4">
        <div class="glass-panel p-8 md:p-12 relative overflow-hidden text-center border-t-4 border-amber-400">
            <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl text-white">
                <i class="fa-solid fa-shield-heart"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">Plano Proteção Familiar</h2>
            <h3 class="text-xl text-amber-400 mb-8 font-light">Cristo Rei</h3>
            <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
                Garanta a tranquilidade da sua família com nosso plano exclusivo. Cobertura completa para que você não precise se preocupar com burocracias.
            </p>
            <ul class="text-left max-w-lg mx-auto space-y-4 mb-10 text-blue-100">
                <li class="flex items-center"><i class="fa-solid fa-check text-green-400 mr-3"></i> Urna mortuária padrão luxo</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-400 mr-3"></i> Ornamentação completa</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-400 mr-3"></i> Translado (dentro do município)</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-400 mr-3"></i> Assistência burocrática</li>
            </ul>
            <button onclick="router('contato')" class="btn-gold px-10 py-4 rounded-lg font-bold text-lg w-full md:w-auto">Contratar Agora</button>
        </div>
    </section>
`;

const createUrnasSection = () => {
    const section = document.createElement('section');
    section.className = 'py-16 glass-panel mx-4 md:mx-auto max-w-7xl mb-16';
    section.innerHTML = `
        <div class="px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-white mb-4">Urnas Disponíveis</h2>
                <p class="text-blue-200">Trabalhamos com diversos modelos de alta qualidade.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="urnas-grid"></div>
        </div>
    `;

    const fragment = document.createDocumentFragment();
    const grid = section.querySelector('#urnas-grid');

    urnasData.forEach(u => {
        const div = document.createElement('div');
        div.className = 'glass-card overflow-hidden group';
        const bgClass = u.color.includes('bg-') ? u.color : `bg-gradient-to-br ${u.color}`;
        
        div.innerHTML = `
            <div class="h-48 ${bgClass} flex items-center justify-center relative">
                <i class="fa-solid fa-box-open text-6xl ${u.iconColor} group-hover:scale-110 transition-transform duration-500"></i>
                <span class="absolute bottom-2 right-2 text-xs opacity-40 mix-blend-overlay">Imagem Ilustrativa</span>
            </div>
            <div class="p-4">
                <h4 class="text-lg font-bold text-white">${u.title}</h4>
                <p class="text-sm text-blue-200 mb-2">${u.desc}</p>
                <span class="text-amber-400 text-sm font-bold">${u.tag}</span>
            </div>
        `;
        fragment.appendChild(div);
    });

    grid.appendChild(fragment);
    return section;
};

// 2. MOLDURAS PAGE (ATUALIZADA)
const createMoldurasPage = () => {
    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 py-16 page-section fade-in';
    
    container.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-white mb-4">Porcelanas para Túmulos</h2>
            <p class="text-xl text-blue-200 max-w-2xl mx-auto">
                Eternize a memória com nossas peças em porcelana de alta durabilidade, feitas por sublimação digital.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="molduras-grid"></div>
    `;

    const fragment = document.createDocumentFragment();
    const grid = container.querySelector('#molduras-grid');

    moldurasData.forEach(m => {
        const card = document.createElement('div');
        card.className = 'glass-card p-6 flex flex-col items-center text-center';
        
        // Renderiza a "placa" visualmente com o formato correto
        card.innerHTML = `
            <div class="${m.cssAspect} bg-white shadow-xl mb-6 flex items-center justify-center relative border-4 border-gray-300">
                <div class="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-2">
                    <i class="fa-solid fa-image text-gray-400 text-2xl mb-1"></i>
                    <span class="text-gray-500 text-xs font-serif italic">Sua Foto Aqui</span>
                </div>
            </div>
            
            <h3 class="text-xl font-bold text-white">${m.title}</h3>
            <p class="text-amber-400 font-bold mb-1">${m.size}</p>
            <p class="text-xs text-blue-300 uppercase tracking-widest mb-3">Sublimação Digital</p>
            
            <p class="text-sm text-blue-200 mb-4">${m.desc}</p>
            
            <button onclick="router('contato')" class="btn-glass px-6 py-2 rounded-full text-sm mt-auto hover:bg-white/20">
                Solicitar Orçamento
            </button>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    return container;
};

// --- ROTEADOR ---

const pages = {
    home: () => {
        const container = document.createElement('div');
        container.className = 'fade-in';
        container.insertAdjacentHTML('beforeend', getHeroSection());
        container.insertAdjacentHTML('beforeend', getServicesSection());
        container.appendChild(createUrnasSection());
        container.insertAdjacentHTML('beforeend', getPlanosSection());
        return container;
    },
    sobre: () => {
        const div = document.createElement('div');
        div.className = "page-section fade-in";
        div.innerHTML = `
            <div class="max-w-5xl mx-auto px-4 py-16">
                <div class="glass-panel p-8 md:p-12">
                    <h2 class="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">Nossa História</h2>
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-blue-100 mb-6 leading-relaxed">
                                Localizada na acolhedora cidade de <strong>Brasiléia, Acre</strong>, a Funerária Cristo Rei nasceu com o propósito de oferecer amparo e dignidade.
                            </p>
                            <p class="text-blue-100 mb-6 leading-relaxed">
                                Cuidamos de todos os detalhes práticos e burocráticos para que a família possa se dedicar à despedida.
                            </p>
                        </div>
                        <div class="h-64 md:h-full bg-blue-900/30 rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden">
                            <i class="fa-solid fa-map-location-dot text-6xl text-white/20"></i>
                            <div class="absolute bottom-4 text-center w-full">
                                <span class="text-amber-400 font-bold tracking-widest uppercase">Brasiléia - AC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return div;
    },
    molduras: () => createMoldurasPage(),
    contato: () => {
        const div = document.createElement('div');
        div.className = "page-section fade-in max-w-4xl mx-auto px-4 py-16";
        div.innerHTML = `
             <div class="glass-panel p-8 text-center">
                <h2 class="text-3xl font-bold text-white mb-8">Entre em Contato</h2>
                <div class="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h3 class="text-amber-400 font-bold mb-2">Endereço</h3>
                        <p class="text-blue-200 mb-6">Brasiléia, AC<br>Atendimento 24h</p>
                        <h3 class="text-amber-400 font-bold mb-2">Telefones</h3>
                        <p class="text-blue-200 mb-6">(68) 9999-9999<br>(68) 3546-0000</p>
                    </div>
                    <div>
                        <h3 class="text-amber-400 font-bold mb-4">Envie uma mensagem</h3>
                        <form onsubmit="event.preventDefault(); alert('Mensagem enviada!')" class="space-y-4">
                            <input type="text" placeholder="Seu Nome" class="w-full p-3 rounded bg-blue-900/30 border border-blue-500/30 text-white focus:border-amber-400 outline-none">
                            <input type="tel" placeholder="Seu Telefone" class="w-full p-3 rounded bg-blue-900/30 border border-blue-500/30 text-white focus:border-amber-400 outline-none">
                            <textarea placeholder="Mensagem" rows="3" class="w-full p-3 rounded bg-blue-900/30 border border-blue-500/30 text-white focus:border-amber-400 outline-none"></textarea>
                            <button class="btn-gold w-full py-3 rounded font-bold">Enviar</button>
                        </form>
                    </div>
                </div>
             </div>
        `;
        return div;
    }
};

const router = (pageName) => {
    const appContainer = document.getElementById('app-container');
    appContainer.innerHTML = '';
    const renderFn = pages[pageName] || pages['home'];
    appContainer.appendChild(renderFn());
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageName) link.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const toggleMobileMenu = () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
};

const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos');
    if(!planosSection) {
        router('home');
        setTimeout(() => {
            document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        planosSection.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => router('home'));
