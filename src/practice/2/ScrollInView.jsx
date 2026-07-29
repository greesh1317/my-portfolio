import {motion} from "framer-motion";

function ScrollInView(){
    return(
        <>

        <div style={{height:"100vh"}}></div>

        <motion.div
        initial={{opacity:0, x:-50,scale:0.6}}
        whileInView={{opacity:1,x:0,scale:1}}
        transition={{duration:0.4}}
        viewport={{once:true}}
        style={{
            width:300,
            height:150,
            background:"tomato",
            margin:"auto",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:"10px",
            color:"white",
            fontSize:"24px"
        }}
        >
            Hello keep doing
        </motion.div>
        
        <div style={{height:"100vh"}}></div>
        </>
    );
}
export default ScrollInView;
