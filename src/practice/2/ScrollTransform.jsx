
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollTransform() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <motion.section
        ref={ref}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#111",
          color: "white",
        }}
      >
        <motion.div style={{ y, opacity }}>
          <h1 style={{ fontSize: "3rem" }}>
            Curious mind. Creative imagination.
          </h1>

          <p style={{ fontSize: "1.2rem" }}>
            Building modern web experiences one idea at a time.
          </p>
        </motion.div>
      </motion.section>

      {/* Extra section so you can scroll */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        Scroll Down 👇
      </section>
    </>
  );
}

export default ScrollTransform;