let secretNumber;
let attempts = 0;
let exp = 0;
let level = 1;
const xpToNextLevel = 100;

function generateSecretNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function guessNumber() {
  const guess = parseInt(document.getElementById('guess-input').value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById('message').innerText = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan.`;
    updateExp();
    generateSecretNumber();
    attempts = 0;
  } else if (guess < secretNumber) {
    document.getElementById('message').innerText = 'Tebakan Anda terlalu rendah, coba lagi.';
  } else {
    document.getElementById('message').innerText = 'Tebakan Anda terlalu tinggi, coba lagi.';
  }
}

function updateExp() {
  if (attempts < 5) {
    exp += 25;
  } else if (attempts < 10) {
    exp += 20;
  } else if (attempts < 15) {
    exp += 15;
  } else {
    exp += 10;
  }

  document.getElementById('exp').innerText = exp;

  while (exp >= xpToNextLevel) {
    level++;
    exp -= xpToNextLevel;
    xpToNextLevel += 100;
    document.getElementById('level').innerText = level;
    document.getElementById('exp').innerText = exp;
  }

  const xpPercentage = (exp / xpToNextLevel) * 100;
  document.getElementById('current-xp').style.width = xpPercentage + '%';
}

function resetGame() {
  attempts = 0;
  document.getElementById('guess-input').value = '';
  document.getElementById('message').innerText = '';
  generateSecretNumber();
}

function clearInput() {
  document.getElementById('guess-input').value = '';
}

window.onload = function() {
  generateSecretNumber();
};
