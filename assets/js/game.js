// window is refering to the browser. whenever JavaScript run in a browser, window will always be present.
// a function is a prefined action we can call or invoke (after declare it earlier in the code). alert() is a function that tells the browser to display a message
// placing content between the parentheses is called passing an argument into a function.
// the semicolon closes out the functions code. each piece of code, separated by semicolon is known as an expression

// prompt asks for user input
// var is a variable that stores the user input (in the browser's memory)
var playerName = window.prompt("What is your robot's name?");
// this creates a function named "fight". the keyword "function" declares it.
function fight(){
window.alert("The fight has begun!");
}
console.log(playerName)
console.log("This is a string, good for leaving yourself a message");
console.log(10+10);
console.log("our robot's name is " + playerName)
// the function will not show until we call it
fight();