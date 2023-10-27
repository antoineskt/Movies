import { img_300, unavailable } from '../../components/config';
import { useSearchByMediaTypeAndTextQuery } from '../../features/movies/multiSlice';
import { Media_typeType } from '../../type/type';
import { useState, useEffect } from 'react';

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
    content = results.map((Val) => {
      const { name, title, poster_path, first_air_date, release_date, id, overview } = Val;
      return (
        <div className="flex flex-row  border border-gray-300 rounded-lg m-10" key={id}>
          <div className="w-[150px] h-[225px] min-w-[150px] overflow-hidden rounded-lg mr-5">
            <img
              src={poster_path ? `${img_300}/${poster_path}` : unavailable}
              alt={title}
              className=" w-full h-full object-cover"
            />
          </div>

          <div className="">
            <h5 className="font-bold">{title || name}</h5>
            <div className="text-gray-500 mb-5">
              <div>{first_air_date || release_date}</div>
            </div>
            <div>{overview}</div>
          </div>
        </div>
      );
    });
  } else {
    content = <div>RIEN DU TOUT</div>;
  }

  return <div>{content}</div>;
}
