"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({ id, className = "", containerClassName = "", children }) {
  return (
    <motion.section
      id={id}
      className={`px-6 py-16 md:py-24 ${className}`.trim()}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`mx-auto w-full max-w-7xl ${containerClassName}`.trim()}>{children}</div>
    </motion.section>
  );
}
