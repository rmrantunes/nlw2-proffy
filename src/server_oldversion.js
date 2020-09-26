// para criar um servidor:
// $ npm install express
// para executar $ node src/server.js

// para não ter que reiniciar o
// servidor toda vez que modificar o server.js:
// $ npm install nodemon -D

// Dados

const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "69992501188",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
  {
    name: "Daniele Evangelista",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "989847978",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220],
  },
];

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terca-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

// Funções
function getSubject(subjetNumber) {
  const position = +subjetNumber - 1;
  return subjects[position];
}

function pageLanding(req, res) {
  // return res.sendFile(__dirname + "/views/index.html");
  return res.render("index.html"); // render por causa do nunjucks
}

function pageStudy(req, res) {
  const filters = req.query; // <= cria um obrijeto contendo os requests de inputs de um form feitos pelo o usuário assim que ele aperta o submit
  return res.render("study.html", { proffys, filters, subjects, weekdays }); // (desatualizazdo) no study.html coloque <h1>{{proffys.name}}</h1> (the_field(name) kkkk)
  // {%for %}...{%endfor %}
}

function pageGiveClasses(req, res) {
  const data = req.query; //pega todos os valores de inputs e textarea e bota num objeto...
  const isNotEmpty = Object.keys(data).length > 0; // QuêÊÊ?
  if (isNotEmpty) {
    data.subject = getSubject(data.subject);
    //adicionar data à lista de proffys
    proffys.push(data);
    return res.redirect("/study");
  }

  return res.render("give-classes.html", { subjects, weekdays });
}

// Servidor
const express = require("express");
const server = express();
// sinceramente, entendi nada desses consts e server, mas ok.

// configurando o nunjucks (que é uma template engine, a melhor analigia no momento é que, o html vai deixar de ser estático, e começar a utilizar configuações mais dinamicas)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server // só precisa da função express()
  .use(express.static("public")) // para pegar os arquivos que são utilizados que está na pasta public. static porque são pastas estaticas, ou algo assim

  .get("/", pageLanding) // resquisição e resposta dos dados do formulário no banco de dados
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500); // dentro de listen vai a porta do servidor
