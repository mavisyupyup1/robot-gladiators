//pseudocode 
//Game States
//"WIN"- Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy - robot
//"LOSE" - player robot's health is zero or less
// if the enemy-robot's health is zero or less, exit from the fight loop. Translate to javaScript. if (enemyHealth <= 0){ break;}

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
//"enemyName"here is teh arbitrarily named parameter that is used by the function. is not a reference to the previous enemyName variable.

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive need to modify to check on player's health as well.
    while(enemyHealth > 0 && playerHealth > 0){
    // alert players that they are starting the battle
    // this alert will not be necessary at the beginning of each fight. so comment out for now...

    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

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
enemyHealth = enemyHealth - playerAttack;
// log resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);
//check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died");
        //award player money for winning
        playerMoney=playerMoney+20;
        //leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
// subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
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



for(var i = 0; i < enemyNames.length; i ++){
    if(playerHealth >0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50; 
    fight(pickedEnemyName);
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
    // concatenate the string showing apple1
    //console.log("apple" + i);
    //display each loop showing apple, 1
   // console.log("apple", i );
}}
// the function will not show until we call it 
//   fight();