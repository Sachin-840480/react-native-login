from flask import Flask, request, jsonify
from flask_cors import CORS
from database import get_connection

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Backend Running"


@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        "SELECT * FROM users WHERE username=%s AND password=%s",
        (username, password)
    )

    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if user:

        return jsonify({
            "success": True,
            "username": user["username"]
        })

    return jsonify({
        "success": False,
        "message": "Invalid Credentials"
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)