import React from 'react'


interface projectProps {

    name: string,
    description: string,


    subskills: string[],

}

function Skillcard({ subskills, name, description }: projectProps) {




    return (


        <div className='flex flex-col gap-3'>
            <h2 className=' text-2xl mt-8  max-w-[500px] '>
                {name}                </h2>
            <p className='   max-w-[500px]  flex-wrap'> {description}</p>
            <div className='flex flex-wrap gap-3 max-w-[500px] '>
                {subskills.map(subskill => <p className='text-gray-400 bg-[#24262B] flex w-fit rounded-full px-4 p-1 text-sm'>{subskill}</p>)}

            </div>

        </div>

    )
}

export default Skillcard