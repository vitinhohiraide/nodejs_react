import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rate: String
})

const gameSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema]
});

//Aqui está sendo criada a coleção games no banco de dados
const Game = mongoose.model("Game", gameSchema);

export default Game;
