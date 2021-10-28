import styled from 'styled-components'

export default styled.h1`
    position: relative;
    font-family: var(--heading-font);
    font-style: normal;
    font-weight: bold;
    font-size: min(max(3rem, 4vw), 65px);
    text-align: center;
    line-height: min(max(3.8rem, 4vw), 80px);
    color: ${ props => props.light ? '#ffffff' : props.variant ? 'var(--tertiary-color)' : 'var(--secondary-color)'};
    margin-bottom: 18px;
    z-index: 10;
    max-width: 18ch;

    span {
      display: inline-block;
    }

    @media screen and (min-width: 1400px) {
    text-align: ${props => props.center ? 'center' : 'left'};

  }
`
