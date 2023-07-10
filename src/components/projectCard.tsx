import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface projectProps {
  link: string;
  name: string;
  description: string;
  image: string;
  index: number;
  message: string;
  setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

function ProjectCard({
  setMessage,
  setCursorVariant,
  link,
  name,
  description,
  image,
  message,
  index,
}: projectProps) {
  const textEnter = () => {
    setCursorVariant("text");
    setMessage(message);
  };
  const textLeave = () => setCursorVariant("default");

  return (
    <AnimatePresence>
      <div className=" xl:even:transform xl:even:translate-y-80 ">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1 * index,
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
          viewport={{ once: true, amount: 0.03 }}
        >
          <Link href={link} target="_blank" className=" cursor-pointer ">
            <div
              className=" flex  overflow-hidden"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <Image
                src={image}
                alt="My image"
                width={500}
                height={500}
                className="rounded-md relative max-w-[500px] max-h-[500px] "
              />
            </div>

            <div className="flex flex-col gap-3">
              <h2 className=" text-2xl mt-8  max-w-[500px] ">{name}</h2>
              <p className="   max-w-[500px]"> {description}</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectCard;
