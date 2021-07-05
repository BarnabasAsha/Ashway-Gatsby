import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
position: absolute;
width: 958px;
height: 165px;
left: 241px;
top: 80px;
font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 150px;
line-height: 204px;
letter-spacing: 0.35em;
color: rgba(141, 140, 140, 0.4);   
pointer-events: none;
`
export default function Watermark() {
    return (
        <Text>ASHWAY</Text>
    )
}
