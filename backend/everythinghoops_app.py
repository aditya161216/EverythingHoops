"""
Flask app for EverythingHoops API
"""

from everythinghoops_api import EverythingHoopsAPI
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# create EverythingHoopsAPI object
hoops_api = EverythingHoopsAPI()
        
@app.route("/")
def home():
    """
    Home page
    """
    return "Welcome to EverythingHoops!"

@app.route("/boxscore")
def boxscore():
    """
    Boxscore page
    """
    
    # get statline
    statline = hoops_api.get_statline(70, 0, 0)

    # return jsonified statline
    return jsonify(statline.to_dict(orient="records"))

@app.route("/player", methods = ['POST'])
def player():
    """
    Player page
    """
    
    # request player name
    player_name = request.get_json()['player_name']

    # get player id from name
    player_id = hoops_api.get_id_from_name(player_name)

    # return player id
    return str(player_id)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
