# Sorting Visualizer

An interactive Sorting Visualizer built with React and JavaScript that compares four sorting algorithms side by side in real time.

While revising sorting algorithms, I thought, *"Why not build a project instead of just solving questions?"* This project helped me strengthen my understanding of both sorting algorithms and React by implementing the algorithms visually rather than only studying their theory.

Throughout the development process, I also explored React concepts such as components, state management, asynchronous animations, and reusable code structure.

I also received help from ChatGPT during development. It helped me troubleshoot errors, suggested improvements to the UI, and guided me through implementing some features. My goal was to keep the interface simple, clean, and easy to understand rather than adding unnecessary visual effects.
## Features

- Simultaneous visualization of:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
- Random array generation (30–45 elements)
- Animated sorting process
- Reset to the original unsorted array
- Color-coded comparisons and sorted elements
- Responsive 2×2 layout
- Modern UI with gradient background



## Tech Stack

- React
- JavaScript (ES6)
- CSS3
- Vite

## Installation

Clone the repository:

```
git clone <repository-url>
```

Go into the project folder:

```
cd sorting-visualizer
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

## Project Structure

```
src/
├── algorithms/
│   ├── bubbleSort.js
│   ├── selectionSort.js
│   ├── insertionSort.js
│   └── mergeSort.js
├── components/
│   └── AlgorithmCard.jsx
├── utilities/
│   └── sleep.js
├── App.jsx
└── App.css
```


## License

This project is intended for learning .
Please do not redistribute or commercialize this project without permission.