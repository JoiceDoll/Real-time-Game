const socket = io("http://localhost:3031");
const upButton = document.querySelector(".button-one");

socket.on("emitEventUpControl", (controlEvent) => {
  renderEvent(controlEvent);
});

upButton.addEventListener("click", (e) => {
  e.preventDefault();
  const buttonUpValue = upButton.value;
  renderEvent(buttonUpValue);
  socket.emit("sendEventUpControl", buttonUpValue);
});
