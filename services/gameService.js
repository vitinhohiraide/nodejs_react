import Game from "../models/games.js";

class gameService {
  // Game.find().then(games => {
  // //Sucesso
  // }).catch(error => {
  // //Falha
  // })

  //async / await
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar jogos
  async Create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title, //isso é a mesma coisa que title : title
        platform,
        year,
        price,
      });
      // método do mongoose para cadastrar algo .save()
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  //Função para deletar jogos
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  async Upadate(id, title, price, year, descriptions) {
    try {
      await Game.findByIdAndUpdate(id, {
        //title : title
        title,
        price,
        year,
        descriptions,
      });
      console.log(`Dados do game com a id: ${id} alterados com sucesso`);
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
