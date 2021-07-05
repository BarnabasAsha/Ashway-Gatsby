import styled from 'styled-components'

export default styled.h1`
    font-family: var(--heading-font);
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    text-align: ${props => props.center ? 'center' : 'left'};
    line-height: 80px;
    color: ${ props => props.light ? '#ffffff' : 'var(--secondary-color)'};
    margin-bottom: 18px;
`
