import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BluredState,
  hide,
  modalCloseAnimate,
  show,
} from '../redux/modules/modal';
import { RootState } from '@/redux/store';

export const useModal = () =>
  useSelector((state: RootState) => state.modalClice);

export const useShowModal = () => {
  const dispatch = useDispatch();

  const showBlured = useCallback(
    (props: BluredState) => {
      dispatch(show({ ...props }));
      dispatch(modalCloseAnimate(true));
    },
    [dispatch]
  );

  return { showBlured };
};

export const useHideModal = () => {
  const dispatch = useDispatch();

  const hideModal = useCallback(() => {
    dispatch(modalCloseAnimate(false));
    setTimeout(() => {
      dispatch(hide());
    }, 300);
  }, [dispatch]);

  return { hideModal };
};
