/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Write a program that asks the user for their name, and then greets them by their name.
var username = prompt("What's your name?")


// Modify this program so it only greets the users alice and bob, and greet them by name, or tell everyone else to go away
if (username == "alice" || username == "bob") {
	document.write("Hello " + username + ", nice to see you!")
} else {
	document.write("Go away " + username + "!")
}