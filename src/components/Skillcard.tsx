import React from 'react'
import { motion } from 'framer-motion'


interface projectProps {

    name: string,
    description: string,


    subskills: string[],

}

function Skillcard({ subskills, name, description }: projectProps) {




    return (


        <motion.div className='flex flex-col gap-3 pb-8' initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.6,
                duration: 0.3, type: "spring", stiffness: 260,
                damping: 40
            }} viewport={{ once: true, amount: 0.1 }}>
            <h2 className=' text-2xl mt-8  max-w-[500px] '>
                {name}                </h2>
            <p className='   max-w-[500px]  flex-wrap'> {description}</p>
            <div className='flex flex-wrap gap-3 max-w-[500px] '>
                {subskills.map(subskill => <p className='text-gray-400 bg-[#24262B] flex w-fit rounded-full px-4 p-1 text-md'>{subskill}</p>)}

            </div>

        </motion.div>

    )
}

export default Skillcard