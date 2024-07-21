import { useState, useEffect } from "react";
import { Provider } from 'react-redux'
import Article from "./Article";
import "./index.css";
import Category from "./Category";
import Author from "./Author";
import SortBy from "./SortBy";
import appStore from "./utils/appStore";
import useArticleData from "./hooks/useArticleData";


function App() {
  const article = useArticleData();
  return (
    <>
      <Provider store={appStore}> 
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Category article={article}/>
          <Author article={article}/>
          <SortBy />
        </div>
          <Article article={article} />
      </div>
      </Provider>
    </>
  );
}


export default App;
