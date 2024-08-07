import React, { useEffect, useRef } from "react";
import { delay, motion, stagger, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView && mainControls.start("visible");
  }, [isInView]);

  const mainControls = useAnimation();

  return (
    <div ref={ref}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const HorizontalReveal = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView && mainControls.start("visible");
  }, [isInView]);

  const mainControls = useAnimation();

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -15 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealFromLeft = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView && mainControls.start("visible");
  }, [isInView]);

  const mainControls = useAnimation();

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealFromRight = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    isInView && mainControls.start("visible");
  }, [isInView]);

  const mainControls = useAnimation();

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
