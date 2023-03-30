/**
 * player name
 */
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');


const nameDisplay = document.createElement('h1');
nameDisplay.textContent = `Hello,${name || 'New Player'}!`;
document.body.appendChild(nameDisplay);