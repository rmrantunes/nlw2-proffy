// para criar um servidor:
// $ npm install express
// para executar $ node src/server.js

// para não ter que reiniciar o
// servidor toda vez que modificar o server.js:
// $ npm install nodemon -D

// Servidor
const express = require("express");
const server = express();
// sinceramente, entendi nada desses consts e server, mas ok.

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require("./pages");

// configurando o nunjucks (que é uma template engine, a melhor analigia no momento é que, o html vai deixar de ser estático, e começar a utilizar configuações mais dinamicas)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server // só precisa da função express()
  // receber os dados do req.body:
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public")) // para pegar os arquivos que são utilizados que está na pasta public. static porque são pastas estaticas, ou algo assim

  .get("/", pageLanding) // resquisição e resposta dos dados do formulário no banco de dados
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  .listen(5500); // dentro de listen vai a porta do servidor
