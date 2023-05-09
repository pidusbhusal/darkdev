import React from 'react'


function ContactForm() {
    return (
        <div className='flex-grow relative '>

            <form action="" className=' flex flex-grow flex-col -z-10'>
                <div className='flex flex-col gap-y-1 flex-grow'>
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" required placeholder='Enter your name' className=' mt-2 bg-gray-900 flex-grow py-4 px-4 border border-gray-600 rounded-md' />
                </div>
                <div className='grid gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="email">Ways for contact you*</label>
                    <input type="text" id="email" required placeholder='Email or social media link' className='bg-gray-900  mt-2 py-4 px-4 border border-gray-600 rounded-md' />
                </div>
                <div className='grid gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" required placeholder='Subject' className='bg-gray-900 mt-2  py-4 px-4 border border-gray-600 rounded-md' />
                </div>
                <div className='grid items-stretch gap-y-1 flex-grow  mt-6'>
                    <label htmlFor="mesasge">Message</label>
                    <textarea required placeholder='Message' id="message" className='bg-gray-900 py-4 mt-2  px-4 border border-gray-600 rounded-md w-full h-[120px]  ' />
                </div>
                <div className='grid w-full place-items-end flex-grow'>
                    <button className='pbtn w-fit mt-8'>Send Message</button>
                </div>

            </form>
        </div>
    )
}

export default ContactForm