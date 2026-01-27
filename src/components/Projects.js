import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Simple Design With HTML & CSS",
      imgUrl: projImg1,
    },
    {
      title: "Clock Market",
      description: "Online Store HTML & CSS3 Design",
      imgUrl: projImg2,
    },
    {
      title: "Restaurant Platform",
      description: "Design With Bootstrap 5",
      imgUrl: projImg3,
    },
    {
      title: "Online Shopping",
      description: "Design & Development",
      imgUrl: projImg4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>These projects demonstrate my expertise in creating scalable web applications and responsive user interfaces. Each project reflects my commitment to clean code, performance optimization, and solving complex problems with modern technologies.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">1st Section</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">2nd Section</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">3rd Section</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>I am constantly experimenting with new frameworks and libraries to broaden my skillset. This section showcases my latest prototypes and experimental builds where I test new design patterns and architectural concepts.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Collaboration is key to software development. Here you will find projects where I have contributed to open-source initiatives or worked within cross-functional teams to deliver high-quality digital products.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}