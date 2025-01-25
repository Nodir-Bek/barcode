import { createSlice } from '@reduxjs/toolkit';

export interface BluredState {
  show?: boolean;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
  overflow?: boolean;
  withHeader?: boolean;
  body?: () => React.ReactNode;
}
export interface ModalState {
  loading: boolean;
  id: string | undefined;
  blured: BluredState;
  modalClose: boolean;
}

const initialState: ModalState = {
  id: undefined,
  blured: {
    show: false,
  },
  loading: false,
  modalClose: false,
};

export const modalSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    show: (state, { payload }) => {
      state.blured = {
        show: true,
        ...payload,
      };
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    hide: (state) => {
      state.blured = { show: false };
    },
    modalCloseAnimate: (state, { payload }) => {
      state.modalClose = payload;
    },
  },
});

export const { hide, setLoading, show, modalCloseAnimate } = modalSlice.actions;
export default modalSlice.reducer;
