// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const leftBtn = {
  x: 250, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Left", // text shown on the button
};

const rightBtn = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "Right", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Shoreline", width / 2, 160);

  textSize(20);
  text(
    "You are standing on the shoreline of the beach.\n You feel the sand and water touching your feet, and hear the seagulls above you.",
    width / 2,
    300,
  );

  text("Where will you go next?", width / 2, 400);

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(leftBtn);
  drawGameButton(rightBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  const over = isHover(leftBtn) || isHover(rightBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameMousePressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (isHover(leftBtn)) {
    currentScreen = "lose";
  }
  if (isHover(rightBtn)) {
    currentScreen = "win";
  }
}
