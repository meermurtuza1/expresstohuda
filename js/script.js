// Floating background hearts
const heartBg = document.querySelector('.heart-bg');
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (20 + Math.random() * 30) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 6) + 's';
  heartBg.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 500);

// Confetti when final line appears
setTimeout(() => {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}, 5000); // After final container
