import { useDispatch, useSelector  } from 'react-redux';
import { filterArticleByDate, filterArticleByTitle } from './Slice/articleSlice';
import { RootState } from './utils/appStore';


const SortBy = () => {
    const dispatch = useDispatch()
    const filterByDate = useSelector((store : RootState | any) => store.category.filterByDate)
    const filterByTitle = useSelector((store : RootState | any) => store.category.filterByTitle)
    const addDateFilter = () => {
        const filterVal = filterByDate ? false : true;
        dispatch(filterArticleByDate(filterVal))
    }
    const addTitleFilter = () => {
        const filterVal = filterByTitle ? false : true;
        dispatch(filterArticleByTitle(filterVal))
    }

    return (
        <>
           
           <div className="border m-1 rounded-lg mt-6 w-70 px-2 py-2">
            <div className="bg-slate-100">
              <span className="font-bold ml-2">Sort By</span>
            </div>
          </div>
          <div className="flex flex-col ml-4">
            <label key="date" className="flex items-center space-x-2">
              <input
                type="checkbox"
                // checked={checked}
                onChange={() => addDateFilter()}
                className="form-checkbox text-slate-950 h-5 w-5"
              />
              <span className="font-medium">Date</span>
            </label>
            <label key="title" className="flex items-center space-x-2">
              <input
                type="checkbox"
                // checked={checked}
                onChange={() => addTitleFilter()}
                className="form-checkbox text-slate-950 h-5 w-5"
              />
              <span className="font-medium">Title</span>
            </label>
          </div>
        </>
    )
}

export default SortBy;