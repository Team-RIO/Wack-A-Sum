/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors)
*/
const main = document.querySelector('main')
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const hole = document.getElementsByClassName('hole')
const startMole = document.querySelector('#startMole')
const title = document.getElementById("title")

let A1 = document.getElementById('A1')
let A2 = document.getElementById('A2')
let A3 = document.getElementById('A3')
let A4 = document.getElementById('A4')

let B1 = document.getElementById('B1')
let B2 = document.getElementById('B2')
let B3 = document.getElementById('B3')
let B4 = document.getElementById('B4')

let C1 = document.getElementById('C1')
let C2 = document.getElementById('C2')
let C3 = document.getElementById('C3')
let C4 = document.getElementById('C4')

// All possible items that will pop out of holes
// Default: Level 1
const items = [
    {id: 'mole', chance: 1, class:'safe' },
    {id: 'bomb', chance: 0, class:'hazard'},
    {id: 'steve', chance: 0, class: 'safe'},
    {id: 'poop', chance: 0, class:'hazard'}, 
    {id: 'imposter', chance: 0, class:'hazard'},
];


// Variables that update as the game progresses

// let lives = 3; // keep track of lives
// let level = 1; // keep track of level
// let score = 0; // keep track of score
// let multiplier = 1;    => potential bonus feature 




// Functions 



// Start screen - Isaac

    // Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 

playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 

startMole.addEventListener('click', () => {
    main.removeChild(document.querySelector("#startPage"))
    title.style.display = "none"
    playArea.style.display = "block";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
})



// const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Isaac ~ "Commented this out in case ur code was dependant on it, also write down who wrote this code since they gon use it to grade us" 
const holes = [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4];
let lastHole; 

//place item in random hole
function randomHole(array) {
    console.log(array, array.length);
    const rand = Math.floor(Math.random() * holes.length);
    const hole = holes[rand];
    lastHole = hole;
    if (hole === lastHole) {
        console.log('getting new hole');
        return randomHole(holes);
    }
    return hole;
}

randomHole(holes);


// Game area 
// Event listener needed for 'click' => effect changes based on the element (hazard or safe)
// This function should contain conditions for how the item clicked affects lives/score updates

    let score = 0;
    let lives = 3;

    function updateGame(event){
        const clickedItem = event.target;
        const itemClass = clickedItem.classList[0];

        if(itemClass === 'hazard'){
            lives--;
        }else if(itemClass === 'safe'){
            score++;
        }
        gameGrid.removeChild(clickedItem)
    
};

gameGrid.addEventListener('click', updateGame);

// Game over screen
// Restart game     => Event listener awaits 'click' on mole ID. When clicked, the player is returned to the game area and a new game begins 
function restart() {
    // code
}



// End Screen







