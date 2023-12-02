import { Title } from "solid-start";
import Project from "~/components/Project";
import { Accordion } from "solid-bootstrap";
export default function Games() {
  return (
    <main>
      <Title>Games</Title>
      <h1 class="page-title">Games</h1>
      <p>Here are the games that I have been working on.</p>

      <Accordion defaultActiveKey="0">
        <Project
          name="Compact Farmer"
          description="a game where you start with a small farm and slowly expand it"
          imageName="compact-farmer"
          repoLink="https://github.com/gregv21v/Compact-Farmer"
          demoLink="http://gregv21v.github.io/Compact-Farmer/"
        />

        <Project
          name="Chemistry Lab"
          description="a game about mixing Chemicals to create better chemicals"
          imageName="chemistry-lab"
          repoLink="https://github.com/gregv21v/Chem-Lab"
          demoLink="http://gregv21v.github.io/Chem-Lab/"
        />
      </Accordion>
    </main>
  );
}
