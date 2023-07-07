import React from "react";
import CatalogueCard from "../Micro/Custom/CatalogueCard";
import { FaLaptopCode, FaProductHunt } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiVitest } from "react-icons/si";
import {
  MdOutlineProductionQuantityLimits,
  MdDesignServices,
  MdBusiness,
  MdOutlineDataThresholding,
} from "react-icons/md";

const Catalogue = () => {
  const fullstack = [
    {
      module: "Module 1",
      topics:
        "Introduction to Web Development<br><br>Understanding the basic concepts of web development<br>Learning HTML, CSS, and JavaScript<br>Overview of full-stack web development",
    },
    {
      module: "Module 2",
      topics:
        "Front-end Development<br><br>Introduction to front-end development<br>Understanding the Document Object Model (DOM)<br>Developing responsive and mobile-first websites<br>Introduction to User Interface (UI) and User Experience (UX) design<br>Introduction to popular front-end frameworks like ReactJS, AngularJS, VueJS",
    },
    {
      module: "Module 3",
      topics:
        "Back-end Development<br><br>Introduction to back-end development<br>Understanding server-side programming languages – NodeJS, Ruby on Rails, Python<br>Introduction to Relational Databases (SQL) and Non-Relational Databases (NoSQL)<br>Integrating front-end with back-end using APIs<br>Introduction to Authentication and Authorization",
    },
    {
      module: "Module 4",
      topics:
        "Full-stack Development<br><br>Introduction to full-stack development<br>Developing full-stack applications using MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)<br>Developing full-stack applications using MEAN Stack (MongoDB, ExpressJS, AngularJS, NodeJS)<br>Deploying the application on the cloud",
    },
    {
      module: "Module 5",
      topics:
        "Testing and Debugging<br><br>Understanding the importance of testing and debugging<br>Introduction to testing frameworks – Jest, Mocha, Jasmine<br>Debugging techniques",
    },
    {
      module: "Module 6",
      topics:
        "Project Management<br><br>Introduction to project management methodologies<br>Creating and managing project timelines<br>Agile development methodologies",
    },
    {
      module: "",
      topics:
        "Conclusion<br><br>Recap of skills learned<br>Understanding the future of web development<br>Final project development and presentation.",
    },
  ];

  const productManagement = [
    {
      module: "Module 1",
      topics:
        "Introduction to product management<br><br>Contrast product management with project management<br>Overview of management methodologies<br>Terms in product management<br>Task",
    },
    {
      module: "Module 2",
      topics:
        "The product development process<br><br>Software development lifecycle<br>Road-mapping",
    },
    {
      module: "Module 3",
      topics:
        "Product backlogs and requirement<br><br>Creating backlog prioritization techniques<br>Requirement gathering<br>How to write a requirement document",
    },
    {
      module: "Module 4",
      topics:
        "Wireframing and prototyping<br><br>User flows<br>Types of wireframes<br>Tools for wireframing",
    },
    {
      module: "Module 5",
      topics:
        "Agile methodologies<br><br>Scrum and Kanban<br>Scrum activities and processes: sprints, stand-ups, burndown charts, etc.<br>Task",
    },
    {
      module: "Module 6",
      topics:
        "Launching a product<br><br>Metrics for success. KPIs, OKRs.<br>User acceptability testing<br>Competitor analysis and driving value<br>Task",
    },
    {
      module: "Project",
      topics: "Explanation of the project<br>Project completion",
    },
  ];

  const productDesign = [
    {
      module: "Module 1",
      topics:
        "Introduction to product design<br><br>Prerequisites for product design<br>What is product design<br>Introduction to UX<br>The difference between product design and engineering<br>Skills required for designing<br>Assignment",
    },
    {
      module: "Module 2",
      topics:
        "Product design and development process User Research<br><br>Personas and mapping<br>Design Sprints (Design prototypes and test your ideas with customers, build mockups for your products)<br>Assignment",
    },
    {
      module: "Module 3",
      topics:
        "Validation & Experience Principles<br><br>Hypothesis generation<br>Assignments",
    },
    {
      module: "Module 4",
      topics: "Sketching<br><br>Hypothesis Validation<br>Assignments",
    },
    {
      module: "Module 5",
      topics:
        "Prototyping<br><br>Usability Testing<br>Interpreting customer briefs and converting them to superb designs.<br>Learn how to design landing pages, mobile apps, and dashboard screens.<br>Assignments",
    },
    {
      module: "Module 6",
      topics:
        "Work on real-life case studies and create a design portfolio.<br>Revisions/Projects & Presentations",
    },
  ];

  const dataAnalytics = [
    {
      module: "Module 1",
      topics:
        "Introduction to Data Analytics<br><br>Introduction to data analytics concepts, tools, and techniques<br>Overview of data types and formats<br>Data exploration and visualization with tools like Excel, Tableau, and PowerBI",
    },
    {
      module: "Module 2",
      topics:
        "Data Wrangling and Preparation<br><br>Data cleaning and preprocessing techniques<br>Handling missing data, outliers, and data inconsistencies<br>Working with various file formats, such as CSV, JSON, XML, and SQL databases",
    },
    {
      module: "Module 3",
      topics:
        "Data Analysis with Descriptive Statistics<br><br>Introduction to statistical measures such as mean, median, standard deviation, and variance<br>Descriptive analytics techniques for data analysis, including data aggregation and summarization<br>Interpreting and communicating results to stakeholders",
    },
    {
      module: "Module 4",
      topics:
        "Data Analysis with Inferential Statistics<br><br>Hypothesis testing and confidence intervals<br>Analysis of variance (ANOVA) and regression techniques<br>Statistical analysis using statistical software packages such as R, SAS or Python",
    },
    {
      module: "Module 5",
      topics:
        "Machine Learning for Data Analytics<br><br>Introduction to supervised and unsupervised machine learning techniques<br>Classification and regression algorithms<br>Data mining techniques such as association rule learning and clustering analysis",
    },
    {
      module: "Module 6",
      topics:
        "Applications of Data Analytics<br><br>Business applications of data analytics such as marketing, finance, and operations management<br>Case studies and real-world examples of data analytics in various industries<br>Ethical considerations related to data analytics and data governance best practices",
    },
    {
      module: "",
      topics:
        "Final project: Students will complete an end-to-end data analytics project that includes data collection, wrangling, analysis, and visualization using one of the tools or techniques covered in the curriculum. They will present their findings to the class and receive feedback from the instructor and peers.",
    },
  ];
  const productMarketing = [
    {
      module: "Module 1",
      topics:
        "Introduction to product marketing<br><br>Importance of product marketing to business<br>Difference between good and bad product marketing<br>Responsibilities of a product marketer<br>Task",
    },
    {
      module: "Module 2",
      topics:
        "Understanding the customer lifecycle<br>(reach and awareness, acquisition, and signup, conversion and activation, retention and loyalty)<br>Task",
    },
    {
      module: "Module 3",
      topics:
        "Research - Marketplace, Customers, Competition, and Trends<br><br>Analysis and Evaluation of relevant data<br>Task",
    },
    {
      module: "Module 4",
      topics:
        "Launching a new product<br><br>Internal aspect of a product launch<br>External aspect of a product launch<br>Task",
    },
    {
      module: "Module 5",
      topics:
        "Marketing messaging, channels, and product promotion<br>(B2B product marketing, B2C product marketing, SaaS product marketing)<br>Task",
    },
    {
      module: "Module 6",
      topics:
        "Measuring and analyzing marketing performance<br><br>Data analysis<br>Recognizing and recommending optimization areas<br>Task",
    },
    {
      module: "Module 7",
      topics:
        "Final Project<br><br>Explanation of the project<br>Project completion",
    },
  ];
  const cyberSecurity = [
    {
      module: "Module 1",
      topics:
        "Introduction to Cybersecurity<br><br>Introduction to cybersecurity, types of cybersecurity threats<br>Cybersecurity principles and concepts<br>Understanding the CIA triad (Confidentiality, Integrity, Availability)<br>Cybersecurity best practices<br>Assignment - Write a short paper on the importance of cybersecurity in today's world",
    },
    {
      module: "Module 2",
      topics:
        "Network Security<br><br>Network security fundamentals, network topologies, and protocols<br>Common network attacks and countermeasures<br>Firewalls and intrusion detection systems<br>Virtual private networks (VPNs) and secure sockets layer (SSL)<br>Assignment - Configure a simple network and implement security measures to protect against common network attacks",
    },
    {
      module: "Module 3",
      topics:
        "Cryptography<br><br>Principles and concepts<br>Types of encryption algorithms and their uses<br>Key management and distribution<br>Public key infrastructure (PKI) and digital certificates<br>Assignment - Implement encryption and decryption algorithms using a programming language of your choice",
    },
    {
      module: "Module 4",
      topics:
        "Operating System Security<br><br>Operating system security concepts<br>User and group permissions<br>Malware and antivirus software<br>Host-based intrusion detection and prevention systems<br>Assignment - Install a virtual machine and configure security settings to protect against common operating system attacks",
    },
    {
      module: "Module 5",
      topics:
        "Web Security<br><br>Web security principles and concepts<br>Web application vulnerabilities<br>Cross-site scripting (XSS) and SQL injection attacks<br>Web application firewalls (WAFs) and secure coding practices<br>Assignment - Implement a web application and test for vulnerabilities using penetration testing techniques",
    },
    {
      module: "Module 6",
      topics:
        "Cybersecurity Management and Ethics<br><br>Cybersecurity management frameworks<br>Incident response and disaster recovery<br>Business continuity planning<br>Ethical and legal considerations in cybersecurity<br>Major Project - Develop a comprehensive cybersecurity plan for a fictional company or organization, including risk assessment, vulnerability analysis, and implementation of security measures. Present the plan to the class and receive feedback.",
    },
  ];

  const businessAnalysis = [
    {
      module: "Module 1",
      topics: "Business Analysis Fundamentals<br>Business Analysis Planning",
    },
    {
      module: "Module 2",
      topics:
        "Requirements Elicitation and Analysis<br>Elicitation Techniques<br>Introduction to Strategy",
    },
    {
      module: "Module 3",
      topics:
        "Requirement Documentations<br>Epic and User Stories<br>Types of Classifications of Requirements and Designs",
    },
    {
      module: "Module 4",
      topics:
        "MS Visio, Lucid Chart, JIRA, Miro Walkthrough<br>Visual process flow diagram and process mapping",
    },
    {
      module: "Module 5",
      topics: "Wireframes and Prototyping<br>User Acceptance Testing",
    },
    {
      module: "Module 6",
      topics:
        "Software Development Lifecycle (SDLC)<br>Waterfall vs Agile (Scrum)<br>Starting a Project – Business Case Analysis and Development",
    },
  ];

  const customerService = [
    {
      module: "Module 1",
      topics:
        "Introduction to customer service<br>The tenet of customer service (empathy, active listening, quality of customer interaction)<br>Task",
    },
    {
      module: "Module 2",
      topics:
        "The visual play of poor customer service<br>Class highlights from the video (student-centered learning)<br>Tutor reiteration<br>Task",
    },
    {
      module: "Module 3",
      topics:
        "The visual play of excellent customer service<br>Comparison of customer success and customer support<br>Similarities and differences between CS & CS<br>Reiteration<br>Task",
    },
    {
      module: "Module 4",
      topics:
        "Discourse on customer success<br>Customer success as proactive customer service (explanation)<br>Customer success role in startups, multinationals, and SMEs businesses<br>Elements of customer service in Sales (onboarding, follow-ups, and after-interaction service)<br>The unifying factor in customer success",
    },
    {
      module: "Module 5",
      topics:
        "Top KPI Parameters in customer success<br>How to ace them to ensure business growth and success (quality, customer survey, and engagement, customer retention)",
    },
    {
      module: "Module 6",
      topics:
        "Recap/summarization<br>Career projection for customer success specialist<br>How to ace interview questions",
    },
  ];
  const qualityAssurance = [
    {
      module: "Module 1",
      topics:
        "Introduction to Quality Assurance<br>Understanding the role of Quality Assurance in the software development life cycle<br>Overview of QA processes and methodologies<br>Creating quality plans and test strategies",
    },
    {
      module: "Module 2",
      topics:
        "Test Planning and Management<br>Defining test objectives and metrics<br>Creating test plans and test cases<br>Test estimation and resource allocation<br>Test management tools and processes",
    },
    {
      module: "Module 3",
      topics:
        "Functional Testing<br>Understanding functional requirements and use cases<br>Test design techniques for functional testing<br>Test execution, defect logging, and tracking<br>Test automation tools and frameworks",
    },
    {
      module: "Module 4",
      topics:
        "Performance Testing<br>Introduction to performance testing, load testing, and stress testing<br>Performance testing tools and frameworks<br>Analyzing and interpreting performance metrics<br>Optimizing performance through load balancing and caching",
    },
    {
      module: "Module 5",
      topics:
        "Security Testing<br>Introduction to security testing and vulnerability assessment<br>Security testing tools and techniques<br>Exploratory testing for security vulnerabilities<br>Penetration testing and ethical hacking",
    },
    {
      module: "Module 6",
      topics:
        "Test Process Improvement and Reporting<br>Continual improvement of the QA process<br>Root cause analysis and defect prevention<br>Measurements and quantification of test effectiveness<br>Test reporting and metrics for management visibility",
    },
  ];

  const noCode = [
    {
      module: "Module 1",
      topics:
        "Introduction to No-Code Application Development:\nUnderstanding the basics of no-code application development\nBenefits and limitations of no-code application development\nCurrent Trends and future possibilities in no-code application Development",
    },
    {
      module: "Module 2",
      topics:
        "Tools and Platforms for No-Code Application Development:\nOverview of popular no-code platforms and tools\nComparing the features of different no-code platforms and tools\nChoosing the right platform for a specific application development project",
    },
    {
      module: "Module 3",
      topics:
        "Designing No-Code Applications:\nUnderstanding UI and UX design for no-code applications\nBest practices for designing user-friendly and effective applications\nDesign patterns for no-code applications",
    },
    {
      module: "Module 4",
      topics:
        "Building No-Code Applications:\nCreating data models for no-code applications\nBuilding functional components (e.g., forms, tables, charts) using no-code platforms and tools\nIntegrating external data sources and APIs with no-code applications",
    },
    {
      module: "Module 5",
      topics:
        "Testing and Deployment of No-Code Applications:\nTesting and fixing bugs in no-code applications\nSetting up hosting and deployment options for no-code applications\nScaling a no-code application and handling performance issues",
    },
    {
      module: "Module 6",
      topics:
        "Advanced Topics in No-Code Application Development:\nWorking with AI and machine learning in no-code platforms\nBuilding mobile applications using no-code platforms\nCollaborative development in no-code applications",
    },
    {
      module: "Module 7",
      topics:
        "Case Studies and Projects:\nHands-on projects using no-code platforms and tools\nAnalyzing successful no-code application examples\nDeveloping a no-code application from start to finish",
    },
    {
      module: "Module 8",
      topics:
        "Conclusion and Future of No-Code Application Development:\nKey takeaways and lessons learned\nFuture trends in no-code application development\nCareer paths and opportunities in no-code application development.",
    },
  ];
  const backendWebDevelopment = [
    {
      module: "Module 1",
      topics:
        "Introduction to Backend Web Development<br>Introduction to backend programming languages (Python, Java, PHP, etc.)<br>Introduction to backend frameworks (Django, Spring, Laravel, etc.)<br>Setting up a local development environment<br>Building a simple backend API using a chosen framework<br><br>Mini Project: Create an API for a simple to-do list application",
    },
    {
      module: "Module 2",
      topics:
        "Working with Databases<br>Introduction to databases (SQL and NoSQL)<br>SQL queries and database design principles<br>ORM (Object-Relational Mapping) frameworks (e.g., Django ORM, Hibernate)<br>Connecting the backend API to a database<br><br>Mini Project: Design and implement a backend API to manage users and their information",
    },
    {
      module: "Module 3",
      topics:
        "User Authentication and Authorization<br>Introduction to Authentication and authorization concepts<br>Building a secure login system<br>Working with password hashing and encryption<br>Implementing access control and permissions<br><br>Mini Project: Add authentication and authorization to the previous user management API",
    },
    {
      module: "Module 4",
      topics:
        "RESTful APIs and Web Services<br>Understanding RESTful architecture principles<br>Working with HTTP methods (GET, POST, PUT, DELETE)<br>Consuming external APIs using HTTP libraries (e.g., requests in Python)<br>Handling and validating API requests and responses<br><br>Mini Project: Build a RESTful API backend for a simple online store application",
    },
    {
      module: "Module 5",
      topics:
        "Testing and Deployment<br>Introduction to testing (unit tests, integration tests, etc.)<br>Writing test cases for backend APIs<br>Continuous Integration and Continuous Deployment (CI/CD)<br>Deploying a backend API to a cloud platform (e.g., Heroku, AWS)<br><br>Mini Project: Deploy the online store API on a cloud platform and implement test cases",
    },
    {
      module: "Module 6",
      topics:
        "Mini Project: Develop a final capstone project demonstrating advanced backend web development skills. This could be a blog platform, social media application, or an e-commerce website.",
    },
    {
      module: "Final Assessment",
      topics:
        "Final assessment: Capstone Project<br>Design and implement a full-stack web application from scratch<br>Use all the concepts and technologies learned throughout the course<br>Develop a user-friendly frontend interface using modern frontend frameworks (e.g., React, Angular)<br>Implement the backend API with proper authentication, authorization, and database integration",
    },
  ];

  const communityManagement = [
    {
      module: "Module 1",
      topics:
        "Introduction to Intermediate Community Management<br>Understand the role and responsibilities of a community manager in various settings<br>Explore advanced community management strategies and techniques<br><br>Mini Project: Analyze and evaluate an existing online community, identify areas for improvement, and propose solutions.",
    },
    {
      module: "Module 2",
      topics:
        "Engagement Strategies and Techniques<br>Learn effective ways to build and foster relationships within the community<br>Understand the importance of communication and active listening<br><br>Mini Project: Develop a plan to engage and motivate community members, including discussion topics, contests, and rewards.",
    },
    {
      module: "Module 3",
      topics:
        "Crisis Management and Conflict Resolution<br>Identify potential crises and develop a crisis management plan<br>Learn techniques to handle conflicts and difficult community members<br><br>Mini Project: Simulate a crisis scenario and create a step-by-step action plan to handle it, including communication strategies and escalation processes.",
    },
    {
      module: "Module 4",
      topics:
        "Analytics and Metrics for Community Management<br>Explore different analytics tools and platforms to measure community growth and engagement<br>Understand key metrics and how to use them to improve community performance<br><br>Mini Project: Analyze the community's metrics, identify trends and patterns, and propose strategies for improvement based on the data.",
    },
    {
      module: "Module 5",
      topics:
        "Community Health and Moderation<br>Understand the importance of maintaining a healthy and inclusive community environment<br>Learn moderation techniques and tools to enforce community guidelines<br><br>Mini Project: Create a comprehensive moderation policy and set up a moderation workflow to ensure a safe and welcoming community.",
    },
    {
      module: "Module 6",
      topics:
        "Capstone Project - Strategic Community Management Plan<br>Apply all the knowledge and skills acquired during the course to develop a comprehensive community management plan<br>Address challenges, set goals, and implement strategies to enhance the community's growth and engagement",
    },
    {
      module: "Final Assessment",
      topics:
        "Final Capstone Project: Develop a strategic community management plan for a real or hypothetical community, including a detailed timeline, objectives, and metrics to evaluate success.",
    },
  ];

  const brandStorytelling = [
    {
      module: "Module 1",
      topics:
        "Introduction to Brand Storytelling & Content<br>Overview of brand storytelling and its importance in marketing<br>Understanding the different elements of a brand story<br>Analyzing successful brand storytelling examples<br><br>Mini project: Analyze and discuss a brand story of your choice",
    },
    {
      module: "Module 2",
      topics:
        "Crafting a Brand Narrative<br>Identifying key brand characteristics and values<br>Defining a target audience for your brand<br>Creating a compelling brand narrative<br><br>Mini project: Develop a brand narrative for a fictional or existing brand",
    },
    {
      module: "Module 3",
      topics:
        "Creating Engaging Content<br>Identifying different types of content suitable for brand storytelling<br>Techniques for creating emotional connections through content<br>Incorporating storytelling principles into content creation<br><br>Mini project: Produce a piece of content (blog post, video, social media post) that tells a brand story",
    },
    {
      module: "Module 4",
      topics:
        "Amplifying Brand Stories through Social Media<br>Understanding the role of social media in brand storytelling<br>Strategies for creating shareable and engaging social media content<br>Utilizing various social media platforms to reach target audiences<br><br>Mini project: Design a social media campaign that tells a brand story effectively",
    },
    {
      module: "Module 5",
      topics:
        "Measuring and Analyzing Brand Storytelling Success<br>Metrics and tools for measuring the impact of brand storytelling<br>Analyzing data to make informed decisions for future campaigns<br>A/B testing and optimizing brand stories for better performance<br><br>Mini project: Analyze the success of a brand storytelling campaign using available data",
    },
    {
      module: "Module 6",
      topics:
        "Creating a Brand Storytelling Campaign<br>Students will apply the knowledge gained throughout the course to develop a comprehensive brand storytelling campaign<br>Planning and implementing a multi-channel brand storytelling strategy<br>Incorporating feedback and iteration into the campaign",
    },
    {
      module: "Final Assessment",
      topics:
        "Final Capstone Project: Create a brand storytelling campaign for a real or fictional brand, including content creation, social media integration, and performance measurement.",
    },
  ];

  const frontend = [
    {
      module: "Module 1",
      topics: "HTML and CSS Fundamentals<br>Introduction to HTML and CSS concepts<br>Structure and semantic HTML<br>CSS styling and positioning<br><br>Mini Project: Creating a personal portfolio website using HTML and CSS",
    },
    {
      module: "Module 2",
      topics: "Responsive Design and Media Queries<br>Understanding responsive design principles<br>Media queries for different device sizes<br>Setting up a responsive layout using CSS Grid or Flexbox<br><br>Mini Project: Develop a responsive landing page for a fictional product",
    },
    {
      module: "Module 3",
      topics: "JavaScript Basics<br>Introduction to JavaScript syntax and variables<br>Conditional statements and loops<br>Functions and event handling<br><br>Mini Project: Building a simple interactive calculator using JavaScript",
    },
    {
      module: "Module 4",
      topics: "DOM Manipulation and Advanced JavaScript<br>Exploring the Document Object Model (DOM)<br>Manipulating elements using JavaScript<br>Working with forms and input validation<br><br>Mini Project: Creating a todo list application with dynamic content manipulation",
    },
    {
      module: "Module 5",
      topics: "Front-end Frameworks (e.g., React or Vue)<br>Understanding the basics of a front-end framework<br>Setting up and configuring a React or Vue project<br>Component-based development and state management<br><br>Mini Project: Building a simple web application using React or Vue",
    },
    {
      module: "Module 6",
      topics: "API Integration and Final Capstone Project<br>Retrieving data from APIs using JavaScript<br>Working with JSON data and API endpoints",
    },
    {
      module: "Final Assessment",
      topics: "Final assessment: Develop a fully functional web application incorporating previous learning, such as responsive design, DOM manipulation, and API integration.",
    },
  ];
  
  const digitalMarketing = [
    {
      module: "Module 1",
      topics: "Introduction to Digital Marketing<br> Introduction to digital marketing concepts and terminology<br>Overview of digital marketing channels (search engine marketing, social media marketing, email marketing, etc.)<br><br>Mini Project: Create a digital marketing strategy for a fictional business of your choice",
    },
    {
      module: "Module 2",
      topics: "Search Engine Optimization (SEO)<br>Understanding the importance of SEO in digital marketing<br>Keyword research and analysis<br>On-page and off-page optimization techniques<br><br>Mini Project: Optimize a website for better search engine visibility",
    },
    {
      module: "Module 3",
      topics: "Social Media Marketing<br>Exploring major social media platforms for marketing<br>Creating engaging social media content<br>Understanding social media analytics and insights<br><br>Mini Project: Develop a social media content calendar for a fictional brand",
    },
    {
      module: "Module 4",
      topics: "Pay-Per-Click (PPC) Advertising<br>Introduction to PPC advertising and its benefits<br>Setting up and managing Google/Facebook/Instagram Ads campaigns<br>Keyword targeting, ad creation, and budgeting<br><br>Mini Project: Create and manage a simple Google & Facebook Ads campaign for a fictional business",
    },
    {
      module: "Module 5",
      topics: "Email Marketing and Automation<br>Designing effective email marketing campaigns<br>Building and growing subscriber lists<br>Implementing email automation workflows<br><br>Mini Project: Create an email marketing campaign for a specific customer segment",
    },
    {
      module: "Module 6",
      topics: "Analytics and Reporting<br>Introduction to digital marketing analytics tools<br>Analyzing campaign performance and optimizing strategies<br>Reporting on key performance indicators (KPIs)<br><br>Mini Project: Analyze a set of digital marketing data and present actionable insights",
    },
    {
      module: "Final Assessment",
      topics: "Final Capstone Project: Apply all the knowledge gained throughout the course to develop a comprehensive digital marketing strategy for a real-world business. This project should include elements of SEO, PPC advertising, social media marketing, email marketing, and analytics. Students will present their strategies and insights to the class.",
    },
  ];
  
  return (
    <section className="text-white container mx-auto md:px-10 px-5 lg:pt-40 pt-16">
      <div className="text-center flex flex-col">
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-semibold">
          Explore Our Course Catalogue
        </h1>
        <p className="text-lg text-Darkgray py-4">
          Discover talent training programs to help grow your career.
        </p>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-10">
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Full-Stack Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={fullstack}
            name="Full-Stack Web Development"
          />
          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Frontend Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={frontend}
            name="Frontend Web Development"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="Backend Web Development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={backendWebDevelopment}
            name="Backend Web Development"
          />
          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Product Design"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productDesign}
            name="Product Design "
          />
          <CatalogueCard
            icon={<MdOutlineProductionQuantityLimits />}
            heading="Product Marketing"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productMarketing}
            name="Product Marketing"
          />
          <CatalogueCard
            icon={<FaProductHunt />}
            heading="Product Management"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={productManagement}
            name="Product Management"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Community Management "
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={communityManagement}
            name="Community Management "
          />

          <CatalogueCard
            icon={<MdDesignServices />}
            heading="Brand Storytelling"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={brandStorytelling}
            name="Brand Storytelling and Content Writing "
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Digital Marketing"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={digitalMarketing}
            name="Digital Marketing"
          />
          <CatalogueCard
            icon={<MdOutlineDataThresholding />}
            heading="Data Analytics"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={dataAnalytics}
            name="Data Analytics"
          />
          <CatalogueCard
            icon={<MdBusiness />}
            heading="Business Analysis"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={businessAnalysis}
            name="Business Analysis"
          />
          <CatalogueCard
            icon={<RiCustomerService2Fill />}
            heading="Customer Success "
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={customerService}
            name="Customer Success"
          />

          <CatalogueCard
            icon={<GiCyberEye />}
            heading="Cyber Security"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={cyberSecurity}
            name="Cyber Security"
          />

          <CatalogueCard
            icon={<FaLaptopCode />}
            heading="No-code development"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={noCode}
            name="No-code development"
          />
          <CatalogueCard
            icon={<SiVitest />}
            heading="Quality Assurance"
            service="Ease your recruitment process with our human resource team designed to vet and provide the best fit from our tech talents."
            data={qualityAssurance}
            name="Quality Assurance"
          />
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
