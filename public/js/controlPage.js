const socket = io("http://localhost:8080");
const upButton = document.querySelector(".button-one");
const startButton = document.querySelector(".select-button");
const stagePage = document.querySelector(".control-stage");

socket.on("emitEventUpControl", (controlEvent) => {
  renderEvent(controlEvent);
});

upButton.addEventListener("click", (e) => {
  e.preventDefault();
  const buttonUpValue = upButton.value;
  renderEvent(buttonUpValue);
  socket.emit("sendEventUpControl", buttonUpValue);
});

startButton.addEventListener("click", (e) => {
  e.preventDefault();
  stagePage.style.background = "#ffc03d";
});
