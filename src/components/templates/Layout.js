import React from 'react'
import { motion } from "framer-motion"
import { Footer } from '..'
import '../../styles/global.css'

export default function Layout({ children, hide }) {
    return (
        <div>
            <motion.main
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{
            delayChildren: 0.5,
            type: "Spring",
            mass: 0.2,
            stiffness: 40,
            duration: 0.3,
          }} className="main">
          {children}
        </motion.main>
    <Footer hide={hide} />
      </div>
    )
}
