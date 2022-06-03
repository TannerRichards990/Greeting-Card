// grab DOM elements

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

//Name

const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => { 
    nameHeader.textContent = nameInput.value;
});

const greetingTextarea = document.getElementById('greeting-textarea');
const greetingDisplay = document.getElementById('greeting-display');
greetingTextarea.addEventListener('input', () => {
    greetingDisplay.textContent = greetingTextarea.value;
});

const themeSelect = document.getElementById('theme-select');
const theme = document.getElementById('theme');
themeSelect.addEventListener('change', () => {
    theme.classList.value = '';
    theme.classList.add(themeSelect.value);
});

const image = document.getElementById('image');
const imageSelect = document.getElementById('image-select');
imageSelect.addEventListener ('change', () => {
    image.src = imageSelect.value;
});

const pictureText = document.getElementById('picture-text');
pictureText.addEventListener('input', () => {
    pictureText.textContent = pictureText.value;
});