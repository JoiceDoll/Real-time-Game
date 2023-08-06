const marioBros = document.querySelector(".mario");
const pipe = document.querySelector(".pipeImage");
const start = document.querySelector(".start-game");
const clouds = document.querySelector(".clouds");

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

function startEventControl(startEvent) {
  if (startEvent) {
    if (start && pipe && clouds) {
      start.style.display = "none";
      pipe.style.animation = "pipe-animation 2s infinite linear";
      pipe.style.marginLeft = "0";
      clouds.style.animation = "cloud-animation 8s infinite linear";
      clouds.style.marginLeft = "0";
    }
  }
}

if (pipe && clouds) {
  pipe.style.animation = "none";
  pipe.style.marginLeft = "50%";
  clouds.style.animation = "none";
  clouds.style.marginLeft = "20%";

  const background = document.querySelector(".game-over-background");
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
      background.style.display = "block";
    }
  }, 10);
}
