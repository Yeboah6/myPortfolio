<script id="mobile-menu-toggle">
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuClose = document.getElementById('mobile-menu-close');
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');

            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.add('active');
            });

            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });

            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                });
            });
        });
    {/* </script> */}

    <script id="scroll-animations">
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            timelineItems.forEach(item => {
                observer.observe(item);
            });
        });
    </script>

    <script id="back-to-top-functionality">
        document.addEventListener('DOMContentLoaded', function() {
            const backToTopBtn = document.getElementById('back-to-top');
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    </script>

    <script id="form-handling">
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(form);
                const name = formData.get('name') || form.querySelector('input[type="text"]').value;
                const email = formData.get('email') || form.querySelector('input[type="email"]').value;
                const subject = formData.get('subject') || form.querySelectorAll('input[type="text"]')[1].value;
                const message = formData.get('message') || form.querySelector('textarea').value;

                if (!name || !email || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Alternative: Simple mailto fallback
                const mailtoLink = `mailto:yeboahs324@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
                window.location.href = mailtoLink;
            });
        });
</script>