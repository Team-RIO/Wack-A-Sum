/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors)
 */
const main = document.querySelector('main')
const startPage = document.getElementById('#startPage')
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const holes = document.getElementsByClassName('hole')
const startMole = document.querySelector('#startMole')
const title = document.getElementById("title")
const gameOverScreen = document.getElementById("gameOverScreen")

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
    {id: 'mole', chance: 1, class:'safe', image: "./Media/Title Mole.png"},
    {id: 'bomb', chance: 0, class:'hazard'},
    {id: 'steve', chance: 0, class: 'safe', image: "./sprites/stevehuh.png"},
    {id: 'poop', chance: 0, class:'hazard'}, 
    {id: 'imposter', chance: 0, class:'hazard'},
];


// Variables that update as the game progresses

// let lives = 3; // keep track of lives
// let level = 1; // keep track of level
// let score = 0; // keep track of score
// let multiplier = 1;    => potential bonus feature 




// Functions 

// Start screen  

// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 

// gameOverScreen.style.display = "none" // Hides The Game Over Screen 
playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 


startMole.addEventListener('click', () => {
    main.removeChild(document.querySelector("#startPage"))
    title.style.display = "none"
    playArea.style.display = "flex";
    // gameOverScreen.style.display = "flex";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
})

    // document.querySelector(".hole").style.height = '100px'


// const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let lastHole; 

//two random functions
    //one for hole, one for mole
//place item in random hole
function randomHole(holes) {
    const rand = Math.floor(Math.random() * holes.length);
    const hole = holes[rand];
    if (hole === lastHole) {
        console.log('getting new hole');
        return randomHole(holes);
    }
    lastHole = hole;
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
        const itemId = clickedItem.id;
        const item = items.find(item => item.id === itemId)

        if(item.class === 'hazard'){
            lives--;
        }else if(item.class === 'safe'){
            score++;
        }
        gameGrid.removeChild(clickedItem)
        
        if(lives < 0){
            playArea.style.display = "none";
            gameOverScreen.style.display = "flex";
        }
    
};

// if(lives === 3){
//     playArea.style.display = "none";
//     gameOverScreen.style.display = "flex";
// }

gameGrid.addEventListener('click', updateGame);

startPage.style.display = "none"
// Game over screen
// if(lives < 0){
//     startPage.style.display = "none";
//         // main.removeChild(document.querySelector("#startPage"))
//         title.style.display = "none"
//         playArea.style.display = "block";
//         main.style.display = 'flex';
//         main.style.justifyContent = 'center';

// }
// Restart game     => Event listener awaits 'click' on mole ID. When clicked, the player is returned to the game area and a new game begins 
function restart() {
    // code
}



// End Screen







