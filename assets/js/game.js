// window is refering to the browser. whenever JavaScript run in a browser, window will always be present.
// a function is a prefined action we can call or invoke (after declare it earlier in the code). alert() is a function that tells the browser to display a message
// placing content between the parentheses is called passing an argument into a function.
// the semicolon closes out the functions code. each piece of code, separated by semicolon is known as an expression

// prompt asks for user input
// var is a variable that stores the user input (in the browser's memory)
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

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
// subtract the value of 'playerAttack' from the value of 'enemyAttack' and use that result to update the value in the 'enemyHealth' variable.
enemyHealth = enemyHealth - playerAttack;
// log resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);
//check enemy's health
if (enemyHealth <= 0){
    window.alert(enemyName + " has died");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ")
}
// subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that that result to update the value in the 'playerHealth' variable.
playerHealth = playerHealth - enemyAttack;
// log a resulting message to the console so we know that it worked. 
console.log(
    enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
);

//check play's health
if(playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else{
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
};
// the function will not show until we call it 
fight();