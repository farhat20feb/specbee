import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IMG_URL } from "./Constant";
import useArticleData from "./hooks/useArticleData";
import Loading from "./Loading";
import { RootState } from './utils/appStore';


interface Article {
  source: string | null;
  author: string;
  date: string;
  body:string;
}

interface ArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  date: string;
  body:string;
  source: string | null;
}

 

const Article: React.FC = () => {
  const categoryList = useSelector((store: RootState | any) => store.category.categoryFilter);
  const authorList = useSelector((store: RootState | any) => store.category.authorFilter);
  const filterByDate = useSelector((store: RootState) => store.category.filterByDate);
  const filterByTitle = useSelector((store: RootState) => store.category.filterByTitle);
  const articleData: Article[] | null | any = useArticleData();

  
  useEffect(() => {
    setArticleList(articleData); // Update articleList when props.article changes
  }, [articleData]);

  const [articleList, setArticleList] = useState<ArticleData[] | null>([]);
  const [loading, setLoading] = useState(false);

  const dateFormate = (dateold:string) => {
    const dateString = dateold;
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate: string = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    setLoading(true);
    setArticleList(articleData);
    // Function to filter articles based on category
    // Filter articles
const filteredArticles = articleData?.filter((article: Article) => {
  const categoryFilterPassed = categoryList.length === 0 || categoryList.includes(article.source);
  const authorFilterPassed = authorList.length === 0 || authorList.includes(article.author);
  return categoryFilterPassed && authorFilterPassed;
});
    // Sort filtered articles by date in asc/desc order
    filterByDate
      ? 
      filteredArticles?.sort((a:any, b:any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      : 
      filteredArticles?.sort((a:any, b:any) => {
        return new Date(a.date).getTime() - new Date(a.date).getTime();
      })
  //    filteredArticles.sort((a:Article, b:string) => new Date(a.date) - new Date(b.date));
    //   Sort filtered articles by title in asc/desc order
    filterByTitle
      ? filteredArticles?.sort((a:any, b:any) => b.title.localeCompare(a.title))
      : filteredArticles?.sort((a:any, b:any) => a.title.localeCompare(b.title));

    setArticleList(filteredArticles);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [categoryList, authorList, filterByDate, filterByTitle]);

  return (
    <>
      {loading ? (
        <Loading /> // Show the Loading component while data is beg fetched
      ) : (
        <div className="col-span-2 ...">
          {articleList?.length === 0 ? "<p className='text-center font-semibold px-2 py-2 bg-slate-500'>No Items Found</p>" : ''} 
          {articleList &&
            articleList?.map((article, index) => (
              <div key={index} className="hover:bg-sky-100">
                <article className="flex items-start space-x-6 p-6">
                  <img
                    src={IMG_URL}
                    alt=""
                    width="100"
                    height="70"
                    className="flex-none rounded-md bg-slate-100"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <div className="text-gray-500">
                      {dateFormate(article.date)}
                    </div>
                    <h2 className="font-semibold text-slate-900 pr-20">
                      {article.title}
                    </h2>
                  </div>
                </article>

                <div className="col-span-2 ml-7 mb-9 pb-9 border-b-[1px]">
                  <div
                    className="mb-9"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
                  <span className="font-bold mt-9 pt-20">{article.author}</span>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Article;
