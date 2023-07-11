import React from "react";
import { motion } from "framer-motion";
import ProjectCollections from "@/components/projectColletions";
import Head from "next/head";
import { ProjectProps } from "@/types";
import client from "@/lib/apollo";
import { gql } from "@apollo/client";

export default function Work({ projects }: { projects: ProjectProps[] }) {
  return (
    <>
      <Head>
        <title>Works - Pidus Bhusal</title>
      </Head>
      <div className="work  block relative sm:pb-40    sm:pt-20">
        <div className="container">
          <motion.span
            className="location tracking-widest "
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
            PORTFOLIO
          </motion.span>
          <motion.h2
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
            className=" text-2xl  mt-1  max-w-[500px] "
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            viewport={{ once: true, amount: 0.01 }}
            className="max-w-xl leading-normal mt-2"
          >
            My passion lies in crafting immersive experiences that seamlessly
            blend form and function. From intuitive interfaces to visually
            stunning designs, I strive to create solutions that not only
            captivate, but also serve a purpose.{" "}
          </motion.p>

          <div className="my-20 xl:mb-60">
            <ProjectCollections data={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query getAllProjects {
        projects {
          nodes {
            title
            projects {
              description
              link
              id
              messsage
              image {
                title
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      projects: data?.projects?.nodes,
    },
  };
}
