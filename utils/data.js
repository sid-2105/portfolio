export const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    profile_picture: "/images/profile.svg",
    location: "Bangalore, India",
    quote:
      "A highly motivated System Engineer with strong fundamentals in Machine Learning and Big Data. " +
      "Shows great consistency in handling ETL pipelines and writing efficient Python and Java code.",
    link: "#",
  },
  {
    name: "Emma Roberts",
    profile_picture: "/images/profile.svg",
    location: "Hyderabad, India",
    quote:
      "Demonstrates excellent problem-solving skills and a solid understanding of data engineering concepts. " +
      "Quick learner with a strong grasp of backend systems and scalable data workflows.",
    link: "#",
  },
  {
    name: "Daniel Kim",
    profile_picture: "/images/profile.svg",
    location: "Remote",
    quote:
      "Very detail-oriented and technically strong. Has a good foundation in AI/ML concepts and is actively " +
      "building skills in Big Data processing and system design.",
    link: "#",
  },
  {
    name: "Sophia Brown",
    profile_picture: "/images/profile.svg",
    location: "Pune, India",
    quote:
      "Consistent and disciplined in work. Strong understanding of ETL processes and continuously improving " +
      "skills in Python, Java, and data-driven application development.",
    link: "#",
  },
];

export const QUOTES = [
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    quote:
      "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
  },
  {
    quote:
      "Software and cathedrals are much the same — first we build them, then we pray.",
    author: "Paul Graham",
  },
];

export const PROFILE_LINKS = {
  LINKEDIN: {
    LINK: "https://www.linkedin.com/in/siddharth-mishra-363194225",
    LABEL: "Siddharth Mishra",
  },
  GITHUB: {
    LINK: "https://github.com/sid-2105",
    LABEL: "@sid-2105",
  },
  TWITTER: {
    LINK: "https://twitter.com/_sidverse",
    LABEL: "@_sidverse",
  },
  INSTAGRAM: {
    LINK: "https://www.instagram.com/_siddhuvibes",
    LABEL: "_siddhuvibes",
  },
  EMAIL: {
    LINK: "hello@sidmcodes.com",
    LABEL: "hello@sidmcodes.com",
  },
};

export const SKILLS = {
  PROGRAMMING: ["Python", "Java", "C", "JavaScript", "SQL"],

  MACHINE_LEARNING: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn"
  ],

  BIG_DATA: [
    "HDFS",
    "Unix Commands",
    "Data Processing",
    "Basic Hadoop Concepts"
  ],

  ETL_AND_DATA: [
    "ETL Pipelines",
    "Data Transformation",
    "Data Cleaning",
    "Data Analysis"
  ],

  WEB_DEVELOPMENT: [
    "MERN Stack",
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "REST APIs"
  ],

  LOW_CODE: ["Mendix"],

  TOOLS: ["Git", "GitHub", "Linux"],
};

export const ABOUT_ME = [
 "Hello, I'm Siddharth!",
"I'm a System Engineer based in India.\n" +
"I specialize in Machine Learning, Big Data, and ETL pipelines, \n" +
"with hands-on experience in Python and Java for building scalable \n" +
"and data-driven applications.",

"I focus on following best practices, writing efficient and maintainable code, \n" +
"and continuously learning new technologies in the fields of AI and data engineering.",

"I enjoy working on challenging and impactful projects with \n" +
"collaborative teams and forward-thinking organizations.",

"I am passionate about technology, problem-solving, and exploring \n" +
"new advancements in AI, and I also enjoy traveling and staying active.",
];

export const SUMMARY =
  "Detail-oriented System Engineer with a strong focus on Machine Learning, Big Data, and ETL pipeline development.\n" +
"Skilled in Python and Java, with experience in building scalable, data-driven applications and processing large datasets.\n" +
"Passionate about designing efficient data workflows, applying best practices, and continuously improving system performance.\n" +
"Dedicated to developing intelligent solutions that support business goals, enhance data utilization, and drive impactful outcomes.";

export const CURRENT_WORK = {
  WORK: "INFOSYS",
  LINK: "https://infosys.com/",
};

export const FUN_FACTS = [
  "I enjoy traveling and exploring new places ✈️, often going on spontaneous trips with no fixed destination 🌍",
"I love roaming around and discovering new environments 🚶‍♂️",
"I enjoy solving coding problems 🧑‍💻 and working through complex bugs until they are resolved",
"I always look for efficient and optimized solutions, even when a basic approach works 💡⚡",
"I like experimenting with Python and Java while building small projects and learning new concepts 🧪",
"I spend time exploring new technologies in AI/ML, Big Data, and system design to continuously improve my skills 🚀",
"I enjoy turning ideas into working applications 🚀",
"I believe consistency and curiosity are key to growth in tech 📈"
];

