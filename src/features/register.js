import { createSlice } from '@reduxjs/toolkit';
import { handleChange } from './contSlice';

const initialState = {
  viewID: 1,
  isModalOpen: false,
  consent: false,
  camera: null,
  BVN: '',
  verificationID: 1,
  arrayID: [1],
};

const register = createSlice({
  name: 'cont',
  initialState,
  reducers: {
    changeView: (state, { payload }) => {
      state.viewID = payload;
      state.arrayID = [...state.arrayID, payload];
      // let dataToRemove =
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
    removeDataFromArray: (state, { payload }) => {
      if (payload >= 0 && payload < state.arrayID.length - 1) {
        state.arrayID = state.arrayID.filter(
          (item, index) => item !== payload + 1
        );
      } else if (payload === state.arrayID.length - 1) {
        state.arrayID.pop(); // Remove the last item if payload is the index of the last item
      }
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
  removeDataFromArray,
} = register.actions;
export default register.reducer;
