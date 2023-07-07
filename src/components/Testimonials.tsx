import React from 'react'
import { useEffect, useState } from 'react'
import TestimonialCard from './testimonialCard'
import { motion } from 'framer-motion'
import { gql, useQuery } from "@apollo/client"




function Testimonials() {
    const [testimonials, setTestimonials] = useState([])


    const GET_ALL_PROJECTS = gql`
        query NewQuery {
            testimonials {
                nodes {
                title
                testimonials {
                    description
                    post
                    image {
                    sourceUrl
                    }
                }
                databaseId
                }
            }
            }`

    const { loading, error, data } = useQuery(GET_ALL_PROJECTS)
    if (loading) return <p>Loading posts…</p>;
    if (error) return <p>Error</p>;

    const postsFound = Boolean(data?.testimonials.nodes.length);
    if (!postsFound) {
        return <p>No matching posts found.</p>;
    }






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
                {data.testimonials.nodes != null && data.testimonials.nodes.map((testimonial: any) => <TestimonialCard key={testimonial.databaseId} index={testimonial.databaseId} name={testimonial.title} post={testimonial.testimonials.post} copy={testimonial.testimonials.description} image={testimonial.testimonials.image.sourceUrl} />)}
            </div>
        </div>
    )
}

export default Testimonials