import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
    position: relative;
    font-size: 1.5rem;
    line-height: 1.8rem;
    text-transform: capitalize;
    font-weight: 600;
    z-index: 70;
`

export default function Logo() {
    return (
        <Banner role="banner">
            ASHWAY
        </Banner>
    )
}
