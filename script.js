// Function to generate a random hex color
const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // 16777215 is FFFFFF in hex
    return `#${randomColor.padStart(6, '0')}`; // Ensures the color code is always 6 digits long
};

// Function to change the background color and update the color code text
const changeColor = () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('color-code').textContent = newColor;
};

// Adding event listener to the button
document.getElementById('color-btn').addEventListener('click', changeColor);
