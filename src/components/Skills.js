import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

import jsIcon from "../assets/images/javascript-icon.svg"; 
import reactIcon from "../assets/images/react-icon.svg";
import bootstrapIcon from "../assets/images/bootstrap-icon.svg";
import cssIcon from "../assets/images/css-icon.svg";
import htmlIcon from "../assets/images/html-icon.svg";
import designIcon from "../assets/images/design-icon.svg"; 

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CircularProgress = ({ percentage, title, imgUrl }) => {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
      <div className="item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
        <div style={{ width: '100%', maxWidth: '200px', aspectRatio: '1/1', position: 'relative' }}>
          <svg width="100%" height="100%" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#AA367C" />
                <stop offset="100%" stopColor="#4A2FBD" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r={radius}
              strokeWidth="15px"
              stroke="#2a2a2a"
              fill="transparent"
            />
            <circle
              cx="100"
              cy="100"
              r={radius}
              strokeWidth="15px"
              stroke="url(#gradient)"
              fill="transparent"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              style={{ 
                transition: 'stroke-dashoffset 1s ease-in-out',
                transform: 'rotate(90deg) scaleX(-1)',
                transformOrigin: 'center'
              }}
            />
          </svg>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -47%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px'
          }}>
            <img 
              src={imgUrl} 
              alt={title} 
              style={{ 
                maxWidth: '60%', 
                maxHeight: '60%', 
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)'
              }} 
            />
          </div>

        </div>
        <h5 style={{ marginTop: '15px', textAlign: 'center' }}>{title}</h5>
      </div>
    );
  };

  return (
    <section className="skill" id="skills" style={{ position: 'relative' }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have experience working with modern frontend technologies and frameworks.<br></br> Here is my proficiency in various tools:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            {/* Pass the icon variables here */}
                            <CircularProgress percentage={90} title="JavaScript (ES6+)" imgUrl={jsIcon} />
                            <CircularProgress percentage={80} title="React JS" imgUrl={reactIcon} />
                            <CircularProgress percentage={90} title="Bootstrap" imgUrl={bootstrapIcon} />
                            <CircularProgress percentage={90} title="Responsive Design" imgUrl={designIcon} />
                            <CircularProgress percentage={90} title="CSS3" imgUrl={cssIcon} />
                            <CircularProgress percentage={95} title="HTML5" imgUrl={htmlIcon} />
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}