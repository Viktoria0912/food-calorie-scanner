// Camera functionality and food recognition
let cameraStream = null;

function initCamera() {
    const cameraFeed = document.getElementById('camera-feed');
    const captureBtn = document.getElementById('capture-btn');
    
    // Check if browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(function(stream) {
                cameraStream = stream;
                cameraFeed.srcObject = stream;
                cameraFeed.play();
                
                // Enable capture button
                captureBtn.addEventListener('click', captureImage);
            })
            .catch(function(error) {
                console.error('Camera error:', error);
                alert('Unable to access camera. Please make sure you have granted permission and try again.');
            });
    } else {
        alert('Your browser does not support camera access. Please try using a modern browser.');
    }
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

function captureImage() {
    const cameraFeed = document.getElementById('camera-feed');
    
    // Create a canvas element to capture the image
    const canvas = document.createElement('canvas');
    canvas.width = cameraFeed.videoWidth;
    canvas.height = cameraFeed.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);
    
    // Get the image data URL
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    
    // In a real app, we would send this image to a food recognition API
    // For demo purposes, we'll simulate a response
    simulateFoodRecognition(imageDataUrl);
}

function simulateFoodRecognition(imageUrl) {
    // Simulate API processing time
    showScanningAnimation();
    
    setTimeout(() => {
        // Dummy food data for demo purposes
        const foodOptions = [
            {
                name: 'Apple',
                calories: 95,
                protein: 0.5,
                carbs: 25,
                fat: 0.3,
                servingSize: '1 medium (182g)',
                vitamins: [
                    'Vitamin C: 14% DV',
                    'Vitamin A: 2% DV',
                    'Potassium: 4% DV',
                    'Fiber: 4.4g'
                ],
                image: imageUrl
            },
            {
                name: 'Grilled Chicken Breast',
                calories: 165,
                protein: 31,
                carbs: 0,
                fat: 3.6,
                servingSize: '100g',
                vitamins: [
                    'Vitamin B6: 25% DV',
                    'Niacin: 50% DV',
                    'Phosphorus: 20% DV',
                    'Selenium: 30% DV'
                ],
                image: imageUrl
            },
            {
                name: 'Avocado Toast',
                calories: 290,
                protein: 8,
                carbs: 30,
                fat: 16,
                servingSize: '1 slice',
                vitamins: [
                    'Vitamin K: 25% DV',
                    'Folate: 20% DV',
                    'Vitamin C: 15% DV',
                    'Fiber: 8g'
                ],
                image: imageUrl
            },
            {
                name: 'Greek Yogurt',
                calories: 100,
                protein: 17,
                carbs: 6,
                fat: 0.4,
                servingSize: '170g',
                vitamins: [
                    'Calcium: 20% DV',
                    'Vitamin B12: 15% DV',
                    'Phosphorus: 20% DV',
                    'Riboflavin: 20% DV'
                ],
                image: imageUrl
            },
            {
                name: 'Salmon Fillet',
                calories: 206,
                protein: 22,
                carbs: 0,
                fat: 13,
                servingSize: '100g',
                vitamins: [
                    'Vitamin D: 100% DV',
                    'Vitamin B12: 100% DV',
                    'Omega-3: 2.2g',
                    'Selenium: 60% DV'
                ],
                image: imageUrl
            }
        ];
        
        // Randomly select a food item for demo purposes
        const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];
        
        // Show the results
        window.showResults(randomFood);
    }, 2000);
}

function showScanningAnimation() {
    // In a real app, we could show a loading animation here
    console.log('Scanning food...');
}