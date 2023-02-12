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

<<<<<<< HEAD

@app.route("/player")
=======
@app.route("/player", methods = ['POST'])
>>>>>>> f2d72b1210aeb2efad73a60c3778348aa4289fa5
def player():
    """
    Player page
    """

    # request player name
<<<<<<< HEAD
    # player_name = request.args.get("name")
=======
    player_name = request.get_json()['player_name']
>>>>>>> f2d72b1210aeb2efad73a60c3778348aa4289fa5

    # get player id from name
    player_id = hoops_api.get_id_from_name("Lebron James")

    # return player id
    return str(player_id)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
