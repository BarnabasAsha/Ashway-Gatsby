import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
position: absolute;
width: 100%;
height: 165px;
left: 0;
top: 80px;
text-align: center;
margin: 0 auto;
font-family: var(--primary-font);
font-style: normal;
font-weight: 800;
font-size: 140px;
line-height: 204px;
letter-spacing: 0.35em;
color: rgba(141, 140, 140, 0.4);   
pointer-events: none;

@media screen and (max-width: 700px) {
    font-size: 100px;
}
`
export default function Watermark() {
    return (
        <Text>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.5, duration: 1,}}>
                A
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.8, duration: 1,}}>
                S
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1, duration: 1,}}>
                H
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1.3, duration: 1,}}>
                W
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1.5, duration: 1,}}>
                A
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 1.8, duration: 1,}}>
                Y
            </motion.span>
        </Text>
    )
}
