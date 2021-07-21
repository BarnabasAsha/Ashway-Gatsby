import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    justify-content: ${props => props.between ? 'space-between' : 'center'};
    align-items: center;
    flex-wrap: ${props => props.nowrap ? 'nowrap' : 'wrap'};
    margin: 0 auto;
`