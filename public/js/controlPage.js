const socket = io("https://real-time-game-production.up.railway.app");
// const socket = io("http://localhost:8080/");
const upButton = document.querySelector(".button-one");
const selectButton = document.querySelector(".select-button");
const stagePage = document.querySelector(".control-stage");
const startButton = document.querySelector(".start-button");

socket.on("emitEventUpControl", (controlEvent) => {
  renderEvent(controlEvent);
});

socket.on("emitEventStartControl", (startEvent) => {
  startEventControl(startEvent);
});

upButton.addEventListener("click", (e) => {
  e.preventDefault();
  const buttonUpValue = upButton.value;
  renderEvent(buttonUpValue);
  socket.emit("sendEventUpControl", buttonUpValue);
});

selectButton.addEventListener("click", (e) => {
  e.preventDefault();
  stagePage.style.background = "#ffc03d";
});

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emitStartGameEvent = startButton.value;
  startEventControl(emitStartGameEvent);
  socket.emit("sendEventStartControl", emitStartGameEvent);
});
