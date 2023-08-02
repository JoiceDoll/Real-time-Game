function renderEvent(controlEvent) {
  if (controlEvent) {
    const marioBros = document.querySelector(".mario");
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
