// ============================================
// Faceted Filter System for Projects
// ============================================

(function () {
    'use strict';

    // Helper function
    const $ = selector => document.querySelector(selector);

    // Categorize topics into Technology and Origin
    function categorizeTopics(topics) {
        const categories = {
            technology: [],
            origin: []
        };

        const originKeywords = ['university', 'academic', 'personal', 'professional', 'work', 'school'];

        topics.forEach(topic => {
            const lower = topic.toLowerCase();
            if (originKeywords.some(kw => lower.includes(kw))) {
                categories.origin.push(topic);
            } else {
                // Everything else is Technology
                categories.technology.push(topic);
            }
        });

        return categories;
    }

    // State management for filters
    const filterState = {
        technology: [],
        origin: []
    };

    // Render faceted filter dropdowns
    function renderFacetedFilters(topics) {
        const categorized = categorizeTopics(topics);

        // Render Technology dropdown
        renderDropdown('technology', categorized.technology);

        // Render Origin dropdown
        renderDropdown('origin', categorized.origin);

        // Setup dropdown toggle handlers
        setupDropdownToggles();

        // Setup clear all button
        const clearBtn = $('.clear-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearAllFilters);
        }
    }

    // Render individual dropdown menu with checkboxes
    function renderDropdown(category, topics) {
        const menu = document.querySelector(`.dropdown-menu[data-category="${category}"]`);
        if (!menu || topics.length === 0) {
            // Hide dropdown if no topics
            const dropdown = document.querySelector(`.filter-dropdown [data-category="${category}"]`)?.closest('.filter-dropdown');
            if (dropdown) dropdown.style.display = 'none';
            return;
        }

        menu.innerHTML = '';

        topics.forEach((topic, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'filter-option';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `filter-${category}-${index}`;
            checkbox.value = topic;
            checkbox.addEventListener('change', () => handleFilterChange(category, topic, checkbox.checked));

            const label = document.createElement('label');
            label.htmlFor = `filter-${category}-${index}`;
            label.textContent = topic;

            optionDiv.appendChild(checkbox);
            optionDiv.appendChild(label);
            menu.appendChild(optionDiv);
        });
    }

    // Setup dropdown toggle click handlers
    function setupDropdownToggles() {
        const toggles = document.querySelectorAll('.dropdown-toggle');

        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const menu = toggle.nextElementSibling;
                const isOpen = toggle.classList.contains('open');

                // Close all other dropdowns
                document.querySelectorAll('.dropdown-toggle.open').forEach(t => {
                    t.classList.remove('open');
                    t.nextElementSibling.classList.remove('open');
                });

                // Toggle this dropdown
                if (!isOpen) {
                    toggle.classList.add('open');
                    menu.classList.add('open');
                }
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.filter-dropdown')) {
                document.querySelectorAll('.dropdown-toggle.open').forEach(toggle => {
                    toggle.classList.remove('open');
                    toggle.nextElementSibling.classList.remove('open');
                });
            }
        });
    }

    // Handle individual filter checkbox change
    function handleFilterChange(category, topic, checked) {
        if (checked) {
            if (!filterState[category].includes(topic)) {
                filterState[category].push(topic);
            }
        } else {
            filterState[category] = filterState[category].filter(t => t !== topic);
        }

        updateFilterUI();
        applyFilters();
    }

    // Update filter UI (badges, chips, clear button)
    function updateFilterUI() {
        // Update count badges on dropdown toggles
        ['technology', 'origin'].forEach(category => {
            const toggle = document.querySelector(`.dropdown-toggle[data-category="${category}"]`);
            const count = filterState[category].length;
            const badge = toggle?.querySelector('.selected-count');

            if (badge) {
                if (count > 0) {
                    badge.textContent = count;
                    badge.classList.add('visible');
                    toggle.classList.add('active');
                } else {
                    badge.classList.remove('visible');
                    toggle.classList.remove('active');
                }
            }
        });

        // Render chips
        renderChips();

        // Show/hide clear all button
        const totalSelected = filterState.technology.length + filterState.origin.length;
        const clearBtn = $('.clear-filters');
        const chipsContainer = $('#filterChips');

        if (clearBtn) {
            clearBtn.style.display = totalSelected > 0 ? 'inline-block' : 'none';
        }
        if (chipsContainer) {
            chipsContainer.style.display = totalSelected > 0 ? 'flex' : 'none';
        }
    }

    // Render filter chips
    function renderChips() {
        const chipsContainer = $('#filterChips');
        if (!chipsContainer) return;

        chipsContainer.innerHTML = '';

        ['technology', 'origin'].forEach(category => {
            filterState[category].forEach(topic => {
                const chip = document.createElement('div');
                chip.className = 'filter-chip';
                chip.innerHTML = `
                    ${topic}
                    <button aria-label="Remove ${topic}" title="Remove ${topic}">×</button>
                `;

                const removeBtn = chip.querySelector('button');
                removeBtn.addEventListener('click', () => removeFilter(category, topic));

                chipsContainer.appendChild(chip);
            });
        });
    }

    // Remove individual filter
    function removeFilter(category, topic) {
        filterState[category] = filterState[category].filter(t => t !== topic);

        // Uncheck the corresponding checkbox
        const checkbox = document.querySelector(`.dropdown-menu[data-category="${category}"] input[value="${topic}"]`);
        if (checkbox) checkbox.checked = false;

        updateFilterUI();
        applyFilters();
    }

    // Clear all filters
    function clearAllFilters() {
        filterState.technology = [];
        filterState.origin = [];

        // Uncheck all checkboxes
        document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });

        updateFilterUI();
        applyFilters();
    }

    // Apply filters with AND/OR logic
    function applyFilters() {
        const projectCards = Array.from(document.querySelectorAll('#projectsGrid .card-item[data-topics]'));

        let visibleCount = 0;

        projectCards.forEach(card => {
            const topics = JSON.parse(card.dataset.topics || '[]');

            // AND between categories, OR within category
            const matchesTech = filterState.technology.length === 0 ||
                filterState.technology.some(filter => topics.includes(filter));
            const matchesOrigin = filterState.origin.length === 0 ||
                filterState.origin.some(filter => topics.includes(filter));

            const matches = matchesTech && matchesOrigin;
            card.style.display = matches ? '' : 'none';
            if (matches) visibleCount++;
        });

        // Show empty state if no projects match
        const grid = $('#projectsGrid');
        let emptyState = grid.querySelector('.empty-state');

        const hasActiveFilters = filterState.technology.length > 0 || filterState.origin.length > 0;

        if (visibleCount === 0 && hasActiveFilters) {
            if (!emptyState) {
                emptyState = document.createElement('div');
                emptyState.className = 'card-item empty-state';
                emptyState.style.cssText = 'grid-column: 1 / -1; text-align:center; padding:2rem';
                // Try to get translated message, fallback to Portuguese
                const lang = document.documentElement.lang === 'en-US' ? 'en' : 'pt';
                const msg = window.I18N?.[lang]?.['filter.noResults'] || 'Nenhum projeto encontrado com estes filtros.';
                emptyState.innerHTML = `<p class="muted">${msg}</p>`;
                grid.appendChild(emptyState);
            }
        } else {
            if (emptyState) emptyState.remove();
        }
    }

    // Export to global scope for integration with existing code
    window.FacetedFilters = {
        render: renderFacetedFilters,
        apply: applyFilters,
        clear: clearAllFilters
    };

})();