export const CONTACT_INFO = {
  EMAIL: "hello@sidmcodes.com",
  PHONE: "+91 9454500340",
  LINKEDIN:"siddharth-mishra-363194225",
  NOTE: [
   "I am passionate about contributing to ambitious, data-driven projects with innovative and goal-oriented teams 🚀",
   "Open to opportunities, collaborations, and technical discussions—feel free to get in touch."
  ],
};

export const FEATURED_PROJECTS = [
  {
    title: "Paltu",
    description:
      "Paltu is an AI-powered platform that predicts potential animal diseases based on observed symptoms and provides recommended preventive measures. Additionally, it features an integrated marketplace that allows users to conveniently purchase relevant products directly through the platform.",
    image: "/images/paltu.webm",
    code: "https://github.com/sid-2105/Paltu",
    link: "https://paltu-three.vercel.app/",
    type: "desktop",
    stack: [
      "MERN Stack",
      "Python",
      "Flask"
    ],
  },
  {
    title: "Sidmcodes",
    description:
      "Sidmcodes is my personal portfolio website where I showcase my work and share my journey as a software engineer.",
    image: "/images/portfolio.webm",
    code: "https://github.com/sid-2105/portfolio",
    link: "https://sidmcodes.com",
    type: "desktop",
    stack: ["NextJS", "TailwindCSS"],
  },
  {
    title: "Travel and Tourism Native App",
    description:
      "QGO is a leading platform for Middle Eastern travel companies, offering a comprehensive range of travel-related services to customers. It features multiple modules, including sports event bookings, vacation planning, and other travel management services, ensuring a seamless and convenient experience for users.",
    image: "/images/coming_soon.webm",
    // code: "https://github.com/sid-2105",
    link: "#",
    type: "desktop",
    stack: ["Mendix"],
  },
  {
    title: "Guider",
    description:
      "Guider is a platform designed to support college freshers in navigating the field of engineering by providing resources such as study notes, coding guidance, and hackathon support.",
    image: "/images/guider.webm",
    // code: "https://github.com/sid-2105",
    link: "#",
    type: "desktop",
    stack: [
      "Mendix"
    ],
  },
  {
    title: "Startup Website",
    description:
      "I developed a website for Resilient IT Services, handled its deployment, and implemented SEO strategies to improve its visibility and performance in search results.",
    image: "/images/res.webm",
    //code: "https://github.com/sid-2105",
    link: "https://resilientitservices.com/",
    type: "desktop",
    stack: [
      "Next.js and CSS"
    ],
  },
  {
    title: "He110 W0r1d - Coding Society",
    description:
      "A website designed for my coding society to help peers learn more about the community and easily apply for opportunities such as hackathons and other events.",
    image: "/images/hello.webm",
    code: "https://github.com/sid-2105/he110w0r1d",
    link: "https://helloworld-frontend.vercel.app/",
    type: "desktop",
    stack: [
      "Mendix"
    ],
  }
];



export const AI_PROJECTS = [
  {
    title: "Exam Proctor",
    description:
      "It is a model that monitor the candidate to prevent cheating in online exams.",
    code: "https://github.com/sid-2105/ML",
    stack: ["Python","Open CV", "Media Pipeline"],
  },
  {
    title: "Sentimental analysis of medicine reviews",
    description:
      "Developed a sentimenatal analysis model fot Paltu using Python.",
    code: "https://github.com/sid-2105/Paltu",
    stack: ["Python"],
  },
];

export const UTIL_PROJECTS = [
  {
    title: "Currency converter",
    description:
      "A widget that converts the currency from one country to another.",
    code: "https://github.com/sid-2105/Code-and-Fun",
    stack: ["Javascript", "ReactJS"],
  },
  {
    title: "Weather widget",
    description:
      "It is a widget which forecast the weather using location",
    code: "https://github.com/sid-2105/weather-app",
    stack: ["JavaScript", "CSS3", "HTML5"],
  },
];

export const EXPERIENCE = [
  {
    company: "Resilient IT Services",
    position: "Mendix Intern",
    duration: "August 2024 - January 2025",
    description:
      "Worked on Mendix low-code applications, backend integrations, and contributed to scalable enterprise solutions.",
    skills: ["Mendix", "Low-Code", "APIs", "Backend Development"],
    logo: "/images/res.png",
    website: "https://www.resilientitservices.com",
  },
  {
    company: "Infosys",
    position: "System Engineer",
    duration: "November 2025 - Present",
    description:
      "Working on ML, ETL, Python, Java and Big Data.",
    skills: ["Java", "Python", "ML", "ETL"],
    logo: "/images/infy.png",
    website: "https://www.infosys.com",
  },
];


