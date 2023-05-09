import React from 'react'
import ContactForm from '@/components/contactForm'
import SocialLinks from '@/components/socialslink'
function Footer() {
    return (
        <div className='bg-[#060707] py-28  relative ' >
            <div className="container flex flex-wrap gap-24 justify-between">
                <div>
                    <div className="flex gap-1  flex-col ">
                        <span className="location tracking-widest ">
                            CONTACT
                        </span>
                        <h2 className=' text-2xl   max-w-[500px] '>
                            Get in touch</h2>
                        <p className='max-w-xs mt-3'>Tell us about your product, your timeline, how you heard about us, and where you're located.
                        </p>
                        <p className='max-w-xs mt-1'> We read every message. So, thanks in advance for making it a good one.</p>
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