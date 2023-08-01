function renderEvent(controlEvent) {
  if (controlEvent) {
    const marioBros = document.querySelector(".mario");
    if (marioBros) {
      marioBros.style.bottom = "50%";
      function downMarioTimeOut() {
        marioBros.style.bottom = "0";
      }
      setTimeout(() => {
        downMarioTimeOut();
      }, 290);
    }
  }
}
