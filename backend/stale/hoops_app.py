"""
Twitter Database API for PostgreSQL
"""

from db_utils import DBUtils

class EverythingHoopsAPI:
    """
    API to interact with the EverythingHoops database
    """

    def __init__(self, user, password, database, host, port):
        """
        Constructor for EverythingHoops
        """

        # Create a DBUtils object
        self.db = DBUtils()

        # Authenticate
        self.db.authenticate(user, password, database, host, port)

    def shutdown(self):
        """ Close connection to db """

        self.db.close()