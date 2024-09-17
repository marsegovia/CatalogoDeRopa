
    // Seleccionamos todos los productos que contienen un slider
    const allProducts = document.querySelectorAll('.product');

    // Iteramos sobre cada producto
    allProducts.forEach(product => {
        let slideIndex = 0;
        const slides = product.querySelectorAll('.slides img');

        // Inicializamos la primera imagen del slider
        showSlide(slideIndex, slides);

        // Añadimos eventos a los botones prev y next de cada slider
        product.querySelector('.prev').addEventListener('click', () => {
            showPrevSlide();
        });

        product.querySelector('.next').addEventListener('click', () => {
            showNextSlide();
        });

        function showSlide(index, slides) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function showPrevSlide() {
            slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
            showSlide(slideIndex, slides);
        }

        function showNextSlide() {
            slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
            showSlide(slideIndex, slides);
        }
    });

