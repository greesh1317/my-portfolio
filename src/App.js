//import "./App.css";
//import { motion } from "framer-motion";
//import Hover from "./practice/HoverButton";
//import Transd from "./practice/Trans";
//import Vari from "./practice/Varient";
//import Segg  from "./practice/Stagger";
//import ScrollInView from "./practice/2/ScrollInView";
//import ScrollTransform from "./practice/2/ScrollTransform";
//import ParallaxSection from "./practice/2/Parallax";
import {useRef} from "react";
import Project from "./Mainthing/Projectcard";
import Heroo from "./Mainthing/Heroown";
import Me from "./Mainthing/About";
import Projects from "./Mainthing/Projects";
import Contact from "./Mainthing/Contact";
function App() {
  /*return (
    <motion.div
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hello, I'm Nyra 👋</h1>
    </motion.div>
  ); for animation*/
  
  const projectRef = useRef(null);
  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return(
      //<Hover /> 
      //<Transd />
      //< Vari />
      //<Segg />
      
      //<ScrollInView />
      //<ScrollTransform />
      //<ParallaxSection />

      // all for Project cards
      
      <>
        <Heroo onSeeWork={scrollToProjects} />

        <div ref={projectRef}>
          <Projects />
        </div>

        <Me />
        <Contact />
      </> 
  );
}

export default App;
