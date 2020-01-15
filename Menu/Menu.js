/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Select menu button

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

// Create function

function createMenu(arr) {

// Create elements

const menu = document.createElement('div');
const menuNav = document.createElement('ul');

// Append child element

menu.appendChild(menuNav);

// Iterate over the array creating a list item element for each item in the array and append child to menu

menuItems.forEach((link) => {
  const item = document.createElement('li');
  item.textContent = link;
  menuNav.appendChild(item);
  item.style.cursor = 'pointer';
});

// Add CSS styles

menu.classList.add('menu');

// Add event listener

menuButton.addEventListener('click', e => {
  menu.classList.toggle('menu--open');

});

// Return menu component

return menu;
};

// Add menu component to Dom

header.appendChild(createMenu(menuItems));