 import { Provider } from 'react-redux'
import Article from "./Article";
import "./index.css";
import Category from "./Category";
import Author from "./Author";
import SortBy from "./SortBy";
import appStore from "./utils/appStore";
import useArticleData from "./hooks/useArticleData";


function App() {
  return (
    <>
      <Provider store={appStore}> 
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Category />
          <Author />
          <SortBy />
        </div>
          <Article />
      </div>
      </Provider>
    </>
  );
}


export default App;
