'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import ProjectCard from './projectCard'
import { GetServerSideProps } from 'next';
import { type } from 'os';
import { gql, useQuery, ApolloProvider } from "@apollo/client"
import client from '../../lib/apollo';






// const GET_ALL_PROJECTS = gql`
// query NewQuery {
//   projects {
//     nodes {
//       databaseId
//       title
//       projects {
//         description
//         link
//         id
//         messsage
//         image {
//           title
//           sourceUrl
//         }
//       }
//     }
//   }
// }`

interface ProjectNode {
    databaseId: number;
    title: string;
    projects: {
        description: string;
        link: string;
        id: string;
        messsage: string;
        image: {
            title: string;
            sourceUrl: string;
        };
    }[];
}




function ProjectCollections({ projects }: { projects: ProjectNode[] }) {


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








    return (

        <div className='flex flex-wrap gap-y-20 justify-between '>

            {projects !== null && projects?.map((product: any) => (
                <ProjectCard
                    setMessage={setMessage}
                    setCursorVariant={setCursorVariant}
                    message={product.projects.messsage}
                    key={product.databaseId}
                    name={product.title}
                    description={product.projects.description}
                    link={product.projects.link}
                    image={product.projects.image.sourceUrl}
                    index={product.projects.id} />
            )
            )}

            Here lie the jason
            {JSON.stringify(projects)}




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



const MY_QUERY = gql`
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
  }
`;
export default ProjectCollections


export async function getStaticProps() {


    const GET_PROJECTS = gql`
        query getAllProjects {
        projects {
            nodes {
            
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
        }

`
    const reponse = await client.query({ query: GET_PROJECTS })
    const projects = reponse?.data?.projects?.nodes
    return {
        props: { projects }
    }
}

