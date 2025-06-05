document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggler
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('active');
        });
    }

    // Slider functionality (from existing code)
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevBtn = document.querySelector('.hero-slider .prev');
    const nextBtn = document.querySelector('.hero-slider .next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) { // Check if slider elements exist
        showSlide(currentSlide); // Show the first slide initially
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        // Optional: Auto-play slider
        // setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Cost Calculator Functionality (from existing code)
    const areaSqftInput = document.getElementById('area-sqft');
    const planTypeCalculatorSelect = document.getElementById('plan-type-calculator');
    const calculateCostBtn = document.getElementById('calculate-cost-btn');
    const estimatedCostResultDiv = document.getElementById('estimated-cost-result');

    if (calculateCostBtn && areaSqftInput && planTypeCalculatorSelect && estimatedCostResultDiv) {
        calculateCostBtn.addEventListener('click', function() {
            const area = parseFloat(areaSqftInput.value);
            const ratePerSqft = parseFloat(planTypeCalculatorSelect.value);

            if (isNaN(area) || area <= 0) {
                estimatedCostResultDiv.textContent = 'Please enter a valid area.';
                estimatedCostResultDiv.style.color = 'red';
                return;
            }

            if (isNaN(ratePerSqft)) {
                estimatedCostResultDiv.textContent = 'Please select a valid plan.';
                estimatedCostResultDiv.style.color = 'red';
                return;
            }

            const totalCost = area * ratePerSqft;
            estimatedCostResultDiv.textContent = `Estimated Cost: ₹${totalCost.toLocaleString('en-IN')}`;
            estimatedCostResultDiv.style.color = '#333'; // Reset color
        });
    }

    // Detailed Plan Page - Update Title from URL Fragment
    const planTitleElement = document.getElementById('plan-title'); // This is the H1 element itself
    const planNamePlaceholder = document.querySelector('#plan-title .plan-name-placeholder'); // More specific selector

    if (window.location.pathname.includes('detailed-plan.html') && planNamePlaceholder) {
        const hash = window.location.hash; // Get #basic, #standard etc.
        let planName = "[Select a Plan]"; // Default text for the span

        if (hash) {
            let extractedName = hash.substring(1); // Remove #
            // Capitalize first letter
            extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1).toLowerCase();
            planName = extractedName;
        }
        planNamePlaceholder.textContent = planName;
    }
});
