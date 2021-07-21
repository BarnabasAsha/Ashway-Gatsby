import styled from "styled-components";

export default styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 72px 0;

    @media screen and (max-width: 500px) {
        padding: 50px 0;
    }
`