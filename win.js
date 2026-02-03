// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Teal-tinted background to communicate water
  background(189, 255, 252);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Tide Pools", width / 2, 300);

  // Instruction text
  textSize(20);
  text(
    "Welcome to the tide pools!\n The water is clear and warm, and you can see platinum coins at the bottom.\n Dive in!",
    width / 2,
    430,
  );

  text("Click anywhere to return to the start.", width / 2, 560);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
