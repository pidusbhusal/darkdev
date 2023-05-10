import React from 'react'
import ProjectCard from './projectCard'
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
        link: "https://www.behance.net/gallery/156320125/Sunrise-Ecommerce",
        image: "HMS.webp",
        message: "Under Construction"
    },
]

function ProjectCollections() {

    return (
        <div className='flex flex-wrap gap-y-20 justify-between '>{projects.map((project) => <ProjectCard message={project.message} key={project.key} name={project.name} description={project.description} link={project.link} image={project.image} index={project.key} />)}</div>
    )
}

export default ProjectCollections