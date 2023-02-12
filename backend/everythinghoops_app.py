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


@app.route("/boxscore", methods=['GET'])
def boxscore():
    """
    Boxscore page
    """

    # request pts, reb, ast
    pts = int(request.args.to_dict()['pts'])
    reb = int(request.args.to_dict()['reb'])
    ast = int(request.args.to_dict()['ast'])

    # get statline
    statline = hoops_api.get_statline(pts, ast, reb)

    # return jsonified statline
    response = jsonify(statline)
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


@app.route("/player/progression", methods=['GET'])
def player_progression():
    """
    Player progression page
    """

    # request player name
    player_name = request.args.to_dict()['player_name']

    # get player progression
    dates, category_progression = hoops_api.get_player_progression(player_name)

    # return jsonified progression
    response = jsonify({"dates": dates, "category_progression": category_progression})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/date", methods=['GET'])
def date():
    """
    Date page
    """

    # request date
    date = request.args.to_dict()['date']

    # get games from date
    games = hoops_api.get_best_performance_on_day(date)

    # return jsonified games
    response = jsonify(games)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/statistics", methods=['GET'])
def stats():
    """
    Stats page
    """

    # request player_name, min_date, max_date
    player_name = request.args.to_dict()['player_name']
    min_date = request.args.to_dict()['min_date']
    max_date = request.args.to_dict()['max_date']

    # dates is tuple of (min_date, max_date)
    dates = (min_date, max_date)

    # get games from stats
    games = hoops_api.get_avg_statline(player_name, dates)

    # return jsonified games
    response = jsonify(games.to_dict(orient="records"))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True, port=8000)
