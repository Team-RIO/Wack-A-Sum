/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors)
 */
const main = document.querySelector('main')
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const hole = document.getElementsByClassName('hole')
const startMole = document.querySelector('#startMole')


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

// Start screen  

// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 

playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 


startMole.addEventListener('click', () => {
    main.removeChild(document.querySelector("#startPage"))
    // main.appendChild(playArea)
    playArea.style.display = "block";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
})

    // document.querySelector(".hole").style.height = '100px'


const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let lastHole; 

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







