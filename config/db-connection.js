//Importando o mongoose
import mongoose from "mongoose";
//Usuário e senha do banco de dados
const dbUser = "vitorhiraide";
const dbPassword = "1RPcDKDKLSFxDXnE";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}vitorhiraide:<db_password>@cluster0.5kwqh.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;