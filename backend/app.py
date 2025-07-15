from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import joblib

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = float(request.json['data'])
    prediction = model.predict([[data]])
    return jsonify({"result": str(prediction[0])})

@socketio.on('message')
def handle_message(msg):
    emit('response', {'data': f"Server received: {msg}"})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)