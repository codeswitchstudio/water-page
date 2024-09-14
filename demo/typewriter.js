var sentences = [
  "This is codeswitch studio.",
  "This is a second sentence.",
  "Here is another line.",
  "Final line of text.",
];

let myFont;
let currentSentence = 0; // Keep track of which sentence is being typed
let lineHeight = 50; // Space between each line of text

function preload() {
  // Load font from Google Fonts
  myFont = loadFont(
    "https://fonts.gstatic.com/s/specialelite/v15/XLYgIZbkc4JPUL5CVArUVL0ntnAOSHoRMQ.ttf"
  );
}

function setup() {
  textFont(myFont);
  textSize(36);
  textAlign(CENTER, CENTER); // Center align horizontally and vertically

  // Create canvas and attach it to the "sketch-container" div
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); // Attach the canvas to the specified div

  // Start typing the first sentence, centered
  let startY = windowHeight / 2 - (sentences.length / 2) * lineHeight; // Vertically centered starting point
  typeWriter(sentences[currentSentence], 0, windowWidth / 2, startY, 100);
}

function draw() {}

function typeWriter(sentence, n, x, y, speed) {
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    setTimeout(function () {
      typeWriter(sentence, n, x, y, speed);
    }, speed);
  } else {
    // Once a sentence is done, move to the next sentence
    currentSentence++;
    if (currentSentence < sentences.length) {
      // Call the typeWriter function for the next sentence with a vertical offset
      let nextY = y + lineHeight; // Move the next line down by lineHeight pixels
      setTimeout(function () {
        typeWriter(sentences[currentSentence], 0, x, nextY, speed);
      }, 500); // Delay before starting the next sentence
    }
  }
}
