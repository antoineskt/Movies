import { useGetMovieDetailByIDQuery } from '../features/movies/movieSlice';
import { useParams, useLocation } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import BgMovies from '../components/MoviesDetails/BgMovies';
import AdditionnalInfos from '../components/MoviesDetails/AdditionnalInfos';
export default function Movies() {
  const { id, titleMedia } = useParams();
  const { data, isFetching } = useGetMovieDetailByIDQuery(id ?? skipToken);

  const { pathname } = useLocation();

  if (!data || !id) return <p>Pas de datas</p>;

  const { budget, original_title, revenue, status, original_language } = data;
  return (
    <div>
      <BgMovies data={data} />
      <AdditionnalInfos
        id={id}
        originalTitle={original_title}
        status={status}
        originalLanguage={original_language}
        revenu={revenue}
        budget={budget}
      />
    </div>
  );
}
