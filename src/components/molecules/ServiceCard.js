import React from 'react'
import styled from 'styled-components'
import { Text } from '..'

const Card = styled.div`
    background-color: var(--white-color);
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 12px;
    border-radius: 8px;
    box-shadow: 0 10px 10px rgba(0,0,0,.05);

    img {
        width: auto;
        margin-bottom: 15px;
    }
`

export default function ServiceCard(props) {
    const { title, description, icon } = props
    return (
        <Card>
           <img src={icon} alt={title} /> 
           <Text small bold caps>
                {title}
           </Text>
           <Text xsmall>
           {description}
           </Text>
        </Card>
    )
}
