import {motion} from "framer-motion";
import { Style } from "./Styles";
import profile from "../assets/portfolio_pic.jpeg";
import "./Hero.css";

const containerVariants={
    hidden:{},
    visible:{
        transition:{
            delayChildren:0.4,
            staggerChildren:0.2,
        },
    },
}
const itemVariantes={
    hidden:{opacity:0, y:100},
    visible:{opacity:1, y:0,
        transition:{
            duration:0.7,
            ease:"easeOut",
        },
    },
}

function Heroo({onSeeWork}){
    return(
        <motion.section
        className="hero-section"
            variants={containerVariants}
            
            style={{
                        //height:"100vh",
                        //display:"flex",
                        //flexDirection:"column",
                        //justifyContent:"center",
                        //padding: "2rem",
                        ...Style,
                        //gap: "24px",
                    }}
            initial="hidden"
            animate="visible"
        >
            <div className="hero-content">
            <div className="hero-intro">
                    <motion.img
                        src={profile}
                        alt="Greeshma Divya Sree"
                        className="hero-image"
                        variants={itemVariantes}
                    />
                <motion.p variants={itemVariantes}>
                    Hello, I'm Greeshma Divya Sree - Full Stack Developer
                </motion.p>
            </div>
            <motion.h1 
                className="hero-title"
                variants={itemVariantes}
            >
                 Curious mind. Creative imagination.<br />
                 Continuous learner, Building modern web experiences one idea at a time
            </motion.h1>
            <motion.p 
                className="hero-subtitle"
                variants={itemVariantes}
            > 
                <b>CSE student. MERN certified. Creative by instinct.</b>
            </motion.p>
            <motion.button
                style={{
                    width: "fit-content",
                padding: "12px 24px",
                //...Style,
                border: "2px solid #111",
                borderRadius: "8px",
                background: "#111",//"transparent"
                color: "#fff",//"#111"
                fontFamily: "inherit",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                }}
                variants={itemVariantes}
                /*initial={{
                    opacity:0,
                    x:-100,
                    rotate:-180,
                    scale:0.7,
                }}
                animate={{
                    opacity:1,
                    x:0,
                    rotate:0,
                    scale:0.7,
                }}*/
                whileHover={{scale:1.01}}
                whileTap={{scale:0.95}}
                onClick={onSeeWork}
            > 
                 see my work
            </motion.button>
        </div>
        
            
        </motion.section>
    );

}

export default Heroo;