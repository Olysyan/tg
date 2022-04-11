# Дополнение [веб-версии телеграм](https://github.com/Ajaxy/telegram-tt)

# Установка

`sudo apt install curl`


`curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -`

`sudo apt -y install nodejs`

Проверить версию node: `node  -v`

Пример .env: `mv .env.example .env`

Python библиотеки необходимые для работы:

`pip install telethon`

`pip install dotenv`

`pip install mysql-connector-python`

# Функции

| функция | назначение | 
|:---------------------:|:-----------------------:|
| `python3 addContact.py` | синхронизация контактов из базы данных | 
