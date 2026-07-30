import Project from "./Projectcard";
import { Style } from "./Styles";


function Projects() {
  return (
    <section
        style={{
            minHeight: "100vh",
            ...Style,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
      <h2
        style={{
          marginBottom: "32px",
        }}
      >My Projects</h2>

      <Project
        title="Portfolio Website"
        description="A personal portfolio built using React, Framer Motion, and Tailwind CSS."
        tags={["React", "Tailwind CSS", "Framer Motion"]}
      />

      <Project
        title="Weather App"
        description="A weather application using React and Weather API."
        tags={["React", "API", "CSS"]}
      />

      <Project
        title="Netflix Clone"
        description="A Netflix landing page clone."
        tags={["React", "Firebase", "Tailwind CSS"]}
      />
    </section>
  );
}

export default Projects;