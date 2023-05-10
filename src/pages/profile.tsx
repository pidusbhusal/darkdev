import React from 'react'
import Link from 'next/link'
import SocialLinks from '@/components/socialslink'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import Skillcard from '@/components/Skillcard'
import { motion } from 'framer-motion'

const Domains = [
    {
        key: 1,
        name: "Ui Ux design",
        description: "With my extensive expertise in digital development, I am able to establish a strong basis for selecting the right typeface, color scheme, and imagery that ensures the brand and its presence is perceived consistently by consumers.",
        subskills: ["Interaction Design", "Wireframe", "Website & Landing Page", "Product Design"]
    },
    {
        key: 2,
        name: "Ui Ux design",
        description: "With my extensive expertise in digital development, I am able to establish a strong basis for selecting the right typeface, color scheme, and imagery that ensures the brand and its presence is perceived consistently by consumers.",
        subskills: ["Interaction Design", "Wireframe", "Website & Landing Page", "Product Design"]
    },
    {
        key: 3,
        name: "Ui Ux design",
        description: "With my extensive expertise in digital development, I am able to establish a strong basis for selecting the right typeface, color scheme, and imagery that ensures the brand and its presence is perceived consistently by consumers.",
        subskills: ["Interaction Design", "Wireframe", "Website & Landing Page", "Product Design"]
    },
]





function Profile() {
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
                        <Image alt='me' className="relative" src={"/Aboutme.jpg"} width={500} height={600} layout="responsive">

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
            <div className="work  block relative sm:pb-40  bg-black py-10 sm:pt-24">
                <div className="container">
                    <div className='flex w-full justify-between flex-wrap'>
                        <div className='sticky top-[300px]  right-0 h-[100px]    '>
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
                        <div className='float'>
                            {Domains.map(domain => <Skillcard name={domain.name} key={domain.key} description={domain.description} subskills={domain.subskills} />)}
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