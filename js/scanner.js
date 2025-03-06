// Camera functionality and meat recognition
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
    
    // In a real app, we would send this image to a meat recognition API
    // For demo purposes, we'll simulate a response
    simulateMeatRecognition(imageDataUrl);
}

function simulateMeatRecognition(imageUrl) {
    // Simulate API processing time
    showScanningAnimation();
    
    setTimeout(() => {
        // Meat-focused food data for realistic demo purposes
        const meatOptions = [
            {
                name: 'Beef Steak (Ribeye)',
                calories: 291,
                protein: 24.6,
                carbs: 0,
                fat: 21.2,
                servingSize: '100g',
                vitamins: [
                    'Vitamin B12: 62% DV',
                    'Zinc: 32% DV',
                    'Niacin: 30% DV',
                    'Iron: 14% DV'
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
                name: 'Pork Tenderloin',
                calories: 143,
                protein: 26,
                carbs: 0,
                fat: 3.5,
                servingSize: '100g',
                vitamins: [
                    'Thiamine: 54% DV',
                    'Selenium: 49% DV',
                    'Vitamin B6: 28% DV',
                    'Zinc: 18% DV'
                ],
                image: imageUrl
            },
            {
                name: 'Turkey Breast',
                calories: 135,
                protein: 30,
                carbs: 0,
                fat: 0.8,
                servingSize: '100g',
                vitamins: [
                    'Niacin: 46% DV',
                    'Vitamin B6: 31% DV',
                    'Phosphorus: 26% DV',
                    'Selenium: 36% DV'
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
            },
            {
                name: 'Ground Beef (80% lean)',
                calories: 254,
                protein: 17.4,
                carbs: 0,
                fat: 20.8,
                servingSize: '100g',
                vitamins: [
                    'Vitamin B12: 48% DV',
                    'Zinc: 36% DV',
                    'Iron: 15% DV',
                    'Vitamin B6: 18% DV'
                ],
                image: imageUrl
            },
            {
                name: 'Lamb Chop',
                calories: 294,
                protein: 25.6,
                carbs: 0,
                fat: 21.2,
                servingSize: '100g',
                vitamins: [
                    'Vitamin B12: 51% DV',
                    'Zinc: 31% DV',
                    'Niacin: 26% DV',
                    'Iron: 12% DV'
                ],
                image: imageUrl
            },
            {
                name: 'Venison',
                calories: 158,
                protein: 30.2,
                carbs: 0,
                fat: 3.2,
                servingSize: '100g',
                vitamins: [
                    'Iron: 22% DV',
                    'Zinc: 23% DV',
                    'Vitamin B12: 41% DV',
                    'Niacin: 37% DV'
                ],
                image: imageUrl
            }
        ];
        
        // Analyze the image and detect what type of meat it is
        // In a real app, this would use AI to detect the specific meat type
        analyzeAndDetectMeatType(imageUrl, meatOptions);
    }, 2000);
}

function analyzeAndDetectMeatType(imageUrl, meatOptions) {
    // In a real app, this would use computer vision to detect the type of meat
    // For this demo, we'll randomly select a meat type but with some intelligence
    
    console.log('AI analyzing meat type...');
    
    // Simulate basic image analysis
    setTimeout(() => {
        // For the demo, we'll randomly select from our options
        // In a real app, this would use AI image recognition
        const randomIndex = Math.floor(Math.random() * meatOptions.length);
        const detectedMeat = meatOptions[randomIndex];
        
        console.log('Detected meat type:', detectedMeat.name);
        
        // Show the results
        window.showResults(detectedMeat);
    }, 1000);
}

function showScanningAnimation() {
    // Animate the scan line
    console.log('Scanning meat...');
    
    // In a real app, we would show an AI scanning animation
    // and provide real-time feedback on the meat detection process
}