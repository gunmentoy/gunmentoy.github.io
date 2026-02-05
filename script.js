const messages = [
  'are you sure?',
  'really sure??',
  'are you positive?',
  'pleaseeee...',
  'PLEASE THINK AGAIN!',
  'if you say no, i will die...',
  'i will be very sad...',
  'i will be very very very sad...',
  'ok fine, whatever',
  'just kidding, SAY YES! ❤️',
  'WHAT ARE YOU WAITING FOR?!',
  'CLICK YES NOW!',
  'HELLO KITTY DOES NOT LIKE NO',
  'why are you doing this?',
  'ok',
  'ok, click yes???',
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = 'yes_page.html';
}

// Add this at the bottom of the file
document.getElementById('valentineGif').addEventListener('click', function() {
    valentineAudio.currentTime = 0;
    valentineAudio.play();
    
    // Add temporary animation
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});