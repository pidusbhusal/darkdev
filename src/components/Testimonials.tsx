import React from 'react'
import TestimonialCard from './testimonialCard'
const testimonialDate = [
    {
        name: "Ajay Khatri",
        post: "UI UX Designer | Front End Develper",
        description: "I’ve had the pleasure of working with many professionals in our line of work, but Sudip is someone who I will always remember fondly. Sudip consistently gave 100% of himself to every project we worked on. His work ethic was impeccable, and he was always the first person to offer help and support. His ability to overcome challenges with a smile made him stand out as a cut above the rest!"
        ,
        image: "ajay.jpg",
    },
    {
        name: "Ajay Khatri",
        post: "UI UX Designer | Front End Develper",
        description: "I’ve had the pleasure of working with many professionals in our line of work, but Sudip is someone who I will always remember fondly. Sudip consistently gave 100% of himself to every project we worked on. His work ethic was impeccable, and he was always the first person to offer help and support. His ability to overcome challenges with a smile made him stand out as a cut above the rest!"
        ,
        image: "ajay.jpg",
    },
    {
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
                <span className="location tracking-widest text-center ">
                    ABOUT ME
                </span>
                <h2 className=' text-2xl font-Reg  max-w-[500px] '>
                    Recomendation </h2>
            </div>
            <div className="testimonials grid md:grid-cols-3 mt-20   gap-14 md:gap-10">
                {testimonialDate.map((testimonial) => <TestimonialCard name={testimonial.name} post={testimonial.post} copy={testimonial.description} image={testimonial.image} />)}
            </div>
        </div>
    )
}

export default Testimonials