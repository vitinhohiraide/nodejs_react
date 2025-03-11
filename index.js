import express from "express";
import mongoose from "mongoose";
import Game from "./models/games.js"
const app = express();

//importando as rotas (endpoints) de Games
import gameRoutes from './routes/gameRoutes.js'

// Configurações do express
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //permite o uso dos pacotes json
app.use('/', gameRoutes)
//INICIANDO A CONEXÃO COM O BANCO DE DADOS MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");
//ROTA PRINCIPAL
app.get("/", (req, res) => {
  const games =[
    {
      title: "Game 01",
      year: 2020,
      platform: "PC",
      price: 20,
    },
    {
      title: "Game 02",
      year: 2024,
      platform: "Playstation 5",
      price: 200,
    },
  ];
  res.json(games);
});

//Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
