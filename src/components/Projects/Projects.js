import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tailwind from "../../Assets/Projects/tailwindcss.png";
import WebScraping from "../../Assets/Projects/WebScraping.png";
import native from "../../Assets/Projects/native.png";
import naruto from "../../Assets/Projects/naruto.jpg";
import js from "../../Assets/Projects/js.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Learnings </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Learning I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={native}
              isBlog={false}
              title="React-Native"
              description="
React Native is a popular open-source framework for building cross-platform mobile applications using JavaScript and React. It allows developers to create high-quality, native-like experiences for both iOS and Android platforms. With its extensive library and community support, React Native streamlines the app development process, making it efficient and cost-effective for businesses and developers. Its flexibility, performance, and ease of use have contributed to its widespread adoption in the mobile app development industry.




"
              ghLink="https://github.com/MuditDargar/React-native-"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={js}
              isBlog={false}
              title="React-Js"
              description="React.js, developed by Facebook, is a powerful JavaScript library for building dynamic and interactive user interfaces. It enables developers to create reusable UI components, ensuring efficient and organized development. React's virtual DOM optimizes rendering, enhancing performance by updating only the necessary components. Its component-based architecture and unidirectional data flow simplify complex UIs, promoting code reusability and maintainability. React also supports server-side rendering , making it versatile for building high-performing web applications, single-page apps, and mobile applications."
              ghLink="https://github.com/MuditDargar/React-js-learning"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScraping}
              isBlog={false}
              title="Web-Scraping"
              description="Web scraping is the automated process of extracting data from websites , transforming unstructured web content into structured data for analysis or storage . It involves using software tools to navigate websites and gather information , commonly performed using programming languages like Python and libraries such as Beautiful Soup and Scrapy . Web scraping is widely used in various fields for data mining , price comparison, market research, and monitoring online content, enabling businesses to gain valuable insights and make informed decisions ."
              ghLink="https://github.com/MuditDargar/Web-Scrapping"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tailwind}
              isBlog={false}
              title="Tailwind-Css"
              description="Tailwind CSS revolutionizes web development with its utility-first approach. By offering an extensive set of pre-defined classes, it simplifies the creation of responsive and highly customizable designs without delving into intricate CSS coding. This framework enhances productivity by enabling developers to focus on application logic and user experience rather than wrestling with styling intricacies. Its intuitive syntax facilitates rapid prototyping, making it an ideal choice for front-end development. Tailwind CSS ensures design consistency across projects, allowing teams to quickly iterate and modify styles. This approach not only enhances productivity but also ensures maintainability, making it a popular choice among developers for crafting modern, visually appealing websites and web applications. Its flexibility empowers developers to build unique interfaces while adhering to best practices, fostering a streamlined and efficient web development process."
              ghLink="https://github.com/MuditDargar/Tailwind-CSS-learning"
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naruto}
              isBlog={false}
              title="Anime-App"
              description="Creating an anime app using React.js involves leveraging the framework's component-based architecture and state management capabilities. Developers can design intuitive user interfaces, implement real-time data updates, and ensure seamless navigation. Integrating APIs for anime content allows users to explore, search, and enjoy their favorite shows, enhancing the overall user experience."
              ghLink="https://github.com/MuditDargar/Anime-app"
          
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
