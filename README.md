# FoodScan - Analyse Nutritionnelle en Temps Réel

![FoodScan Preview](/preview.jpg)

## 🌟 Présentation

FoodScan est une application web moderne qui utilise l'intelligence artificielle pour identifier et analyser les aliments en temps réel. Grâce à la caméra de votre appareil, l'application détecte les aliments et fournit instantanément des informations nutritionnelles détaillées.

## ✨ Fonctionnalités

- **Détection en Temps Réel** : Identifie automatiquement les aliments capturés par la caméra
- **Analyse Nutritionnelle** : Fournit des informations détaillées sur les calories, protéines, glucides et lipides
- **Interface Moderne** : Design élégant et intuitif inspiré des applications de santé modernes
- **Visualisation Interactive** : Affiche le processus de scan avec des animations et effets visuels
- **Historique des Détections** : Garde une trace des aliments récemment scannés
- **Responsif** : Fonctionne sur desktop et mobile

## 🚀 Technologies Utilisées

- **TensorFlow.js** : Pour le machine learning côté client
- **COCO-SSD** : Modèle de détection d'objets pré-entraîné
- **HTML5/CSS3** : Structure et style modernes
- **JavaScript ES6+** : Logique de l'application et interactions
- **API MediaDevices** : Accès à la caméra de l'appareil
- **Canvas API** : Affichage des détections

## 🛠️ Comment ça marche

L'application utilise TensorFlow.js et le modèle COCO-SSD pour analyser le flux vidéo en temps réel (à environ 3 FPS). Lorsqu'un aliment est détecté, ses informations nutritionnelles sont extraites d'une base de données interne et affichées à l'utilisateur.

### Processus de détection :

1. **Capture** : L'application accède à la caméra et capture le flux vidéo
2. **Analyse** : Le modèle AI analyse les images à la recherche d'aliments connus
3. **Identification** : L'aliment est identifié avec un pourcentage de confiance
4. **Affichage** : Les données nutritionnelles sont présentées à l'utilisateur

## 📱 Comment utiliser

### Version en ligne

Accédez directement à l'application via ce lien :
[https://viktoria0912.github.io/food-calorie-scanner/food-detection-app.html](https://viktoria0912.github.io/food-calorie-scanner/food-detection-app.html)

### Installation locale

1. Clonez ce dépôt :
```bash
git clone https://github.com/Viktoria0912/food-calorie-scanner.git
```

2. Ouvrez simplement le fichier `food-detection-app.html` dans votre navigateur

3. Autorisez l'accès à la caméra lorsque demandé

4. Pointez votre caméra vers un aliment et observez la détection automatique !

## 🔎 Aliments détectables

L'application peut actuellement détecter ces types d'aliments :

- 🍎 Pomme
- 🍊 Orange
- 🍌 Banane
- 🥦 Brocoli
- 🥕 Carotte
- 🌭 Hot Dog
- 🍕 Pizza
- 🍩 Donut
- 🍰 Gâteau
- 🥪 Sandwich
- 🥗 Salade

## 🔮 Évolutions futures

- Ajout de plus d'aliments dans la base de données
- Amélioration de la précision de détection
- Possibilité de sauvegarder l'historique des aliments scannés
- Intégration d'un suivi nutritionnel quotidien
- Support de plusieurs langues
- Mode hors-ligne

## 📝 Remarques

- L'application nécessite un navigateur moderne supportant JavaScript ES6+ et l'API MediaDevices
- Pour une meilleure détection, utilisez un bon éclairage et placez l'aliment clairement dans le cadre
- La précision de la détection dépend de la qualité de l'image et de l'angle de vue

## 🔒 Confidentialité

Toutes les détections sont effectuées localement sur votre appareil. Aucune image ou donnée n'est envoyée à un serveur externe.

## 📄 Licence

Ce projet est sous licence MIT.

---

Créé avec ❤️ par [Viktoria0912](https://github.com/Viktoria0912)