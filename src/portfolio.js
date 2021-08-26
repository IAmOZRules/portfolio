/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Shreyaans",
  logo_name: "SN",
  nickname: "iamoz / iamozrules",
  full_name: "Shreyaans Nahata",
  subTitle:
    "Python | Frontend Developer 🧑‍💻. Always looking to take my skills to the next level 🚀",
  resumeLink:
    "https://drive.google.com/file/d/1n_sFSLlGqJmAZuDb8fWXxAswPEjwPi1X/view?usp=sharing",
  mail: "mailto:iamozrules@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/IAmOZRules",
  linkedin: "https://www.linkedin.com/in/iamozrules",
  gmail: "iamozrules@gmail.com",
};

const skills = {
  data: [
    {
      title: "My Tech Stack",
      fileName: "FullStackImg",
      skills: [
        "🕸️ Building responsive and interactive websites using ReactJS/HTML",
        "🤖 Scripting and Automating tasks using Python",
        "🚄 Creating application backends in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
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
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
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
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
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
          skillName: "MaterialUI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#0081CB",
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
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
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
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "🤖 Experience working with Chatbots (custom and third party APIs)",
        "Ⓜ️ Knowledge of various Machine Learning techniques",
      ],
      softwareSkills: [
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#19C3E6",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#3A17E8",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#5C3EE8",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4C2C",
          },
        },
        {
          skillName: "DialogFlow",
          fontAwesomeClassname: "simple-icons:dialogflow",
          style: {
            color: "#FF9800",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology, Vellore",
      subtitle: "B. Tech in Computer Science and Engineering",
      logo_path: "vit.png",
      alt_name: "VIT",
      duration: "Jul 2019 - Present",
      descriptions: [
        "⚡ Studied core Computer Science courses such as DSA, OS, DBMS, Networking, etc.",
        "⚡ Member of the VIT Linux User's Group",
        "⚡ Member of The Otaku Club of VIT",
        "⚡ Current GPA: 8.92/10",
      ],
      website_link: "http://www.vit.ac.in/",
    },
    {
      title: "Indian Institute of Technology, Madras",
      subtitle: "Diploma in Programming and Data Science",
      logo_path: "iitm.png",
      alt_name: "IITM",
      duration: "Jan 2021 - Present",
      descriptions: [
        "⚡ Studied core Data Science courses such as Business Analytics and Business Data Management, etc.",
        "⚡ Member of The Namdhapa House",
        "⚡ Current GPA: 7.8/10",
      ],
      website_link: "https://www.iitm.ac.in/",
    },
    {
      title: "Royale Concorde International School, Bangalore",
      subtitle: "12th Grade - High School",
      logo_path: "rcis.png",
      alt_name: "RCIS",
      duration: "Apr 2017 - May 2019",
      descriptions: ["⚡ Studied PCM + Biology", "⚡ Percentage: 91.6%"],
      website_link: "https://www.rcis.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.svg",
      certificate_link:
        "https://drive.google.com/file/d/1W_vnb10T7kVIYQRc6qhpfJntLP_WIhkt/view?usp=sharing",
      alt_name: "Amazon Web Services",
      color_code: "#232F3E",
    },
    {
      title: "Open Source Software Development, Linux and Git Specialization",
      subtitle: "Coursera Specialization (4 courses)",
      logo_path: "linux.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/VV62TAADQSL7",
      alt_name: "OSSD",
      color_code: "#FCC624",
    },
    {
      title: "Crash Course on Python",
      subtitle: "Coursera - Google IT Automation Specialization",
      logo_path: "python.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7SD9R7J39X8E",
      alt_name: "ITA01",
      color_code: "#3776AB",
    },
    {
      title: "Using Python to Interact with the Operating System",
      subtitle: "Coursera - Google IT Automation Specialization",
      logo_path: "coursera.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9VYRVHSEEYPL",
      alt_name: "ITA02",
      color_code: "#0056D2",
    },
    {
      title: "Introduction to Git and GitHub",
      subtitle: "Coursera - Google IT Automation Specialization",
      logo_path: "github.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/9E3FNPEMK4K6",
      alt_name: "ITA03",
      color_code: "gray",
    },
    {
      title: "Learn Artificial Neural Network From Scratch in Python",
      subtitle: "Udemy Course",
      logo_path: "tensorflow.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-761a5756-0456-4d7c-9e0d-30adc8f3c793/",
      alt_name: "ANN",
      color_code: "#FF6F00",
    },
    {
      title: "Python-Introduction to Data Science and Machine learning A-Z",
      subtitle: "Udemy Course",
      logo_path: "pandas.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8ebb8def-71a9-4b07-9bf1-df44e31434dd/",
      alt_name: "ML-DS",
      color_code: "green",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Coursera - Python for Everybody Specialization",
      logo_path: "python.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/H3BNS9WKSPU2",
      alt_name: "PES01",
      color_code: "#3776AB",
    },
    {
      title: "Python Data Structures",
      subtitle: "Coursera - Python for Everybody Specialization",
      logo_path: "python.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/XAHNFMZT84SP",
      alt_name: "PES01",
      color_code: "#A100FF",
    },
    {
      title: "Python And Flask Framework Complete Course",
      subtitle: "Udemy Course",
      logo_path: "flask.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7be153b1-efe7-4bc4-b729-d28823f00823/",
      alt_name: "Flask",
      color_code: "#BBBBBB",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          id: 1,
          title: "Cyber Security (Intern)",
          company: "Verzeo",
          company_github: "https://www.verzeo.com/",
          logo_path: "verzeo.jpg",
          duration: "Jun 2020 - Aug 2020",
          location: "Work From Home",
          description:
            "Attended training to build understanding of various security techniques and industry. Studied methods of preventing and mitigating various types of security related issues. Studied functional relationships between different operational areas to better understand importance and impact of different decisions and protocols. Applied acquired training skills on a term end project.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Extracurricular",
      experiences: [
        {
          id: 2,
          title: "Event Organizer",
          company: "The Otaku Club",
          company_github: "https://vit.ac.in/campus/Clubs/Arts%26Cultural",
          logo_path: "toc.jpg",
          duration: "Jun 2021",
          location: "Work From Home",
          description: 'Organized the event "Fun in the Blanks!" for the club.',
          color: "#4285F4",
        },
        {
          id: 3,
          title: "Part of the Recruitment Panel",
          company: "The Otaku Club",
          company_github: "https://vit.ac.in/campus/Clubs/Arts%26Cultural",
          logo_path: "toc.jpg",
          duration: "Oct 2020",
          location: "Work from Home",
          description: "Part of the 2020 Club Recruitments Panel.",
          color: "#196acf",
        },
        {
          id: 4,
          title: "GitHub Student Developer",
          company: "GitHub",
          company_github: "https://github.com/",
          logo_path: "github.png",
          duration: "Apr 2020 - Present",
          location: "Work from Home",
          description:
            "Contributing to the Open Source Community and Open Source Projects.",
          color: "#040f26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. I have the most experience with Python Scripts and React Frontend Projects. Below are some of my projects. Note that not all of the mentioned projects are hosted.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "1",
      name: "PyBot",
      github: "https://github.com/IAmOZRules/PyBot",
      description:
        "A contextual chatbot made using Python and PyTorch using the NLTK Library for Python. The underlying model was converted into an API using Django with a frontend in ReactJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos-pytorch",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "2",
      name: "ReactFlow",
      github: "https://github.com/IAmOZRules/ReactFlow",
      demo: "https://reactflow-bot.herokuapp.com/",
      description:
        "A chatbot made using ReactJS, NodeJS, ExpressJS and Google's DialogFlow. Can be easily integrated into any project.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "DialogFlow",
          iconifyClass: "logos-dialogflow",
        },
      ],
    },
    {
      id: "3",
      name: "MERN Journal",
      github: "https://github.com/IAmOZRules/MERN-Journal-Frontend",
      demo: "https://mern-journal.vercel.app/",
      description:
        "A MERN Journal app with authentication, ability to like and delete posts made using MERN (+ Redux, MaterialUI).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "MaterialUI",
          iconifyClass: "logos-material-ui",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
      ],
    },
    {
      id: "4",
      name: "PharmaVIT",
      github: "https://github.com/IAmOZRules/Pharmacy-Management-System",
      description:
        "A Hospital Management System with loads of functionality made using HTML, CSS, BootStrap, NodeJS, ExpressJS and MySQL.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "5",
      name: "Atheneum",
      github: "https://github.com/IAmOZRules/Atheneum",
      description:
        "A Library Management System made using Python, MySQL and PyQt5.",
      languages: [
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Qt",
          iconifyClass: "logos-qt",
        },
      ],
    },
    {
      id: "6",
      name: "Telegraph",
      github: "https://github.com/IAmOZRules/Telegraph",
      description:
        "An email client written in Java using JavaFX, FXML (using SceneBuilder) and Java Mail client. Uses multithreading to keep the application running in case of any errors.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "7",
      name: "Network Packet Sniffer",
      github: "https://github.com/IAmOZRules/Network-Packet-Sniffer",
      description:
        "A bare bones network packet sniffer written in Python that runs only on Linux due to certain restrictions of Window. It stores the captured data in a file for future analysis.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Linux",
          iconifyClass: "simple-icons:linux",
        },
        {
          name: "Wireshark",
          iconifyClass: "simple-icons:wireshark",
        },
      ],
    },
    {
      id: "8",
      name: "PurpleCart",
      github: "https://github.com/IAmOZRules/PurpleCart",
      demo: "https://purple-cart.vercel.app/",
      description:
        "A mock shopping cart app made to try out TypeScript and MaterialUI. This website is fully responsive, and the item data is taken from the Fake Store API.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MaterialUI",
          iconifyClass: "simple-icons:material-ui",
        },
      ],
    },
    {
      id: "9",
      name: "Kuizu",
      github: "https://github.com/IAmOZRules/Kuizu",
      demo: "https://react-ts-quiz-nu.vercel.app/",
      description:
        "An Anime Quiz App made using React and TypeScript. The questions are fetched using the Open Trivia DB API.",
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "vscode-icons:file-type-typescript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "10",
      name: "PySnek",
      github: "https://github.com/IAmOZRules/PySnek",
      description:
        "A Snake Game AI made in PyGame that teaches itself to play using Reinforcement Learning with PyTorch.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos-pytorch",
        },
        {
          name: "Numpy",
          iconifyClass: "logos-numpy",
        },
      ],
    },
    {
      id: "11",
      name: "MKVTools",
      github: "https://github.com/IAmOZRules/MKVTools",
      description:
        "A Python script that fetches series information from IMDb using the IMDb Code. It can be used to rename episode videos, subtitles and MKV video tags. Uses the MKVToolNix CLI as well.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Gesture Volume Controller",
      github: "https://github.com/IAmOZRules/Gesture-Volume-Changer",
      description:
        "A Python program that lets you change Master Volume using hand gestures. Uses OpenCV and Mediapipe packages for Python.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
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
