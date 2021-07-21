import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin: 10px;
    overflow: hidden;

    img {
        transition: transform ease-in .6s !important;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 500px) {
    width: 140px;
    height: 140px;
}
`

export default function Image({ children }) {
    return (
        <ImageWrapper>
            { children }
        </ImageWrapper>
    )
}
