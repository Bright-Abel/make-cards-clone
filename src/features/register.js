import { createSlice } from '@reduxjs/toolkit';
import { handleChange } from './contSlice';

const initialState = {
  viewID: 1,
  isModalOpen: false,
  consent: false,
  camera: null,
  BVN: '',
  verificationID: 1,
  arrayID: [],
};

const register = createSlice({
  name: 'cont',
  initialState,
  reducers: {
    changeView: (state, { payload }) => {
      state.viewID = payload;
      state.arrayID.push(payload);
    },
    modalHandler: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    handleInput: (state) => {
      state.consent = !state.consent;
    },
    handleCamera: (state, { payload }) => {
      state.camera = payload;
    },
    handleUserInput: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    handleVerificationID: (state, { payload }) => {
      state.verificationID = payload;
    },
  },
});

export const {
  changeView,
  modalHandler,
  handleInput,
  handleCamera,
  handleUserInput,
  handleVerificationID,
} = register.actions;
export default register.reducer;
