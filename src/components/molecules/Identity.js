import styled from "styled-components";

export default styled.div`
    img {
        width: 140px;
        margin-bottom: 10px;
    }
    width: 300px;
    height: 245px;
    margin: 20px 0;
    padding: 18px;

    @media screen and (max-width: 500px) {
        width: 250px;
        height: 200px;
    img {
        width: 100px;
    }
}
`