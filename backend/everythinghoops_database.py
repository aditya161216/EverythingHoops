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
        self.players_data_df = pd.read_csv("backend/data/player_data.csv", dtype=str)

        # read in games_details csv
        self.games_details_df = pd.read_csv("backend/data/games_details.csv", dtype=str)

        # pts, ast, reb colums to int
        self.games_details_df["PTS"] = self.games_details_df["PTS"].astype(float)
        self.games_details_df["AST"] = self.games_details_df["AST"].astype(float)
        self.games_details_df["REB"] = self.games_details_df["REB"].astype(float)

        # remove comment, nickname, and team_city columns
        self.games_details_df = self.games_details_df.drop(columns=["COMMENT", "NICKNAME", "TEAM_CITY"])

        # read in games csv
        self.games_df = pd.read_csv("backend/data/games.csv", dtype=str)

    def read_player_ids(self):
        """
        Read player_ids
        """

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
            self.games_details_df.to_pickle("backend/data/games_details_df.pkl")
        else:
            # warning message
            print("games_details_df is empty")
            
        # pickle games_df if not empty
        if not self.games_df.empty:
            # pickle games_df
            self.games_df.to_pickle("backend/data/games_df.pkl")
        else:
            # warning message
            print("games_df is empty")

def main():
    """
    Main function to add data to database
    """

    # create EverythingHoopsAPI object
    hoops = EverythingHoopsDB()

    # read in csvs into dataframes
    # hoops.read_csvs_into_dfs()

    # read in player_ids
    hoops.read_player_ids()

    # pickle player_ids
    hoops.player_ids.to_pickle("backend/data/player_ids.pkl")


    # pickle data
    # hoops.pickle_data()

if __name__ == "__main__":
    main()