import Project from "./Projectcard";

function Projects() {
  return (
    <section
        style={{
            minHeight: "100vh",
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}
    >
      <h2>My Projects</h2>

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