var heading = document.querySelector('.countdown-display');
var countDown = setInterval(startCountDown, 1000);

function startCountDown() {
  heading.textContent--;
  if (heading.textContent < 1) {
    heading.textContent = '~Earth Beeeelooowww Us~';
    stopCountDown();
  }
}
function stopCountDown() {
  clearInterval(countDown);
}
