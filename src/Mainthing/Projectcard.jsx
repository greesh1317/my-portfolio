import { easeOut, motion } from "framer-motion";
import { Style } from "./Styles";

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

function Project(props) {
  return (
    <motion.div
      style={{
        //padding: "20px",
        borderRadius: "15px",
        marginBottom: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        padding: "2rem"
        //...Style,
      }}
      variants={item}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg text-white"
    >
      <h3 className="text-2xl font-bold">
        {props.title}
      </h3>
      
      <p className="mt-2 text-gray-300">
        {props.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {props.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;