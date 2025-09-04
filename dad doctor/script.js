// Rotating Quotes
const quotes = [
    '"May your new age be filled with joy, laughter, and God’s blessings."',
    '"You are a light to many — may that light never dim."',
    '"The Lord will keep you strong and healthy for many more years."',
    '"Your life will continue to be a testimony of God’s goodness."',
    '"Cheers to many more joyful celebrations ahead!"'
  ];
  
  let quoteIndex = 0;
  const quoteBox = document.getElementById("quoteBox");
  
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.style.opacity = 0;
    setTimeout(() => {
      quoteBox.textContent = quotes[quoteIndex];
      quoteBox.style.opacity = 1;
    }, 500);
  }, 5000);
  
  // Prayers Slideshow
  const prayers = [
    "🙏 May the Lord bless you with long life, peace, and endless joy.",
    "🙏 May your home be filled with laughter and divine grace.",
    "🙏 May God order your steps, and may His light never depart from you.",
    "🙏 May your heart overflow with gratitude and love."
  ];
  
  let prayerIndex = 0;
  const prayerBox = document.getElementById("prayerBox");
  
  setInterval(() => {
    prayerIndex = (prayerIndex + 1) % prayers.length;
    prayerBox.style.opacity = 0;
    setTimeout(() => {
      prayerBox.textContent = prayers[prayerIndex];
      prayerBox.style.opacity = 1;
    }, 500);
  }, 4000);
  
  // Gold Confetti (flakes fall once for 5s)
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let confettiPieces = [];
  let startTime = Date.now();
  
  function ConfettiPiece(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 6 + 4;
    this.speed = Math.random() * 3 + 2;
    this.opacity = 1;
  }
  
  function createConfetti() {
    for (let i = 0; i < 100; i++) {
      confettiPieces.push(new ConfettiPiece(Math.random() * canvas.width, -10));
    }
  }
  
  function animateConfetti() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    confettiPieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.fill();
      p.y += p.speed;
      if (elapsed > 4000) p.opacity -= 0.02; // fade out
    });
  
    if (elapsed < 5000) {
      requestAnimationFrame(animateConfetti);
    }
  }
  
  createConfetti();
  animateConfetti();
  
  // Music Button Control
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  let isPlaying = false;
  
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      musicBtn.textContent = "⏸️";
    } else {
      music.pause();
      musicBtn.textContent = "🎵";
    }
    isPlaying = !isPlaying;
  });
  