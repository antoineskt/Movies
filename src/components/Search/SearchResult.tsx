import { img_300, unavailable } from '../../components/config';
import { useSearchByMediaTypeAndTextQuery } from '../../features/movies/multiSlice';
import { Media_typeType } from '../../type/type';
import { useState, useEffect } from 'react';
import CardSearch from './CardSearch';

type Props = {
  mediaType: Media_typeType;
  query: string;
};

export default function SearchResult({ mediaType, query }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, isLoading } = useSearchByMediaTypeAndTextQuery({
    mediaType,
    query,
    currentPage,
  });
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
    return null;
  }

  if (!data) return <p>Aucune données n'a été trouvé</p>;

  const { results, total_pages } = data;
  const resultsLength = results.length;

  if (mediaType === 'movie') {
    content = results.map(({ name, title, poster_path, first_air_date, release_date, id, overview }) => (
      <CardSearch
        key={id}
        id={id}
        mediaType={mediaType}
        title={title}
        date={release_date}
        overview={overview}
        poster_path={poster_path}
        isFetching={isFetching}
        circlePresence={false}
      />
    ));
  }

  return <div>{content}</div>;
}
