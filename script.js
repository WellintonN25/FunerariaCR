// --- DADOS DO SISTEMA ---

const servicosData = [
    { icon: 'fa-hands-holding-circle', title: 'Preparação', desc: 'Cuidado completo com tanatopraxia e vestimenta.' },
    { icon: 'fa-truck-medical', title: 'Transporte', desc: 'Traslado local e regional com veículos regularizados.' },
    { icon: 'fa-spa', title: 'Coroas de Flores', desc: 'Homenagens tradicionais com respeito e beleza.' }
];

// DADOS DAS URNAS (Com link para IMAGENS)
const urnasData = [
    { 
        title: 'Modelo Standard', 
        desc: 'Acabamento em verniz simples.', 
        tag: 'Madeira Reflorestada', 
        color: 'bg-slate-100', 
        iconColor: 'text-slate-300',
        // COLOQUE O LINK DA FOTO DA URNA ABAIXO
        image: 'https://via.placeholder.com/400x600/e2e8f0/004aad?text=Urna+Standard' 
    },
    { 
        title: 'Modelo Nogueira', 
        desc: 'Acabamento clássico e robusto.', 
        tag: 'Madeira Maciça', 
        color: 'bg-amber-50', 
        iconColor: 'text-amber-200',
        // COLOQUE O LINK DA FOTO DA URNA ABAIXO
        image: 'https://via.placeholder.com/400x600/fef3c7/b45309?text=Urna+Nogueira' 
    },
    { 
        title: 'Modelo Luxo', 
        desc: 'Visor completo e alças de metal.', 
        tag: 'Acabamento Premium', 
        color: 'bg-slate-200', 
        iconColor: 'text-slate-400',
        // COLOQUE O LINK DA FOTO DA URNA ABAIXO
        image: 'https://via.placeholder.com/400x600/cbd5e1/1e293b?text=Urna+Luxo' 
    },
    { 
        title: 'Modelo Infantil', 
        desc: 'Delicadeza e serenidade.', 
        tag: 'Branco Laqueado', 
        color: 'bg-white border border-slate-100', 
        iconColor: 'text-slate-200',
        // COLOQUE O LINK DA FOTO DA URNA ABAIXO
        image: 'https://via.placeholder.com/400x600/ffffff/94a3b8?text=Urna+Infantil' 
    }
];

const moldurasData = [
    { title: 'Porcelana 10x10', size: '10cm x 10cm', cssAspect: 'w-32 h-32', desc: 'Ideal para lápides menores.' },
    { title: 'Porcelana 10x15', size: '10cm x 15cm', cssAspect: 'w-32 h-48', desc: 'Formato clássico busto.' },
    { title: 'Porcelana 15x15', size: '15cm x 15cm', cssAspect: 'w-40 h-40', desc: 'Tamanho médio brilhante.' },
    { title: 'Porcelana 20x20', size: '20cm x 20cm', cssAspect: 'w-48 h-48', desc: 'Grande destaque.' },
    { title: 'Porcelana 20x30', size: '20cm x 30cm', cssAspect: 'w-40 h-60', desc: 'Formato especial grande.' }
];

// --- COMPONENTES ---

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
                <button onclick="router('contato')" class="btn-primary px-8 py-3 rounded-full text-lg shadow-lg">Atendimento</button>
                <button onclick="scrollToPlanos()" class="btn-outline px-8 py-3 rounded-full text-lg">Conhecer Plano</button>
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
    return `<section class="py-16 bg-white/50"><div class="max-w-7xl mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${cards}</div></div></section>`;
};

const getPlanosSection = () => `
    <section id="planos" class="py-16 max-w-4xl mx-auto px-4">
        <div class="glass-panel p-8 md:p-12 relative overflow-hidden text-center bg-white border border-blue-100 shadow-xl">
            <div class="absolute top-0 right-0 p-4 opacity-5 text-9xl text-[#004aad]"><i class="fa-solid fa-shield-heart"></i></div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#004aad] mb-2 uppercase">Plano Proteção Familiar</h2>
            <h3 class="text-xl text-slate-500 mb-8 font-light tracking-widest">CRISTO REI</h3>
            <p class="text-slate-600 mb-8 max-w-2xl mx-auto">Garanta a tranquilidade da sua família. Cobertura completa sem burocracias.</p>
            <button onclick="router('contato')" class="btn-primary px-12 py-4 rounded-lg font-bold text-lg w-full md:w-auto shadow-blue-900/20">Contratar Agora</button>
        </div>
    </section>
`;

