import { useEffect, useState } from "react"
import { API_URL } from './../Constant'

const useArticleData = () => {
    const [article, setAtticle] = useState(null);

    useEffect(() => {
        fetcharticle();
    },[])

    const fetcharticle = async () => {
        const data = await fetch(API_URL);
        await data.json().then((res) => {
          setAtticle(res);
        });
      };

      return article;
}

export default useArticleData;