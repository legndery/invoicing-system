# Invoicing-system
a simple browser based Invoicing Tool

# Setup and run
1. Git clone the repo
    ```bash
    git clone git@github.com:legndery/invoicing-system.git
    cd invoicing-system
    ```
2. The folders are separate NPM packages. so need to npm install for both folders.
    ```bash
    cd client && npm install
    cd ../server && npm install
    ```
3. Setup the mysql tables. I have attacched the SQL dump here named `dump.sql` import that to your server. the creation of database is also stated.   **Note: I am using mariaDB**
4. After mysql has been setup. you need to add a config.json file to the `server`
    ```bash
    cd server/src/config
    touch config.json #or create a json file called config.json
    ```
    Paste the below contents there. we only need the `development` key.
    ```json
    {
        "development": {
            "username": "root",
            "password": null,
            "database": "invoice_db",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
    ```
5. Now, mysql and config has been setup. Only thing remains is running them
    ```bash
    cd client
    npm start
    ```
    In another bash
    ```bash
    cd server
    npm start
    ```

# API Endpoints
Default port for the server is 8080

| Endpoint | Reqest Payload | description|
|----|---|--|
|  `GET /` |  `nothing` | Gets list of all the invoices|
| `GET /:id` | `Number in place of :id` | Gets the invoice with ID=id |
| `POST /create`| `Content-Type: application/json`| Creates an invoice | 
|               |```json                                    | |
|               |    {          |   |
|                |        "userData":{   |  |
|                |            "name":"test1",    |  |
|                |            "email":"test1@isp.org"    | |
|                |        },     |  |
|                |        "arrItemsData":[   | |
|                |            { |   |
|                |                "name":"Chicken", "price":100, "quantity": 2  | |
|                |            },    |   |
|                |            { |   |
|                |                "name":"Mutton", "price":120, "quantity": 1   |   |
|                |            } |   |
|                |        ],    |   |
|                |        "tax":18, |   |
|                |        "discount":10|    |
|                |    }|    |
|                |    ``` | |
| end | -- | -- |
                    