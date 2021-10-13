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

// prompt asks for user input
// var is a variable that stores the user input (in the browser's memory)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// this creates a function named "fight". the keyword "function" declares it.
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
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
var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive need to modify to check on player's health as well.
    while(enemyHealth > 0 && playerHealth > 0){
    // alert players that they are starting the battle
    // this alert will not be necessary at the beginning of each fight. so comment out for now...

    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'S' or 's' or 'skip' to skip and any other keys to fight.");
    console.log("promptFight", promptFight);

if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip" || promptFight === "S"  || promptFight === "s"){
        //confirm player wants to skip
        var confirmSkip = window.confirm( "Are you sure you'd like to quit?");
        //if yes (true, leave fight)
        if(confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye");
            //subtract money from playMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
//if player chooses to fight, then fight
//if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight" || promptFight === "f" ||promptFight ==="F") { -- setting fight as default option, unless asked to skip, fight...
// subtract the value of 'playerAttack' from the value of 'enemyAttack' and use that result to update the value in the 'enemyHealth' variable.
var damage = randomNumber(playerAttack - 3, playerAttack);
enemyHealth = Math.max(0,enemyHealth - damage);
console.log("damage and enemyHealth :", damage,enemyHealth)
// log resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);
//check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died");
        //award player money for winning
        playerMoney= Math.max(0, playerMoney+20);
        //leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
// subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that that result to update the value in the 'playerHealth' variable.
var damage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth= Math.max(0,playerHealth - damage);
console.log("enemy damage and playerHealth", damage,playerHealth)
// log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
);

//check player's health
    if(playerHealth <= 0){
    window.alert("You have lost your robot in battle! Game Over! ");
    break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
// if player chooses to skip
} 
    //if no (false), ask question again by running fight () again
   
// if player did not choose 1 or 2 in prompt

    
};

//function to start a new game
var startGame =function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney=10;
    for(var i = 0; i < enemyNames.length; i ++){
        if(playerHealth >0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40,60);
        console.log(enemyNames[i],"\'s Health:", enemyHealth);
        fight(pickedEnemyName);
        //console.log(enemyNames[i]);
        //console.log(i);
        //console.log(enemyNames[i] + " is at " + i + " index");
        // concatenate the string showing apple1
        //console.log("apple" + i);
        //display each loop showing apple, 1
    // console.log("apple", i );
            
            if(playerHealth > 0 && i < enemyNames.length - 1){
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
    //if player is still alive, player wins!
    if(playerHealth > 0){
        window.alert("Great Job! You've survive the battle! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle. ");
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
         "Would you liek to REFILL your health, UPGRADE your attack or Leave the store? Please enter one : \'REFILL\', \'UPGRADE\', or \'LEAVE\' to make a choice."
     );
     switch(shopOptionPrompt){
        case "refill":
        case  "REFILL": //new case
        case "R":
        case "r":
             if(playerMoney >= 7){
             window.alert("Refilling player's health by 20 for 7 dollars.");
             //increase health and decrease money
             playerHealth = playerHealth + 20;
             playerMoney = playerMoney -7;
            }
            else {
                window.alert("You don\'t have enough money")
            }
            console.log(playerMoney);
             break;
        case "upgrade":
        case "UPGRADE":
        case "U":
        case "u":

            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney -7;}
            else{
                window.alert("You don't have enough money!")                
            }
            console.log(playerAttack);
            break;
        case "leave" :
        case "LEAVE" :
        case "L":
        case "l":
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

  //start first game when page loads
  startGame();