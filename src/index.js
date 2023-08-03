const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const gameStage = require("./controllers/gameStageController");
const controlGame = require("./controllers/controlGameController");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.static("./pages"));

app.get("/", gameStage.game);
app.get("/control", controlGame.control);

let controlEvents = [];

io.on("connection", (socket) => {
  console.log("socket conectado");
  socket.on("sendEventUpControl", (data) => {
    controlEvents.push(data);
    socket.broadcast.emit("emitEventUpControl", data);
  });
});
module.exports = server;
