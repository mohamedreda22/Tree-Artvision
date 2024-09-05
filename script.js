document.addEventListener("DOMContentLoaded", function() {
    const artContainers = document.querySelectorAll('.art-container');

    artContainers.forEach(container => {
        const images = container.querySelectorAll('.art-image');
        let currentIndex = 0;

        setInterval(() => {
            images.forEach(img => {
                img.style.display = 'none';
            });

            images[currentIndex].style.display = 'block';

            currentIndex = (currentIndex + 1) % images.length;
        }, Math.random() * 3000 + 2000); 
    });
});