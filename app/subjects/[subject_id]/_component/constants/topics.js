import img from "../../../../../public/img3.jpeg";
import img5 from "../../../../../public/img5.jpeg";
import img6 from "../../../../../public/img6.jpeg";

// for subtopics
import img1 from "../../../../../public/img1.jpeg";
import img4 from "../../../../../public/img4.jpeg";

import banner1 from "../../../../../public/banner1.jpg";
import banner2 from "../../../../../public/banner2.jpg";
import banner3 from "../../../../../public/banner3.jpg";
import banner4 from "../../../../../public/banner4.jpg";
import banner5 from "../../../../../public/banner5.jpg";

export const topics = [
  {
    id: 1,
    image: img5,
    banner: banner1,
    name: "Using Spreadsheets",
    premium: false,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Spreadsheet basics",
        description: "Data entry, editing, formating and printing a worksheet",
      },
      {
        id: 2,
        image: img4,
        name: "Formulae and functions",
        description: "",
      },
    ],
  },

  {
    id: 2,
    banner: banner2,
    image: img6,
    name: "Desktop publishing software",
    premium: true,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Learning the basics",
        description: "Creating, formating, editing, saving, printing, etc",
      },
      {
        id: 2,
        image: img4,
        name: "Designing publications",
        description: "Types, orientation, layout, margins, text boxes, etc",
      },
    ],
  },

  {
    id: 3,
    banner: banner3,
    image: img5,
    name: "Software installation",
    premium: false,
    subtopics: [
      {
        id: 1,
        image: img4,
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
    banner: banner4,
    image: img6,
    name: "Communication technologies",
    premium: false,
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
        image: img4,
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
    banner: banner5,
    image: img,
    name: "Programming fundamentals",
    premium: true,
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
        image: img4,
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
        image: img4,
        name: "Control structures",
        description: "Sequence, selection, loops",
      },
    ],
  },
];
