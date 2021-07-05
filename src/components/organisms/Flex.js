import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
`