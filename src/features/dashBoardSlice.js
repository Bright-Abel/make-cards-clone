import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isCredit: true,
  payment: [],
  paymentInfo: [],
  id: 1,
  displayKYCInfo: false,
  displaySecurity: false,
  checked: false,
  currentPin: '',
  newPin: '',
  confirmPin: '',
  viewUpdatedValue: false,
  label: '',
  switchState: false,
  securityID: 1,
  aboutMakeCardsID: 1,
  blockCardReason: '',
  isModalOpen: false,
  fundCardAside: false,
  paymentInfoAside: false,
  // paymentID: 1,
};

const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changeToCredit: (state, { payload }) => {
      state.isCredit = true;
      state.payment = payload;
    },
    changeToDebit: (state, { payload }) => {
      state.isCredit = false;
      state.payment = payload;
    },
    sideBar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    InfoKYCId: (state, { payload }) => {
      state.id = payload;
      state.displayKYCInfo = true;
    },
    hideKYCinfo: (state) => {
      state.displayKYCInfo = false;
    },
    checkedTrue: (state) => {
      state.checked = !state.checked;
    },
    updatedValue: (state, { payload }) => {
      state.viewUpdatedValue = true;
      state.label = payload;
    },
    updatedValueFalse: (state) => {
      state.viewUpdatedValue = false;
    },
    blockCardSwitch: (state) => {
      state.switchState = !state.switchState;
    },
    switchStateChange: (state, { payload }) => {
      state.switchState = payload;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    securityIdDispalyChange: (state, { payload }) => {
      state.securityID = payload;
      state.displaySecurity = true;
    },
    securityIdDispalyChangeToFalse: (state) => {
      state.displaySecurity = false;
    },
    aboutMakeCardsIDChange: (state, { payload }) => {
      state.aboutMakeCardsID = payload;
    },
    openModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    fundCardAsideChange: (state) => {
      state.fundCardAside = !state.fundCardAside;
    },
    paymentInfoDisplay: (state, { payload }) => {
      state.paymentInfo = payload;
    },
    paymentInfoSideBar: (state) => {
      state.paymentInfoAside = !state.paymentInfoAside;
    },
    // changePaymentId: (state, { payload }) => {
    //   state.paymentID = payload;
    // },
  },
});

export const {
  // changePaymentId,
  paymentInfoDisplay,
  sideBar,
  changeToCredit,
  changeToDebit,
  InfoKYCId,
  hideKYCinfo,
  checkedTrue,
  updatedValue,
  handleChange,
  updatedValueFalse,
  blockCardSwitch,
  securityIdDispalyChange,
  securityIdDispalyChangeToFalse,
  aboutMakeCardsIDChange,
  switchStateChange,
  openModal,
  fundCardAsideChange,
  paymentInfoSideBar,
} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
