import styled from 'styled-components'

export default styled.h2`
    font-family: var(--heading-font);
    font-weight: 600;
    font-size: 51px;
    line-height: 70px;
    text-align: center;
    color: ${ props => props.light ? '#ffffff' : 'var(--secondary-color)'};
    margin-bottom: 54px;
    width: 560px;
`
