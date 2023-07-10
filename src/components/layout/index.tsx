import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 40,
        }}
        className="sticky top-0 z-50 opacity-1"
      >
        <Navbar />
      </motion.div>

      {children}
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 2300,
          damping: 70,
        }}
      >
        <Footer />
      </motion.div>
    </main>
  );
};

export default Layout;
