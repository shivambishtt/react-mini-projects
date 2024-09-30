# Card Flipping Game

A simple card-flipping memory game built with React. The objective of the game is to flip two cards with the same number and match all the pairs.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Features

- Flip cards to reveal the hidden number.
- Match pairs of cards with the same number.
- Lock the board while two cards are being compared.
- Reset the game once all pairs are matched.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/card-flipping-game.git
   ```

## How It Works

- The game grid is rendered by the Grids component.
- Each card is represented as an object with properties like isFlipped and number.
- When a card is clicked, its isFlipped state changes and the index of the flipped card is added to the flippedCards array.
- Once two cards are flipped, the game compares their number properties.
- If they match, they remain flipped. If not, they are reset after a short delay.
- The board is locked while comparing two cards to prevent further clicks.


# Contributing
Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Create a pull request.