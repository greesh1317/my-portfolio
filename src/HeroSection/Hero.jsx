import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 5%" }}
    >
      <motion.p variants={itemVariants} style={{ fontSize: "1rem", opacity: 0.5 }}>
        Nyra — Frontend Developer
      </motion.p>

      <motion.h1 variants={itemVariants} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1.1 }}>
        I build things that move,<br />react, and feel alive.
      </motion.h1>

      <motion.p variants={itemVariants} style={{ fontSize: "1.1rem", marginTop: "1rem", opacity: 0.6 }}>
        CSE student. MERN certified. Creative by instinct.
      </motion.p>

      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{ marginTop: "2rem", padding: "0.8rem 2rem", width: "fit-content", cursor: "pointer" }}
      >
        See my work →
      </motion.button>

    </motion.section>
  );
}

export default Hero;