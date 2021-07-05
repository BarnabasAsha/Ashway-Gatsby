import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin: 18px;
`

export default function Image({ children }) {
    return (
        <ImageWrapper>
            { children }
        </ImageWrapper>
    )
}
