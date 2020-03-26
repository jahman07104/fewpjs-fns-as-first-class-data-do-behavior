/* Given Code, don't edit */

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = parseInt(timeString, 10);
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}
// * Write your implementation of displayMessage() */

function displayMessage(msg) {
  const element = document.getElementById("greeting");
  element.innerText = msg;
  return msg;
}
