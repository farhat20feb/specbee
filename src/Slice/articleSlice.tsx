import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArticleState {
  categoryFilter: string[];
  authorFilter: string[];
  filterByDate: boolean;
  filterByTitle: boolean;
}

const initialState: ArticleState = {
  categoryFilter: [],
  authorFilter: [],
  filterByDate: false,
  filterByTitle: false
};

const cartSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    filterArticleByCat: (state, action: PayloadAction<string>) => {
      state.categoryFilter.push(action.payload);
    },
    filterArticleByAuth: (state, action: PayloadAction<string>) => {
      state.authorFilter.push(action.payload);
    },
    filterArticleByDate: (state, action: PayloadAction<boolean>) => {
      state.filterByDate = action.payload;
    },
    filterArticleByTitle: (state, action: PayloadAction<boolean>) => {
      state.filterByTitle = action.payload;
    },
    removeFilterByCat: (state) => {
      state.categoryFilter.pop();
    },
    removeFilterByAuthor: (state) => {
      state.authorFilter.pop();
    }
  }
});

export const {
  filterArticleByAuth,
  filterArticleByCat,
  filterArticleByDate,
  filterArticleByTitle,
  removeFilterByAuthor,
  removeFilterByCat
} = cartSlice.actions;

export default cartSlice.reducer;
