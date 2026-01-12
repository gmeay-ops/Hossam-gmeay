/* ملف: script.js 
   الوصف: كود نظيف لإضافة تأثيرات بسيطة بعد إزالة الصور
*/

document.addEventListener('DOMContentLoaded', () => {

    // 1. تأثير الظهور التدريجي (Scroll Reveal) لجعل تصفح الموقع يبدو حديثاً
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        // تنسيق مبدئي قبل ظهور القسم (مخفي ومزاح للأسفل)
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 2. تحديث تلقائي للسنة في أسفل الموقع (Footer)
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        const year = new Date().getFullYear();
        footerParagraph.innerHTML += `<br> <span style="font-size: 0.8em; opacity: 0.7;">© ${year} حسام جميعي</span>`;
    }

});
