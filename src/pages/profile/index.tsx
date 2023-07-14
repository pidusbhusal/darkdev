import React from "react";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import Skillcard from "@/components/Skillcard";
import { motion } from "framer-motion";
import { gql } from "@apollo/client";
import Head from "next/head";
import { SkillsProps, TestimonialProps, ImagesProps } from "@/types";
import client from "@/lib/apollo";

export default function Profile({
  skills,
  testimonials,
  aboutimage,
}: {
  aboutimage: ImagesProps[];
  skills: SkillsProps[];
  testimonials: TestimonialProps[];
}) {
  return (
    <>
      <Head>
        <title>About - Pidus Bhusal</title>
      </Head>
      <div className="container  ">
        <div className="flex gap-20  w-full justify-start items-center flex-wrap gap-y-12 pb-32 pt-16">
          <motion.div
            className="w-72  rounded overflow-hidden relative"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <Image
              alt="Image of Pidus Bhusal"
              className="relative"
              src={aboutimage[0]?.myImage?.image?.sourceUrl}
              width={500}
              height={600}
              layout="responsive"
              priority={true}
            />
          </motion.div>
          <div>
            <motion.h1
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
              className="text-3xl max-w-xl sm:text-4xl lg:text-7xl lg:leading-tight  "
            >
              Solutions with Personal Touch
            </motion.h1>
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
              className=" leading-normal max-w-xl mt-4 mb-12"
            >
              Hello! I am Sudip Bhusal. Online, I use the name Pidus, which is
              the inverse of Sudip. This name represents my design philosophy of
              viewing things from differnet perspective. I use this philosophy
              to help my clients boost their ROI by finding creative solutions
              that enhance their value proposition and enhance their hidden gem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 40,
              }}
              className="sm:w-52"
              viewport={{ once: true, amount: 0.01 }}
            >
              <Link href="/contact">
                <button className="pbtn">Let's work together</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="work  block relative sm:pb-24  bg-black pb-16 pt-24">
        <div className="container">
          <div className="flex w-full justify-between flex-wrap">
            <div className="lg:sticky lg:top-[300px] pb-16 right-0 h-fit    ">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                viewport={{ once: false, amount: 0.01 }}
                className="location tracking-widest sticky top-0 text-white"
              >
                MY DOMAINS
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                viewport={{ once: true, amount: 0.01 }}
                className="max-w-sm leading-normal mt-4"
              >
                I take pleasure in learning new things and diving into new
                domain for distinct challages. These are abilities that I have
                acquired throughout my professional journey.
              </motion.p>
            </div>
            <div className="md:float">
              {skills != null &&
                skills.map((domain: any) => (
                  <Skillcard
                    name={domain.title}
                    key={domain.databaseId}
                    description={domain.uiUxDesign.description}
                    subskills={domain.uiUxDesign.skillCollection}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Testimonials data={testimonials} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query getAllProjects {
        skills {
          nodes {
            title
            databaseId
            uiUxDesign {
              description
              skillCollection {
                subSkill
              }
            }
          }
        }
        myImages {
          nodes {
            id
            title
            myImage {
              image {
                sourceUrl
              }
            }
          }
        }

        testimonials {
          nodes {
            title
            testimonials {
              description
              post
              id
              image {
                sourceUrl
              }
            }
            databaseId
          }
        }
      }
    `,
  });
  return {
    props: {
      aboutimage: data?.myImages?.nodes,
      skills: data?.skills?.nodes,
      testimonials: data?.testimonials?.nodes,
    },
  };
}
