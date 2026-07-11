
import {motion} from "framer-motion";

function Hover(){
    return(
        <motion.button
        whileHover={{scale:1.3}}
        whileTap={{scale:0.1}}
        >
            Click Me 
        </motion.button>
    );
}
export default Hover;
/*function Hover() {
  return (
    <button>
      Click Me
    </button>
  );
}

export default Hover;*/