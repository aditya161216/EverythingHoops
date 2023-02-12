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
