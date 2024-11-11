import { Title } from "solid-start";
import Project from "~/components/Project";
import {Accordion} from "solid-bootstrap";
export default function Puzzles() {
  return (
    <main>
      <Title>Puzzles</Title>
      
      <h1 class="page-title">Puzzles</h1>
      <p>
        When I first started creating puzzles, I made them all with a pencil and paper.
        This was very time consuming. Now I have made a puzzle creation tool to do all the
        heavy lifting. It still takes some work to create a puzzle, but the design of it 
        is a little bit easier. I still have to cut out the puzzles myself.
      </p>

      <Accordion defaultActiveKey="0">
          <Project
            name="Puzzle Creation Tool"
            description="A tool for creating puzzles"
            imageName="puzzle-generator"
            repoLink="https://github.com/gregv21v/puzzle-generator2"
            eventKey="0"
          />

          <Project
            name="Original Puzzle Creation Tool"
            description="A tool for creating puzzles. This tool is outdated, but its still useful for creating 
              circular puzzles"
            imageName="circle-puzzle"
            repoLink="https://github.com/gregv21v/Puzzles"
            eventKey="1"
          />
      </Accordion>
      
      
    </main>
  );
}
