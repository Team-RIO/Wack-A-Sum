/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors)
 */
const main = document.querySelector('main')

// All possible items that will pop out of holes
// Default: Level 1
const items = [
    {id: 'mole', chance: 1},
    {id: 'bomb', chance: 0},
    {id: 'steve', chance: 0},
    {id: 'poop', chance: 0.}, 
    {id: 'imposter', chance: 0},
];


// Variables that update as the game progresses

let lives = 3; // keep track of lives
let level = 1; // keep track of level
let score = 0; // keep track of score
// let multiplier = 1;    => potential bonus feature 




// Functions 
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const hole = document.getElementsByClassName('hole')

// Start screen  

// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 

playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 

const startMole = document.querySelector('#startMole')

startMole.addEventListener('click', () => {
    main.removeChild(document.querySelector("#startPage"))
    // main.appendChild(playArea)
    playArea.style.display = "block";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
})

    // document.querySelector(".hole").style.height = '100px'



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







