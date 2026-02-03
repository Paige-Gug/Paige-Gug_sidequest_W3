// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Grey-tinted background to communicate a cove
  background(141, 167, 184);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("Secret Cove", width / 2, 300);

  // Instruction text
  textSize(20);
  text(
    "You found the secret cove!\n There's a small treasure chest in the back filled with gold.\n Lucky you!",
    width / 2,
    430,
  );

  text("Click anywhere to return to the start.", width / 2, 560);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}
