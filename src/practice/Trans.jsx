import {animate, easeIn, easeInOut, motion} from "framer-motion";

function Transd(){
    return(
        <motion.div
        initial={{
        x: -200,
        rotate: -180,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        rotate: 0,
        opacity: 1,
        scale: 1,
      }}
       transition={{
            type:"spring",
            stiffness:100,
            damping:10
        }}
         style={{
        width: 120,
        height: 120,
        background: "royalblue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
        
        >move me</motion.div>
    );
}
export default Transd;
