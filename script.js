// --- DADOS (Mantidos, apenas ajuste visual na renderização) ---
const servicosData = [
    { icon: 'fa-hands-holding-circle', title: 'Preparação e Higienização', desc: 'Cuidado completo com a preparação do corpo, vestimenta e tanatopraxia com o máximo respeito.' },
    { icon: 'fa-truck-medical', title: 'Transporte Funerário', desc: 'Traslado local e regional com veículos adaptados e regularizados para garantir segurança.' },
    { icon: 'fa-spa', title: 'Coroas de Flores', desc: 'Belas homenagens através de coroas de flores tradicionais.' }
];

const urnasData = [
    { title: 'Modelo Standard', desc: 'Acabamento em verniz simples.', tag: 'Madeira Reflorestada', color: 'bg-slate-100', iconColor: 'text-slate-300' },
    { title: 'Modelo Nogueira', desc: 'Acabamento clássico e robusto.', tag: 'Madeira Maciça', color: 'bg-amber-50', iconColor: 'text-amber-200' },
    { title: 'Modelo Luxo', desc: 'Visor completo e alças de metal.', tag: 'Acabamento Premium', color: 'bg-slate-200', iconColor: 'text-slate-400' },
    { title: 'Modelo Infantil', desc: 'Delicadeza e serenidade.', tag: 'Branco Laqueado', color: 'bg-white border border-slate-100', iconColor: 'text-slate-200' }
];

const moldurasData = [
    { title: 'Porcelana 10x10', size: '10cm x 10cm', format: 'Quadrado', desc: 'Ideal para lápides menores.', cssAspect: 'w-32 h-32' },
    { title: 'Porcelana 10x15', size: '10cm x 15cm', format: 'Retangular', desc: 'Formato clássico busto.', cssAspect: 'w-32 h-48' },
    { title: 'Porcelana 15x15', size: '15cm x 15cm', format: 'Quadrado', desc: 'Tamanho médio brilhante.', cssAspect: 'w-40 h-40' },
    { title: 'Porcelana 20x20', size: '20cm x 20cm', format: 'Quadrado', desc: 'Grande destaque.', cssAspect: 'w-48 h-48' },
    { title: 'Porcelana 20x30', size: '20cm x 30cm', format: 'Retangular', desc: 'Formato especial grande.', cssAspect: 'w-40 h-60' }
];

// --- COMPONENTES (Tema Claro - Baseado na Logo) ---

const getHeroSection = () => `
    <header class="relative py-20 lg:py-28 text-center overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <h1 class="text-4xl md:text-6xl font-extrabold text-[#004aad] mb-6 leading-tight tracking-tight">
                Respeito e Dignidade <br />
                <span class="text-slate-800 text-3xl md:text-5xl mt-2 block font-light">Nos Momentos Difíceis</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-600 font-medium">
                Servindo as famílias de Brasiléia, Acre, com a serenidade que você precisa.
            </p>
            <div class="mt-10 flex justify-center gap-4">
                <button onclick="router('contato')" class="btn-primary px-8 py-3 rounded-full text-lg shadow-lg">
                    Atendimento Imediato
                </button>
                <button onclick="scrollToPlanos()" class="btn-outline px-8 py-3 rounded-full text-lg">
                    Conhecer Plano
                </button>
            </div>
        </div>
    </header>
`;

const getServicesSection = () => {
    const cards = servicosData.map(s => `
        <div class="glass-card p-8 text-center border-t-4 border-[#004aad]">
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#004aad] text-3xl shadow-inner">
                <i class="fa-solid ${s.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[#004aad] uppercase">${s.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">${s.desc}</p>
        </div>
    `).join('');

    return `
        <section class="py-16 bg-white/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-extrabold text-slate-800 mb-4">Nossos Serviços</h2>
                    <div class="w-16 h-1.5 bg-[#004aad] mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">${cards}</div>
            </div>
        </section>
    `;
};

const getPlanosSection = () => `
    <section id="planos" class="py-16 max-w-4xl mx-auto px-4">
        <div class="glass-panel p-8 md:p-12 relative overflow-hidden text-center bg-white border border-blue-100 shadow-xl">
            <div class="absolute top-0 right-0 p-4 opacity-5 text-9xl text-[#004aad]">
                <i class="fa-solid fa-shield-heart"></i>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#004aad] mb-2 uppercase">Plano Proteção Familiar</h2>
            <h3 class="text-xl text-slate-500 mb-8 font-light tracking-widest">CRISTO REI</h3>
            
            <p class="text-slate-600 mb-8 max-w-2xl mx-auto">
                Garanta a tranquilidade da sua família. Cobertura completa sem burocracias.
            </p>
            
            <ul class="text-left max-w-lg mx-auto space-y-4 mb-10 text-slate-700 font-medium">
                <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3"></i> Urna mortuária padrão luxo</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3"></i> Ornamentação completa</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3"></i> Translado (Município)</li>
                <li class="flex items-center"><i class="fa-solid fa-check text-green-500 mr-3"></i> Assistência burocrática</li>
            </ul>
            
            <button onclick="router('contato')" class="btn-primary px-12 py-4 rounded-lg font-bold text-lg w-full md:w-auto shadow-blue-900/20">
                Contratar Agora
            </button>
        </div>
    </section>
`;

