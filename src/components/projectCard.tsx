import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'


interface projectProps {
    link: string,
    name: string,
    description: string,
    image: string

    message: string

}

function ProjectCard({ link, name, description, image, message }: projectProps) {




    return (
        <Link href={link} target='_blank' className=' cursor-pointer xl:even:transform xl:even:translate-y-80' >


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
    )
}

export default ProjectCard