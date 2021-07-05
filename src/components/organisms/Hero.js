import styled from "styled-components";

export default styled.section`
  position: relative;
  padding: 0 32px;
  background-color: ${props => props.dark ? 'var(--secondary-color)' : 'var(--primary-color'};
  height: 100vh;

  @media screen and (min-width: 767px) and (max-width: 1400px) {
    height: 650px;
  }

  @media screen and (min-width: 1500px) {
    padding: 0 64px;
  }
`