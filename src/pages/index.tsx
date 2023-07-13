import Image from "next/legacy/image";
import Link from "next/link";
import SocialLinks from "@/components/socialslink";
import ProjectCollections from "@/components/projectColletions";
import Testimonials from "@/components/Testimonials";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Head from "next/head";
import client from "@/lib/apollo";
import { gql } from "@apollo/client";
import { ProjectProps, TestimonialProps } from "@/types";

const skills = [
  "Front-end",
  "Ui Design",
  "Ux Design",
  "Interaction Design",
  "Logo Design",
  "Graphic Design",
  "Branding",
];



export default function Home({
  projects,
  testimonials,
}: {
  projects: ProjectProps[];
  testimonials: TestimonialProps[];
}) {
  return (
    <>
      <Head>
        <meta name="title" content="Pidus Bhusal | Ui Ux Designer" />
        <meta name="description" content="Pidus Bhusal is an Ui/Ux designer based on Toronto,Canada. Pidus can help you in designing Website, Mobile App and Brand Identity. He has about more then 2 Years of experinece." />
        <meta name="keywords" content="pidus, ui ux designer, web designer, ui ux designer, canada, toronto, app designer, web developer"></meta>
        <meta name="robots" content="index, follow">
        </meta>
        <meta property="og:image" content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"></meta>
        <meta property="og:image:secure_url" content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75"></meta>
        <meta property="og:pidus.net" content="Pidus Bhusal | Ui/Ux Designer" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image" content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75" />
        <meta property="og:image:secure_url" content="https://pidus.net/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgjcimkmq%2Fimage%2Fupload%2Fv1688630888%2FPidus_d3exvm_380e67a.webp&w=1920&q=75" />
        <meta property="og:title" content="Pidus Bhusal | Ui Ux Designer" />
        <meta property="og:description" content="Pidus Bhusal is a Ui/Ux designer based in Toronto, Canada. Pidus can help you in designing Website, Mobile App, and Brand Identity. He has over 2 years of experience." />
        <meta property="og:url" content="https://pidus.net" />
        <meta property="og:type" content="website" />
        <title>Pidus Bhusal</title>
      </Head>
      <div className="herosection grid items-center py-32 md:py-56 md:pt-16 bg-noise ">
        <div className="container grid items-center grid-cols-4  grid-flow-col ">
          <div className="containt lg:col-span-3 col-span-4 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                className="text-3xl sm:text-4xl lg:text-7xl lg:leading-tight  "
              >
                Designing delightful solutions
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                className="max-w-2xl leading-normal text-[#bcbcbc]"
              >
                Hi, I'm Sudip Bhusal, also known as Pidus. I'm a UI/UX designer with a proven track record of delivering results. I’m always eager to learn and push my limits. Get in touch with me today to find out how I can help you with your next project.


              </motion.h2>
            </div>
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                className="sm:w-52"
              >
                <Link href="/contact">
                  <button className="pbtn ">Let's work together</button>
                </Link>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 40,
                }}
                viewport={{ once: true, amount: 0.01 }}
                className=" py-2   border-b-2"
              >
                <Link href="/profile" >Where can I help you</Link>

              </motion.button>
            </div>

          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            className=" hidden lg:flex social  justify-end"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* portfolio section */}
      <div className="work  block relative sm:pb-40  bg-black py-10 sm:pt-24">
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
            I've helped small businesses and big corporations alike realize their visions and create concrete designs that meet their needs. Some of these success stories are given belows :
          </motion.p>

          <div className="my-20 xl:mb-60">
            <ProjectCollections data={projects}></ProjectCollections>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className="my-36 relative block ">
        <div className="container grid gap-y-11  -order-1 xl:grid-cols-2 items-center ">
          <div className="text">
            <div className="flex gap-1  flex-col ">
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
                ABOUT ME
              </motion.span>
              <motion.h2
                className=" text-2xl   max-w-[500px] "
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
                Designer with Insatiable hunger for Improvement{" "}
              </motion.h2>
            </div>
            <motion.p
              className="mt-4 "
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
            >
              Hello, I’m Sudip Bhusal known more as Pidus. I’m a UI/UX designer with a passion for learning and creating. I have years of experience in designing user-friendly and attractive interfaces for various platforms. I enjoy exploring new domains and acquiring new skills to enhance my design capabilities. I can also handle graphic design and front-end development to ensure that my designs are fully realized and functional. My design philosophy is to align with your business goals and deliver value to your customers. If you’re looking for a UI/UX designer who can elevate your digital presence, let’s connect and collaborate.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                type: "spring",
                stiffness: 260,
                damping: 40,
              }}
              viewport={{ once: true, amount: 0.01 }}
              className=" py-2  mt-6 border-b-2"
            >
              <a href="Resume_Pidus.pdf" download={true}>Download Resume</a>

            </motion.button>

          </div>
          <motion.div
            className="w-72  m-auto rounded overflow-hidden relative"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.0,
              duration: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <Image
              className="relative"
              src={
                "https://res.cloudinary.com/dgjcimkmq/image/upload/v1688630888/Pidus_d3exvm_380e67a.webp"
              }
              width={500}
              alt="Pidus Bhusal Sudip Bhusal"
              height={600}
              layout="responsive"
            ></Image>
          </motion.div>
        </div>
      </div>

      {/* Skills bar */}

      <Marquee autoFill={true} className="">
        <motion.div
          className="overflow-hidden   flex w-full justify-between "
          initial={{ opacity: 0, scaleX: 1.2 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 40,
          }}
          viewport={{ once: true, amount: 0.01 }}
        >
          {skills.map((skill, index) => (
            <span key={index} className="whitespace-nowrap px-10">
              #{skill}
            </span>
          ))}
        </motion.div>
      </Marquee>

      {/* Testimonials */}
      <div className="xl:my-20 block relative ">
        <div className="container block relative  ">
          <Testimonials data={testimonials} />
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
      projects: data?.projects?.nodes,
      testimonials: data?.testimonials?.nodes,
    },
  };
}
