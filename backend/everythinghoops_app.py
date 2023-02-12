"""
Flask app for EverythingHoops API
"""

from everythinghoops_api import EverythingHoopsAPI
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)


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
    response = jsonify(statline.to_dict(orient="records"))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/player", methods=['GET'])
def player():
    """
    Player page
    """

    # request player name
    player_name = request.args.to_dict()['player_name']

    # get player id from name
    player_id = hoops_api.get_id_from_name(player_name)

    # # return player id
    response = jsonify({'player_id': player_id})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/player/last10games", methods=['GET'])
def player_last_10_games():
    """
    Player last 10 games page
    """

    # request player name
    player_name = request.args.to_dict()['player_name']

    # get player last 10 games
    last_10_games = hoops_api.get_player_last_10_games(player_name)

    # return jsonified last 10 games
    response = jsonify(last_10_games.to_dict(orient="records"))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/player/careeravg", methods=['GET'])
def player_career_avg():
    """
    Player career average page
    """

    # request player name
    player_name = request.args.to_dict()['player_name']

    # get player career average
    career_avg = hoops_api.get_career_avg(player_name)

    # return jsonified career average
    response = jsonify(career_avg.to_dict())
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/player/seasonavg", methods=['GET'])
def player_season_avg():
    """
    Player season average page
    """

    # request player name
    player_name = request.args.to_dict()['player_name']

    # get player season average
    season_avg = hoops_api.get_player_avg_per_season(player_name)

    # return jsonified season average
    response = jsonify(season_avg.to_dict(orient="records"))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True, port=8000)
