import React from 'react'
import { motion } from 'framer-motion'

interface socialbuttonprops {
    icon: JSX.Element;
    name: string;
    link: string;
    alt: string;
    index: number;
}

// mailto:${ link }

export default function Social_button({ icon, name, link, alt, index }: socialbuttonprops) {
    return (
        alt === "mail icon" ? (
            <div>
                <motion.a href={`mailto:${link}`} initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1 * index,
                        duration: 0.3, type: "spring", stiffness: 260,
                        damping: 40
                    }} target='_top' className='flex justify-between  w-full  sm:max-w-[19rem]  px-6 py-4 hover:scale-105 transition ease-in-out  border-[1px] rounded border-slate-700 shadow-gray-800 bg-[#181A1E]  '>

                    <div className='flex  gap-3'>
                        {icon}
                        <p className='font-reg'>{name}</p>
                    </div>
                    <div className='group-hover:-rotate-45 transition-all ease-in-out'>
                        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.7318" cy="13.0001" r="11.6139" transform="rotate(-90 12.7318 13.0001)" stroke="white" strokeWidth="1.31001" />
                            <path d="M15.2012 12.5213C14.8394 12.5213 14.5462 12.8145 14.5462 13.1763C14.5462 13.538 14.8394 13.8313 15.2012 13.8313L15.2012 12.5213ZM15.9918 13.6394C16.2476 13.3836 16.2476 12.9689 15.9918 12.7131L11.8234 8.5447C11.5676 8.2889 11.1529 8.2889 10.8971 8.5447C10.6413 8.80049 10.6413 9.21522 10.8971 9.47101L14.6024 13.1763L10.8971 16.8815C10.6413 17.1373 10.6413 17.552 10.8971 17.8078C11.1529 18.0636 11.5676 18.0636 11.8234 17.8078L15.9918 13.6394ZM15.2012 13.8313L15.5287 13.8313L15.5287 12.5213L15.2012 12.5213L15.2012 13.8313Z" fill="white" />
                        </svg>

                    </div>
                </motion.a>
            </div>

        ) : (<div>
            <motion.a initial={{ opacity: 0, scale: 1.1, }}
                animate={{ opacity: 1, scale: 1, }}
                transition={{
                    delay: 0.1 * index,
                    duration: 0.3, type: "spring", stiffness: 260,
                    damping: 40
                }} href={link} target='_blank' className='flex justify-between group w-full sm:w-[19rem] px-6 py-4 hover:scale-105 transition ease-in-out  border-[1px] rounded border-slate-700 shadow-gray-800 bg-[#181A1E]  '>

                <div className='flex  gap-3'>
                    {icon}
                    <p className='font-reg'>{name}</p>
                </div>
                <div className='group-hover:-rotate-45 transition-all ease-in-out'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.7318" cy="13.0001" r="11.6139" transform="rotate(-90 12.7318 13.0001)" stroke="white" strokeWidth="1.31001" />
                        <path d="M15.2012 12.5213C14.8394 12.5213 14.5462 12.8145 14.5462 13.1763C14.5462 13.538 14.8394 13.8313 15.2012 13.8313L15.2012 12.5213ZM15.9918 13.6394C16.2476 13.3836 16.2476 12.9689 15.9918 12.7131L11.8234 8.5447C11.5676 8.2889 11.1529 8.2889 10.8971 8.5447C10.6413 8.80049 10.6413 9.21522 10.8971 9.47101L14.6024 13.1763L10.8971 16.8815C10.6413 17.1373 10.6413 17.552 10.8971 17.8078C11.1529 18.0636 11.5676 18.0636 11.8234 17.8078L15.9918 13.6394ZM15.2012 13.8313L15.5287 13.8313L15.5287 12.5213L15.2012 12.5213L15.2012 13.8313Z" fill="white" />
                    </svg>

                </div>
            </motion.a>
        </div>)
    )
}
