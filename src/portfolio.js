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
    "https://drive.google.com/file/d/1FbhDe_qbalOSlKRxByERWSMuDQAtkI7I/view?usp=sharing",
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
    link:
      "mailto:eric.dinh.ho@gmail.com?subject=re: I Have An Idea I'd like to Discuss&body=Hello Eric! %0D%0A %0D%0A I recently stumbled upon your website, and I noticed you said you were looking for an interesting project to contribute to. %0D%0A %0D%0A I have an idea that I'd like to run across you. I think it may pique your interest. %0D%0A %0D%0A Feel free to email me at your earliest convenience. Perhaps we can discuss in online if an in person meeting won't work. %0D%0A %0D%0A I look forward to speaking with you. ",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Phone",
    link: "tel:1+7787092990",
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
        {
          skillName: "Ruby",
          fontAwesomeClassname: "logos:ruby",
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
        {
          skillName: "Rails",
          fontAwesomeClassname: "logos:rails",
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
        "⚡ Design, code, and test major features in collaboration with Team Members, Application Scientists, and other members of the development team to deliver complex changes",
        "⚡ Develop website layout, application and functions layout",
        "⚡ Produced both technical and non-technical documentation, and hosted weekly software demo presentations",
        "⚡ Debug and test software implementation",
        "⚡ Interact with key partners and internal users regarding timelines, technical issues, and infrastructure integration",
        "⚡ Implement isolated backend functionality using RESTful web APIs",
        "⚡ Ensure work progress to schedule and keep (internal) customers informed of the projects progress",
        "⚡ Actively participate in team meetings and offer recommendations / ideas on design projects",
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
const projectsHeader = {};

// Contact Page
const contactPageData = {};

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
