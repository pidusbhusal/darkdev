import React from 'react'
import Link from 'next/link'
import SocialLinks from '@/components/socialslink'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import Skillcard from '@/components/Skillcard'
import { motion } from 'framer-motion'
import { gql, useQuery } from "@apollo/client"









function Profile() {


    const GET_ALL_PROJECTS = gql`
query NewQuery {
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
}`


    const { loading, error, data } = useQuery(GET_ALL_PROJECTS)
    if (loading) return <p>Loading posts…</p>;
    if (error) return <p>Error</p>;

    const postsFound = Boolean(data?.skills.nodes.length);
    if (!postsFound) {
        return <p>No matching posts found.</p>;
    }

    return (
        <div>
            <div className="container  ">
                <div className="flex gap-20  w-full justify-start items-center flex-wrap gap-y-12 pb-32 pt-16">
                    <motion.div className="w-72  rounded overflow-hidden relative" initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.3, type: "spring", stiffness: 260,
                            damping: 40
                        }} viewport={{ once: true, amount: 0.01 }}>
                        <Image alt='me' className="relative" src={"https://res.cloudinary.com/dgjcimkmq/image/upload/v1688630897/kytjg8jxi2ivzixjxq9i_39476a5.webp"} width={500} height={600} layout="responsive">

                        </Image>
                    </motion.div>
                    <div>
                        <motion.h1 initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className='text-3xl max-w-xl sm:text-4xl lg:text-7xl lg:leading-tight  '>
                            Hello! The name is Pidus
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className=' leading-normal max-w-xl mt-4 mb-12'> Hi, I'm Sudip, a UI/UX Designer with a strong background in Graphic Designing and some experience in Front-end development. I specialize in creating visually appealing and user-friendly digital products  that delight not only you but also your customers .  Let's collaborate to bring your ideas to life!</motion.p>

                        <motion.div initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }}>
                            <Link href="/contact"><button className="pbtn">Let's work together</button></Link>

                        </motion.div>

                    </div>

                </div>
            </div>
            <div className="work  block relative sm:pb-24  bg-black pb-16 sm:pt-24">
                <div className="container">
                    <div className='flex w-full justify-between flex-wrap'>
                        <div className='md:sticky top-[300px] pb-16 right-0 h-fit    '>
                            <motion.span initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.6, type: "spring", stiffness: 260,
                                    damping: 40
                                }} viewport={{ once: false, amount: 0.01 }} className="location tracking-widest sticky top-0 text-white">
                                MY DOMAINS
                            </motion.span>
                            <motion.p initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.6, type: "spring", stiffness: 260,
                                    damping: 40
                                }} viewport={{ once: true, amount: 0.01 }} className='max-w-sm leading-normal mt-4'>I take pleasure in devising practical solutions for distinct challenges, and these are abilities that I have acquired throughout my professional journey. </motion.p>

                        </div>
                        <div className='md:float'>
                            {data.skills.nodes != null && data.skills.nodes.map((domain: any) => <Skillcard name={domain.title} key={domain.databaseId} description={domain.uiUxDesign.description} subskills={domain.uiUxDesign.skillCollection} />)}
                        </div>
                    </div>

                </div>

            </div>

            <div className='container'>
                <Testimonials />
            </div>
        </div>
    )
}

export default Profile