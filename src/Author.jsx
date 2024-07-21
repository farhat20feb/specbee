import { useDispatch  } from 'react-redux';
import { filterArticleByAuth, removeFilterByAuthor } from './Slice/articleSlice';

const Author = ({article}) => {
    const dispatch = useDispatch()
    const addAuthor = (value, checkVal) => {
      checkVal ? dispatch(filterArticleByAuth(value)) : dispatch(removeFilterByAuthor(value));
    }

    return (
        <>
        <div className="border m-1 rounded-lg mt-6 w-70 px-2 py-2">
            <div className="bg-slate-100">
              <span className="font-bold ml-2">Author</span>
            </div>
          </div>
          <div className="flex flex-col ml-4">
            {article &&
              Array.from(new Set(article.map((item) => item.author))).map(
                (uniqueAuthor, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      onChange={(event) => addAuthor(uniqueAuthor, event.target.checked)}
                      className="form-checkbox text-slate-950 h-5 w-5"
                    />
                    <span className="font-medium">{uniqueAuthor}</span>
                  </label>
                )
              )}
          </div>
        </>
    )
}

export default Author;