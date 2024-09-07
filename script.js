fetch('navbar.html').then(response=>response.text()).then(data=>{
    document.getElementById('navbar').innerHTML=data;
});

fetch('footer.html').then(response=>response.text()).then(data=>{
    document.getElementById('footer').innerHTML=data;
});

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
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.art-container, .article-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
const artThumbnails = document.querySelectorAll('.art-thumbnails');

artThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.style.opacity = '1';
    });

    thumbnail.addEventListener('mouseout', () => {
        thumbnail.style.opacity = '0.5';
    });
});
 
