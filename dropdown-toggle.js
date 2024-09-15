// Toggle the main dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdownCollectionsButton = document.getElementById('dropdownCollectionsButton');
    if (dropdownCollectionsButton) {
        dropdownCollectionsButton.addEventListener('click', function() {
            const dropdown = document.getElementById('dropdownCollections');
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    }

    // Toggle the submenu
    const collapseToggleButton = document.querySelector('[data-collapse-toggle="dropdown-example"]');
    if (collapseToggleButton) {
        collapseToggleButton.addEventListener('click', function() {
            const submenu = document.getElementById('dropdown-example');
            if (submenu) {
                submenu.classList.toggle('hidden');
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
    const sortingButton = document.getElementById('sortingButton');
    const searchingButton = document.getElementById('searchingButton');
    const treeTraversalButton = document.getElementById('TreeTraversalButton');
    const dfsButton = document.getElementById('DFSButton');

    sortingButton.addEventListener('click', function() {
        document.getElementById('dropdown-sorting').classList.toggle('hidden');
    });

    searchingButton.addEventListener('click', function() {
        document.getElementById('dropdown-searching').classList.toggle('hidden');
    });

    treeTraversalButton.addEventListener('click', function() {
        document.getElementById('dropdown-tree-traversal').classList.toggle('hidden');
    });

    dfsButton.addEventListener('click', function() {
        document.getElementById('dropdown-dfs').classList.toggle('hidden');
    });
});


    // Close the dropdown if clicked outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.closest('#dropdownCollectionsButton') && !event.target.closest('[data-collapse-toggle="dropdown-example"]')) {
            const dropdownCollections = document.getElementById('dropdownCollections');
            const dropdownExample = document.getElementById('dropdown-example');
            if (dropdownCollections) {
                dropdownCollections.classList.add('hidden');
            }
            if (dropdownExample) {
                dropdownExample.classList.add('hidden');
            }
        }
    });
});
