from flask import Flask

app = Flask(__name__)

# Test API Route
@app.route("/members")
def members():
    return {"Members": ["M1", "M2", "M3"]}

if __name__ == "__main__":
    app.run(debug=True)
