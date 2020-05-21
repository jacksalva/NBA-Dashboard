from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps
import json
# import scrape_mars

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection

app.config["MONGO_URI"] = "mongodb://localhost:27017/NBA_STATs"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/craigslist_app")


@app.route("/")
def index():
    latest_info = dumps(mongo.db.seasonstat.find())
    latest_info = json.loads(latest_info)
    print(type(latest_info))
    return jsonify(latest_info)


# @app.route("/scrape")
# def scraper():
#     latest_data = scrape_mars.scrape()
#     mongo.db.scrape_mars.insert_one(latest_data)
#     return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)