/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors) ~ Raven
 */
const main = document.querySelector('main')
const startPage = document.getElementById('#startPage')
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const holes = document.querySelector('.hole')
const startMole = document.querySelector('#startMole')
const title = document.getElementById("title")
const gameOverScreen = document.getElementById("gameOverScreen")
const livesStat = document.getElementById("lives")

///////////////////////////////////////////////////////////////////////////

    // Hole Declarations - O'Shaun

const scoreUpdate = document.querySelector('#score');
const livesUpdate = document.querySelector('#lives');
const levelUpdate = document.querySelector('#lvl');

const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const A4 = document.getElementById('A4')

const B1 = document.getElementById('B1')
const B2 = document.getElementById('B2')
const B3 = document.getElementById('B3')
const B4 = document.getElementById('B4')

const C1 = document.getElementById('C1')
const C2 = document.getElementById('C2')
const C3 = document.getElementById('C3')
const C4 = document.getElementById('C4')


///////////////////////////////////////////////////////////////////////////

// Sprite Creation - Isaac

const steve = document.createElement('img');
steve.classList = "sprite";
steve.src = './sprites/steve.png';

const bomb = document.createElement('img');
bomb.classList = "sprite";
bomb.src = './sprites/bomb.png';

const mole = document.createElement('img');
mole.classList = "sprite";
mole.src = './sprites/mole.png';

///////////////////////////////////////////////////////////////////////////





// Elements Array 

    const safe = [steve , mole]
    const harm = [bomb]
    const selection = [...safe,...harm]
///////////////////////////////////////////////////////////////////////////


// All possible items that will pop out of holes - Raven
// Default: Level 1
const items = [
    {id: 'mole', chance: 1, class:'safe', image: "./Media/mole.png"},
    {id: 'bomb', chance: 0, class:'hazard', image: "Media/bomb.png"},
    {id: 'steve', chance: 0, class: 'safe', image: "./sprites/steve.png"},
];



// Variables that update as the game progresses

let livesEl = document.getElementById('lives'); // keep track of lives
let levelEl = document.getElementById('level'); // keep track of level
let scoreEl = document.getElementById('score'); // keep track of score
// let multiplier = 1;    => potential bonus feature 


// We wanna create images with the type of "button" and when they are clicked on, they add to tht score



// Functions 

// Start screen  

// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area 

// gameOverScreen.style.display = "none" // Hides The Game Over Screen 
playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 


startMole.onclick = ( () => {
    main.removeChild(document.querySelector("#startPage"))
    title.style.display = "none"
    playArea.style.display = "flex";
    // gameOverScreen.style.display = "flex";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
})


let score = 0;
let lives = 3;
    // document.querySelector(".hole").style.height = '100px'


const cellList = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4'];

//two random functions
//one for hole, one for mole
//place item in random hole
let lastHole; 


// let interval;
// // Items appear for random durations - Raven
// setInterval(() => {
//     interval = Math.round(Math.random() * (3 - 1) + 1);
// }, 100 );


// Random hole Selector that avoids duplicates - Raven

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

// Get The Random Item
function randomItem(rand) {
    let total = 0;
    for (let i = 0; i < items.length; i++){
        total += items[i].chance;
    } 
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let rand = Math.floor(Math.random() * total);
        if (rand < item.chance) {
            return item.id;
        }
        rand -= item.chance;
    }
}

// function randomItem(arr) {
//     // calculate the total probability of all items
//     const totalProbability = arr.reduce((total, item) => total + item.chance, 0);
//     // generate a random number between 0 and the total probability
//     const rand = Math.random() * totalProbability;
//     // iterate through the items and find the one that corresponds to the random number
//     let cumulativeProbability = 0;
//     for (let i = 0; i < arr.length; i++) {
//         cumulativeProbability += arr[i].chance;
//         if (rand < cumulativeProbability) {
//             console.log(arr[i])
//             return arr[i];
//         }
//     }
// }

function sel() {
    const count = selection.length
    const rand = Math.floor(Math.random() * count)
    return rand
}

// Creates the Mole


const begin = setInterval(() => {
    
    
    
    const hole = randomHole(cellList)
    // console.log(hole)
    
    let item = sel(selection)
   // console.log(item)
    
    
    
    
    function placeItem() {

        // const time = randomTime(500, 2000); 
        
            const tempSlot = document.getElementById(hole)
            tempSlot.append(selection[item]);

        }

        placeItem()
        
        //make updateGame to make it releveant to our code, append  them
    
    
    // function updateGame(event,items){
        //     const clickedItem = event.target;
        //     const itemId = clickedItem.id;
        //     const item = items.find(item => items.id === itemId)
        
        //     if(item.class === 'hazard'){
            //         lives--;
            //         livesUpdate.textContent = lives;
            //     }else if(item.class === 'safe'){
                //         score++;
        //         scoreUpdate.textContent = score;
        //     }
        //     gameGrid.removeChild(clickedItem)
            
        //     if(lives < 0){
        //         playArea.style.display = "none";
        //         gameOverScreen.style.display = "flex";
        //     }
            
        // };
}, 1000 )
        
        // startPage.style.display = "none"
// Game over screen
//     startPage.style.display = "none";
//         // main.removeChild(document.querySelector("#startPage"))
//         title.style.display = "none"
//         playArea.style.display = "block";
// }
// Restart game     => Event listener awaits 'click' on mole ID. When clicked, the player is returned to the game area and a new game begins 
// function restart() {
//     // code
// }



// End Screen

//-----------------------------------------

// placeItem()



