# <h1 align="center">Economigos</h1>

Economigos é uma aplicação Mobile/Web que traz a facilidade, organização e melhora financeira que você precisa!

## 🚀 Tecnologias utilizadas

#### Frontend
- React
- Victory
- Axios
- Date-FNS
- Jest
- Styled-Components
- React-Toastify



#### Backend
- Java
- Spring Boot
- Docker
- Postgres
- JPA


## 💻 Rodando a aplicação

#### Requisitos

- NodeJS
- Yarn
- Uma instância de Postgres ([Docker](https://hub.docker.com/_/postgres))

**Clone o repositório**

```sh
git clone git@github.com:liverday/gofinances.git
```

**Instale as dependencias**

```sh
cd <frontend ou backend>

yarn
```

**Inicie o processo**

#### Frontend

```sh
cd frontend

yarn start
```

#### Backend

**Certifique-se de que o container do Postgres esteja rodando**

```sh
docker run --name gofinances-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=p0stgr3s -e POSTGRES_DB=gofinances -p 5432:5432 -d postgres
```

**Rode as migrations**

```sh
cd backend

yarn typeorm migration:run
```

**Configure as variáveis de ambiente**

Duplique o arquivo `.env.example`, removendo a parte `.example` do nome (ficando apenas `.env`). Após isso, altere os valores conforme necessário.

**Inicie o processo**

```sh
yarn dev:server
```

#### Mobile

Em desenvolvimento 💻 

Feito com :heart: por Economigos. 🤝