// --- SEÇÃO DE URNAS COM GIRO 3D ---
const createUrnasSection = () => {
    const section = document.createElement('section');
    section.className = 'py-16 mx-4 md:mx-auto max-w-7xl mb-16';
    section.innerHTML = `
        <div class="px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-slate-800 mb-4">Urnas Disponíveis</h2>
                <p class="text-slate-500">Toque ou passe o mouse para ver a foto real.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="urnas-grid"></div>
        </div>
    `;

    const fragment = document.createDocumentFragment();
    const grid = section.querySelector('#urnas-grid');

    urnasData.forEach(u => {
        // CENA 3D
        const scene = document.createElement('div');
        scene.className = 'flip-scene h-80 cursor-pointer group'; 
        
        // Clique no Mobile para Girar
        scene.onclick = function() { this.classList.toggle('is-flipped-mobile'); };

        scene.innerHTML = `
            <div class="flip-card">
                <div class="flip-card-face flip-card-front glass-card ${u.color} flex flex-col justify-between overflow-hidden">
                    <div class="h-40 flex items-center justify-center relative border-b border-slate-100/50">
                        <i class="fa-solid fa-box-open text-6xl ${u.iconColor} opacity-50"></i>
                        <span class="absolute bottom-2 right-2 text-xs text-slate-400">Ver Foto <i class="fa-solid fa-rotate ml-1"></i></span>
                    </div>
                    <div class="p-5">
                        <h4 class="text-lg font-bold text-[#004aad]">${u.title}</h4>
                        <p class="text-sm text-slate-500 mb-3">${u.desc}</p>
                        <span class="inline-block bg-white/80 text-[#004aad] text-xs font-bold px-2 py-1 rounded shadow-sm border border-blue-100">${u.tag}</span>
                    </div>
                </div>

                <div class="flip-card-face flip-card-back glass-card overflow-hidden relative">
                    <img src="${u.image}" alt="${u.title}" class="w-full h-full object-cover">
                    <div class="absolute bottom-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                        <p class="font-bold text-lg">${u.title}</p>
                        <p class="text-xs opacity-80">Toque para voltar</p>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(scene);
    });

    grid.appendChild(fragment);
    return section;
};

// --- MOLDURAS (Porcelana) ---
const createMoldurasPage = () => {
    const container = document.createElement('div');
    container.className = 'max-w-7xl mx-auto px-4 py-16 page-section fade-in';
    container.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl font-extrabold text-[#004aad] mb-4">Porcelanas para Túmulos</h2>
            <p class="text-xl text-slate-600 max-w-2xl mx-auto">Sublimação digital de alta durabilidade.</p>
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
            <p class="text-sm text-slate-600 mb-6">${m.desc}</p>
            <button onclick="router('contato')" class="btn-outline px-6 py-2 rounded-full text-sm mt-auto w-full hover:shadow-lg">Orçamento</button>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
    return container;
};

// --- ROTEAMENTO ---
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
                            <p class="text-slate-600 mb-6 leading-relaxed text-lg">Localizada na acolhedora cidade de <strong>Brasiléia, Acre</strong>, a Funerária Cristo Rei traz uma abordagem moderna e respeitosa, localizada na Av. José Rui Lino.</p>
                            <p class="text-slate-600 mb-6 leading-relaxed">Nossa missão é simplificar o momento mais difícil, cuidando de toda a burocracia.</p>
                        </div>
                        <div class="h-80 md:h-full bg-slate-100 rounded-xl overflow-hidden border border-blue-100 relative shadow-inner">
                            <iframe width="100%" height="100%" style="border:0;" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.633519896016!2d-68.749722!3d-11.016389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzU5LjAiUyA2OMKwNDQnNTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"></iframe>
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
                            <p class="text-slate-600">Av. José Rui Lino, nº 0902<br>Bairro Centro<br>Brasiléia - AC</p>
                            <span class="text-green-600 font-bold text-sm mt-2 block">● Atendimento 24h</span>
                        </div>
                        <div>
                            <h3 class="text-slate-800 font-bold mb-1 text-lg">Telefones</h3>
                            <p class="text-slate-600 text-lg">(68) 9999-9999</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-[#004aad] font-bold mb-4">Envie uma mensagem</h3>
                        <form onsubmit="event.preventDefault(); alert('Mensagem enviada!')" class="space-y-4">
                            <input type="text" placeholder="Seu Nome" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#004aad] outline-none">
                            <input type="tel" placeholder="Seu Telefone" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#004aad] outline-none">
                            <textarea placeholder="Mensagem" rows="3" class="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-[#004aad] outline-none"></textarea>
                            <button class="btn-primary w-full py-4 rounded-lg font-bold shadow-lg">Enviar Mensagem</button>
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

const toggleMobileMenu = () => document.getElementById('mobile-menu').classList.toggle('hidden');
const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos');
    if(!planosSection) {
        router('home');
        setTimeout(() => document.getElementById('planos').scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
        planosSection.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => router('home'));