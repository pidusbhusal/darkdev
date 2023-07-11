import React from "react";
import TestimonialCard from "./testimonialCard";
import { motion } from "framer-motion";
import { TestimonialProps } from "@/types";

function Testimonials({ data }: { data: TestimonialProps[] }) {
  return (
    <div className="py-40">
      <div className="container relative grid justify-center ">
        <motion.span
          className="location tracking-widest text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
          viewport={{ once: true, amount: 0.01 }}
        >
          ABOUT ME
        </motion.span>
        <motion.h2
          className=" text-2xl font-Reg  max-w-[500px] "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
          viewport={{ once: true, amount: 0.01 }}
        >
          Recomendation
        </motion.h2>
      </div>
      <div className="testimonials grid md:grid-cols-3 mt-20   gap-14 md:gap-10">
        {data != null &&
          data.map((entry: any) => (
            <TestimonialCard
              key={entry.testimonials.id}
              index={entry.testimonials.id}
              name={entry.title}
              post={entry.testimonials.post}
              copy={entry.testimonials.description}
              image={entry.testimonials.image.sourceUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default Testimonials;
