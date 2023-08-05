const express = require("express");
const expbs = require("express-handlebars");
const path = require("path");
const app = express();

const gameStage = require("./controllers/gameStageController");
const controlGame = require("./controllers/controlGameController");

const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use("/public", express.static(__dirname + '/public'));
app.use("/pages", express.static(__dirname + '/pages'));

const hbs = expbs.create({
  defaultLayout: "main",
  layoutsDir: path.resolve(__dirname, "views"),
  partialsDir: path.resolve(__dirname, "partials"),

  // create custom express handlebars helpers
  helpers: {
    calculation: function (value) {
      return value * 5;
    },

    list: function (value, options) {
      let out = "<ul>";
      for (let i = 0; i < value.length; i++) {
        out = out + "<li>" + options.fn(value[i]) + "</li>";
      }
      return out + "</ul>";
    },
  },
});

// Express Handlebars Configuration
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

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
