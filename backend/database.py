import mysql.connector
from config import *

def get_connection():
    return mysql.connector.connect(
        host = mysql_host,
        user = mysql_user,
        password = mysql_password,
        database = database_name

)

