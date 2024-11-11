import { Title } from "solid-start";
import Project from "~/components/Project";
import { Accordion } from "solid-bootstrap";
export default function Games() {
  



  return (
    <main>
      <Title>Games</Title>
      <h1 class="page-title">Games</h1>
      <p>
        Here are the games that I have been working on. If you've tried any of these games before, 
        you might need to clear your browser cache of files, and images to see additional updates.
      </p>

      <Accordion defaultActiveKey="0">
        <Project
          name="Compact Farmer"
          description="a game where you start with a small farm and slowly expand it"
          imageName="compact-farmer"
          repoLink="https://github.com/gregv21v/Compact-Farmer"
          demoLink="http://gregv21v.github.io/Compact-Farmer/"
          eventKey="0"
        />

        <Project
          name="Chemistry Lab"
          description="a game about mixing Chemicals to create better chemicals"
          imageName="chemistry-lab"
          repoLink="https://github.com/gregv21v/Chem-Lab"
          demoLink="http://gregv21v.github.io/Chem-Lab/"
          eventKey="1"
        />

        <Project
          name="Lasers"
          description="a game about directing a laser to a target."
          imageName="lasers"
          repoLink="https://github.com/gregv21v/Lasers"
          demoLink="https://gregv21v.github.io/Lasers/"
          eventKey="2"
        />

        <Project
          name="Hall of Mirrors"
          description="a maze game where you navigate through rooms to get to the exit"
          imageName="hall-of-mirrors"
          repoLink="https://github.com/gregv21v/hall-of-mirrors"
          demoLink="https://gregv21v.github.io/hall-of-mirrors/"
          eventKey="3"
        />
      </Accordion>
    </main>
  );
}
