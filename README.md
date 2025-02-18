# Image Viewer

A simple, elegant web application that allows users to view images from URLs with fullscreen capabilities. Built with vanilla JavaScript, HTML, and CSS.

![Image Viewer Demo](/api/placeholder/800/400)

## Features

- 🖼️ Load images from any URL
- 🔍 Fullscreen mode support
- 📱 Responsive design
- ⚡ Fast loading
- 🎯 Double-click to enter fullscreen
- 🚀 No dependencies

## Live Demo

[View Live Demo](#) _(Replace with your deployed version URL)_

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A basic code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository:
```bash
https://github.com/ANSHSINGH050404/-IT-Solution-Management-International-Pte.Ltd_wev-version.git
```

2. Navigate to the project directory:
```bash
cd image-viewer
```

3. Open `index.html` in your browser or use a local development server.

For a local development server, you can use Python's built-in server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Or use Node.js's `http-server`:
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

## Usage

1. Open the application in your web browser
2. Enter an image URL in the input field
3. Click the arrow button or press Enter to load the image
4. Use any of these methods to view in fullscreen:
   - Double-click the image
   - Click the + button and select "Enter fullscreen"
   - Press the fullscreen button in your browser

## Project Structure

```
image-viewer/
│
├── index.html          # Main HTML file
├── index.css          # Styles
├── index.js           # JavaScript functionality
└── README.md          # Documentation
```

## Code Examples

### Loading an Image

```javascript
// Example URL to test the viewer
const imageUrl = 'https://example.com/path/to/image.jpg';
document.querySelector('.url-input').value = imageUrl;
document.querySelector('.load-button').click();
```

### Programmatically Toggle Fullscreen

```javascript
// Enter fullscreen
const image = document.querySelector('.image-display');
if (image) {
    image.requestFullscreen();
}
```

## Browser Support

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Known Issues

- Some older browsers might not support the Fullscreen API
- Cross-origin restrictions may prevent loading images from certain domains
- SVG files might not render correctly in fullscreen mode on some browsers

## Troubleshooting

**Image doesn't load:**
- Check if the URL is correct and accessible
- Verify if the image host allows cross-origin requests
- Make sure the URL points directly to an image file

**Fullscreen doesn't work:**
- Ensure you're using a supported browser
- Check if fullscreen is enabled in your browser settings
- Some websites block fullscreen functionality

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Inspired by modern image viewer applications
- Built with web standards in mind
- Designed for simplicity and ease of use

## Support

For support, please open an issue in the GitHub repository or contact anshsinghapa@gmail.com.

## Roadmap

- [ ] Add image zoom functionality
- [ ] Support for image galleries
- [ ] Keyboard shortcuts
- [ ] Dark mode support
- [ ] Image download option
- [ ] Custom error messages
- [ ] Loading animations

## Author

Your Name - [Ansh Singh]((https://github.com/ANSHSINGH050404)

---

Made with ❤️ for the open source community
