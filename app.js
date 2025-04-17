// Importa o Express para criar o servidor e chamar as rotas
const express = require("express");

// Cria uma instância do Express
const app = express();

// Carrega as variáveis de ambiente do .ENV
require("dotenv").config();

// Estabelece a conexão com o DB
require("./db");

// Define a porta do servidor, ou do .ENV ou 3000 por padrão
const port = process.env.PORT || 3000;

// Importa o roteador de imagens para gerenciar as rotas criadas
const pictureRouter = require("./routes/picture");

// Configuração de CORS
app.use((req, res, next) => {
  // Permitindo qualquer origem req. para o Servidor
  res.header("Access-Control-Allow-Origin", "*");
  // Permitindo os métodos nas req.
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  // Permite que o cabeçalho Content-Type, seja enviado nas req.
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Chama a rota de processamento
  next();
});

// Define que todas as rotas são "localhost:3000/pictures"
app.use("/pictures", pictureRouter);

// Inicia o servidor, e exibe uma mensagem ao usuario
app.listen(port, () => {
  console.log(`O servidor executa na porta ${port}`);
});