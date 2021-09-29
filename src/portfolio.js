/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Akshat Jindal",
  logo_name: "Akshat",
  nickname: "@Khali851999",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
        // "Detail-oriented, responsible and committed member with get-it-done, on-time, high-quality product spirit. Skilled in Android Application development, UI/UX Designing, Data Structures and Algorithms in C++ and Java, an analytical user of Git version control, Firebase suite. Have working knowledge of Kotlin, MVVM architecture, Dependancy Injection(Dagger2, Dagger-Hilt), HTML, CSS, JavaScript, REST APIs, Networking (Retrofit). Worked on applications currently on the Google Play store with over 20,000+ downloads and 1500+ Daily Active Users. Worked on team projects as a project lead as well as a freelancer. Developed a few Voice enabled applications for Google Assistant and Amazon Alexa.",
    resumeLink:
    "https://drive.google.com/file/d/1fWG_JQBYyaaNXlavxaI55Ha4euHf2sou/view?usp=sharing",
  portfolio_repository: "https://github.com/Khali851999",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Khali851999",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akshat-jindal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:akshatjindal215@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ak_jindal",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/akshat.jindal.3/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/akshat_jindal//",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready android apps",
        "⚡ Experience of working with MVVM architecture and Dependacy Injection (Dagger2)",
        "⚡ Libraries - Retrofit, Glide, Room, Firebase, Glide",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            backgroundColor: "transparent",
            color: "#339933"
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            backgroundColor: "transparent",
            color: "",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos-kotlin",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS, JS",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/akshatjindal215",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/akshat_jindal0",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/akshat_jindal",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@akshatjindal215",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Delhi Technological University (Formerly Delhi College of Engineering)",
      subtitle: "Bachelors of Technology in Software Engineering",
      logo_path: "dtu.png",
      alt_name: "DTU",
      duration: "2018 - Present",
      descriptions: [
        "Agg. CGPA - 9.00",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Software Testing, Object Oriented Software Design."
      ],
      website_link: "http://dtu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Complete Android Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy.jpeg",
      certificate_link:
        "http://ude.my/UC-CFZVD53I",
      alt_name: "Udemy",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to Web Development",
      subtitle: "UC Davis",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/34JMB74S8LQJ",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "Google Cloud Platform",
      subtitle: "Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/16ba1c99-8b24-4840-af27-d8c5d9648c43",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "University of Maryland",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/b356e9b04958c95487b64d7f5db8c738",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as a Software Development Intern specifically as an Android Developer. I have hands-on experience with MVVM architecture, Google Firebase, Kotlin, JavaScript and other Android libraries like Retrofit, Dagger2, Room, Glide. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Development Intern",
          company: "ShareChat",
          company_url: "https://sharechat.com/",
          logo_path: "sharechat.png",
          duration: "Aug 2021 - Current",
          location: "Banglore, Karnataka",
          description:
            "• Working in the Chat team, implemented virtual gifting option during chatroom sessions which increased the pod revenue by 6%. \n" +
            "• Decreased build time by removing the redundant inter-module dependancies. \n" +
            "• STACK: Jetpack Compose, Kotlin, Retrofit, Hilt",
          color: "#ee3c26",
        },
        {
          title: "Software Development Intern",
          company: "Intuit Inc.",
          company_url: "https://intuit.com/",
          logo_path: "intuit.png",
          duration: "May 2021 - July 2021",
          location: "Gurgaon, Kartnataka",
          description:
            "• Created a UI automation tool in Python that uses WinAppDriver and Selenium to record and playback test cases using JSON conversions. \n" +
            "• Integrated it with the Jenkins CI/CD pipeline. \n" +
            "• Eliminated manual Build Validation and Regression Testing \n" +
            "• Reduced QA testing time by 90%.",
          color: "#ee3c26",
        },
        {
          title: "Software Development Intern",
          company: "Doubtnut",
          company_url: "https://www.doubtnut.com/",
          logo_path: "dn.jpg",
          duration: "Nov 2020 - April 2021",
          location: "Gurgaon, Haryana",
          description:
            "Worked on android app migrating to Razorpay custom SDK and revamp existing checkout flow, reduced total checkout time by roughly 60%. \n" +
            "• Implemented sticky notifications for content enagagement using Firebase Cloud Messaging, improving conversions from 12% to 19%. \n" +
            "• STACK:MVVM, Kotlin, Retrofit, RoomDB, Dagger2",
          color: "#ee3c26",
        },
        {
          title: "Software Development Intern",
          company: "Sproutingwings Digital",
          company_url:
            "https://www.sproutingwingsdigitalmarketing.com/",
          logo_path: "sprout.png",
          duration: "Jan 2020 - March 2020",
          location: "Work From Home",
          description:
            "Created a modularized app automating inter-state receipt/invoice generation, GST filing, transfers at borders and thus removes manual documentation..",
          color: "#0071C5",
        },
        {
          title: "Android Development Intern",
          company: "EazyPG",
          company_url:
            "https://eazypg.in",
          logo_path: "eazypg.png",
          duration: "Aug 2019 - Dec 2019",
          location: "Gurgaon, Delhi",
          description:
            "Leading a team of 4 people, created an Android Application for PG owners and tenants, automating rent collection, daily check-ins, mess management, visitor management. Having 10,000+ downloads on Play Store, 500+ Daily Active Users",
          color: "#0071C5",
        },
        {
          title: "Android Development Intern",
          company: "Groovenexus",
          company_url:
            "https://groovenexus.com",
          logo_path: "groove.jpeg",
          duration: "May 2019 - July 2019",
          location: "Delhi",
          description:
            "Developed an artist management mobile platform to be integrated with the main web portal to ease onboarding of new artists and managing their events, Documented an API related to artist data.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Mentor and Volunteer Experience",
      experiences: [
        {
          title: "Android Lead",
          company: "DSC-DTU",
          company_url: "https://dsc-dtu.github.io/",
          logo_path: "dsc.png",
          duration: "Sept 2020 - Current",
          location: "Delhi",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and Open Source development. The community is available at apidtu on github.",
          color: "#4285F4",
        },
        {
          title: "Founder and Lead",
          company: "HackClub DTU",
          company_url: "https://hackclub.com/",
          logo_path: "hackclub.png",
          duration: "Sept 2020 - Current",
          location: "Delhi",
          description:
            "We have well established developer club in college which is directly associated with HackClub. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and Open Source development. The community is available at apidtu on github.",
          color: "#4285F4",
        },
        {
          title: "Mentor",
          company: "Google Code-In 2019 AnitaB.org",
          company_url: "https://codein.withgoogle.com/archive/",
          logo_path: "gci.png",
          duration: "Nov 2020 - Feb",
          location: "Delhi",
          description:
            "Mentoring pre-university students for Open Source Organisation, AnitaB.org",
          color: "#4285F4",
        },
        {
          title: "Microsoft Learn Student Ambassador",
          company: "Microsoft",
          company_url: "https://studentambassadors.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - Curr",
          location: "Delhi",
          description:
            "Microsoft Learn Student Ambassador is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Campus Ambassador",
          company: "Hackerearth",
          company_url: "https://www.hackerearth.com/",
          logo_path: "hackerearth.png",
          duration: "Jan 2020 - Current",
          location: "Delhi",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people.",
          color: "#000000",
        },
        {
          title: "Coordinator",
          company: "HackOn Hackathon",
          company_url:
            "https://hackon.devfolio.co/",
          logo_path: "hackon.png",
          duration: "March 2019 - April 2020",
          location: "Delhi",
          description:
            "Largest PAN India Hackathon with over 2000+ team registrations",
          color: "#0C9D58",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Android Applications and deploy them to Google Playstore.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "akshat.jpg",
    description:
      "I can help you with Android, Data Structures, Algorithms Cloud, Version Control and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write blogs revolving around new libraries and technologies and how to integrate them in a project",
    link: "https://medium.com/@akshatjindal215",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle:
      "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
