import express from "express";
// Configurações do express
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use (express.json()); //permite o uso dos pacotes json

//ROTA PRINCIPAL
app.get("/", (req, res) => {
  const games =
    ({
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
    });
  res.json.games;
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
