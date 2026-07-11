import {motion} from "framer-motion";
//import { Profiler } from "react";

const card={
    hidden:{opacity:0, y:200},
    visible:{opacity:1, y:0},
}
function Vari(){
    return(
        <motion.div
        variants={card}
        initial="hidden"
        animate="visible"
        transition={{duration:0.8}}
        style={{
            width:100,
            height:150,
            background:"tomato",
            color:"black",
            diaplay:"flex",
            justifycontent:"center",
            alignItem:"center"
        }}
        >
            I am a Profile
        </motion.div>

    );
}

export default Vari;