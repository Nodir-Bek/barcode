import bgImage from "../../assets/images/magazin_bg.jpg";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 10;

    &::before {
    content: "";    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    z-index: -1;
    }

    .body{
        z-index: 10;
       
    }
`