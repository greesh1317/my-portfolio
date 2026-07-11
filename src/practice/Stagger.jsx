import {motion} from "framer-motion";

const container={
    hidden:{},
    visible:{
        transition:{
            opacity:1,
            y:0,
            duration:0.7,
            ease:"easeIn",
            delayChildren:0.5,
            staggerChildren:0.8,
        },
    },
};
const item={
    hidden:{opacity:0, y:100},
    visible:{opacity:1,y:0},
}
function Segg(){
    const projects=["p1","p2","p3"];
    return(
        <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        style={{listStyle:"none", padding:0 }}
        >
        {projects.map((p)=>(
            <motion.li
            key={p}
            variants={item}
            style={{
                background:"tomato",
                color:"black",
                margin:"5px",
                borderRadius:"5px",
                padding:"10px"
            }}  
            >{p}</motion.li>
        ))}
        </motion.ul>
    );
}
export default Segg;