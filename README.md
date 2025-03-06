# NutriScan: Food Calorie Scanner

A web application for scanning food and calculating calories with Apple-inspired design

## Overview

NutriScan is a web-based application that allows users to scan food items with their device camera and instantly receive nutritional information including calories, macronutrients, and vitamins.

## Features

- **Food Scanning**: Use your device camera to scan food items
- **Nutritional Analysis**: Get detailed nutritional breakdown of scanned foods
- **Apple-Inspired Design**: Clean, minimal interface following Apple design principles
- **Responsive Layout**: Works on desktop and mobile devices

## Technology Stack

- HTML5
- CSS3 (with animations)
- JavaScript (vanilla)
- Camera API

## Demo

You can try the live demo by visiting the GitHub Pages deployment of this repository.

## How It Works

This application uses the device camera to capture an image of food. In a production environment, this image would be sent to a food recognition API that uses machine learning to identify the food and return nutritional data. For demonstration purposes, this version simulates the API response with pre-defined food data.

## Getting Started

1. Clone this repository
2. Open `index.html` in a modern web browser
3. Click "Start Scanning" to begin

## Note

This is a demo application. In a real-world implementation, it would require:

- A robust food recognition API
- User authentication
- Data storage for saving nutritional history
- Native mobile app versions for better camera integration

## License

MIT