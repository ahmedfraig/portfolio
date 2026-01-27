import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import portfolio from '../assets/img/portfolio.svg';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'skills', 'projects'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - 200; 
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;
          
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
             setActiveLink(section);
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={portfolio} alt="Portfolio" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className="navbar-link" 
                active={activeLink === 'home'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              
              <Nav.Link 
                href="#skills" 
                className="navbar-link" 
                active={activeLink === 'skills'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              
              <Nav.Link 
                href="#projects" 
                className="navbar-link" 
                active={activeLink === 'projects'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahmedismailfraig/"><span className='social-icons-span'><FaLinkedinIn /></span></a>
                <a href="https://www.facebook.com/ahmedismail1545"><span className='social-icons-span'><FaFacebookF /></span></a>
                <a href="https://www.instagram.com/ahmed_ismail1545/"><span className='social-icons-span'><FaInstagram /></span></a>
                <a href="https://github.com/ahmedfraig"><span className='social-icons-span'><FaGithub /></span></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}