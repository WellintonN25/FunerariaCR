        function showPage(pageId) {
            // Esconde todas as seções
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Mostra a seção desejada
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
            }

            // Atualiza o estado ativo no menu
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Lógica simples para marcar o link clicado (pode ser melhorada)
                if(link.getAttribute('onclick').includes(pageId)) {
                    link.classList.add('active');
                }
            });

            // Rola para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }