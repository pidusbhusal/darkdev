import React from 'react'
import ContactForm from '@/components/contactForm'
import SocialLinks from '@/components/socialslink'
import { motion } from 'framer-motion'


function Footer() {
    return (
        <div className=' relative pb-16 ' >
            <div className="container flex flex-wrap gap-24 justify-between ">
                <div>
                    <div className="flex gap-1  flex-col ">
                        <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className="location tracking-widest ">
                            CONTACT
                        </motion.span>
                        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className=' text-2xl   max-w-[500px] '>
                            Get in touch</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className='max-w-xs mt-3'>Tell us about your product, your timeline, how you heard about us, and where you're located.
                        </motion.p>
                        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.3, type: "spring", stiffness: 260,
                                damping: 40
                            }} viewport={{ once: true, amount: 0.01 }} className='max-w-xs mt-1'> We read every message. So, thanks in advance for making it a good one.</motion.p>
                    </div>
                </div>

                <div className='relative  flex flex-grow'>
                    <ContactForm />
                </div>
                <SocialLinks />
            </div>
        </div>
    )
}

export default Footer