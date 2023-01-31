modal = document.querySelector("#modal");

function abreModal() {
  if (modal.style.display === "none") {
    modal.style.display = "flex";
    console.log("abriu modal");
  }
}

function fechaModal() {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
    console.log("fechou modal");
  }
}

const date = new Date("Nov 22, 2023 00:00").getTime();

var timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = date - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance <= 0) {
    document.getElementById("timer").innerHTML = "The timer is gone";
  }
}, 1000);
