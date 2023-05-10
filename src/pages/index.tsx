
import Image from "next/legacy/image"
import Link from "next/link"
import SocialLinks from '@/components/socialslink'
import ProjectCollections from "@/components/projectColletions"
import Testimonials from "@/components/Testimonials"
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";




const skills = ["Front-end", "Ui Design", "Ux Design", "Interaction Design", "Logo Design", "Graphic Design", "Branding",]





export default function Home() {
  return (
    <>

      <div className="herosection grid items-center py-32 md:py-56 md:pt-16 bg-noise ">
        <div className="container grid items-center grid-cols-4  grid-flow-col ">
          <div className="containt lg:col-span-3 col-span-4 flex flex-col gap-12">
            <div className='flex flex-col gap-4'>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3, type: "spring", stiffness: 260,
                  damping: 40
                }}
                className='text-3xl sm:text-4xl lg:text-7xl lg:leading-tight  '>
                Designing delightful solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3, type: "spring", stiffness: 260,
                  damping: 40
                }} className='max-w-3xl leading-normal'> Hi, I'm Sudip, a UI/UX Designer with a strong background in Graphic Designing and some experience in Front-end development. I specialize in creating visually appealing and user-friendly digital products  that delight not only you but also your customers .  Let's collaborate to bring your ideas to life!</motion.p>

            </div>
            <motion.div initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3, type: "spring", stiffness: 260,
                damping: 40
              }}>
              <Link href="/contact"><button className="pbtn">Let's work together</button></Link>

            </motion.div>

          </div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3, type: "spring", stiffness: 260,
              damping: 40
            }} className=" hidden lg:flex social  justify-end">

            <SocialLinks />
          </motion.div>

        </div>

      </div>


      {/* portfolio section */}
      <div className="work  block relative sm:pb-40  bg-black py-10 sm:pt-24">
        <div className="container">
          <motion.span className="location tracking-widest " initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.3, type: "spring", stiffness: 260,
              damping: 40
            }} viewport={{ once: true, amount: 0.01 }}>
            PORTFOLIO
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.3, type: "spring", stiffness: 260,
              damping: 40
            }} viewport={{ once: true, amount: 0.01 }} className=' text-2xl  mt-1  max-w-[500px] '>
            Projects</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3, type: "spring", stiffness: 260,
              damping: 40
            }} viewport={{ once: true, amount: 0.01 }} className='max-w-xl leading-normal mt-2'>My passion lies in crafting immersive experiences that seamlessly blend form and function. From intuitive interfaces to visually stunning designs, I strive to create solutions that not only captivate, but also serve a purpose. </motion.p>

          <div className='my-20 xl:mb-60'>
            <ProjectCollections />
          </div>

        </div>

      </div>


      {/* about me */}
      <div className="my-36 relative block ">
        <div className="container grid gap-y-11  -order-1 xl:grid-cols-2 items-center ">
          <div className="text">
            <div className="flex gap-1  flex-col ">
              <motion.span className="location tracking-widest " initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3, type: "spring", stiffness: 260,
                  damping: 40
                }} viewport={{ once: true, amount: 0.01 }}>
                ABOUT ME
              </motion.span>
              <motion.h2 className=' text-2xl   max-w-[500px] ' initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3, type: "spring", stiffness: 260,
                  damping: 40
                }} viewport={{ once: true, amount: 0.01 }}>
                Designer with Insatiable hunger for Improvement              </motion.h2>
            </div>
            <motion.p className="mt-4" initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3, type: "spring", stiffness: 260,
                damping: 40
              }} viewport={{ once: true, amount: 0.01 }}>
              Hello, I'm Sudip, but you can call me Pidus. I'm a creative professional with a passion for designing user-centered digital experiences. I am a life long learner who ‘ve been doing design work for many years now and have learned a lot along the way. I'm always striving to improve myself and learn new skills.

              With my background in graphic design, I bring a unique perspective to branding and marketing that allows me to create cohesive and effective designs. I also have experience in templating and front-end development, giving me a solid understanding of the technical side of design.Over the years, I've helped businesses develop their brand identity and solve their design challenges through strategic and innovative design solutions. My goal is always to create interactive experiences that are beautiful, intuitive, and meaningful. I believe that good design is not just about making things look pretty, but about making them work better for the user.So, if you're looking for a designer who can bring your ideas to life and elevate your digital presence, let's connect and see how we can work together.
            </motion.p>
            <motion.button initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.3, type: "spring", stiffness: 260,
                damping: 40
              }} viewport={{ once: true, amount: 0.01 }} className=" p-2  mt-6 border-b-2">Download Resume</motion.button>
          </div>
          <motion.div className="w-72  m-auto rounded overflow-hidden relative" initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.3, type: "spring", stiffness: 260,
              damping: 40
            }} viewport={{ once: true, amount: 0.01 }}>
            <Image className="relative" src={"/Pidus.jpg"} width={500} height={600} layout="responsive">

            </Image>
          </motion.div>

        </div>

      </div>

      {/* Skills bar */}


      <Marquee
        autoFill={true}
        className="">
        <motion.div className="overflow-hidden   flex w-full justify-between " initial={{ opacity: 0, scaleX: 1.2 }} whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.3, type: "spring", stiffness: 260,
            damping: 40
          }} viewport={{ once: true, amount: 0.01 }}>
          {skills.map((skill) => <span className="whitespace-nowrap px-10">#{skill}</span>)}
        </motion.div>


      </Marquee>


      {/* Testimonials */}
      <div className="xl:my-20 block relative ">
        <div className="container block relative  ">
          <Testimonials />
        </div>
      </div>


    </ >
  )
}
