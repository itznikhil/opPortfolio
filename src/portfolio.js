/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Nikhil",
  logo_name: "Nikhil.g()",
  nickname: "itznikhil / Nick",
  full_name: "Nikhil Garg",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1Mhtf6_5RRQlHvAEgM_ctp34TtJs_ZO-3qOKF9Zjj3MQ/edit?usp=sharing",
  mail: "mailto:nikhilgarg983@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/itznikhil",
  linkedin: "https://www.linkedin.com/in/nikhil-garg-9a56ba233/",
  gmail: "nikhilgarg983@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/co.nikhil.garg/",
  tel: "Tel:+916396120175",
  contactform:
    "https://us9.list-manage.com/contact-form?u=3d3df8c91e9dce3b0897e2347&form_id=5685bf117664ef066f78acb001c0c4c8",
  twitter: "https://twitter.com/NikhilG20623896",
  instagram: "https://www.instagram.com/_garg_nikhil/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter, React Native and native Android",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "codeigniter",
          fontAwesomeClassname: "simple-icons:codeigniter",
          style: {
            color: "#FE3A00",
          },
        },
        {
          skillName: "laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2C20",
          },
        },
        {
          skillName: "vuejs",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#42B883",
          },
        },
        {
          skillName: "angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCB2E",
          },
        },
        {
          skillName: "redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3BC989",
          },
        },
        {
          skillName: "django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2D79C7",
          },
        },
        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#860AFB",
          },
        },
        {
          skillName: "stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#6772E5",
          },
        },
        {
          skillName: "razorpay",
          fontAwesomeClassname: "simple-icons:razorpay",
          style: {
            color: "#318CF4",
          },
        },
        {
          skillName: "tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38BDF8",
          },
        },
        {
          skillName: "reactquery",
          fontAwesomeClassname: "simple-icons:reactquery",
          style: {
            color: "#FF4154",
          },
        },
        {
          skillName: "chakraui",
          fontAwesomeClassname: "simple-icons:chakraui",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Apollo GraphQL",
          fontAwesomeClassname: "simple-icons:apollographql",
          style: {
            color: "#311C87",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#311C87",
          },
        },
        {
          skillName: "expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            color: "#000020",
          },
        },
        {
          skillName: "jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "socketdotio",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "mapbox",
          fontAwesomeClassname: "simple-icons:mapbox",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "paypal api",
          fontAwesomeClassname: "simple-icons:paypal",
          style: {
            color: "#00457C",
          },
        },
        {
          skillName: "threejs",
          fontAwesomeClassname: "simple-icons:threedotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Certifications by Coursera & Udemy Online",
        "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Self / Study",
      subtitle: "Computer Programming and Networking",
      logo_path: "readingImg.png",
      alt_name: "SETI",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://udemy.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Complete Data Science & Machine Learning Bootcamp",
      subtitle: "TheAppBrewery",
      logo_path: "TheAppBrewery-Code.png",
      certificate_link: " ",
      alt_name: "TheAppBrewery",
      color_code: "#47A048",
    },
    {
      title: "The Complete Web Development Bootcamp",
      subtitle: "TheAppBrewery",
      logo_path: "TheAppBrewery-Code.png",
      certificate_link: "  ",
      alt_name: "TheAppBrewery",
      color_code: "#F6B808",
    },
    {
      title: "Google UX Design Professional Certificate",
      subtitle: "Coursera",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "coursera",
      color_code: "#2AAFED",
    },
    {
      title: "The Complete React Native + Hooks Course",
      subtitle: "Udemy",
      logo_path: "Udemy-Emblem.png",
      certificate_link: " ",
      alt_name: "Udemy",
      color_code: "#E2405F",
    },
    {
      title: "Startup India Learning Program",
      subtitle: "Entrepreneurship program by Startup India",
      logo_path: "startupindialogo_new.png",
      certificate_link: "  ",
      alt_name: "Startup India",
      color_code: "#8C151599",
    },
    {
      title: "AWS Certificate",
      subtitle: "amazon",
      logo_path: "AmazonWebservices_Logo.png",
      certificate_link: " ",
      alt_name: "amazon",
      color_code: "#1e70c1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed 20+ projects. I've mostly done projects on my own and I am actively looking for Projects. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "App / Web Developer",
          company: "Upwork",
          company_url: "https://www.upwork.com/",
          logo_path: "upwork.png",
          duration: "June 2018 - Ongoing",
          location: "Remote",
          description: "Self Employed",
          color: "#2962FF",
        },
        {
          title: "Full Stack Developer",
          company: "Code Symphony",
          company_url:
            "https://www.upwork.com/o/companies/~018c7b6c9d5feb2c3f/",
          logo_path: "codesymphony.jpg",
          duration: "Mar 2022 - Ongoing",
          location: "Ahmedabad",
          description: "IT Services and IT Consulting.",
          color: "#2962FF",
        },
        {
          title: "Software Engineer",
          company: "Northstar technologies",
          company_url: "https://technorthstar.com/",
          logo_path: "NS-1.png",
          duration: "2022 - Ongoing",
          location: "Ahmedabad",
          description: "IT Services and IT Consulting.",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-End Developer",
          company: "Freshhut",
          company_url: " ",
          logo_path: "freshhut.jpg",
          duration: "Summer of 2019",
          location: "",
          description: "Develop a ecommerce app using native Android and PHP.",
          color: "#800000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Mentor - Technorthstar",
          company: "Tech north star",
          company_url: "https://technorthstar.com/",
          logo_path: "NS-1.png",
          duration: "22",
          location: " ",
          description:
            "Mentorship responsibilities were to help freshers plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nikhil.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@nikhilgarg_44691",
    avatar_image_path: "blogs_image.svg",
  },
  calendlySection: {
    title: "Need any help with your projects?",
    subtitle: "Let's talk 15min. Let's establish your Action Plan.",
    link: "https://calendly.com/nikhil_garg/30min",
  },
};

