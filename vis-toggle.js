document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-link');

    links.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' class from all links
            links.forEach(l => l.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        });
    });
});
