'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import { type } from 'os';
import { gql, useQuery } from "@apollo/client"

const GET_ALL_PROJECTS = gql`
query NewQuery {
  projects {
    nodes {
      databaseId
      title
      projects {
        description
        link
        id
        messsage
        image {
          title
          sourceUrl
        }
      }
    }
  }
}`





function ProjectCollections() {
    const [message, setMessage] = useState('')
    const [cursorVariant, setCursorVariant] = useState("default");
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });



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

    const { loading, error, data } = useQuery(GET_ALL_PROJECTS)
    if (loading) return <p>Loading posts…</p>;
    if (error) return <p>Error</p>;

    const postsFound = Boolean(data?.projects.nodes.length);
    if (!postsFound) {
        return <p>No matching posts found.</p>;
    }








    return (
        <div className='flex flex-wrap gap-y-20 justify-between '>
            {data.projects.nodes !== null && data.projects.nodes.map((product: any) => (
                <ProjectCard
                    setMessage={setMessage}
                    setCursorVariant={setCursorVariant}
                    message={product.projects.messsage}
                    key={product.databaseId}
                    name={product.title}
                    description={product.projects.description}
                    link={product.projects.link}
                    image={product.projects.image.sourceUrl}
                    index={product.projects.id} />)
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


