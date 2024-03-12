# Raffle-devtalle

<h1 align="center">
  <br>
  <img src="./raffle.png" alt="Raffle-devtalle" width="200">
  <br>
  Raffle-devtalle
  <br>
</h1>

<h4 align="center">A minimal web application allows you to easily and securely raffle prizes.</h4>



<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#credits">Credits</a> •
  <a href="#how-to-install">Ho to install</a> •
  <a href="#license">License</a>
</p>


## Key Features

* Create raffles: Define the raffle name, deadline, prizes, and entry rules.
* Enter raffles: Users can register to participate in active raffles.
* Draw the raffle: The application randomly selects winners transparently.
* Notify winners: The application automatically sends email notifications to winners.


> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Credits

- [Nancy](http://github.com/)
- [Miguel](https://github.com/)
- [Edgar](https://github.com/eddcode)

## How to install

- Server 
  - NodeJS
  - ExpressJS
  - MongoDB
- Client
  -  ReactJS

__Instructions to run the project__:

Option 1: Manual

> Install MongoDB: Follow the official instructions to install MongoDB on your operating system: https://www.mongodb.com/docs/manual/installation/

1. Install dependencies:

```bash 
$ cd server && pnpm install
```
```bash
$ cd client && npm install
```

2. Configure MongoDB:

* Create a database called "raffle_app".
* copy the `server/.sample.env` to `server/.env` file and configure the database connection.
```bash
cd server && pnpm dev
```

```bash
cd client && pnpm dev
```

Option 2: Docker

> Follow the official instructions to install Docker Compose on your operating system: https://docs.docker.com/compose/install/

* Copy the `server/.sample.env` to `server/.env` file and configure the database connection.
```bash
$ docker-compose up
```

> Note: The first time Docker Compose is run, it will download the necessary images, which may take a few minutes.

Access the application:

Server: http://localhost:3000
Client: http://localhost:3001

## Related

[Raffle-devtalle-web](https://github.com/Nirvana-Code-Zen/Raffle-devtalle) - Web version of Raffle-devtalle


## License

GNU GENERAL PUBLIC LICENSE V3.0