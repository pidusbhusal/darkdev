import ProjectCollections from '@/components/projectColletions'
import React from 'react'

function Work() {
    return (
        <div className="work  block relative sm:pb-40    sm:pt-20">
            <div className="container">
                <span className="location tracking-widest ">
                    PORTFOLIO
                </span>
                <h2 className=' text-2xl  mt-1  max-w-[500px] '>
                    Projects</h2>
                <p className='max-w-xl leading-normal mt-4'>My passion lies in crafting immersive experiences that seamlessly blend form and function. From intuitive interfaces to visually stunning designs, I strive to create solutions that not only captivate, but also serve a purpose. </p>

                <div className='my-20 xl:mb-60'>
                    <ProjectCollections />
                </div>

            </div>

        </div>
    )
}

export default Work