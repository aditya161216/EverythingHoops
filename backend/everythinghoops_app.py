"""
Flask app for EverythingHoops API
"""

from everythinghoops_database import EverythingHoopsAPI
import pickle
from flask import Flask, request

app = Flask(__name__)

# load database from pickled players_df and boxscore_df
hoops_data = EverythingHoopsAPI()
# hoops_data.players_df = pickle.load(open("data/players_df.pkl", "rb"))
hoops_data.boxscore_df = pickle.load(open("/backend/data/boxscore_df.pkl", "rb"))

@app.route("/")
def home():
    """
    Home page
    """
    return "Welcome to EverythingHoops API!"

# @app.route("/players")
# def players():
#     """
#     Players page
#     """
#     return hoops_data.players_df.to_json()

@app.route("/boxscore")
def boxscore():
    """
    Boxscore page
    """
    return hoops_data.boxscore_df.to_json()

if __name__ == "__main__":
    app.run(debug=True, port=5000)
