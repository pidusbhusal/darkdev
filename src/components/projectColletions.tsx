'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import ProjectCard from './projectCard'
import { type } from 'os';



function ProjectCollections() {

    const [products, setProducts] = useState(null);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:1337/api/projects?populate=*");
            const data = await response.json();
            setProducts(data.data);

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
        {products !== null && products.map((product: any) => (
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


