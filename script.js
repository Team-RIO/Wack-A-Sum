/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors)
 */

// Arrays for safe and hazardous items 

const safe = []; // contains IDs that will increment score to hit 

const hazard = []; // contains IDs that will decrement lives when hit

// const special = [];      => Not sure if there should be a new array for events like "poop", "imposter", "steveHarvey", etc. 
// If so, this will contain IDs that may require something else to be done (i.e. "poop" will have a screen overlay, not clicking "imposter" will cause a life to be lost, etc.)


// Variables that update as the game progresses

let lives = 3; // keep track of lives
let level = 1; // keep track of level
let score = 0; // keep track of score
// let multiplier = 1;    => potential bonus feature 




// Functions 

// Start screen  
// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 
function gameStart() {
    // code
}


// Game area 
// Event listener needed for 'click' => effect changes based on the element (hazard or safe)
// This function should contain conditions for how the item clicked affects lives/score updates
function whackItems() {

}


// Game over screen
// Restart game     => Event listener awaits 'click' on mole ID. When clicked, the player is returned to the game area and a new game begins 
function restart() {
    // code
}



// End Screen







    