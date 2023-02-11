"""
API to create and query EverythingHoops dataframes
"""

import pandas as pd

class EverythingHoopsAPI:
    """
    API to interact with the EverythingHoops database
    """

    def __init__(self):
        """
        EverythingHoops Database
        """

        # Dataframes
        self.players_df = pd.DataFrame()
        self.boxscore_df = pd.DataFrame()

    def read_players_csv(self, csv_path):
        """
        Read in players csv
        """

        # read in csv
        df = pd.read_csv(csv_path)

        # concatenate to players_df
        self.players_df = pd.concat([self.players_df, df])

    def read_boxscore_csv(self, csv_path):
        """
        Read in boxscore csv
        """

        # read in csv
        df = pd.read_csv(csv_path)

        # concatenate to boxscore_df
        self.boxscore_df = pd.concat([self.boxscore_df, df])

    def pickle_data(self):
        """
        Pickle dataframes
        """

        # pickle players_df if not empty
        if not self.players_df.empty:
            # pickle players_df
            self.players_df.to_pickle("data/players_df.pkl")
        else:
            # warning message
            print("players_df is empty")

            
        # pickle boxscore_df if not empty
        if not self.boxscore_df.empty:
             # pickle boxscore_df
            self.boxscore_df.to_pickle("data/boxscore_df.pkl")
        else:
            # warning message
            print("boxscore_df is empty")

def main():
    """
    Main function to test and add data to database
    """

    # create EverythingHoopsAPI object
    hoops = EverythingHoopsAPI()

    # read in players csv
    # hoops.read_players_csv("data/players.csv")

    # read in boxscore csv
    # hoops.read_boxscore_csv("data/boxscore.csv")

    # SAMPLE DATA
    # read in jokic csv
    hoops.read_boxscore_csv("data/jokic.csv")

    # pickle data
    hoops.pickle_data()

if __name__ == "__main__":
    main()