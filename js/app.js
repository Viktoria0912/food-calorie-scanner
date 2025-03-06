// Main App functionality
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const startScanningBtn = document.getElementById('start-scanning');
    const scannerSection = document.getElementById('scanner');
    const resultsSection = document.getElementById('results');
    const cancelScanBtn = document.getElementById('cancel-scan');
    const closeResultsBtn = document.getElementById('close-results');
    const saveResultsBtn = document.getElementById('save-results');
    
    // Event Listeners
    startScanningBtn.addEventListener('click', openScanner);
    cancelScanBtn.addEventListener('click', closeScanner);
    closeResultsBtn.addEventListener('click', closeResults);
    saveResultsBtn.addEventListener('click', saveResults);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.feature-card, .step').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Functions
    function openScanner() {
        scannerSection.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        initCamera();
    }
    
    function closeScanner() {
        scannerSection.classList.add('hidden');
        document.body.style.overflow = '';
        stopCamera();
    }
    
    function showResults(data) {
        // Populate results with the data
        document.getElementById('food-name').textContent = data.name;
        document.getElementById('calories').textContent = data.calories;
        document.getElementById('protein').textContent = data.protein + 'g';
        document.getElementById('carbs').textContent = data.carbs + 'g';
        document.getElementById('fat').textContent = data.fat + 'g';
        document.getElementById('serving-size').textContent = data.servingSize;
        
        const vitaminsList = document.getElementById('vitamins-list');
        vitaminsList.innerHTML = '';
        data.vitamins.forEach(vitamin => {
            const li = document.createElement('li');
            li.textContent = vitamin;
            vitaminsList.appendChild(li);
        });
        
        // Display the image
        document.getElementById('scanned-food-image').src = data.image;
        
        // Show results section
        resultsSection.classList.remove('hidden');
        scannerSection.classList.add('hidden');
    }
    
    function closeResults() {
        resultsSection.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    function saveResults() {
        // In a real app, this would save to local storage or a database
        alert('Nutrition information saved!');
        closeResults();
    }
    
    // Make showResults available globally
    window.showResults = showResults;
});