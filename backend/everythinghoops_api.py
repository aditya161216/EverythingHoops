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
        return statline

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


def main():
    """
    Main function
    """

    # create EverythingHoopsAPI object
    hoops_api = EverythingHoopsAPI()

    # get average statline
    avg_statline = hoops_api.get_avg_statline(
        "LeBron James", ["2019-01-01", "2019-12-31"])

    # print average statline
    print(avg_statline)


if __name__ == "__main__":
    main()
