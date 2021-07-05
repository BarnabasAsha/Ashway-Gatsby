import styled, { css } from 'styled-components'

export default styled.button`
    width: 200px;
    height: 50px;
    border: 2px solid ${ props => props.light ? 'var(--white-color)' : 'var(--secondary-color)'};
    background-color: ${ props => props.light ? 'var(--white-color)' : 'var(--secondary-color)'};
    color: ${ props => props.light ? 'var(--dark-color)' : 'var(--white-color)'};
    border-radius: 40px;
    font-family: var(--primary-font);
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear .6s;

    &:hover {
    color: ${ props => props.light ? 'var(--white-color)' : 'var(--dark-color)'};  
    background-color: ${ props => props.light ? 'var(--dark-color)' : 'var(--white-color)'};   
    }

    ${props => props.marginTop && css`
    margin-top: 64px;
`}
`
