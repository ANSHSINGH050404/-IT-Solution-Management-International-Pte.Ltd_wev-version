// Get all the elements we need to work with
const urlInput = document.querySelector('.url-input');
const loadButton = document.querySelector('.load-button');
const imageContainer = document.querySelector('.image-container');
const noImageText = document.querySelector('.no-image');
const plusButton = document.querySelector('.plus-button');
const contextMenu = document.querySelector('.context-menu');
const overlay = document.querySelector('.overlay');

// Variable to keep track of the current image element
let currentImage = null;

// Function to load and display an image
function loadImage() {
    // Get the URL from the input and remove any whitespace
    const url = urlInput.value.trim();
    
    // Don't do anything if URL is empty
    if (!url) return;

    // Remove the old image if there is one
    if (currentImage) {
        currentImage.remove();
    }

    // Create a new image element
    currentImage = document.createElement('img');
    currentImage.className = 'image-display';
    currentImage.src = url;
    
    // When the image successfully loads
    currentImage.addEventListener('load', () => {
        // Hide the "No image loaded" text
        noImageText.style.display = 'none';
        // Add the image to the container
        imageContainer.appendChild(currentImage);
        
        // Make the image go fullscreen when double-clicked
        currentImage.addEventListener('dblclick', toggleFullscreen);
    });

    // If there's an error loading the image
    currentImage.addEventListener('error', () => {
        // Show error message
        noImageText.style.display = 'block';
        noImageText.textContent = 'Error loading image';
    });
}

// Function to show/hide the menu
function toggleMenu() {
    // Toggle the 'active' class on both menu and overlay
    contextMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Function to make an element fullscreen
// We need different versions for different browsers
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

// Function to exit fullscreen mode
// Again, different versions for different browsers
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    // Check if we're currently in fullscreen mode
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement && // Firefox
        !document.webkitFullscreenElement && // Chrome, Safari
        !document.msFullscreenElement) { // IE/Edge
        // If not in fullscreen, enter fullscreen
        enterFullscreen(currentImage);
    } else {
        // If in fullscreen, exit fullscreen
        exitFullscreen();
    }
}

// Add click event to load button
loadButton.addEventListener('click', loadImage);

// Also load image when Enter key is pressed in the input
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadImage();
});

// Show/hide menu when plus button is clicked
plusButton.addEventListener('click', toggleMenu);

// Hide menu when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Handle clicks on menu items
contextMenu.addEventListener('click', (e) => {
    // Get the action from the clicked item's data attribute
    const action = e.target.dataset.action;
    
    // Do different things based on which menu item was clicked
    if (action === 'enter-fullscreen' && currentImage) {
        enterFullscreen(currentImage);
    } else if (action === 'exit-fullscreen') {
        exitFullscreen();
    }
    
    // Hide the menu after clicking an item
    toggleMenu();
});