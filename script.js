

// Scroll Animations
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + window.innerHeight / 1.2;
    sections.forEach(section => {
        if (scrollY > section.offsetTop) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Animations دورية كل 3 دقائق
setInterval(() => {
    document.querySelectorAll('.profile-img').forEach(img => {
        img.style.transform = 'translateY(-15px)';
        setTimeout(() => img.style.transform = 'translateY(0)', 1500);
    });
}, 180000); // 180000ms = 3 دقائق
