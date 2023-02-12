"""
API to create and query EverythingHoops dataframes
"""

import pandas as pd


class EverythingHoopsDB:
    """
    API to interact with the EverythingHoops database
    """

    def __init__(self):
        """
        EverythingHoops Database
        """

        # Dataframes
        self.players_data_df = pd.DataFrame()
        self.games_details_df = pd.DataFrame()
        self.games_df = pd.DataFrame()
        self.players_df = pd.DataFrame()
        self.player_ids = pd.DataFrame

    def read_csvs_into_dfs(self):
        """
        Read all data csvs into dataframes
        """

        # read in players csv
        self.players_df = pd.read_csv("backend/data/players.csv", dtype=str)

        # read in player_data csv
        self.players_data_df = pd.read_csv(
            "backend/data/player_data.csv", dtype=str)

        # read in games csv
        self.games_df = pd.read_csv("backend/data/games.csv", dtype=str)

        # read in games_details csv
        self.games_details_df = pd.read_csv(
            "backend/data/games_details.csv", dtype=str)

        # pts, ast, reb, fg_pct, 3p_pct, ft_pct, steals, blocks, to, pf, oreb, dreb, ftm, fta, fga, fgm colums to float
        self.games_details_df["PTS"] = self.games_details_df["PTS"].astype(
            float)
        self.games_details_df["AST"] = self.games_details_df["AST"].astype(
            float)
        self.games_details_df["REB"] = self.games_details_df["REB"].astype(
            float)
        self.games_details_df["FG_PCT"] = self.games_details_df["FG_PCT"].astype(
            float)
        self.games_details_df["FG3_PCT"] = self.games_details_df["FG3_PCT"].astype(
            float)
        self.games_details_df["FT_PCT"] = self.games_details_df["FT_PCT"].astype(
            float)
        self.games_details_df["STL"] = self.games_details_df["STL"].astype(
            float)
        self.games_details_df["BLK"] = self.games_details_df["BLK"].astype(
            float)
        self.games_details_df["TO"] = self.games_details_df["TO"].astype(
            float)
        self.games_details_df["PF"] = self.games_details_df["PF"].astype(
            float)
        self.games_details_df["OREB"] = self.games_details_df["OREB"].astype(
            float)
        self.games_details_df["DREB"] = self.games_details_df["DREB"].astype(
            float)
        self.games_details_df["FTM"] = self.games_details_df["FTM"].astype(
            float)
        self.games_details_df["FTA"] = self.games_details_df["FTA"].astype(
            float)
        self.games_details_df["FGA"] = self.games_details_df["FGA"].astype(
            float)
        self.games_details_df["FGM"] = self.games_details_df["FGM"].astype(
            float)

        # remove comment, nickname, and team_city columns
        self.games_details_df = self.games_details_df.drop(
            columns=["COMMENT", "NICKNAME", "TEAM_CITY"])

        # add game_score column
        self.game_score()

        # add game_dates
        self.game_dates()

        self.player_ids = pd.read_csv("backend/data/Nba player ids.csv", dtype=str)

    def pickle_data(self):
        """
        Pickle dataframes
        """

        # pickle players_df if not empty
        if not self.players_df.empty:
            # pickle players_df
            self.players_df.to_pickle("backend/data/players_df.pkl")
        else:
            # warning message
            print("players_df is empty")

        # pickle players_data_df if not empty
        if not self.players_data_df.empty:
            # pickle players_data_df
            self.players_data_df.to_pickle("backend/data/players_data_df.pkl")
        else:
            # warning message
            print("players_data_df is empty")

        # pickle games_details_df if not empty
        if not self.games_details_df.empty:
            # pickle games_details_df
            self.games_details_df.to_pickle(
                "backend/data/games_details_df.pkl")
        else:
            # warning message
            print("games_details_df is empty")

        # pickle games_df if not empty
        if not self.games_df.empty:
            # pickle games_df
            self.games_df.to_pickle("backend/data/games_df.pkl")


        self.player_ids.to_pickle("backend/data/player_ids.pkl")

    def game_dates(self):
        """
        Add game dates to games_details_df
        """
        
       # get game dates from games_df
        game_dates = self.games_df[["GAME_ID", "GAME_DATE_EST"]]

        # merge game_dates into games_details_df
        self.games_details_df = pd.merge(
            self.games_details_df, game_dates, on="GAME_ID")

    def game_score(self):
        """
        Calculate game score

        Game Score = Points Scored + (0.4 x Field Goals) – (0.7 x Field Goal Attempts) – 
        (0.4 x (Free Throw Attempts – Free Throws)) + (0.7 x Offensive Rebounds) + 
        (0.3 x Defensive Rebounds) + Steals + (0.7 x Assists) + (0.7 x Blocks) – (0.4 x Personal Fouls) – Turnovers
        """

        # calculate game score into new column of games_details_df
        self.games_details_df["GAME_SCORE"] = self.games_details_df["PTS"] + (0.4 * self.games_details_df["FGM"]) - (0.7 * self.games_details_df["FGA"]) - (0.4 * (self.games_details_df["FTA"] - self.games_details_df["FTM"])) + (0.7 * self.games_details_df["OREB"]) + (0.3 * self.games_details_df["DREB"]) + self.games_details_df["STL"] + (0.7 * self.games_details_df["AST"]) + (0.7 * self.games_details_df["BLK"]) - (0.4 * self.games_details_df["PF"]) - self.games_details_df["TO"]


def main():
    """
    Main function to add data to database
    """

    # create EverythingHoopsAPI object
    hoops = EverythingHoopsDB()

    # read in csvs into dataframes
    hoops.read_csvs_into_dfs()

    # pickle data
    hoops.pickle_data()


if __name__ == "__main__":
    main()
