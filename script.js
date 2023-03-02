/*
Feel free to rename or alter anything as needed, I know there's some things missing (i.e. querySelectors) ~ Raven
 */
const main = document.querySelector('main')
const startPage = document.getElementById('#startPage')
const playArea = document.querySelector('#playArea')
const gameGrid = document.getElementById('gameGrid')
const holes = document.querySelector('.hole')
const startMole = document.querySelector('#startMole')
const tryAgain = document.querySelector('#tryAgain')
const title = document.getElementById("title")
const gameOverScreen = document.getElementById("gameOverScreen")
const livesStat = document.getElementById("lives")

///////////////////////////////////////////////////////////////////////////

    // Hole Declarations - O'Shaun

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

// All possible items that will pop out of holes - Raven


    const safe = [steve , mole]
    const harm = [bomb]
    const selection = [...safe,...harm]


///////////////////////////////////////////////////////////////////////////


// Default: Level 1 ~ "If yall wanna do this, try it out, ill leave it commented"
// const items = [
//     {id: 'mole', chance: 1, class:'safe', image: "./Media/mole.png"},
//     {id: 'bomb', chance: 0, class:'hazard', image: "Media/bomb.png"},
//     {id: 'steve', chance: 0, class: 'safe', image: "./sprites/steve.png"},
// ];



// Variables that update as the game progresses

const scoreUpdate = document.querySelector('#score');
const livesUpdate = document.querySelector('#lives');
const levelUpdate = document.querySelector('#lvl');

// let multiplier = 1;    => potential bonus feature 

// Functions 

// Start screen  

// Event listener awaits 'click' on mole ID. When clicked, the page is swapped to the game area - Isaac

playArea.style.display = "none"; // Hides The Game Screen until The Game Begins. 
let gameActive = false;

startMole.onclick = ( () => {
    main.removeChild(document.querySelector("#startPage"))
    title.style.display = "none"
    playArea.style.display = "flex";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    gameActive = true;
})

tryAgain.onclick = ( () => {
    gameOverScreen.style.display = "none";
    playArea.style.display = "flex";
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    gameActive = true;
})


let score = 000;
let lives = '💖💖💖';
livesUpdate.innerText = lives   
let lastHole; 
    // document.querySelector(".hole").style.height = '100px'


const cellList = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4'];

//two random functions
//one for hole, one for mole
//place item in random hole

function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}


// Random hole Selector that avoids duplicates - Raven

function randomHole(holes) {
    const rand = Math.floor(Math.random() * holes.length);
    const hole = holes[rand];
    if (hole === lastHole) {
        // console.log('getting new hole');
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

    // Isaac: "1st Attempt to Select Items randomly didnt go well but if yall wanna do it... go ahead" - Raven
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


    let time; // Was to make the objects disappear by themselves at random times, but scrapped for simplicity. 

    // time = randomTime(1000, 3000)

    // Summons the Moles - Group Effort
setInterval(() => {
    if(lives.length === 0){
        gameActive = false;
        gameOverScreen.style.display = "flex";
            playArea.style.display = "none";
            score = 0
            scoreUpdate.innerText = score
            lives = '💖💖💖'
            livesUpdate.innerText = lives;
    }
    if(gameActive){ 
// Gets Random Hole and Random Item from previous functions
        const hole = randomHole(cellList)
        const item = sel(selection)
        const tempSlot = document.getElementById(hole)
        const tempImg = selection[item]
        tempImg.nodeType = 'button'

        function updateLevel(score, levelUpdate) {
            const level = Math.floor(score / 2000);
            levelUpdate.innerText = level.toString();
          }
        
        function placeItem() {

            let notHit = true

                // Makes sure a singular slot cannot have 2 Items by only running if the slot is empty
            if(!document.getElementById(hole).childNodes.length){
                
                // Hit Functions

                            // Will be used later to check if you hit a harmful item 
                    function hitSafe(){
                        score += 100
                        scoreUpdate.innerText = score
                        notHit = false  
                        tempSlot.removeChild(tempImg) 
                        return;
                    }
   
                        // Will be used later to check if you hit a harmful item 
                    function hitHarm(){
                        lives = lives.substring(2, lives.length)   
                        livesUpdate.innerText = lives   
                        notHit = false
                        tempSlot.removeChild(tempImg)
                        return;    
                    }
                 

                    // Checks to see if the item you hit is harmful or safe.
                tempImg.onclick = () => {

                    harm.includes(tempImg) ? hitHarm() : false ;       

                    safe.includes(tempImg) ? hitSafe() : false ;
                }
                
                    // Makes Image Pop Up
                tempSlot.append(tempImg);

                    // This declaration allows us to have sprites delete themselves after an elapsed time
                const onDelay = (delay, action) => {
                    setTimeout(action, delay);
                };

                // Removes Safe Objects with Penalty

                onDelay(3000, () => {
                    if(safe.includes(tempImg) && notHit){
                        console.log('dang u missed that')
                        lives = lives.substring(2, lives.length);
                        livesUpdate.innerText = lives;
                        tempSlot.removeChild(tempImg);
                    }
                });

                    // Removes Harmful Objects with no Penalty

                onDelay(3000, () => {
                    if(harm.includes(tempImg) && notHit){
                        console.log('bullet dodged')
                        tempSlot.removeChild(tempImg);
                    }
                });

            }
        }

            placeItem()
                // Changes the spawn frequency 
            time-=5
            updateLevel(score, levelUpdate);
        }
}, 1000 )

// Game over screen
            //put in interval

// }

// Restart game     => Event listener awaits 'click' on mole ID. When clicked, the player is returned to the game area and a new game begins 
// function restart() {
//     // code
// }



// End Screen

//-----------------------------------------

// placeItem()



