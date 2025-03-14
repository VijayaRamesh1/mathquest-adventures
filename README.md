# MathQuest: Adventures in Calculus

An interactive educational game to help high school students learn calculus through engaging gameplay and puzzles.

## Overview

MathQuest is an immersive, educational gaming experience that leverages mathematical puzzles, challenges, and interactive narratives to deeply engage users, promote learning, and encourage continual play. The game focuses on calculus, algebra, and geometry concepts taught in high school.

## Features

- **Interactive Story Mode**: Progress through levels structured around a captivating narrative
- **Immersive Puzzle Environment**: Explore a dynamic, visually rich environment
- **Adaptive Difficulty**: Game difficulty adapts based on the player's skill level and learning pace
- **Gamification and Rewards**: Points, leaderboards, and badges to encourage competition and replayability
- **Interactive Visualizations**: See calculus concepts come to life with 3D visualizations
- **Customizable Avatars**: Personalize your experience through achievements

## Educational Content

The game covers key calculus concepts including:

1. **Limits and Continuity**
   - Understanding the concept of limits
   - Evaluating limits algebraically and graphically
   - Exploring continuity and discontinuity

2. **Derivatives**
   - The definition of a derivative
   - Derivative rules and applications
   - Optimization problems

3. **Integrals**
   - Definite and indefinite integrals
   - The Fundamental Theorem of Calculus
   - Applications of integration

4. **Real-world Applications**
   - Physics
   - Economics
   - Engineering

## Target Audience

- Primary: High school students (ages 14-18)
- Secondary: Adults interested in refreshing math skills in an enjoyable context

## Technical Architecture

- **Frontend**: React.js with React Router for navigation
- **Game Engine**: Unity WebGL integrated with React
- **State Management**: React Context API
- **Math Processing**: MathJS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Unity 2021.3 or newer (for game development)

### Installation

1. Clone the repository:
```
git clone https://github.com/VijayaRamesh1/mathquest-adventures.git
```

2. Navigate to the project directory:
```
cd mathquest-adventures
```

3. Install dependencies:
```
npm install
```

4. Start the development server:
```
npm start
```

The application will be available at `http://localhost:1234`.

### Building for Production

```
npm run build
```

The build will be created in the `dist` directory.

## Unity WebGL Integration

This project uses Unity WebGL for interactive math visualizations and puzzles. To update the Unity content:

1. Open the Unity project in `unity-game` directory
2. Make your changes in Unity
3. Build for WebGL platform
4. Export the build to `static/unityBuild/` directory
5. The React frontend will automatically load the Unity WebGL content

## Deployment to GitHub Pages

This project is set up for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The deployed site will be available at `https://[username].github.io/mathquest-adventures/`

If you need to deploy manually:

```
npm run build
git subtree push --prefix dist origin gh-pages
```

## Project Structure

```
mathquest-adventures/
├── src/                    # Source files
│   ├── css/                # CSS styles
│   ├── js/                 # JavaScript files
│   │   ├── components/     # React components
│   │   │   ├── GameUI.js   # Unity WebGL integration
│   │   │   ├── MainMenu.js # Main menu component
│   │   ├── context/        # React context providers
│   │   ├── data/           # Data files (levels, questions, etc.)
│   │   └── screens/        # Screen components
│   └── index.html          # Main HTML file
├── static/                 # Static files that will be copied to build
│   └── unityBuild/         # Unity WebGL build files
├── .github/                # GitHub workflows
├── package.json            # Project dependencies
└── README.md               # This readme file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the need to make calculus more engaging and accessible to students
- Special thanks to all educators who focus on making math fun and understandable
