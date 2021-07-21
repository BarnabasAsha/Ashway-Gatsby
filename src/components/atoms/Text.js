import styled, { css } from "styled-components"

export default styled.p`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: ${props => (props.bold ? "600" : "normal")};
  font-size: ${props =>
    props.small ? "min(max(16px, 4vw), 18px)" : props.xsmall ? "min(max(14px, 4vw), 16px)" : "min(max(18px, 4vw), 21px)"};
  text-align: ${props =>
    props.center ? "center" : props.right ? "right" : "left"};
  line-height: ${props => props.xsmall ? "min(max(23px, 4vw), 25px)" : "min(max(30px, 4vw), 35px)"};
  color: ${props =>
    props.grey
      ? "var(--grey-color)"
      : props.light
      ? "var(--white-color)"
      : props.variant
      ? "var(--tertiary-color)"
      : "var(--dark-color)"};

  a {
    color: inherit;
  }

  span {
    display: inline-block;
  }

  ${props =>
    props.caps &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.desc &&
    css`
      max-width: 39ch;
      margin-bottom: 64px;
    `}

  ${props =>
    props.column &&
    css`
      text-align: justify;
      column-gap: 32px;
      column-count: 2;
      margin: 0px 0 32px 0;
    `}

${props =>
    props.shortdesc &&
    css`
      width: 295px;
    `}

@media screen and (max-width: 1400px) {
    ${props =>
      props.column &&
      css`
        column-gap: 0;
        column-count: auto;
        max-width: 39ch;
        text-align: center;
        margin: 0px 0 32px 0;
      `}
  }
`