const createUrnasSection = () => {
    const section = document.createElement('section');
    section.className = 'py-16 mx-4 md:mx-auto max-w-7xl mb-16';
    section.innerHTML = `
        <div class="px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-slate-800 mb-4">Urnas Disponíveis</h2>
                <p class="text-slate-500">Modelos de alta qualidade selecionados para você.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="urnas-grid"></div>
        </div>
    `;

    const fragment = document.createDocumentFragment();
    const grid = section.querySelector('#urnas-grid');

    urnasData.forEach(u => {
        const div = document.createElement('div');
        div.className = 'glass-card overflow-hidden group bg-white';
        
        div.innerHTML = `
            <div class="h-48 ${u.color} flex items-center justify-center relative border-b border-slate-100">
                <i class="fa-solid fa-box-open text-6xl ${u.iconColor} group-hover:scale-110 transition-transform duration-500"></i>
                <span class="absolute bottom-2 right-2 text-xs text-slate-400">Ilustrativo</span>
            </div>
            <div class="p-5">
                <h4 class="text-lg font-bold text-[#004aad]">${u.title}</h4>
                <p class="text-sm text-slate-500 mb-3">${u.desc}</p>
                <span class="inline-block bg-blue-50 text-[#004aad] text-xs font-bold px-2 py-1 rounded">${u.tag}</span>
            </div>
        `;
        fragment.appendChild(div);
    });

    grid.appendChild(fragment);
    return section;
};

const createMoldurasPage = () => {
    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 py-16 page-section fade-in';
    
    container.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-[#004aad] mb-4">Porcelanas para Túmulos</h2>
            <p class="text-xl text-slate-600 max-w-2xl mx-auto">
                Sublimação digital de alta durabilidade. Elegância eterna.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="molduras-grid"></div>
    `;

    const fragment = document.createDocumentFragment();
    const grid = container.querySelector('#molduras-grid');

    moldurasData.forEach(m => {
        const card = document.createElement('div');
        card.className = 'glass-card p-6 flex flex-col items-center text-center bg-white';
        
        card.innerHTML = `
            <div class="${m.cssAspect} bg-white shadow-2xl mb-8 flex items-center justify-center relative border-[6px] border-slate-200 rounded-sm">
                <div class="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-2 opacity-50">
                    <i class="fa-solid fa-image text-slate-300 text-3xl mb-1"></i>
                    <span class="text-slate-400 text-xs font-serif italic">Foto</span>
                </div>
            </div>
            
            <h3 class="text-xl font-bold text-slate-800">${m.title}</h3>
            <p class="text-[#004aad] font-bold mb-1">${m.size}</p>
            <p class="text-xs text-slate-400 uppercase tracking-widest mb-3">Sublimação Digital</p>
            <p class="text-sm text-slate-600 mb-6">${m.desc}</p>
            
            <button onclick="router('contato')" class="btn-outline px-6 py-2 rounded-full text-sm mt-auto w-full hover:shadow-lg">
                Orçamento
            </button>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    return container;
};

// --- PÁGINAS E ROTEAMENTO ---

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
                <div class="glass-panel p-8 md:p-12 bg-white">
                    <h2 class="text-4xl font-extrabold text-[#004aad] mb-8 border-b-2 border-blue-50 pb-4">Nossa História</h2>
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p class="text-slate-600 mb-6 leading-relaxed text-lg">
                                Localizada na acolhedora cidade de <strong>Brasiléia, Acre</strong>, a Funerária Cristo Rei traz uma abordagem moderna e respeitosa.
                            </p>
                            <p class="text-slate-600 mb-6 leading-relaxed">
                                Nossa missão é simplificar o momento mais difícil, cuidando de toda a burocracia e logística com transparência total.
                            </p>
                        </div>
                        <div class="h-64 md:h-full bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 relative overflow-hidden">
                            <i class="fa-solid fa-map-location-dot text-6xl text-[#004aad] opacity-20"></i>
                            <div class="absolute bottom-4 text-center w-full">
                                <span class="text-[#004aad] font-bold tracking-widest uppercase text-sm">Brasiléia - AC</span>
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
             <div class="glass-panel p-8 text-center bg-white">
                <h2 class="text-3xl font-extrabold text-[#004aad] mb-8">Entre em Contato</h2>
                <div class="grid md:grid-cols-2 gap-12 text-left">
                    <div>
                        <div class="mb-8">
                            <h3 class="text-slate-800 font-bold mb-1 text-lg">Endereço</h3>
                            <p class="text-slate-600">Brasiléia, AC<br><span class="text-green-600 font-bold text-sm">● Atendimento 24h</span></p>
                        </div>
                        <div>
                            <h3 class="text-slate-800 font-bold mb-1 text-lg">Telefones</h3>
                            <p class="text-slate-600 text-lg">(68) 9999-9999</p>
                            <p class="text-slate-600 text-lg">(68) 3546-0000</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-[#004aad] font-bold mb-4">Envie uma mensagem</h3>
                        <form onsubmit="event.preventDefault(); alert('Mensagem enviada!')" class="space-y-4">
                            <input type="text" placeholder="Seu Nome" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] outline-none transition">
                            <input type="tel" placeholder="Seu Telefone" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] outline-none transition">
                            <textarea placeholder="Como podemos ajudar?" rows="3" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad] outline-none transition"></textarea>
                            <button class="btn-primary w-full py-4 rounded-lg font-bold shadow-lg">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
             </div>
        `;
        return div;
    }
};

// Roteador e Helpers
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
        setTimeout(() => { document.getElementById('planos').scrollIntoView({ behavior: 'smooth' }); }, 100);
    } else {
        planosSection.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => router('home'));
