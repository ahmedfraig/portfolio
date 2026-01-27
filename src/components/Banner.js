import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const toRotate = [ "Web Developer", "FrontEnd Developer", "React Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    } else {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); 
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); 
    } 
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome All In My Portfolio</span>
              <h1>
                {`Hi! I'm Ahmed Ismail`} 
                <br /> 
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "FrontEnd Developer", "React Developer" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>Hello Everyone I have 8 months Of Experience In web Development.</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}