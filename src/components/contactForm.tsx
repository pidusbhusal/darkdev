import React from 'react'
import { motion } from 'framer-motion'

function ContactForm() {
    return (
        <div className='flex-grow relative '>

            <form action="" className=' flex flex-grow flex-col -z-10'>
                <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }} className='flex flex-col gap-y-1 flex-grow'>
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" required placeholder='Enter your name' className=' mt-2 bg-gray-900 flex-grow py-4 px-4 border border-gray-600 rounded-md' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }} className='grid gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="email">Ways for contact you*</label>
                    <input type="text" id="email" required placeholder='Email or social media link' className='bg-gray-900  mt-2 py-4 px-4 border border-gray-600 rounded-md' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }}
                    className='grid gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" required placeholder='Subject' className='bg-gray-900 mt-2  py-4 px-4 border border-gray-600 rounded-md' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }}
                    className='grid items-stretch gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="mesasge">Message</label>
                    <textarea required placeholder='Message' id="message" className='bg-gray-900 py-4 mt-2  px-4 border border-gray-600 rounded-md w-full h-[120px]  ' />
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }} className='grid w-full place-items-end flex-grow'>
                    <button className='pbtn w-fit mt-8'>Send Message</button>
                </motion.div>

            </form>
        </div>
    )
}

export default ContactForm