import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './navbar'
import Footer from './footer';
import { motion } from "framer-motion";
export default function App({ Component, pageProps }: AppProps) {




  return (<div>
    <motion.div initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3, type: "spring", stiffness: 260,
        damping: 40
      }} className=' sticky top-0 z-50 opacity-1'>
      <Navbar />
    </motion.div>

    <Component {...pageProps} />
    <div>
      <Footer />
    </div>
  </div>)

}
