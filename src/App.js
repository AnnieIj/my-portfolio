import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <nav className="flex justify-between items-center p-5 bg-gray-300 dark:bg-gray-800 shadow-lg">
          <h1 className="text-xl font-bold">Ijeoma Annie</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </nav>

        {/* Hero Section */}
        <section className="text-center p-10">
          <motion.h1 className="text-4xl font-bold" animate={{ scale: 1.1 }}>Frontend Developer & Data Analyst</motion.h1>
          <p className="text-lg mt-3">Passionate about building modern web experiences and analyzing data.</p>
        </section>

        {/* About Section */}

    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-5 my-5 text-center"
    >
      <h2 className="text-2xl font-bold">About Me</h2>

      {/* Profile Picture with Hover Effect */}
      <motion.div
        className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-400 dark:border-gray-600 shadow-lg mt-5"
        whileHover={{ scale: 1.1 }}
      >
        {/* Default Image */}
        <img
          src="IMG-20230830-WA0002.jpg"
          alt="Ijeoma Annie"
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Hover Image */}
        <motion.img
          src="your-hover-image.jpg"
          alt="Profile Hover"
          className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>

      {/* About Me Text */}
      <p className="text-justify mt-5">
        My name is <strong>IJEOMA ANNIE</strong>. I am a passionate Frontend Developer and Data Analyst based in Kaduna, Nigeria. With a strong background in web development and data analytics, I help businesses and individuals 
        build interactive websites and extract valuable insights from data.
      </p>
      <p className="text-justify mt-3">
        I have experience working with JavaScript, React, Python, SQL, Power BI, and Excel. My goal is to bridge the gap between design and functionality, creating seamless and visually appealing user experiences. 
      </p>
      <p className="text-justify mt-3">
        In addition to development, I am also passionate about mentoring and teaching others about tech and data analytics.
        I believe that knowledge should be shared, and I actively contribute to educating young professionals and students in the field.
      </p>

      {/* Resume Download Button */}
      <div className="text-center mt-5">
        <a 
          href="your-resume.pdf" 
          download 
          className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Download My Resume
        </a>
      </div>
    </motion.section>



        {/* Skills Section */}
        <section className="p-10 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg mx-5 my-5">
          <h2 className="text-2xl font-bold text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            {['JavaScript', 'React', 'Tailwind CSS', 'Excel', 'CSS', 'Python', 'Power BI', 'SQL'].map(skill => (
              <span key={skill} className="bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded-full font-semibold">{skill}</span>
            ))}
          </div>
        </section>

     {/* Projects Section */}
     
     {/* Projects Section */}
<motion.section 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="p-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-5 my-5"
>
  <h2 className="text-2xl font-bold text-center">Projects</h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
    {/* Project 1 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Chore Tracker App</h3>
      <p className="text-justify mt-2">A web app designed for kids to track daily chores with rewards.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 2 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Data Analysis Dashboard</h3>
      <p className="text-justify mt-2">An interactive Power BI dashboard for tracking business sales performance.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 3 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">E-commerce Website</h3>
      <p className="text-justify mt-2">A fully responsive online store built with React and Firebase.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 4 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Portfolio Website</h3>
      <p className="text-justify mt-2">A personal portfolio showcasing my work and skills.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 5 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Expense Tracker</h3>
      <p className="text-justify mt-2">A budgeting app that helps users track income and expenses.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 6 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">AI-Powered Chatbot</h3>
      <p className="text-justify mt-2">A chatbot integrated with OpenAI’s GPT API for automated responses.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 7 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Learning Management System</h3>
      <p className="text-justify mt-2">A web platform for online courses, quizzes, and certifications.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 8 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Online Job Portal</h3>
      <p className="text-justify mt-2">A recruitment platform for job seekers and employers.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>

    {/* Project 9 */}
    <div className="p-5 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Health & Fitness Tracker</h3>
      <p className="text-justify mt-2">A mobile-friendly app to track workouts, meals, and wellness goals.</p>
      <a href="#" className="text-blue-500 dark:text-blue-300 underline mt-2 block">View Project</a>
    </div>
  </div>
</motion.section>



<section className="p-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-5 my-5">
  <h2 className="text-2xl font-bold text-center">Testimonials</h2>
  <p className="text-center mt-3 italic">"Ijeoma is an exceptional developer! Her designs are top-notch, and she delivers on time." - John Doe</p>
  <p className="text-center mt-3 italic">"Her data analysis skills helped our company grow. Highly recommended!" - Jane Smith</p>
</section>




        {/* Contact Section */}
        <section className="p-10 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg mx-5 my-5 text-center">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p className="text-center mt-3">Let's connect! You can reach out to me via email or follow me on my social media handles.</p>
          <div className="flex justify-center gap-4 mt-5">
            <a href="git@github.com:AnnieIj" className="text-xl"><FaGithub /></a>
            <a href="#" className="text-xl"><FaLinkedin /></a>
            <a href="#" className="text-xl"><FaFacebook /></a>
            <a href="#" className="text-xl"><FaInstagram /></a>
            <a href="#" className="text-xl"><FaEnvelope /></a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center p-5 bg-gray-300 dark:bg-gray-800">
          <p>&copy; {new Date().getFullYear()} Ijeoma Annie | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
