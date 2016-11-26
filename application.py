from flask import Flask, jsonify, render_template
# lookup() function
from helpers import lookup

# configure application
app = Flask(__name__)

@app.route("/")
def index():
    """Render result."""
    return render_template("index.html")

@app.route("/articles")
def articles():
    """Look up articles."""
    articles = lookup()
    return jsonify(articles)
