import img from "../../../../../public/img3.jpeg";
import img5 from "../../../../../public/img5.jpeg";
import img6 from "../../../../../public/img6.jpeg";

// for subtopics
import img1 from "../../../../../public/img1.jpeg";
import img7 from "../../../../../public/img7.jpeg";

export const topics = [
  {
    id: 1,
    image: img5,
    name: "Using Spreadsheets",
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "working with a spreadsheet",
        description: "Data entry, editing, formating and printing a worksheet",
      },
      {
        id: 2,
        image: img7,
        name: "Formulae and functions",
        description: "",
      },
    ],
  },

  {
    id: 2,
    image: img6,
    name: "Desktop publishing software",
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "working desktop publishing software",
        description: "Creating, formating, editing, saving, printing, etc",
      },
      {
        id: 2,
        image: img7,
        name: "Designing publications",
        description: "Types, orientation, layout, margins, text boxes, etc",
      },
    ],
  },

  {
    id: 3,
    image: img5,
    name: "Software installation",
    subtopics: [
      {
        id: 1,
        image: img7,
        name: "Operating system (OS)",
        description: "Have a good understand of the OS",
      },
      {
        id: 2,
        image: img1,
        name: "Troubleshoot computers",
        description: "Understand computer hardware and its software",
      },
    ],
  },

  {
    id: 4,
    image: img6,
    name: "Communication technologies",
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Uses of networks",
        description:
          "Learn how communication networks are used in everyday life",
      },
      {
        id: 2,
        image: img7,
        name: "Communication systems network devices",
        description:
          "Modems, routers, transmitters, receivers, switches, repeaters, etc",
      },
      {
        id: 3,
        image: img1,
        name: "Transmission techniques",
        description: "Understand the complex techniques of transmission",
      },
    ],
  },

  {
    id: 5,
    image: img,
    name: "Programming fundamentals",
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Definitions",
        description:
          "Have a good understanding of compilers, translators, assembler",
      },
      {
        id: 2,
        image: img7,
        name: "Programming basics",
        description: "Structure, variables, compiling and running",
      },
      {
        id: 3,
        image: img1,
        name: "Operators",
        description: "Understand arithmetic and logical operators",
      },
      {
        id: 4,
        image: img7,
        name: "Control structures",
        description: "Sequence, selection, loops",
      },
    ],
  },
];
