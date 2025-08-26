document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let index = 1; // começar no slide real
    const total = items.length;

    // Clonar primeiro e último
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[total - 1].cloneNode(true);

    container.appendChild(firstClone);
    container.insertBefore(lastClone, items[0]);

    const newItems = document.querySelectorAll('.carousel-item');
    const slideWidth = newItems[0].offsetWidth + 20; // largura + margin

    // Ajustar posição inicial
    container.style.transform = `translateX(-${slideWidth * index}px)`;

    function moveToSlide(i) {
        container.style.transition = "transform 0.6s ease-in-out";
        container.style.transform = `translateX(-${slideWidth * i}px)`;
        index = i;
    }

    // Botões
    nextBtn.addEventListener("click", () => {
        index++;
        moveToSlide(index);

        if (index >= newItems.length - 1) { 
            setTimeout(() => {
                container.style.transition = "none";
                index = 1; 
                container.style.transform = `translateX(-${slideWidth * index}px)`;
            }, 600);
        }
    });

    prevBtn.addEventListener("click", () => {
        index--;
        moveToSlide(index);

        if (index <= 0) {
            setTimeout(() => {
                container.style.transition = "none";
                index = newItems.length - 2; 
                container.style.transform = `translateX(-${slideWidth * index}px)`;
            }, 600);
        }
    });

    // Auto play
    setInterval(() => {
        index++;
        moveToSlide(index);

        if (index >= newItems.length - 1) { 
            setTimeout(() => {
                container.style.transition = "none";
                index = 1; 
                container.style.transform = `translateX(-${slideWidth * index}px)`;
            }, 600);
        }
    }, 5000);
});
