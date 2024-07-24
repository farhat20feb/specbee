import { useDispatch } from "react-redux";
import { filterArticleByCat, removeFilterByCat } from "./Slice/articleSlice";
import useArticleData from "./hooks/useArticleData";

interface Article {
  source: string | null;
  author: string;
  date: string;
  body:string;
}



const Category: React.FC = () => {
  const dispatch = useDispatch();
  const article: Article[] | any = useArticleData();
  const addCategory = (value: string, checkVal: boolean) => {
    checkVal
      ? dispatch(filterArticleByCat(value))
      : dispatch(removeFilterByCat());
  };

  return (
    <>
      <div className="border m-1 rounded-lg mt-6 w-70 px-2 py-2">
        <div className="bg-slate-100">
          <span className="font-bold ml-2">Category</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col ml-4">
          {article &&
            Array.from(new Set(article.map((item:any) => item.source))).map(
              (uniqueCat:any, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={(event) =>
                      addCategory(uniqueCat, event.target.checked)
                    }
                    className="form-checkbox text-slate-950 h-5 w-5"
                  />
                  <span className="font-medium">{uniqueCat}</span>
                </label>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default Category;
