import React from 'react'
import TestimonialCard from './testimonialCard'
import { motion } from 'framer-motion'
const testimonialDate = [
    {
        key: 1,
        name: "Ajay Khatri",
        post: "UI UX Designer | Front End Develper",
        description: "I’ve had the pleasure of working with many professionals in our line of work, but Sudip is someone who I will always remember fondly. Sudip consistently gave 100% of himself to every project we worked on. His work ethic was impeccable, and he was always the first person to offer help and support. His ability to overcome challenges with a smile made him stand out as a cut above the rest!"
        ,
        image: "ajay.jpg",
    },
    {
        key: 2,
        name: "Ajay Khatri",
        post: "UI UX Designer | Front End Develper",
        description: "I’ve had the pleasure of working with many professionals in our line of work, but Sudip is someone who I will always remember fondly. Sudip consistently gave 100% of himself to every project we worked on. His work ethic was impeccable, and he was always the first person to offer help and support. His ability to overcome challenges with a smile made him stand out as a cut above the rest!"
        ,
        image: "ajay.jpg",
    },
    {
        key: 3,

        name: "Ajay Khatri",
        post: "UI UX Designer | Front End Develper",
        description: "I’ve had the pleasure of working with many professionals in our line of work, but Sudip is someone who I will always remember fondly. Sudip consistently gave 100% of himself to every project we worked on. His work ethic was impeccable, and he was always the first person to offer help and support. His ability to overcome challenges with a smile made him stand out as a cut above the rest!"
        ,
        image: "ajay.jpg",
    },
]


function Testimonials() {
    return (
        <div className='py-40'>
            <div className="container relative grid justify-center ">
                <motion.span className="location tracking-widest text-center " initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }}>
                    ABOUT ME
                </motion.span>
                <motion.h2 className=' text-2xl font-Reg  max-w-[500px] ' initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} viewport={{ once: true, amount: 0.01 }}>
                    Recomendation </motion.h2>
            </div>
            <div className="testimonials grid md:grid-cols-3 mt-20   gap-14 md:gap-10">
                {testimonialDate.map((testimonial) => <TestimonialCard key={testimonial.key} index={testimonial.key} name={testimonial.name} post={testimonial.post} copy={testimonial.description} image={testimonial.image} />)}
            </div>
        </div>
    )
}

export default Testimonials