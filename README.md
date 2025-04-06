# 🦠 COVID-19 Detection Using X-ray Images

A machine learning-based web application built with **Flask** to detect COVID-19 using chest X-ray images.
![Live Demo](/static/images/covid19-xray-detection.png)

## 📸 How It Works

1. Upload a chest X-ray image.
2. The app preprocesses the image and feeds it to a trained deep learning model.
3. It predicts whether the patient is COVID-19 Positive or Negative with accuracy.

## 🚀 Live Demo

[Live Demo](/static/images/covid19-xray-detection.png)

## 🛠️ Tech Stack

- Python 🐍
- Flask (Backend)
- HTML/CSS/JS (Frontend)
- TensorFlow (Deep Learning)
- OpenCV, Pillow, NumPy

## 💻 How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/muzamal478/covid19-xray-detection.git 
   cd covid19-xray-detection

2. Create virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   source venv/bin/activate   # For Linux/macOS
   venv\Scripts\activate      # For Windows

3. Install dependencies:
   ```bash
   pip install -r requirements.txt

4. Run the Flask app:
    ```bash
   python app.py

5. Open your browser and go to:
    ```bash
    http://127.0.0.1:5000

## 🧠 Model Info

- Model: CNN trained on COVID-19 and Normal X-ray images.
- Input Image Size: 100x100 (Grayscale)
- Output: Prediction (Positive / Negative) + Probability
