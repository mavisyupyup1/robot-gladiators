// window is refering to the browser. whenever JavaScript run in a browser, window will always be present.
// a function is a prefined action we can call or invoke (after declare it earlier in the code). alert() is a function that tells the browser to display a message
// placing content between the parentheses is called passing an argument into a function.
// the semicolon closes out the functions code. each piece of code, separated by semicolon is known as an expression

// prompt asks for user input
// var is a variable that stores the user input (in the browser's memory)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// this creates a function named "fight". the keyword "function" declares it.
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack,enemyHealth)

// fucntion expression -- creating a function by assigning it to a variable
var fight = function() {
    // alert players that they are starting the battle
    window.alert("Welcome to Robot Gladiators!");
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
//if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
// subtract the value of 'playerAttack' from the value of 'enemyAttack' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// log resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);
//check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ")
    }
// subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
// log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
);

//check player's health
    if(playerHealth <= 0){
    window.alert(playerName +" has died!")
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
// if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
    //confirm player wants to skip
    var confirmSkip = window.confirm( "Are you sure you'd like to quit?");
    //if yes (true, leave fight)
    if(confirmSkip) {
        window.alert(playerName + "has decided to skip this fight. Goodbye");
        //subtract money from playMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight () again
    else {
        fight();
    }
// if player did not choose 1 or 2 in prompt
} else {
    window.alert("You need to choose a valid option. Try again!")
}
};

// the function will not show until we call it 
    fight();