export const CERTIFICATES = [
  {
    title: "Programming & OOPS using Java",
    description:
      "Earn this credential after completing a course covering programming fundamentals and object-oriented design using Java, including core OOP principles, data structures, and best practices for building modular and scalable applications.",
    date: "December 2025",
    skills: ["Programming","Java","OOPS"],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },
  {
    title: "Data Structure & Algorithm using Java",
    description:"Earn this credential after completing a program covering data structures and algorithms using Java, emphasizing problem-solving, optimization techniques, and practical implementation through real-world coding challenges.",
    date: "Dec 2025",
    skills: ["Problem Solving", "Code Optimization", "Practical Implementation"],
   link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },
  {
  title: "Database Management System (HSQL)",
  description:
    "Earn this credential after completing a course covering database fundamentals using HSQL, including relational database concepts, SQL queries, data modeling, normalization, and database management best practices.",
  date: "December 2025",
  skills: [
    "Database Management Systems",
    "SQL Queries",
    "Relational Databases",
    "Data Modeling",
  ],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },

  {
  title: "Exploring Machine Learning using Python",
  description:
    "Earn this credential after gaining hands-on experience in machine learning using Python, including building models, working with datasets, and applying algorithms using libraries such as NumPy, pandas, and scikit-learn.",
  date: "February 2026",
  skills: [
    "Machine Learning",
    "Python",
    "Regression",
    "Classification",
    "Clustering",
    "scikit-learn",
    "Data Analysis",
  ],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },

  {
  title: "Data Science using Python",
  description:
    "Earn this credential after gaining a strong understanding of data science concepts using Python, including data analysis, visualization, and model building with libraries such as NumPy, pandas, and matplotlib through hands-on projects.",
  date: "February 2026",
  skills: [
    "Python",
    "Data Science",
    "Data Analysis",
    "Data Visualization",
    "pandas",
    "NumPy",
    "matplotlib",
  ],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },

  {
  title: "Infosys Certified Python Programmer",
  description:
    "Earn this credential after demonstrating proficiency in Python programming, including core concepts such as data structures, control flow, functions, and object-oriented programming through structured assessments and practical problem-solving.",
  date: "November 2022",
  skills: [
    "Python",
    "Programming Fundamentals",
    "Data Structures",
    "Object-Oriented Programming",
    "Problem Solving",
  ],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },
  {
  title: "Prompt Engineering",
  description:
    "Earn this credential after developing expertise in crafting effective prompts for AI models, focusing on optimizing outputs, improving response accuracy, and applying prompt design techniques for real-world AI applications.",
  date: "December 2025",
  skills: [
    "Prompt Engineering",
    "AI Interaction",
    "Natural Language Processing",
    "Problem Solving",
    "Generative AI",
  ],
    link: "#",
    provider: {
      name: "Infosys",
      url: "https://www.infosys.com/",
      logo: "/images/infy.png",
    },
  },
  {
  title: "Mendix Advanced Certification",
  description:
    "Earn this credential after demonstrating advanced expertise in Mendix low-code development, including building scalable enterprise applications, implementing complex logic, integrating APIs, and following best practices in application architecture and deployment.",
  date: "May 2023",
  skills: [
    "Mendix",
    "Low-Code Development",
    "Application Development",
    "API Integration",
    "Enterprise Solutions",
  ],
    link: "#",
    provider: {
      name: "Mendix",
      url: "https://www.mendix.com/",
      logo: "/images/mx.jpg",
    },
  },
    {
  title: "Mendix Intermediate Certification",
  description:
    "Earn this credential after building and deploying applications using Mendix, demonstrating understanding of domain modeling, workflows, microflows, and basic integration with external services.",
  date: "January 2023",
  skills: [
    "Mendix",
    "Low-Code Development",
    "Domain Modeling",
    "Microflows",
    "Application Development",
  ],
    link: "#",
    provider: {
      name: "Mendix",
      url: "https://www.mendix.com/",
      logo: "/images/mx.jpg",
    },
  },
   {
  title: "Mendix Rapid Certification",
  description:
    "Earn this credential after demonstrating the ability to quickly build and deploy applications using Mendix, focusing on core low-code concepts, rapid development practices, and efficient use of pre-built components.",
  date: "May 2022",
  skills: [
    "Mendix",
    "Rapid Application Development",
    "Low-Code Development",
    "Application Design",
    "Basic Microflows",
  ],
    link: "#",
    provider: {
      name: "Mendix",
      url: "https://www.mendix.com/",
      logo: "/images/mx.jpg",
    },
  },
];

