import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './navbar'
import Footer from './footer';
import { motion } from "framer-motion";
import { ApolloProvider } from '@apollo/client';
import Client from "../../lib/apollo"
export default function App({ Component, pageProps, router }: AppProps) {




  return (
    <ApolloProvider client={Client}>


      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3, type: "spring", stiffness: 260,
          damping: 40
        }} className=' sticky top-0 z-50 opacity-1'>
        <Navbar />
      </motion.div>


      <motion.div key={router.route} initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5, type: "spring", stiffness: 2300,
          damping: 70
        }} >
        <Component {...pageProps} />
        <Footer />
      </motion.div>



    </ApolloProvider>)

}
