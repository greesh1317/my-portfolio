import {motion} from "framer-motion";
import { Style } from "./Styles";
import "./About.css";


const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Framer Motion",
  "Node.js",
  "MongoDB",
];
const leftStyle = {
    flex: 2,
};

const rightStyle = {
    flex: 1,
    textAlign: "left",
};
const sectionStyle = {
    //minHeight: "100vh",
    //display: "flex",
    //flexDirection: "row",
    //justifyContent: "center",
    ...Style,
    //alignItems: "center",
    //textAlign: "center",
    //gap:"80px",
};

const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
};

const skillStyle = {
    padding: "8px 16px",
    border: "1px solid #888",
    borderRadius: "20px",
    display: "inline-block",
};

function Me(){
    return(
        <motion.section
            className="about-section"
            style={sectionStyle}
            
        >
            <motion.div style={leftStyle}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I'm a Computer Science student who enjoys creating interactive and aesthetic web experiences. I'm currently improving my React and Tailwind CSS skills while exploring modern frontend development. My goal is to build websites with their own personality, making every experience engaging and memorable.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="about-right"
                style={rightStyle}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}

                >
                    Skills
                </motion.h1>
                <motion.div 
                    className="skills-container"
                    style={skillsContainerStyle}
                >
                    {skills.map((skill)=>(
                        <motion.span 
                            key={skill}
                            style={skillStyle}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>

            </motion.div>
            
           
            
        </motion.section>
    );
}
export default Me;