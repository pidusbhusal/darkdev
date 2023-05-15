'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import ProjectCard from './projectCard'
import { type } from 'os';
const projects = [
    {
        key: 1,
        name: 'Sunrise E-commerce',
        description: " Mobile App design for Ecommerce Company which sells wide range of products. I was tasked with designing a interactive mobile app with prototype and interaction animations",
        link: "https://www.behance.net/gallery/156320125/Sunrise-Ecommerce",
        image: "sunrise.webp",
        message: "Read Case Study"
    },
    {
        key: 2,
        name: 'Portfolio for Full Stack Developer',
        description: "Aashan Ghimire, a Full Stack Developer, approached me with a unique project. He was seeking a website that would showcase his impressive skills and years of experience that he has amassed throughout his career. My task was to create a User-Friendly design, and develop a front-end template with interactive features using Framer.js. Together, we crafted a website that truly captures the essence of Aashan's expertise and passion for his work.",
        link: "https://aashan.dev/",
        image: "devport.webp",
        message: "Visit Website"
    },
    {
        key: 3,
        name: 'Logo for Docucontext - AI powered document processing.',
        description: "I was asked to design a logo for - Docucontext, a cloud-native document processing solution powered by AI. With the challenge at hand, I crafted a logo that effectively embodies the essence of Docucontext's purpose and functionalities.",
        link: "https://www.behance.net/gallery/165471227/Document-Scanner-App-Logo",
        image: "doccontext.webp",
        message: "Read Case Study"
    },
    {
        key: 4,
        name: 'Tuna HMS',
        description: " Mobile App design for Ecommerce Company which sells wide range of products. I was tasked with designing a interactive mobile app with prototype and interaction animations",
        link: " ",
        image: "HMS.webp",
        message: "Under Construction"
    },
]

function ProjectCollections() {

    const [products, setProducts] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:1337/api/projects?populate=*");
            const data = await response.json();
            setProducts(data.data);
            console.log(data.data);
        }

        fetchData();
    }, []);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    const [message, setMessage] = useState('')


    useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 0,
            width: 0,
            opacity: 0,
        },
        text: {
            opacity: 1,
            height: 150,
            width: 150,
            x: mousePosition.x - 70,
            y: mousePosition.y - 70,
            backgroundColor: "white",

        }
    }


    return (
        <div className='flex flex-wrap gap-y-20 justify-between '>
            {products !== null && products?.map((product: any) => (
                <ProjectCard
                    setMessage={setMessage}
                    setCursorVariant={setCursorVariant}
                    message={product.attributes.message}
                    key={product.attributes.key}
                    name={product.attributes.name}
                    description={product.attributes.description}
                    link={product.attributes.link}
                    image={product.attributes.imageurl}
                    index={product.id} />)
            )}

            <motion.div
                className='cursor z-20  overflow-hidden  '
                variants={variants}
                animate={cursorVariant}
                transition={{ type: "spring", mass: 0.01 }}

            >
                <div className='w-28 text-mid text-black text-center '>
                    {message}
                </div>

            </motion.div></div>

    )
}





export default ProjectCollections


