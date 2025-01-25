import {
  Container,
  Content,
  Header,
  Title,
  CloseButton,
  Body,
} from './style';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useHideModal, useModal } from './../../hooks/useModal';

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const { blured: modal } = useModal();
  const { hideModal } = useHideModal();
  const { loading, modalClose } = useSelector(
    (state: RootState) => state.modalClice
  );

  const handleCloseModal = () => {
    hideModal();
  };

  return (
    <Container $show={`${modal.show}`}>
      <Content
        $maxwidth={`${modal.maxWidth}`}
        $showmodal={`${modalClose}`}
      >
        {modal.withHeader === false ? null : (
          <Header>
            <Title className='noselect'>{modal.title || ''}</Title>
            <CloseButton onClick={handleCloseModal}>
              <IoIosCloseCircleOutline color={"#ee8208"} size={30} />
            </CloseButton>
          </Header>
        )}
        <Body
          $maxheight={`${modal.maxHeight}`}
          overflow={modal.overflow ? `${modal.overflow}` : ''}
        >
          {loading ? (
            <h6>Loading...</h6>
          ) : (
            (modal?.body && <modal.body />) || 'Body'
          )}
        </Body>
      </Content>
    </Container>
  );
};
