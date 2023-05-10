import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'


interface projectProps {
    link: string,
    name: string,
    description: string,
    image: string
    index: number
    message: string

}

function ProjectCard({ link, name, description, image, message, index }: projectProps) {




    return (
        <AnimatePresence >
            <div className=' xl:even:transform xl:even:translate-y-80'>
                <motion.div initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1 * index,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }}
                    viewport={{ once: true, amount: 0.01 }}  >
                    <Link href={link} target='_blank' className=' cursor-pointer ' >


                        <div className=' flex  overflow-hidden' >

                            <Image src={`/projectimages/${image}`} alt="My image"

                                width={500}
                                height={500}


                                className='rounded-md relative max-w-[500px] max-h-[500px] '>
                            </Image>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h2 className=' text-2xl mt-8  max-w-[500px] '>
                                {name}                </h2>
                            <p className='   max-w-[500px]'> {description}</p>

                        </div>
                    </Link >
                </motion.div>
            </div>



        </AnimatePresence>

    )
}

export default ProjectCard