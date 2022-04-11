from telethon.sync import TelegramClient
from telethon import functions, types
import os
from dotenv import load_dotenv
import random
import mysql.connector
from mysql.connector import Error

def synch(host_name,user_name,user_password,db_name,name,id_tg,hash_tg):
    connection=None
    try:
        connection=mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name)
        select_movies_query = "SELECT * FROM tg"
        with connection.cursor() as cursor:
            with TelegramClient(name,id_tg,hash_tg) as client:
                cursor.execute(select_movies_query)
                result = cursor.fetchall()
                for row in result:
                    res = client(functions.contacts.ImportContactsRequest(
                        contacts=[types.InputPhoneContact(
                            client_id=row[0],
                            first_name=row[1],
                            last_name=row[2],
                            phone=row[3]
                        )]))
        print("OK")
    except Error as e:
        print(e)
    return connection

load_dotenv()

localhost=os.getenv('LOCALHOST')
user=os.getenv('USER_db')
password=os.getenv('PASSWORD')
database=os.getenv('DATABASE')
hash_tg=os.getenv('TELEGRAM_T_API_HASH')
id_tg=os.getenv('TELEGRAM_T_API_ID')
name=os.getenv('NODE_ENV')

if __name__=="__main__":
    synch(localhost,user,password,database,name,id_tg,hash_tg)