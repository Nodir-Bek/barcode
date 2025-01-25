import styled from 'styled-components';

type Modal = {
  $show?: string;
  overflow?: string;
  $maxwidth?: string;
  $maxheight?: string;
  $showmodal?: string;
};

export const Container = styled.div<Modal>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ $show }) => ($show === 'true' ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: auto;
  z-index: 1000;
  transition: all 0.3s ease-in;
  transition-property: display;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Content = styled.div<Modal>`
  background: white;
  border-radius: 15px;
  box-shadow: black;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
  box-shadow: -4px 1px 22px -6px rgba(0, 0, 0, 0.36);
  overflow: ${({ overflow }) => (overflow ? 'unset' : 'hidden')};
  max-width: ${({ $maxwidth }) => $maxwidth || 'unset'};
  width: ${({ $maxwidth }) => ($maxwidth ? '-webkit-fill-available' : 'unset')};
  max-height: 90%;

  /* overflow-y: auto; */
  @media screen and (max-width: 768px) {
    max-width: 80vw;
  }

  animation: ${({ $showmodal }) =>
    $showmodal === 'true'
      ? 'modalEnter 0.3s alternate'
      : 'modalLeave 0.3s alternate'};
  transition: opacity 0.5s;
  opacity: ${({ $showmodal }) => ($showmodal === 'true' ? 1 : 0)};

  @keyframes modalLeave {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-100%);
    }
  }

  @keyframes modalEnter {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Header = styled.div`
  height: 55px;
  border-radius: 8px 8px 0px 0px;
  background: white;
  display: flex;
  border-bottom: 1px solid #ebebf3;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: none;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;
  &:focus {
    outline: none;
    background: #f8f8f8;
  }
  &:hover {
    background: #f8f8f8;
  }
`;

export const Body = styled.div<Modal>`
  position: relative;
  max-height: ${({ $maxheight }) => $maxheight && $maxheight};
  overflow: ${({ overflow }) => (overflow ? overflow : 'hidden auto')};
  padding: 10px 0px;
  transition: max-height 0.3s ease-in;
  &::-webkit-scrollbar-track {
    margin-bottom: 10px;
  }
`;

export const CloseIcon = styled.img``;
