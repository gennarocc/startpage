// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
var name = ' Gennaro';

// Here you can change your greetings
var gree1 = 'Go to Sleep!  ';
var gree2 = 'Good morning!  ';
var gree3 = 'Good afternoon  ';
var gree4 = 'Good evening,  ';
var gree5 = 'Good evening,  ';
var gree6 = 'Good evening,  ';

// Define the hours of the greetings
if (hour >= 24 && hour < 5) {
  document.getElementById('message-text').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('message-text').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('message-text').innerText = gree3 + name;
} else {
  document.getElementById('message-text').innerText = gree4 + name;
}