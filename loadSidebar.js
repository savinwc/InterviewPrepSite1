function loadSidebar() {
    fetch('/dummy.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('aside').innerHTML = data;
            console.log('Sidebar loaded');

            // Initialize Flowbite dropdowns
            const flowbiteDropdowns = document.querySelectorAll('[data-collapse-toggle]');
            flowbiteDropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', () => {
                    const targetId = dropdown.getAttribute('aria-controls');
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.classList.toggle('hidden');
                    }
                });
            });

            // Optionally, you can add active class to the current link
            const path = window.location.pathname;
            const sidebarLinks = document.querySelectorAll('aside a');
            sidebarLinks.forEach(link => {
                if (link.getAttribute('href') === path) {
                    link.classList.add('active-link');
                }
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Load the sidebar on page load
document.addEventListener('DOMContentLoaded', loadSidebar);
