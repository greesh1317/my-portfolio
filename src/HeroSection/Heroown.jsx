import {motion} from "framer-motion";
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

function Heroo(){
    return(
        <motion.section
            variants={containerVariants}
            
            style={{
                        height:"100vh",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        padding:"0 5%"
                    }}
            initial="hidden"
            animate="visible"
        >
            <motion.p variants={itemVariantes}>
                <b>Hello I'm Greeshma Divya Sree</b>
            </motion.p>
            <motion.h1 variants={itemVariantes}>
                 Curious mind. Creative imagination.<br />
                 Continuous learner, Building modern web experiences one idea at a time
            </motion.h1>
            <motion.p variants={itemVariantes}> 
                <b>Full Stack Developer</b>
            </motion.p>
            <motion.button
                style={{width: "fit-content"}}
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
                whileHover={{scale:1.1, background:"red"}}
                whileTap={{scale:0.8}}
            > 
                 see my work
            </motion.button>
            
        </motion.section>
    );

}

export default Heroo;