"""
API to interact with the EverythingHoops database
"""

import pickle
import pandas as pd

class EverythingHoopsAPI:
    """
    EverythingHoops API
    """

    def __init__(self):
        """
        Constructor
        """

        # load pickled dataframes
        self.players_df = pickle.load(
            open("backend/data/players_df.pkl", "rb"))
        self.players_data_df = pickle.load(
            open("backend/data/players_data_df.pkl", "rb"))
        self.games_details_df = pickle.load(
            open("backend/data/games_details_df.pkl", "rb"))
        self.games_df = pickle.load(open("backend/data/games_df.pkl", "rb"))
        self.player_ids = pickle.load(
            open("backend/data/player_ids.pkl", "rb"))

    def get_statline(self, pts, ast, reb) -> pd.DataFrame:
        """
        See if a statline exists in the database
        """

        #  df of players with statline
        statline = self.games_details_df[(self.games_details_df["PTS"] >= pts) & (
            self.games_details_df["AST"] >= ast) & (self.games_details_df["REB"] >= reb)]

        # convert nan to 0 if column is float or "" if column is string
        for col in statline.columns:
            if statline[col].dtype == float:
                statline[col] = statline[col].fillna(0)
            elif statline[col].dtype == str:
                statline[col] = statline[col].fillna("")

        # return statline
        return statline.to_dict(orient="records")[0]

    def get_id_from_name(self, name):
        """
        Get player id from name
        """

        # get player id from name
        return self.player_ids[self.player_ids["NBAName"] == name]["BBRefID"].values[0]

    def get_avg_statline(self, name, dates):
        """
        Get average statline for player over a period of time
        """

        # get statline for player
        statline = self.games_details_df[(
            self.games_details_df["PLAYER_NAME"] == name)]

        # get games in date range from games_df
        games = self.games_df[(self.games_df["GAME_DATE_EST"] >= dates[0]) & (
            self.games_df["GAME_DATE_EST"] <= dates[1])]

        # get game ids from games
        game_ids = games["GAME_ID"].values

        # get statline for games in date range
        statline = statline[statline["GAME_ID"].isin(game_ids)]

        # get average statline
        avg_statline = statline.mean().to_dict()

        # return average statline
        return avg_statline

    def get_best_performance_on_day(self, date):
        """
        Get best performance on a day
        """

        # get games on day
        games = self.games_df[self.games_df["GAME_DATE_EST"] == date]

        # get game ids
        game_ids = games["GAME_ID"].values

        # get statline for games on day
        statline = self.games_details_df[self.games_details_df["GAME_ID"].isin(
            game_ids)]

        # get best performance
        best_performance = statline[statline["GAME_SCORE"] == statline["GAME_SCORE"].max()]

        # convert best performance to dict
        best_performance = best_performance.to_dict(orient="records")[0]

        # return best performance
        return best_performance

    def player_progression(self, name, category):
        """
        Get player progression based on category
        """

        # get games for player
        games = self.games_details_df[self.games_details_df["PLAYER_NAME"] == name]

        # sort by 
        games = games.sort_values(by="GAME_DATE_EST")

        # get category progression
        category_progression = games[category].values

        # get dates
        dates = games["GAME_DATE_EST"].values

        # return category progression
        return dates, category_progression

    def get_player_last_10_games(self, name):
        """
        Get player last 10 games
        """

        # get player games sorted by date
        games = self.games_details_df[self.games_details_df["PLAYER_NAME"] == name].sort_values(
            by="GAME_DATE_EST")

        # get last 10 games
        last_10_games = games.tail(10)

        # reorder from oldest to newest
        last_10_games = last_10_games.sort_values(by="GAME_DATE_EST", ascending=False)

        # list of game ids for last 10 games
        game_ids = last_10_games["GAME_ID"].values

        # get teams given game ids
        teams = self.games_details_df[self.games_details_df["GAME_ID"].isin(game_ids)][["GAME_ID", "TEAM_ABBREVIATION"]]

        # get team abbreviations for last 10 games of player
        teams = teams.groupby("GAME_ID")["TEAM_ABBREVIATION"].unique().to_numpy()

        # convert to list
        teams_1 = [team[0] for team in teams]
        teams_2 = [team[1] for team in teams]

        # add teams as columns to last 10 games
        last_10_games["AWAY_TEAM"] = teams_1
        last_10_games["HOME_TEAM"] = teams_2

        # transpose last 10 games
        last_10_games = last_10_games

        # return last 10 games
        return last_10_games

    def get_career_avg(self, name):
        """
        Get player career average
        """

        # get player average stats
        avg_stats = self.games_details_df[self.games_details_df["PLAYER_NAME"] == name].mean()

        # return average stats
        return avg_stats

    def get_player_avg_per_season(self, name):
        """
        Get player average per season
        """

        # get player games
        games = self.games_details_df[self.games_details_df["PLAYER_NAME"] == name]

        # years column from GAME_DATE_EST
        games["SEASON"] = games["GAME_DATE_EST"].apply(lambda x: x[:4])

        # get player average per season
        season_averages = games.groupby("SEASON").mean()

        # return average per season
        return season_averages
        
        
def main():
    """
    Main function
    """

    # create EverythingHoopsAPI object
    hoops_api = EverythingHoopsAPI()

    # get last 10 games for player
    last_10_games = hoops_api.get_player_last_10_games("LeBron James")

    # print last 10 games
    print(last_10_games)

if __name__ == "__main__":
    main()
