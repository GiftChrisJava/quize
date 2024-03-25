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
    premium: true,
    isPaidFor: false,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Spreadsheet basics",
        description: "Data entry, editing, formating and printing a worksheet",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/dy3W9-oaUH8?si=GFeaq5zSKQJ4euad",
            title: "Entering Data into an Excel worksheet",
            locked: false,
          },
          {
            id: 2,
            videos_url: "https://youtu.be/ZnXYEljrelM?si=XvW34pNlYohVMIGK",
            title: "Editing data in Excel",
            locked: true,
          },
          {
            id: 3,
            videos_url: "https://youtu.be/1LgkR1R1ACU?si=GbKho4Qx6youfXIT",
            title: "Formating data in Excel",
            locked: true,
          },
          {
            id: 4,
            videos_url: "https://youtu.be/HfwMo6M1XzM?si=6xL_GfBXEfRNR-Nh",
            title: "How to Print Excel Sheet",
            locked: true,
          },
        ],
      },
      {
        id: 2,
        image: img4,
        name: "Formulae and functions",
        description: "",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/Jl0Qk63z2ZY?si=WZV2jQf8UoUGLtbV",
            title: "Formulae and functions",
            locked: true,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    banner: banner2,
    image: img6,
    name: "Desktop publishing software",
    premium: false,
    isPaidFor: false,
    subtopics: [
      {
        id: 1,
        videos: [],
        image: img1,
        name: "Learning the basics",
        description: "Creating, formating, editing, saving, printing, etc",
      },
      {
        id: 2,
        videos: [],
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
    isPaidFor: false,
    subtopics: [
      {
        id: 1,
        videos: [],
        image: img4,
        name: "Operating system (OS)",
        description: "Have a good understand of the OS",
      },
      {
        id: 2,
        videos: [],
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
    isPaidFor: false,
    subtopics: [
      {
        id: 1,
        videos: [],
        image: img1,
        name: "Uses of networks",
        description:
          "Learn how communication networks are used in everyday life",
      },
      {
        id: 2,
        videos: [],
        image: img4,
        name: "Communication systems network devices",
        description:
          "Modems, routers, transmitters, receivers, switches, repeaters, etc",
      },
      {
        id: 3,
        videos: [],
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
    isPaidFor: true,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Definitions",
        description:
          "Have a good understanding of compilers, translators, assembler",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/zIjI8H945T8?si=t8m-h3ibxsYvAXOe",
            title: "Understanding a compiler",
            locked: false,
          },
          {
            id: 2,
            videos_url: "https://youtu.be/wA2oMRmbrfo?si=i7QVdnZ0ciWLPc9j",
            title: "Assembly language",
            locked: false,
          },
        ],
      },
      {
        id: 2,
        videos: [],
        image: img4,
        name: "Programming basics",
        description: "Structure, variables, compiling and running",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/fZbSl58orNs?si=OqAnAamcWPsrCTOa",
            title: "Variables",
            locked: false,
          },
          {
            id: 2,
            videos_url: "https://youtu.be/fq6tyn8T9gk?si=ftjCcR4pyfUw3ux9",
            title: "Structures",
            locked: false,
          },
          {
            id: 3,
            videos_url: "https://youtu.be/vAPi4qN9kCs?si=zK0-Mjd0TN7bN5d7",
            title: "Compiling and running",
            locked: false,
          },
        ],
      },
      {
        id: 3,
        image: img1,
        name: "Operators",
        description: "Understand arithmetic and logical operators",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/5JXcX0IqRUo?si=nXWJFV62l0r9P38H",
            title: "Arithmetic Operators",
            locked: false,
          },
          {
            id: 2,
            videos_url: "https://youtu.be/36vZpQnaEiE?si=5AMdQyyEh8s5kLRL",
            title: "Logical operators",
            locked: false,
          },
        ],
      },
      {
        id: 4,
        image: img4,
        name: "Control structures",
        description: "Sequence, selection, loops",
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/OoShU65HemA?si=Ora9w7uA0TNi3GDF",
            title: "Logical operators",
            locked: false,
          },
        ],
      },
    ],
  },
];
