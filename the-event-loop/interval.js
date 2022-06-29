let currentCount = 3;

const countdown = setInterval(() => {
  if (currentCount !== 0) {
    console.log(currentCount);
  } else {
    console.log('Blast Off!');
    clearInterval(countdown);
  }
  currentCount--;
}
, 1000);
