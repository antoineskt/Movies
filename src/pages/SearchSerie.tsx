import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetTvDetailByIDQuery } from '../features/movies/tvSlice';

import AdditionnalInfos from '../components/MoviesDetails/AdditionnalInfos';
import BgSerie from '../components/SerieDetail/BgSeries';

function SearchSerie() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = `${titleMedia}` ?? 'Movie';
  }, [titleMedia]);

  const { data, isFetching } = useGetTvDetailByIDQuery(id ?? skipToken);
  if (isFetching) return 'chargement';
  if (!data || !id) return <p>Pas de datas</p>;

  return (
    <div>
      <BgSerie data={data} />
    </div>
  );
}

export default SearchSerie;
