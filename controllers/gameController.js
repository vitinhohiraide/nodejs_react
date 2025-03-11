import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb"; //Ele que faz a validação se para excluir o jogo caso o object id esteja correto

//Função para listar jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    // entre () estão os códigos referentes a cada resultado obtido
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

//Função para cadastrar jogos
const createGame = async (req, res) => {
  try {
    //mesma coisa que:
    //const title = req.body.title
    //const platform = req.body.title

    //Capturando valores
    const { title, platform, year, price } = req.body;
    // Cadastrando no banco de dados
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201); // Código (201) = Create
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//Função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); //Código (204) (NO CONTENT)
    } else {
      res.sendStatus(400); // Código (400) {BAD REQUEST}
      //Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
export default { getAllGames, createGame, deleteGame };
