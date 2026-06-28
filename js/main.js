'use strict';

{
    const menuToggle = document.querySelector('.menu-toggle');
    const globalNav = document.querySelector('.global-nav');

    if (menuToggle && globalNav) {
        const openMenu = () => {
            menuToggle.classList.add('is-open');
            globalNav.classList.add('is-open');
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.setAttribute('aria-label', 'メニューを閉じる');
        };

        const closeMenu = () => {
            menuToggle.classList.remove('is-open');
            globalNav.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'メニューを開く');
        };

        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.contains('is-open');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        globalNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('click', (event) => {
            const isOpen = globalNav.classList.contains('is-open');

            if (!isOpen) return;

            const isClickInsideMenu = globalNav.contains(event.target);
            const isClickOnButton = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnButton) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 780) {
                closeMenu();
            }
        });
    }

    const filterButtons = document.querySelectorAll('.recipe-filter button');
    const recipeCards = document.querySelectorAll('.recipe-list .recipe-card');

    if (filterButtons.length && recipeCards.length) {
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                filterButtons.forEach((btn) => {
                    btn.classList.remove('is-active');
                });

                button.classList.add('is-active');

                recipeCards.forEach((card) => {
                    const category = card.dataset.category;

                    if (filter === 'all' || category === filter) {
                        card.hidden = false;
                    } else {
                        card.hidden = true;
                    }
                });
            });
        });
    }

    const printButton = document.querySelector('.js-print-button');

    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

    const recipeTabs = document.querySelectorAll(".recipe-tab");
    const recipePanels = document.querySelectorAll(".recipe-panel");

    if (recipeTabs.length && recipePanels.length) {
        recipeTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const target = tab.dataset.tab;

                recipeTabs.forEach((item) => {
                    item.classList.toggle("is-active", item === tab);
                });

                recipePanels.forEach((panel) => {
                    panel.classList.toggle("is-active", panel.dataset.panel === target);
                });
            });
        });
    }


    const columnFilterButtons = document.querySelectorAll('.column-filter button');
    const columnCards = document.querySelectorAll('.column-list .column-card');

    if (columnFilterButtons.length && columnCards.length) {
        columnFilterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                columnFilterButtons.forEach((btn) => {
                    btn.classList.remove('is-active');
                });

                button.classList.add('is-active');

                columnCards.forEach((card) => {
                    const category = card.dataset.category;

                    if (filter === 'all' || category === filter) {
                        card.hidden = false;
                    } else {
                        card.hidden = true;
                    }
                });
            });
        });
    }
}