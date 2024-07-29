# 🌐 Atividade - API Rest: SQL + NoSQL

A atividade consiste na criação de uma API Rest.

## 🚧 Proposta

- 3 Collections NoSQL

- 3 Tabelas SQL

- Usar `ORM` e `ODM`

### 👉🏻 Sobre a API
- Tema: Biblioteca 📖
- ORM Utilizada: [Sequilize](https://sequelize.org/)
- ODM Utilizada: [Mongoose](https://mongoosejs.com/)
- Banco de Dados Escolhidos: [PostgreSQL](https://www.postgresql.org/) / [MongoDB](https://www.mongodb.com/pt-br)
- Variáveis de Ambiente: [DotEnv](https://www.npmjs.com/package/dotenv)
#### ⚡ Os Endpoints


``` js
GET      - / 
// MongoDB
GET/POST - /autores 
GET      - /autor/{id}
GET/POST - /livros 
GET      - /livro/{id}
GET/POST - /usuarios 
GET      - /usuario/{id}

// PostgreSQL
GET/POST - /avaliacoes
GET      - /avaliacao/{id}
GET/POST - /inventarios
GET      - /inventario/{id} 
GET/POST - /pedidos  
GET      - /pedidos/{id}
```

### 🏁 Iniciando a Api
Utilizei o Express para construir esta API, logo, para que a mesma funcione é necessário realizar sua instalação através do comando:
```bash
$ npm install express
```
Com o Express instalado é possível inicializar a aplicação através do comando:
```bash
$ 
node server.js
```

Instale as dependências do [Sequilize](https://sequelize.org/) para PostgreSQL:
```bash
$ npm install --save pg pg-hstore
```

Instale as dependências do [Mongoose](https://mongoosejs.com/):
```bash
$ npm install mongoose --save
```

Instale as dependências do [DotEnv](https://www.npmjs.com/package/dotenv):
```bash
$ npm install dotenv --save
```

Crie e altere o arquivo `.env` na raiz do projeto, colocando suas informações:
```
MONGODB_URI = mongodb://127.0.0.1:{A Porta}/biblioteca //O padão da porta é 27017
POSTGRES_HOST = localhost
POSTGRES_DATABASE = Biblioteca
POSTGRES_USER = {Seu Usuário}
POSTGRES_PASSWORD = {Sua Senha}
PORT = {A Porta} //O padrão é 5432
```

#### ⚠️ Importante
Crie um banco de dados com o mesmo nome da variável `POSTGRES_DATABASE`, o banco não se criará sozinho.

### 📤 Inserindo Alguns Dados
Utilize o `curl` para realizar a inserção de alguns dados:
```bash
# Autores
$ curl -X POST -H 'Content-Type: application/json' -d '{"author_id": 1, "name": "George Orwell","birth_year": 1903,"nationality": "Inglês","books_written":9}' http://localhost:8080/autores

$ curl -X POST -H 'Content-Type: application/json' -d '{"author_id": 2, "name": "Harper Lee","birth_year": 1926,"nationality": "Americano","books_written":2}' http://localhost:8080/autores

$ curl -X POST -H 'Content-Type: application/json' -d '{"author_id": 3, "name": "F. Scott Fitzgerald","birth_year": 1896,"nationality": "Americano","books_written":5}' http://localhost:8080/autores

# Livros 
$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 1, "title": "1984","author_id": 1,"genre": "Distopia","published_year":1949}' http://localhost:8080/livros

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 2, "title": "To Kill a Mockingbird","author_id": 2,"genre": "Ficção","published_year":1960}' http://localhost:8080/livros

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 3, "title": "The Great Gatsby","author_id": 3,"genre": "Ficção","published_year":1925}' http://localhost:8080/livros

# Usuários
$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 1, "name": "Alice","email": "alice@example.com","age": 30}' http://localhost:8080/usuarios

$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 2, "name": "Bob","email": "bob@example.com","age": 25}' http://localhost:8080/usuarios

$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 3, "name": "Charlie","email": "charlie@example.com","age": 35}' http://localhost:8080/usuarios

# Avaliações
$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 1, "user_id": 1,"rating": 5,"comment": "Livro Incrível!"}' http://localhost:8080/avaliacoes

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 2, "user_id": 2,"rating": 4,"comment": "Ótima Leitura."}' http://localhost:8080/avaliacoes

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 3, "user_id": 3,"rating": 3,"comment": "Bom, mas não ótimo."}' http://localhost:8080/avaliacoes

# Inventário
$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 1, "quantity": 10}' http://localhost:8080/inventarios

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 2, "quantity": 15}' http://localhost:8080/inventarios

$ curl -X POST -H 'Content-Type: application/json' -d '{"book_id": 3, "quantity": 5}' http://localhost:8080/inventarios

# Pedidos
$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 1, "book_id": 1, "order_date": "2024-07-01"}' http://localhost:8080/pedidos

$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 2, "book_id": 3, "order_date": "2024-06-24"}' http://localhost:8080/pedidos

$ curl -X POST -H 'Content-Type: application/json' -d '{"user_id": 3, "book_id": 3, "order_date": "2024-07-15"}' http://localhost:8080/pedidos
```


### 📒 Disciplina
D1DBE - Desenvolvimento Back-End I