from flask import Flask

app = Flask(__name__)

# Test API Route
@app.route("/testing")
def members():
    return {"Testing": ["Test1", "Test2", "Test3"]}

if __name__ == "__main__":
    app.run(debug=True)
