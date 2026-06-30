document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.embroidery-slide');
    const dots = document.querySelectorAll('.emb-dot');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let current = 0;

    function show(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');

        current = (index + slides.length) % slides.length;

        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    prev.onclick = () => show(current - 1);
    next.onclick = () => show(current + 1);

    dots.forEach((dot, i) =>
        dot.onclick = () => show(i)
    );

    setInterval(() => show(current + 1), 3500);
});
