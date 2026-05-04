from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Service A is running"

@app.route("/health")
def health():
    return jsonify(status="ok")

@app.route("/data")
def data():
    return jsonify(data="Hello from service A")

if __name__ == "__main__":
    # CRITICAL FIX: bind to 0.0.0.0
    app.run(host="0.0.0.0", port=5000)
