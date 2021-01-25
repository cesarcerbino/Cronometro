var mytimer;

function play() {
  mytimer = setInterval(() => {
    timer();
  }, 1000);
}
function timer() {
  let segundos = document.getElementById("segundos");
  let minutos = document.getElementById("minutos");
  let horas = document.getElementById("horas");
  if (segundos.value < 60) {
    segundos.value++;
  } else {
    if (segundos.value == 60) {
      if (minutos.value == 60) {
        horas.value++;
        minutos.value = 00;
        segundos.value = 00;
      } else {
        minutos.value++;
        segundos.value = 00;
      }
    }
  }
}

const reload = () => {
  let segundos = (document.getElementById("segundos").value = "00");
  let minutos = (document.getElementById("minutos").value = "00");
  let horas = (document.getElementById("horas").value = "00");
};

function pause() {
  clearInterval(mytimer);
}
