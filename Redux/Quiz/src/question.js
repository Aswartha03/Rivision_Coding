export const questions = [
  {
    id: 1,
    question: "What does the useState hook return in React?",
    options: [
      "A function and a variable",
      "An array with two elements",
      "An object with state and updater",
      "Only the current state value"
    ],
    correctAnswer: "An array with two elements"
  },
  {
    id: 2,
    question: "What is the main purpose of useEffect in React?",
    options: [
      "To fetch data only once",
      "To handle side effects in components",
      "To create new components dynamically",
      "To optimize performance"
    ],
    correctAnswer: "To handle side effects in components"
  },
  {
    id: 3,
    question: "In React, keys are used to ______.",
    options: [
      "Identify unique elements in a list",
      "Pass data between components",
      "Optimize CSS performance",
      "Bind event handlers"
    ],
    correctAnswer: "Identify unique elements in a list"
  },
  {
    id: 4,
    question: "Which statement about conditional rendering is TRUE?",
    options: [
      "React doesn't support conditional rendering",
      "We can use if-else or ternary operators in JSX",
      "It requires Redux to work",
      "Only class components can use it"
    ],
    correctAnswer: "We can use if-else or ternary operators in JSX"
  },
  {
    id: 5,
    question: "What happens if you call setState or setCount directly in the render function?",
    options: [
      "It updates the DOM immediately",
      "It triggers an infinite re-render loop",
      "It throws a syntax error",
      "It updates once after render"
    ],
    correctAnswer: "It triggers an infinite re-render loop"
  },
  {
    id: 6,
    question: "Which of the following best describes React?",
    options: [
      "A framework for building servers",
      "A JavaScript library for building user interfaces",
      "A CSS preprocessor",
      "A database management tool"
    ],
    correctAnswer: "A JavaScript library for building user interfaces"
  },
  {
    id: 7,
    question: "When using arrays in React state, what is the best practice for updating them?",
    options: [
      "Mutate the array directly",
      "Use methods like push() or splice()",
      "Create a new array and update state immutably",
      "Convert it to a string before updating"
    ],
    correctAnswer: "Create a new array and update state immutably"
  }
];
