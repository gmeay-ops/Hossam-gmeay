document.addEventListener('DOMContentLoaded', () => {
    // تحديث السنة
    document.getElementById('year').textContent = new Date().getFullYear();

    // تأثير الظهور عند التمرير
    const reveal = () => {
        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // تشغيل أولي
});
