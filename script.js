// Параллакс эффект для заднего фона героя
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Плавный скроллинг до секции функций
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.getElementById('features');
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Появление и исчезновение функций при скролле
window.addEventListener('scroll', function() {
    const features = document.querySelectorAll('.feature');
    const triggerBottom = window.innerHeight / 5 * 4;
    const triggerTop = window.innerHeight / 5;

    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;
        const featureBottom = feature.getBoundingClientRect().bottom;

        // Плавное появление
        if (featureTop < triggerBottom && featureBottom > triggerTop) {
            feature.classList.add('show');
        } else {
            feature.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll('.feature');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.5
    });

    features.forEach(feature => {
        observer.observe(feature);
    });
});
