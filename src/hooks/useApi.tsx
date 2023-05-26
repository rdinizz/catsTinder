import { useEffect, useRef, useState } from 'react';
import { CardData } from '../components/Card';
import { fetchCats, postCatVote } from '../util/apiHelper';

const useApi = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  useEffect(() => {
    if (loadingRef.current) {
      return;
    }
    fetchCats(page)
      .then(response => {
        setLoading(true);
        setData(prevData => [...prevData, ...response]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const likeCat = (catCard: CardData) => {
    postCatVote(catCard.id);
  };

  return { data, fetchMoreData, likeCat };
};

export default useApi;
