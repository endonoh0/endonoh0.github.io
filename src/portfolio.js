/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Eric Ho",
  logo_name: "EricHo",
  nickname: "Software Engineer",
  subTitle:
    "I am a Full Stack Developer and passionate learner who is always ready to help, teach, and share knowledge. Eager to ride cutting-edge technologies, with a driven purpose to  build long lasting applications and websites.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/endonoh0/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/endonoh0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/eric-d-ho",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:eric.dinh.ho@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Phone",
    fontAwesomeIcon: "fas fa-mobile-alt", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#ffd571", // Reference https://simpleicons.org/?q=twitter
  },
];

const skillsList = {
  data: [
    {
      title: "Databases",
      softwareSkills: [
        {
          skillName: "DynamoDb",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#2965f1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Languages",
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#787CB5",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            color: "#787CB5",
          },
        },
      ],
    },
    {
      title: "Frameworks",
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
        },
      ],
    },
    {
      title: "Virtualization",
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Vagrant",
          fontAwesomeClassname: "logos:vagrant-icon",
        },
      ],
    },
    {
      title: "Architectures",
      softwareSkills: [
        {
          skillName: "Rest API",
          fontAwesomeClassname: "dashicons:rest-api",
        },
        {
          skillName: "Scrum",
          fontAwesomeClassname: "simple-icons:scrumalliance",
        },
      ],
    },
    {
      title: "Version Control",
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-brands:git-square",
        },
      ],
    },
    {
      title: "Operating Systems",
      softwareSkills: [
        {
          skillName: "Shell Scripting",
          fontAwesomeClassname: "logos:bash-icon",
        },
      ],
    },
  ],
};

const career = {
  data: [
    {
      position: "FullStack Developer",
      company: "Floka",
      company_url: "https://floka.co/",
      experience: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Node",
        "⚡ Designing highly attractive user interface for mobile and web applications",
      ],
    },
  ],
};

const education = {
  data: [
    {
      degree: "Web Development Certificate",
      school: "Lighthouse Labs",
      year: "Aug 2020",
    },
    {
      degree: "Bachelor of Kinesiology",
      school: "University of British Columbia",
      year: "Nov 2012 to Nov 2017",
    },
  ],
};

const skills = {
  data: [
    {
      title: "Skills Overview",
      skills: [
        "⚡ Comprehensive understanding and working experience with database design, development with NoSQL, and cloud hosting with AWS and Firebase",
        "⚡ Thorough understanding of CS fundamentals including creating the flow of application functionalities to optimize user experience",
        "⚡ Developing scalable production models and understanding of continuous integration and content delivery systems",
        "⚡ Planning, prototyping, and designing web applications",
        "⚡ Familiarity with secure web application practices (authentication, authorization, encryption)",
        "⚡ Experience with implementing, and integrating payment gateways (Stripe)",
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  career,
  education,
  skills,
  skillsList,
  projectsHeader,
  contactPageData,
};
