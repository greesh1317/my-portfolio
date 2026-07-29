import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ParallaxSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Heading drifts slowly
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <>
      {/* Space before */}
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

      <section
        ref={ref}
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <motion.h2
          style={{
            y,
            fontSize: "4rem",
          }}
        >
          Selected Work
        </motion.h2>
      </section>

      {/* Space after */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        End of Page 🎉
      </section>
    </>
  );
}

export default ParallaxSection;