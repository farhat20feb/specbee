import {configureStore} from '@reduxjs/toolkit';
import articleReducer from "../Slice/articleSlice";

const appStore = configureStore({
  reducer: {
            category: articleReducer
        }
})
export type RootState = ReturnType<typeof appStore.getState>

export default appStore