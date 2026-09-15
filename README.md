# Color Memory Game

Test your visual memory and color recognition skills in this exciting hex color matching game! Flip cards, memorize color codes, and find matching pairs. 

## Features

- **Random Dark Colors**: Generates 10 unique dark colors for each game session
- **Move Tracking**: Counts the number of moves taken to complete the game
- **Match Counter**: Tracks the number of successfully matched pairs
- **Win Detection**: Displays a congratulatory message when all pairs are matched
- **Restart Functionality**: Easily restart the game with new random colors
- **Responsive Design**: Clean and modern UI with smooth card flip animations

## How to Use

1. Clone the repository:
   ```sh
   git clone https://github.com/nvmwhoiam/match-memory-game.git
   ```
2. Navigate to the project directory:
   ```sh
   cd match-memory-game
   ```
3. Open `index.html` in your web browser to view the application.

## How to Play

1. Click on any card to flip it and reveal its color
2. Click on a second card to try and find a matching color
3. If the colors match, the cards stay flipped and are marked as matched
4. If the colors don't match, both cards flip back after a short delay
5. Continue flipping cards until all 10 color pairs are matched
6. Try to complete the game in as few moves as possible!

## Project Structure

```
match-memory-game/
├── assets/
│   ├── css/
│   │   ├── general/       # General CSS utilities
│   │   ├── index.css      # Main stylesheet
│   │   └── index.scss     # SCSS source file
│   ├── fonts/             # Font files
│   └── js/
│       ├── functions.js   # Utility functions
│       └── script.js      # Main game logic
└── index.html             # Main HTML file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling and animations with SCSS preprocessing
- **JavaScript (ES6+)**: Game logic and DOM manipulation
- **Vanilla JS**: No external frameworks or libraries

## Getting Started

1. Clone or download the project
2. Open `index.html` in a modern web browser
3. Start playing!

No build process or dependencies required - simply open the HTML file in your browser.

## Game Logic

The game uses a Map data structure to store card information with unique IDs:
- Each color pair is assigned a unique ID
- Cards are shuffled before each game
- The game tracks flipped cards to prevent cheating
- Matched pairs are marked and cannot be flipped again
- The game detects when all pairs are matched and displays a win message

```javascript
const cardCount = 10;        // Number of color pairs
const pairsPerValue = 2;     // Cards per color (always 2 for pairs)
```

To adjust color brightness, modify the `maxBrightness` value in the `randomDarkColors()` function.

## Contact

If you have any questions or need assistance, please do not hesitate to reach out. I apologize if any part of this setup is not clear; this is my first major project, and I am putting in continuous effort to improve it. Feel free to contact me at [info@sadevworks.com](mailto:info@sadevworks.com) or open an issue on the [GitHub Repository](https://github.com/nvmwhoiam/match-memory-game).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Author

- Email: [info@sadevworks.com](mailto:info@sadevworks.com)
- Website: [sadevworks.com](https://sadevworks.com)
- GitHub: [@nvmwhoiam](https://github.com/nvmwhoiam/)