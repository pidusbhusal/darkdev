import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";
import { ProjectProps } from "@/types";

const ProjectCollections = ({ data }: { data: ProjectProps[] }) => {
  const [message, setMessage] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 0,
      width: 0,
      opacity: 0,
    },
    text: {
      opacity: 1,
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "white",
    },
  };

  return (
    <div className="flex flex-wrap gap-y-20 justify-between ">
      {data !== null &&
        data?.map((product: any) => (
          <ProjectCard
            setMessage={setMessage}
            setCursorVariant={setCursorVariant}
            message={product.projects.messsage}
            key={product.projects.id}
            name={product.title}
            description={product.projects.description}
            link={product.projects.link}
            image={product.projects.image.sourceUrl}
            index={product.projects.id}
          />
        ))}
      <motion.div
        className="cursor z-20  overflow-hidden  "
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.01 }}
      >
        <div className="w-28 text-mid text-black text-center ">{message}</div>
      </motion.div>
    </div>
  );
};

export default ProjectCollections;
