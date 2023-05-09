import React from 'react'
import Image from 'next/legacy/image'

interface testimonialProps {
    copy: string,
    image: string,
    name: string,
    post: string
}


function TestimonialCard({ copy, image, name, post }: testimonialProps) {
    return (
        <div className='grid  gap-0 items-start justify-start -z-20'>


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





        </div>
    )
}

export default TestimonialCard