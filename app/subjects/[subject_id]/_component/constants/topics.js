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

// https://buy.stripe.com/test_5kA4je0h3ggu1m8144

// https://buy.stripe.com/test_aEUg1WbZL9S69SE9AB
export const topics = [
  {
    id: 1,
    image: img5,
    banner: banner1,
    name: "Using Spreadsheets",
    premium: true,
    paymentLink : "https://buy.stripe.com/test_aEUg1WbZL9S69SE9AB",
    isPaidFor: false,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Spreadsheet basics",
        description: "Data entry, editing, formatting and printing a worksheet",
        notes: [
          {
            id: 1,
            paragraph1:
              "Have you ever felt overwhelmed by the sight of a spreadsheet? Don't worry; we've got you covered with our first subtopic, \"Spreadsheet Basics.\" Here, we'll delve into the very foundation of spreadsheet usage, making those daunting rows and columns feel like second nature.",
            paragraph2:
              "Throughout this subtopic, you'll embark on a journey through the essential skills of data entry, editing, formatting, and even printing a worksheet. Whether you're a student managing your grades or a professional handling complex data, mastering these basics is crucial for efficiently organizing and analyzing information.",
            paragraph3:
              "Understanding spreadsheet basics isn't just about navigating through cells and formulas; it's about empowering yourself with a versatile tool that can streamline your work and boost your productivity. So, why not embark on this learning adventure and unlock the potential of spreadsheets? Dive into our videos and discover how these fundamental skills can revolutionize the way you handle data!",
          },
        ],

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
        notes: [
          {
            id: 1,
            paragraph1:
              'Let\'s demystify the world of formulas and functions with our subtopic aptly named "Formulae and Functions." Say goodbye to confusion as we unravel the secrets behind these powerful tools, transforming complex calculations into a breeze.',
            paragraph2: `In this section, you'll
             delve deeper into the realm of spreadsheet wizardry, exploring
              the intricacies of formulas and functions. From performing mathematical 
              operations to automating tasks, you'll gain invaluable insights that can 
              supercharge your spreadsheet prowess.`,
            paragraph3: `Embracing formulae and functions opens up a world of possibilities, allowing you to accomplish tasks with precision and efficiency. So, why hesitate? Take the plunge into our video tutorials and embark on a journey towards spreadsheet mastery. Who knows? You might just uncover a newfound love for numbers!`,
          },
        ],
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

        image: img1,
        name: "Learning the basics",
        description: "Creating, formating, editing, saving, printing, etc",
        notes: [
          {
            id: 1,
            paragraph1: `Are you ready to unleash your creativity and design prowess? Join us as we dive into the enchanting world of desktop publishing software with our subtopic, "Learning the Basics." Say hello to a canvas where imagination knows no bounds, and every click brings your ideas to life.`,
            paragraph2: `Within this subtopic, you'll embark on a voyage of discovery, learning the essentials of creating, formatting, editing, saving, and printing using desktop publishing software. Whether you're crafting captivating flyers or designing eye-catching brochures, these fundamental skills will set you on the path to design greatness.`,
            paragraph3: `Mastering desktop publishing software isn't just about creating visually stunning documents; it's about unleashing your creativity and making your ideas shine. So, why wait? Dive into our video tutorials and let your imagination soar. You'll be amazed at what you can achieve with the right tools and knowledge at your fingertips!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/-wlCZMYq3X0?si=B9kY8_qkBs7-ZyzG",
            title: "The basics",
            locked: false,
          },
        ],
      },
      {
        id: 2,
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/1h0DzZ1Sxis?si=2vTHty5ViCQGUjtk",
            title: "Editing and formatting",
            locked: false,
          },
        ],
        image: img4,
        name: "Designing publications",
        description: "Types, orientation, layout, margins, text boxes, etc",
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take your design skills to the next level? Step into the world of "Designing Publications" and discover the art of visual storytelling. From choosing the perfect layout to mastering typography, get ready to create publications that leave a lasting impression`,
            paragraph2: `In this subtopic, you'll explore the intricacies of publication design, learning how to play with elements like orientation, layout, margins, and text boxes to create stunning visuals. Whether you dream of designing magazines, posters, or newsletters, these skills are your ticket to standing out in a crowded digital world`,
            paragraph3: `Designing publications isn't just about making things look pretty; it's about communicating your message effectively and engaging your audience. So, why settle for ordinary when you can create extraordinary? Join us on this creative journey and unlock your full design potential!`,
          },
        ],
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

        image: img4,
        name: "Operating system (OS)",
        description: "Have a good understand of the OS",
        notes: [
          {
            id: 1,
            paragraph1: `Are you ready to peek behind the digital curtain and uncover the secrets of your computer's operating system? Get ready to dive into the fascinating world of "Operating System (OS)" with us. Whether you're a tech enthusiast or just curious about how your device works, this subtopic is your gateway to understanding the beating heart of your computer`,
            paragraph2: `Throughout this journey, you'll gain a deeper understanding of the OS, from its basic functions to its various types. Whether you're navigating through menus or troubleshooting system errors, these skills will empower you to take control of your digital domain`,
            paragraph3: `Understanding the operating system isn't just about tinkering with settings; it's about gaining insight into the very foundation of modern computing. So, why wait? Join us on this exploration and discover the inner workings of your device like never before!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/dpnYzKATBKA?si=lXwMdmYWbqBhBZXQ",
            title:
              "Introduction To Operating System | OS Functions , Features And Types",
            locked: false,
          },
        ],
      },
      {
        id: 2,
        image: img1,
        name: "Troubleshoot computers",
        description: "Understand computer hardware and its software",
        notes: [
          {
            id: 1,
            paragraph1: `Have you ever stared at a screen full of error messages and felt completely lost? Fear not! Our subtopic "Troubleshoot Computers" is here to rescue you from the depths of tech despair. Get ready to roll up your sleeves and become the hero of your digital world.`,
            paragraph2: `In this section, you'll learn how to diagnose and fix common computer issues, from hardware malfunctions to software glitches. Whether it's a crashed program or a stubborn printer, you'll be equipped with the skills to tackle any tech challenge that comes your way`,
            paragraph3: `Mastering computer troubleshooting isn't just about fixing problems; it's about gaining confidence and independence in the digital age. So, why let technology intimidate you when you can conquer it? Join us on this troubleshooting adventure and become the tech-savvy hero you were meant to be!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/jglLkX3sCsc?si=zK7m2pSAo-A9nq5r",
            title: "Hardware and software",
            locked: false,
          },
        ],
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

        image: img1,
        name: "Uses of networks",
        description:
          "Learn how communication networks are used in everyday life",
        notes: [
          {
            id: 1,
            paragraph1: `Ever wondered how information travels from one corner of the world to another in the blink of an eye? Prepare to unravel the mysteries of communication networks with our subtopic "Uses of Networks." From social media updates to streaming videos, get ready to discover the invisible highways that connect us all`,
            paragraph2: `Throughout this exploration, you'll dive into the myriad ways communication networks shape our daily lives, from staying connected with friends to conducting business transactions. Whether you're a digital native or a curious newcomer, understanding these networks is the key to navigating our interconnected world`,
            paragraph3: `Exploring the uses of networks isn't just about understanding technology; it's about appreciating the incredible feats of human ingenuity that have brought us closer together than ever before. So, why stay in the dark when you can shine a light on the wonders of modern communication? Join us on this journey and unlock the secrets of the digital age!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/btUMi2kiCXw?si=GHOML8oqIkQzNTmw",
            title: "Computer networks and it's applications",
            locked: false,
          },
        ],
      },
      {
        id: 2,

        image: img4,
        name: "Communication systems network devices",
        description:
          "Modems, routers, transmitters, receivers, switches, repeaters, etc",
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/yYe6Mh9fig0?si=fmNY8CP1gx0U9NF8",
            title: "Communication devices",
            locked: false,
          },
        ],
      },
      {
        id: 3,

        image: img1,
        name: "Transmission techniques",
        description: "Understand the complex techniques of transmission",
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
        videos: [
          {
            id: 1,
            videos_url: "https://youtu.be/ONTGxYI-00Q?si=bIXnh2WnZFQVB84J",
            title: "Transimission modes",
            locked: false,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    banner: banner5,
    image: img,
    name: "Programming",
    premium: true,
    isPaidFor: true,
    subtopics: [
      {
        id: 1,
        image: img1,
        name: "Definitions",
        description:
          "Have a good understanding of compilers, translators, assembler",
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
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
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
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
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
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
        notes: [
          {
            id: 1,
            paragraph1: `Ready to take a deep dive into the hardware that powers our digital world? Join us as we explore the fascinating realm of "Communication Systems Network Devices." From modems to routers, get ready to discover the building blocks of modern communication`,
            paragraph2: `In this section, you'll uncover the inner workings of network devices, learning how they facilitate the flow of data across vast distances. Whether you're streaming your favorite shows or video chatting with friends, understanding these devices is essential for staying connected in today's fast-paced world`,
            paragraph3: `Delving into communication systems network devices isn't just about understanding gadgets; it's about gaining insight into the infrastructure that keeps our digital lives humming along smoothly. So, why settle for being a passive user when you can become an active participant in the digital revolution? Join us on this exploration and become a savvy navigator of the digital seas!`,
          },
        ],
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
