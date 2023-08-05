const marioBros = document.querySelector(".mario");

function renderEvent(controlEvent) {
  if (controlEvent) {
    if (marioBros) {
      marioBros.style.bottom = "60%";
      function downMarioTimeOut() {
        marioBros.style.bottom = "8%";
      }
      setTimeout(() => {
        downMarioTimeOut();
      }, 290);
    }
  }
}
const pipe = document.querySelector(".pipeImage");
const background = document.querySelector(".game-over-background")
const loopPiper = setInterval(() => {
  const offSetPositionPipe = pipe.offsetLeft;
  const offSetTopMario = marioBros.offsetTop;

  if (
    offSetPositionPipe <= 150 &&
    offSetPositionPipe > 0 &&
    offSetTopMario === 453
  ) {
    pipe.style.animation = "none";
    pipe.style.left = `${offSetPositionPipe}px`;
    marioBros.setAttribute("src", "/public/images/game-over.png");
    marioBros.style.width = "50px";
    marioBros.style.height = "85px";
    background.style.display = "block"

  }
}, 10);
