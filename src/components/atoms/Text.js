import styled, { css } from 'styled-components'

export default styled.p`
font-family: var(--primary-font);
font-style: normal;
font-weight: ${props => props.bold ? '600' : 'normal'};
font-size: ${props => props.small ? '21px' : props.xsmall ? '16px' : '25px'};
text-align: ${ props => props.center ? 'center' :  props.right ? 'right' : 'left'};
line-height: 40px;
color: ${ props => props.grey ? 'var(--grey-color)' : props.light ? 'var(--white-color)' : 'var(--dark-color)'};

a {
    color: inherit;
}

${props => props.desc && css`
    max-width: 39ch;
    margin-bottom: 64px;
`}

${props => props.column && css`
    text-align: justify;
    column-gap: 32px;
    column-count: 2;
    margin: 0px 0 32px 0;
`}

${props => props.shortdesc && css`
    width: 295px;
`}

@media screen and (max-width: 1400px) {
${props => props.column && css`
    column-gap: 0;
    column-count: auto;
    max-width: 39ch;
    text-align: center;
    margin: 0px 0 32px 0;
`}
  }
`
