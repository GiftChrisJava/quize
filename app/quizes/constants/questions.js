export const questions = [
  // Physics Questions
  {
    question:
      "What is the force that causes objects with mass to attract one another?",
    type: "multiple choice",
    number: 1,
    options: [
      "Electromagnetic force",
      "Gravitational force",
      "Strong nuclear force",
      "Weak nuclear force",
    ],
    allowsMultiple: false,
    answers: ["Gravitational force"],
  },
  {
    question: "What is the unit of electrical resistance?",
    type: "multiple choice",
    number: 2,
    options: ["Ohm", "Watt", "Ampere", "Volt"],
    allowsMultiple: false,
    answers: ["Ohm"],
  },
  {
    question: "Who is known for the theory of relativity?",
    type: "multiple choice",
    number: 3,
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
    allowsMultiple: false,
    answers: ["Albert Einstein"],
  },
  {
    question:
      "What particle is exchanged in a strong nuclear force interaction?",
    type: "multiple choice",
    number: 4,
    options: ["Photon", "Gluon", "Electron", "Neutrino"],
    allowsMultiple: false,
    answers: ["Gluon"],
  },
  // {
  //   question: "What is the speed of light in a vacuum?",
  //   type: "true or false",
  //   number: 5,
  //   options: ["True", "False"],
  //   allowsMultiple: false,
  //   answers: ["True"],
  // },
  // // Biology Questions
  // {
  //   question: "What is the powerhouse of the cell?",
  //   type: "multiple choice",
  //   number: 6,
  //   options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum"],
  //   allowsMultiple: false,
  //   answers: ["Mitochondria"],
  // },
  // {
  //   question: "Which molecule carries genetic information?",
  //   type: "multiple choice",
  //   number: 7,
  //   options: ["Protein", "Carbohydrate", "DNA", "Lipid"],
  //   allowsMultiple: false,
  //   answers: ["DNA"],
  // },
  // {
  //   question: "What is the process by which plants make their food?",
  //   type: "multiple choice",
  //   number: 8,
  //   options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
  //   allowsMultiple: false,
  //   answers: ["Photosynthesis"],
  // },
  // {
  //   question: "What type of cells have a nucleus?",
  //   type: "multiple choice",
  //   number: 9,
  //   options: ["Prokaryotic cells", "Eukaryotic cells", "Both", "None"],
  //   allowsMultiple: false,
  //   answers: ["Eukaryotic cells"],
  // },
  // {
  //   question: "What is the main organ involved in the circulatory system?",
  //   type: "multiple choice",
  //   number: 10,
  //   options: ["Lungs", "Liver", "Heart", "Kidneys"],
  //   allowsMultiple: false,
  //   answers: ["Heart"],
  // },
  // // Computer Science Questions
  // {
  //   question: "What does 'CPU' stand for?",
  //   type: "multiple choice",
  //   number: 11,
  //   options: [
  //     "Central Processing Unit",
  //     "Computer Personal Unit",
  //     "Central Personal Unit",
  //     "Control Processing Unit",
  //   ],
  //   allowsMultiple: false,
  //   answers: ["Central Processing Unit"],
  // },
  // {
  //   question: "Which language is primarily used for web development?",
  //   type: "multiple choice",
  //   number: 12,
  //   options: ["C++", "Python", "JavaScript", "Java"],
  //   allowsMultiple: false,
  //   answers: ["JavaScript"],
  // },
  // {
  //   question: "What is the term for an error in a program?",
  //   type: "multiple choice",
  //   number: 13,
  //   options: ["Bug", "Feature", "Syntax", "Exception"],
  //   allowsMultiple: false,
  //   answers: ["Bug"],
  // },
  // {
  //   question: "What does 'HTML' stand for?",
  //   type: "multiple choice",
  //   number: 14,
  //   options: [
  //     "HyperText Markup Language",
  //     "HyperTransfer Markup Language",
  //     "HyperTool Markup Language",
  //     "HyperTech Markup Language",
  //   ],
  //   allowsMultiple: false,
  //   answers: ["HyperText Markup Language"],
  // },
  // {
  //   question: "What is the name of the first computer programmer?",
  //   type: "multiple choice",
  //   number: 15,
  //   options: [
  //     "Charles Babbage",
  //     "Alan Turing",
  //     "Ada Lovelace",
  //     "John von Neumann",
  //   ],
  //   allowsMultiple: false,
  //   answers: ["Ada Lovelace"],
  // },
  // // Mixed Questions
  // {
  //   question: "Which gas is most abundant in the Earth's atmosphere?",
  //   type: "multiple choice",
  //   number: 16,
  //   options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  //   allowsMultiple: false,
  //   answers: ["Nitrogen"],
  // },
  // {
  //   question: "What is the largest planet in our solar system?",
  //   type: "multiple choice",
  //   number: 17,
  //   options: ["Earth", "Jupiter", "Saturn", "Mars"],
  //   allowsMultiple: false,
  //   answers: ["Jupiter"],
  // },
  // {
  //   question: "What is the name of the process by which cells divide?",
  //   type: "multiple choice",
  //   number: 18,
  //   options: ["Mitosis", "Meiosis", "Fission", "Fusion"],
  //   allowsMultiple: false,
  //   answers: ["Mitosis"],
  // },
  // {
  //   question: "Which data structure uses a FIFO method?",
  //   type: "multiple choice",
  //   number: 19,
  //   options: ["Array", "Stack", "Queue", "LinkedList"],
  //   allowsMultiple: false,
  //   answers: ["Queue"],
  // },
  // {
  //   question: "What is the term for the amount of matter in an object?",
  //   type: "multiple choice",
  //   number: 20,
  //   options: ["Weight", "Mass", "Density", "Volume"],
  //   allowsMultiple: false,
  //   answers: ["Mass"],
  // },
  // // Additional Questions
  // {
  //   question: "Which of the following are programming languages?",
  //   type: "multiple choice",
  //   number: 21,
  //   options: ["HTML", "CSS", "JavaScript", "Python"],
  //   allowsMultiple: true,
  //   answers: ["JavaScript", "Python"],
  // },
  // {
  //   question: "What is the primary function of the respiratory system?",
  //   type: "multiple choice",
  //   number: 22,
  //   options: [
  //     "Digest food",
  //     "Circulate blood",
  //     "Transmit nerve signals",
  //     "Exchange gases",
  //   ],
  //   allowsMultiple: false,
  //   answers: ["Exchange gases"],
  // },
];