// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Smoothly scroll to the target section
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Subtracts header height
                behavior: 'smooth'
            });
        }
    });
});