const projects = {
  data: [
    {
      id: "50",
      name: "Guide des gourmets",
      url: "https://guidedesgourmets.com/",
      description: "Restraunt booking center for groups",
      languages: [
        {
          name: "laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
        {
          name: "vue",
          iconifyClass: "logos-vue",
        },
        {
          name: "React Native",
          iconifyClass: "tabler:brand-react-native",
        },
      ],
    },
    {
      id: "51",
      name: "Freshhut",
      url:
        "https://play.google.com/store/apps/details?id=com.freshhut&hl=en_IN&gl=US",
      description: "Get recipes for hundreds and thousands of dishes",
      languages: [
        {
          name: "Codeigniter",
          iconifyClass: "logos-codeigniter",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "0",
      name: "opPortfolio",
      url: "https://github.com/itznikhil/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Trackugo",
      url:
        "https://play.google.com/store/apps/details?id=com.trackyou&hl=en_IN&gl=US",
      description: "Vechile Tracking System",
      languages: [
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "React Native",
          iconifyClass: "tabler:brand-react-native",
        },
      ],
    },
    {
      id: "2",
      name: "TaxisGreen",
      url: "https://play.google.com/store/apps/details?id=com.taxis.green",
      description: "Ultimate taxi app with admin panel (uber clone).",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "stripe",
          iconifyClass: "logos-stripe",
        },
        {
          name: "expo",
          iconifyClass: "logos-expo",
        },
        {
          name: "react native",
          iconifyClass: "tabler:brand-react-native",
        },
      ],
    },
    {
      id: "12",
      name: "KPEXAM",
      url: "https://kpexam.com",
      description: "Online school.",
      languages: [
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },

        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "react-query",
          iconifyClass: "logos-react-query",
        },
        {
          name: "figma",
          iconifyClass: "logos-figma",
        },

        {
          name: "Chakra ui",
          iconifyClass: "logos-bootstrap",
        },

        {
          name: "Digital Ocean",
          iconifyClass: "logos-digital-ocean",
        },
        {
          name: "typescript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "13",
      name: "Proshop",
      url: "https://proshopapp983.herokuapp.com/",
      description:
        "Ecommerce Web-App with Payment Gateway and Admin Dashboard.",
      languages: [
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "PayPal",
          iconifyClass: "logos-paypal",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Xperience Shopping",
      url: "https://xperience-shopping-app.herokuapp.com/",
      description: "get measurements By scanning body",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "4",
      name: "Business factory nft swag",
      url: "https://nft-swagg.vercel.app/shop3d",
      description: "connect wallet, select nft,  get your swag ready.",
      languages: [
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "nextjs",
          iconifyClass: "logos-nextjs",
        },
        {
          name: "threejs",
          iconifyClass: "logos-threejs",
        },
        {
          name: "API",
          iconifyClass: "mdi:api",
        },
        {
          name: "Crypto",
          iconifyClass: "arcticons:crypto-prices",
        },
        {
          name: "3D Print",
          iconifyClass: "eos-icons:3d-print",
        },
      ],
    },
    {
      id: "5",
      name: "Influencers Marketplace",
      url: "https://inf-marketplace.vercel.app/",
      description:
        "An influencer marketplace is basically an online platform that connects marketers with influencers in similar industries or social channels.",
      languages: [
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "6",
      name: "Meatigo",
      url: "https://meatigo.com/ ",
      description: "Food ordering website.",
      languages: [
        {
          name: "java",
          iconifyClass: "logos-java",
        },
        {
          name: "graphql",
          iconifyClass: "logos-graphql",
        },
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "Razorpay",
          iconifyClass: "simple-icons:razorpay",
        },
        {
          name: "jquery",
          iconifyClass: "simple-icons:jquery",
        },
        {
          name: "apollo client",
          iconifyClass: "logos:apollostack",
        },
      ],
    },
    {
      id: "7",
      name: "MMHS Dashboard",
      url: "https://mmhs-master.vercel.app/",
      description: "A Dashboard using React.js,Mobile App using Flutter.",
      languages: [
        {
          name: "flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "postgresql",
          iconifyClass: "logos-postgresql",
        },
      ],
    },
    {
      id: "8",
      name: "Retroh hunters",
      url: "https://retrohunters.codesymphony.in/",
      description: "Metamask, Twitter API, Invite and Earn, Discord API.",
      languages: [
        {
          name: "Metamask",
          iconifyClass: "logos-metamask",
        },
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "twitter api",
          iconifyClass: "logos-twitter",
        },
        {
          name: "discord api",
          iconifyClass: "logos-discord",
        },
      ],
    },
    {
      id: "9",
      name: "Noob Strom",
      url: "https://noobstorm.vercel.app/",
      description: "Online Gaming Tournament Web App.",
      languages: [
        {
          name: "Nextjs",
          iconifyClass: "logos-nextjs",
        },
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "supabase",
          iconifyClass: "logos-supabase",
        },
        {
          name: "razorpay",
          iconifyClass: "simple-icons:razorpay",
        },
        {
          name: "vercel",
          iconifyClass: "simple-icons:vercel",
        },
      ],
    },
    {
      id: "10",
      name: "Sales Chatz",
      url: "https://chatz.app/",
      description: "Automating Sales & Marketing.",
      languages: [
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "socket-io",
          iconifyClass: "logos-socket-io",
        },
        {
          name: "ManyChat",
          iconifyClass: "bi:chat",
        },
        {
          name: "Facebook Messenger API",
          iconifyClass: "logos-facebook",
        },
      ],
    },
    {
      id: "11",
      name: "Sommly",
      url: "https://sommly.com/",
      description: "Buy Wine Online.",
      languages: [
        {
          name: "nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "mongodb",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "react",
          iconifyClass: "logos-react",
        },
        {
          name: "stripe",
          iconifyClass: "logos-stripe",
        },
        {
          name: "chargebee",
          iconifyClass: "logos-chargebee",
        },
        {
          name: "mapbox",
          iconifyClass: "logos-mapbox",
        },
        {
          name: "docker",
          iconifyClass: "logos-docker",
        },
        {
          name: "github work flows",
          iconifyClass: "logos-github",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
