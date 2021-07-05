import React from 'react'
import { Footer } from '..'
import '../../styles/global.css'

export default function Layout({ children }) {
    return (
            <main style={{overflowX: 'hidden'}}>
            {
                children
            }
            <Footer />
            </main>
    )
}
