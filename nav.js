
    // 1. Espera o HTML carregar antes de rodar o script
    window.addEventListener('DOMContentLoaded', () => {

        // 2. Seleciona a barra de navegação
        const navBar = document.querySelector('.nav-bar');

        // 3. Define a função que verifica a rolagem
        const onScroll = () => {
            
            // 4. Pega a posição atual da rolagem vertical
            const scrollPosition = window.scrollY;

            // 5. Verifica se rolou mais que 20px
            if (scrollPosition > 200) {
                // Se sim, adiciona a classe "scrolled"
                navBar.classList.add('scrolled');
            } else {
                // Se não (voltou ao topo), remove a classe
                navBar.classList.remove('scrolled');
            }
        };

        // 6. "Ouve" o evento de rolagem na janela
        window.addEventListener('scroll', onScroll);

    });
