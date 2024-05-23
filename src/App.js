import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AfriPredictor',
    description: 'A sports predictor league format game for sports enthusiant of all kind',
    imgSrc: '/afripredictor.png',
    liveLink: 'https://www.afripredictor.com/',
    codeLink: '',
    classColor: 'afripredictor'
  },
  {
    title: 'FluentLinks',
    description: 'A tool to merge contact and social links under one sharable link.',
    imgSrc: '/fluentlinks.png',
    liveLink: 'https://www.fluentlinks.me/',
    codeLink: '',
    classColor: 'fluentlinks'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Container className="py-5">
            <Row className="align-items-center">
              {/* <Col> */}
              <div class="col-4"><img src="/display_pic.jpg" alt="Display" className="display-picture" /></div>
                {/* <img src="/display_pic.jpg" alt="Display" className="display-picture" /> */}
              {/* </Col> */}
              <Col>
                <div className="heading">Hi There, I'm Learnmore Mombe</div>
                <div className="tittle">Freelance Software Developer</div>
                <div>
                  <a href="https://www.linkedin.com/in/learnmore-mombe-676729190/" target="_blank" rel="noreferrer"><img src="/linkedin.webp" alt="linkedin" className="display-social-icons p-1" /></a>
                  <a href="https://twitter.com/lenmorelms" target="_blank" rel="noreferrer"><img src="/twitter.png" alt="twitter" className="display-social-icons p-1" /></a>
                  <a href="https://github.com/lenmorelms" target="_blank" rel="noreferrer"><img src="/github.png" alt="github" className="display-social-icons p-1" /></a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container className="py-2">
            <h6>Tech Stack</h6>
            <img src="/html.webp" alt="html5" className="display-tech-icons p-1" />
            <img src="/css.webp" alt="css" className="display-tech-icons p-1" />
            <img src="/js.webp" alt="js" className="display-tech-icons p-1" />
            <img src="/ts.webp" alt="ts" className="display-tech-icons p-1" />
            <img src="/react.webp" alt="react" className="display-tech-icons p-1" />
            <img src="/node.webp" alt="nodejs" className="display-tech-icons p-1" />
            <img src="/mongo.webp" alt="mongodb" className="display-tech-icons p-1" />
            <img src="/sql.webp" alt="sql" className="display-tech-icons p-1" />
            <img src="/sharepoint.webp" alt="sharepoint" className="display-tech-icons p-1" />
            <img src="/ms.webp" alt="microsoft" className="display-tech-icons p-1" />
          </Container>
        </section>
        <section>
          <Container className="mt-5">
            <h6>Projects</h6>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Container>
        </section>
        <section>
          <Container className="py-5">
            <div className="contact">Contact</div>
            <p>If you'd like to collaborate on a project, I'd love to hear from you. <a href="mailto:learnmorelms@gmail.com">Email me</a> or get in touch on socials.</p>
          </Container>
        </section>
        <p className="copyright">&copy; 2024 Learnmore Mombe.</p>
      </header>
    </div>
  );
}

export default App;
