import {configureStore} from '@reduxjs/toolkit';
import articleReducer from '../Slice/articleSlice';


const appStore = configureStore({
    reducer: {
        category: articleReducer
    }
})

export default appStore;