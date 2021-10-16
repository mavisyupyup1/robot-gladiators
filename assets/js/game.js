//pseudocode 
//Game States
//"WIN"- Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy - robot
//"LOSE" - player robot's health is zero or less
// if the enemy-robot's health is zero or less, exit from the fight loop. Translate to javaScript. if (enemyHealth <= 0){ break;}
// wrap the game logic in a startGame()function
//When the player is defeated or there are no more enemies call an endGame() function that
  //alerts the player's total stats
  //asks the plyer if they want to play again
  // if yes, call startGame() to restart the game
//After the player skips or defeats an enemy (and there are still more robots to fight):
    //Ask the player if they want to "shop"
    //If no, continue as normal.
    //if yes, call the shop ()function
    //in the shop() function, ask player if they want to "refill" health, "upgrade" attack or "leave" the shop
    //if refill, subtract money points from the player and increase health.
    //if upgrade, subtract money points from player and increase attack power
    //if leave, alert goodbye and exit function
    //if any other invalid option, call shop()agaiin.

// window is referring to the browser. whenever JavaScript run in a browser, window will always be present.
// a function is a predefined action we can call or invoke (after declare it earlier in the code). alert() is a function that tells the browser to display a message
// placing content between the parentheses is called passing an argument into a function.
// the semicolon closes out the functions code. each piece of code, separated by semicolon is known as an expression

//var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
//var enemyHealth = 50;
//var enemy.attack = 12;
//console.log(enemyNames.length)
//for([initial expression];[condition];[increment expression]). i++ means i=i+1

//use length property to find out last robot's name
//console.log(enemyNames[enemyNames.length -1])


// function expression -- creating a function by assigning it to a variable
//"enemyName"here is teh arbitrarily named parameter that is used by the function. is not a reference to the previous enemyName variable. thiss enemyName is corresponding though to any "enemyName" that is being called in the function. 
var randomNumber = function (min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min) ;
    return value;
}
var fightOrSkip = function () {
    //ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter \"skip\" or \"s\" to skip or any other key to fight.");
    //Enter the conditional recursive function call here!
    //Conditional Recursive function call
    if(!promptFight){
        window.alert("You need to provide a valid answer! please try again.");
        return fightOrSkip();
    }
    //if player picks "skip" confirm add then stop the loop
    promptFight = promptFight.toLowerCase();
    if(promptFight === "skip" || promptFight ==="s"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes(true), leave fight
        if(confirmSkip){
            window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
            //subtract money from playMoney for skipping
            playerInfo.playerMoney = Math.max(0,playerInfo.money -10);
            console.log(playerInfo.money)
            //return true if player wants to leave
            return true;
        }
    }
    return false;
};

var fight = function(enemy) {
    //keep track of who goes first
    var isPlayerTurn = true;
    if(Math.random()>0.5){
        isPlayerTurn =false;
    }
    console.log(isPlayerTurn);
    while(enemy.health > 0 && playerInfo.health > 0){
        if(isPlayerTurn){
   if(fightOrSkip()){
       break;
   }

var damage = randomNumber (playerInfo.attack - 3, playerInfo.attack);
enemy.health = Math.max(0,enemy.health - damage);
console.log("damage and enemy.health :", damage,enemy.health)
// log resulting message to the console so we know that it worked.
console.log(
    playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining. "
);

//check enemy's health
    if (enemy.health <= 0){
        window.alert(enemy.name + " has died");
        //award player money for winning
        playerInfo.money= Math.max(0, playerInfo.money+20);
        //leave while() loop since enemy is dead
        console.log(playerInfo.money);
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left. ");
    }
    }
    //player gets attacked first
    else{

var damage = randomNumber(enemy.attack - 3, enemy.attack);
playerInfo.health= Math.max(0,playerInfo.health - damage);
console.log("enemy damage and playerInfo.health", damage,playerInfo.health)

// log a resulting message to the console so we know that it worked. 

console.log(
    enemy.name + 
    " attacked " + 
    playerInfo.name + 
    ". " + 
    playerInfo.name + 
    " now has " + 
    playerInfo.health + 
    " health remaining."
);

//check player's health
    if(playerInfo.health <= 0){
    window.alert(playerInfo.name + "has died!");
    break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
    }
    //switch turn order for next round
    isPlayerTurn =!isPlayerTurn;
    }          
};

//function to start a new game
var startGame =function () {
    //reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i ++){
        //check player stats
        console.log(playerInfo);
        if(playerInfo.health >0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyObj= enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        // console.log(enemy.names[i],"\'s Health:", enemy.health);
        fight(pickedEnemyObj);
        //console.log(enemyNames[i]);
        //console.log(i);
        //console.log(enemyNames[i] + " is at " + i + " index");
        // concatenate the string showing apple1
        //console.log("apple" + i);
        //display each loop showing apple, 1
    // console.log("apple", i );
            
            if(playerInfo.health > 0 && i < enemyInfo.length - 1){
               //ask if player wants to use the store before next round
               var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

               //if yes, take them to the store() function
               if(storeConfirm){
                shop ();
            }
            }
        }
            else{
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }
        }
        //play again;
        //startGame();
        endGame();
};
//start the game when the page loads.


// the function will not show until we call it 
//   fight();
//function expression (better) var add =function(){} v.s. Declaration (function (){}).
var endGame = function () {
    if(playerInfo.health > 0){
        window.alert("Great Job! You've survive the battle! You now have a score of " + playerInfo.money + ".");
    }
    else{
        window.alert("You've lost your robot in battle. ");
    }

    window.alert("The has now ended.Let's see how you did!");
//check localStorage for high score, if it is not there use 0
var highScore = localStorage.getItem("highscore");
if(highScore === null){
    highScore = 0;
}
//if player has more money that the high score, player has new highscore!
if(playerInfo.money > highScore){
    localStorage.setItem("highscore",playerInfo.money);
    localStorage.setItem("name",playerInfo.name);
    alert(playerInfo.name + " now has the high score of " + playerInfo.money+"!");
}
else{
    alert(playerInfo.name+ " did not beat the high score of "+ highScore+". Maybe next time!");
}
    //ask player if they'd like to play gain
    var playAgainConfirm = window.confirm ("Would you like to play again?");
  
    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  };
  var shop = function (params) {
     // ask player what they'd like to do
     var shopOptionPrompt = window.prompt(
         "Would you liek to REFILL your health, UPGRADE your attack or Leave the store? Please enter 1 for \'REFILL\', 2 for \'UPGRADE\', or 3 for \'LEAVE\'."
     );
     shopOptionPrompt = parseInt(shopOptionPrompt);
     switch(shopOptionPrompt){
        case 1:
            playerInfo.refillHealth();
            break;

        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store.");
            // do nothing so the function will end
            break;
        default: 
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
     }
      
  };
// prompt asks for user input
// var is a variable that stores the user input (in the browser's memory)
//function to set name
var getPlayerName = function () {
    var name ="";
    //****************************************
    //ADD LOOP HERE WITH PROMPT AND CONDITION
    //****************************************
    //initialize var name="" before the while loop to guarantee entering the loop at least once
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }
    console.log("Your robot's name is " + name);
    return name;
}
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money:10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
        console.log(this);
    },
    refillHealth: function () {
        if(this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
    }
    else{
        window.alert("You don't have enough money!");
    }
    },
    upgradeAttack: function () {
        if(this.money >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -=7;
    }
    else{
        window.alert("You don't have enough money!");
    }
    }
};
// this creates a function named "fight". the keyword "function" declares it.
//console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
console.log(playerInfo.money);
  //start first game when page loads
  startGame();