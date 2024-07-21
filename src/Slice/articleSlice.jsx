import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'article',
    initialState: {
        categoryFilter: [],
        authorFilter : [],
        filterByDate: false,
        filterByTitle : false
    },
    reducers: {
        filterArticleByCat: (state, action) => {
            state.categoryFilter.push(action.payload)
        },
        filterArticleByAuth: (state, action) => {
            state.authorFilter.push(action.payload)
        },
        filterArticleByDate: (state, action) => {
            state.filterByDate = action.payload;
        },
        filterArticleByTitle: (state, action) => {
            state.filterByTitle = action.payload;
        },
        removeFilterByCat: (state) => {
            state.categoryFilter.pop()
        },
        removeFilterByAuthor: (state) => {
            state.authorFilter.pop()
        }
    }
})

export const {filterArticleByAuth, filterArticleByCat, filterArticleByDate, filterArticleByTitle, removeFilterByAuthor, removeFilterByCat} = cartSlice.actions 

export default cartSlice.reducer