import { createSignal } from "solid-js";
import "./Project.css";
import { Accordion, Container, Row, Col, Image } from "solid-bootstrap";
export default function Project(props) {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>{props.name}</Accordion.Header>
      <Accordion.Body>
        <Container>
          <Row>
            <Col>
              <Image src={`./screenshots/${props.imageName}.png`} fluid />
            </Col>
            <Col>
              <div>
                <p><strong>Description: </strong>{props.description}</p>
                <p>Here is a link to the Github repo: <a href={props.repoLink}>{props.repoLink}</a></p>
                { 
                  (props.demoLink) ? 
                    (
                      <p>Here is a link to the demo page <a href={props.demoLink}>here.</a></p>
                    ): null 
                }
              </div>
            </Col>
          </Row>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}