import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newID: '',
  isLogin: true,
  nickname: '',
  isUserTyping: true,
  color: '#227668',
  isCardFront: true,
  isActive: false,
  activeID: null,
  colorPalette: false,
  phoneNumber: '',
  countryName: 'NG',
  email: '',
  password: '',
  faqBgCol: true,
  useCaseCol: true,
  pin: '',
  OTP: '',
  changePin: '',
  confirmChangePin: '',
};

const contSlice = createSlice({
  name: 'cont',
  initialState,
  reducers: {
    clearState: (state) => {
      // localStorage.setItem('cart', JSON.stringify(initialState));
      return initialState;
    },
    loginCont: (state, { payload }) => {
      state.isLogin = payload;
    },

    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
      state.isUserTyping = value.trim() === '';
    },
    handleColor: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    changeCardView: (state) => {
      state.isCardFront = !state.isCardFront;
    },
    toggleQuestion: (state, { payload: { id } }) => {
      state.activeID = id === state.activeID ? null : id;
      state.isActive = id === state.activeID;
    },
    openColorPalette: (state) => {
      state.colorPalette = true;
    },
    closeColorPalette: (state) => {
      state.colorPalette = false;
    },
    faqNavCol: (state, { payload }) => {
      state.faqBgCol = payload;
    },

    caseNavCol: (state, { payload }) => {
      state.useCaseCol = payload;
    },
  },
});

export const {
  loginCont,
  handleChange,
  handleColor,
  changeCardView,
  loginCont2,
  toggleQuestion,
  openColorPalette,
  closeColorPalette,
  faqNavCol,
  caseNavCol,
} = contSlice.actions;
export default contSlice.reducer;
