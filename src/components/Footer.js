import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/portfolio.svg";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmedismailfraig/"><span><FaLinkedinIn /></span></a>
              <a href="https://www.facebook.com/ahmedismail1545"><span><FaFacebookF /></span></a>
              <a href="https://www.instagram.com/ahmed_ismail1545/"><span><FaInstagram /></span></a>
              <a href="https://github.com/ahmedfraig"><span><FaGithub /></span></a>
            </div>
            <p>© Copyright 2026. All Rights Reserved Here By Ahmed Ismail</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}