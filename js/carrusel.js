document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    // Clonar primeiro e último item
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[items.length - 1].cloneNode(true);
    container.appendChild(firstClone);
    container.insertBefore(lastClone, items[0]);

    const newItems = document.querySelectorAll('.carousel-item');
    let index = 1;
    let isAnimating = false;
    let slideWidth;

    // Esperar o carregamento completo (para garantir offsetWidth correto)
    window.addEventListener("load", () => {
        const slideStyle = getComputedStyle(newItems[0]);
        const gap = parseInt(slideStyle.marginRight) || 0;
        slideWidth = newItems[0].offsetWidth + gap;

        // Posição inicial
        container.style.transform = `translateX(-${slideWidth * index}px)`;

        function moveToSlide(i) {
            if (isAnimating) return;
            isAnimating = true;
            container.style.transition = "transform 0.6s ease-in-out";
            container.style.transform = `translateX(-${slideWidth * i}px)`;
            index = i;

            setTimeout(() => {
                isAnimating = false;
                checkLoopBoundary();
            }, 600);
        }

        function checkLoopBoundary() {
            if (index >= newItems.length - 1) {
                container.style.transition = "none";
                index = 1;
                container.style.transform = `translateX(-${slideWidth * index}px)`;
            } else if (index <= 0) {
                container.style.transition = "none";
                index = newItems.length - 2;
                container.style.transform = `translateX(-${slideWidth * index}px)`;
            }
        }

        function nextSlide() {
            moveToSlide(index + 1);
        }

        function prevSlide() {
            moveToSlide(index - 1);
        }

        // Botões
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);

        // Auto play
        let autoPlay = setInterval(nextSlide, 5000);

        // Pausar autoplay ao passar o mouse
        container.addEventListener('mouseenter', () => clearInterval(autoPlay));
        container.addEventListener('mouseleave', () => {
            autoPlay = setInterval(nextSlide, 5000);
        });

        // === SUPORTE A TOQUE (SWIPE) ===
        let startX = 0;
        let endX = 0;

        container.addEventListener("touchstart", e => {
            startX = e.touches[0].clientX;
        });

        container.addEventListener("touchmove", e => {
            endX = e.touches[0].clientX;
        });

        container.addEventListener("touchend", () => {
            const diff = startX - endX;
            if (Math.abs(diff) > 50) { // deslize mínimo para acionar
                if (diff > 0) {
                    nextSlide(); // deslizou para a esquerda
                } else {
                    prevSlide(); // deslizou para a direita
                }
            }
        });
    });
});
