import { configureStore } from '@reduxjs/toolkit';

import contSlice from './features/contSlice';
import dashBoardSlice from './features/dashBoardSlice';
import register from './features/register';

export const store = configureStore({
  reducer: {
    contState: contSlice,
    dashSlice: dashBoardSlice,
    registerSlice: register,
  },
});
