import styled from 'styled-components'

export default styled.h2`
    font-family: var(--heading-font);
    font-weight: 600;
    font-size: 51px;
    font-size: min(max(2.4rem, 4vw), 51px);
    line-height: min(max(3.1rem, 4vw), 70px);
    text-align: center;
    color: ${ props => props.light ? '#ffffff' : props.variant ? 'var(--tertiary-color)' : 'var(--secondary-color)'};
    margin-bottom: 40px;
    width: 100%;
    max-width: 560px;
`
