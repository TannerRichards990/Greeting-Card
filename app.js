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

const descriptionTextarea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');
descriptionTextarea.addEventListener('input', () => {
    descriptionDisplay.textContent = descriptionTextarea.value;
});

const themeSelect = document.getElementById('theme-select');
const theme = document.getElementById('theme');
themeSelect.addEventListener('change', () => {
    theme.classList.value = "";
    theme.classList.add(themeSelect.value)
})


const imageSelect = document.getElementById('image-select');
imageSelect.addEventListener ('change', () => {
    image.src = imageSelect.value;
})
