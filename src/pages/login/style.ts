import  styled  from "styled-components";
import bgImage from "../../assets/images/magazin_bg.jpg";

export const LoginWrapper = styled.div`
background:url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;

  /* Glass effect blur background */
  &::before {
    content: "";    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    z-index: 1;
    }

    .form{
        z-index: 10;
    }
`;