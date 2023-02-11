import psycopg2
import pandas as pd


class AuthenticationError(Exception):
    pass

 
class NoMoreConnections(Exception):
    pass


class ConnectionFactory:
    """ Serve up connections on request (up to some limit) """

    max_connections = 5
    active_connections = 0

    @staticmethod
    def get_connection(user, password, database, host, port):
        if ConnectionFactory.active_connections < ConnectionFactory.max_connections:
            try:
                con = psycopg2.connect(
                    host=host,
                    user=user,
                    password=password,
                    database=database,
                    port=port)
                ConnectionFactory.active_connections += 1
                return con

            except Exception:
                raise AuthenticationError("Invalid credentials")
        else:
            raise NoMoreConnections("No more available connections")

    @staticmethod
    def close_connection(con):
        con.close()
        ConnectionFactory.active_connections -= 1


class DBUtils:

    def __init__(self):
        """ Future work: Implement connection pooling """
        self.con = None

    def authenticate(self, user, password, database, host, port):
        """ Doing the authentication and generating an internal connection """
        self.con = ConnectionFactory.get_connection(
            user, password, database, host, port)

    def close(self):
        """ Close or release our connections """
        ConnectionFactory.close_connection(self.con)
        self.con = None

    def execute(self, query, df=True):

        # Step 1: Create cursor
        cur = self.con.cursor()

        # Step 2: Execute the query
        cur.execute(query)

        # Step 3: Get the resulting rows and column names
        rows = cur.fetchall()
        cols = [desc[0] for desc in cur.description]

        # Step 4: Close the cursor
        cur.close()

        # Step 5: Return the result
        if df:
            return pd.DataFrame(rows, columns = cols)
        else:
            return rows, cols

    def callProc(self, query, args, df=True):

        # Step 1: Create cursor
        cur = self.con.cursor(prepared = True)

        # Step 2: Execute the query
        cur.execute(query, args)

        # Step 3: Get the resulting rows and column names
        rows = cur.fetchall()
        cols = [desc[0] for desc in cur.description]

        # Step 4: Close the cursor
        cur.close()

        # Step 5: Return the result
        if df:
            return pd.DataFrame(rows, columns = cols)
        else:
            return rows, cols

    def insert_one(self, sql, val):
        """ Insert a single row """

        # create cursor
        cur = self.con.cursor()

        # execute the query
        cur.execute(sql, val)

        # commit the changes
        self.con.commit()


    def insert_many(self, sql, vals):
        """ Insert multiple rows """

        # create cursor
        cur = self.con.cursor()

        # args = cur.mogrify()
        args = ','.join(cur.mogrify("(%s, %s)", i).decode('utf-8') for i in vals)

        # execute the query
        cur.execute(sql + (args))

        # commit the changes
        self.con.commit()

