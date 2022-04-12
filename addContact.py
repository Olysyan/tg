from telethon.sync import TelegramClient
from telethon import functions, types
import os
import sys
from dotenv import load_dotenv
import random
import mysql.connector
from mysql.connector import Error

def connect(host_name,user_name,user_password,db_name):
    try:
        connection=mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name)
        
    except Error as e:
        print(e)
    return connection

def synch(connection,client):
    try:
        select_movies_query = "SELECT * FROM tg"
        with connection.cursor() as cursor:
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

def send_mess(connection,mess,client):
    try:
        param =sys.argv[1]
        if param[0]=='+':
            some_id = client.get_peer_id(param)
            client.send_message(some_id,mess)
        elif int(param)%1==0:
            query=f"SELECT * FROM tg WHERE ID = {param}"
            with connection.cursor() as cursor:
                cursor.execute(query)
                result = cursor.fetchall()
                some_id = client.get_peer_id(result[0][3])
                client.send_message(some_id,mess)
                print(f'"{mess}" send to {result[0][3]} ')
        else:
            print("Enter the correct args")
    except Error as e:
        print(e)
load_dotenv()

localhost=os.getenv('LOCALHOST')
user=os.getenv('USER_db')
password=os.getenv('PASSWORD')
database=os.getenv('DATABASE')
hash_tg=os.getenv('TELEGRAM_T_API_HASH')
id_tg=os.getenv('TELEGRAM_T_API_ID')
name=os.getenv('NODE_ENV')

if __name__=="__main__":
    db=connect(localhost,user,password,database)
    if db and len(sys.argv)>1:
        print("Enter mes:")
        mes=input()
        with TelegramClient(name,id_tg,hash_tg) as client:
            send_mess(db,mes,client)
    elif db and len(sys.argv)==1:
        with TelegramClient(name,id_tg,hash_tg) as client:
            synch(db,client)