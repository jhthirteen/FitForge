from flask import Flask

# creating an instance of the Flask class
app = Flask(__name__)

# route --> indicates to Flask what URL should trigger the following function
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"