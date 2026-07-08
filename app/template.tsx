"use client";

import { motion } from "framer-motion";

/*
 * Opacity-only page transition. Deliberately no transform here: a
 * transformed ancestor becomes the containing block for position:fixed
 * descendants (the satellite rig, scroll HUDs), which silently breaks them.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
