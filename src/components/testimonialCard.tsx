import React from 'react'
import Image from 'next/legacy/image'
import { motion } from 'framer-motion'

interface testimonialProps {
    copy: string,
    image: string,
    name: string,
    post: string,
    index: number,
}


function TestimonialCard({ copy, image, name, post, index }: testimonialProps) {
    return (
        <motion.div className='grid  gap-0 items-start justify-start -z-20' initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.1 * index,
                duration: 0.3, type: "spring", stiffness: 260,
                damping: 40
            }} viewport={{ once: true, amount: 0.03 }}>


            <div className='flex gap-3'>
                <div className="profile rounded-full overflow-hidden -z-20 w-[50px] h-[50px]">
                    <Image src={`/testimonialImages/${image}`} width={90} height={90} />
                </div>
                <div>
                    <h3 className=''>{name}</h3>
                    <p>{post}</p>
                </div>




            </div>

            <p className='mt-8'>{copy}</p>





        </motion.div>
    )
}

export default TestimonialCard