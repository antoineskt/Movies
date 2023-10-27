import moviesHome from '../assets/moviesHome.png';
import { useEffect, useState } from 'react';
import { img_300, unavailable } from '../components/config';
import SearchBarAndBtn from '../components/Search/SearchBarAndBtn';
import { Media_typeType } from '../type/type';
import SearchResult from '../components/Search/SearchResult';
import { useParams } from 'react-router-dom';

export default function Search() {
  const [currentMediaType, setCurrentMediaType] = useState<Media_typeType>('movie');

  const [search, setSearch] = useState<string>('');
  const { query } = useParams();

  useEffect(() => {
    document.title = query ?? 'Movie';
    setSearch(query ?? '');
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentMediaType]);

  return (
    <div>
      <div className="pb-5 relative  bg-cover opacity-100" style={{ backgroundImage: `url(${moviesHome})` }}>
        <div className=" m-5 p-5 ">
          <h1 className="text-4xl text-white font-bold">Bienvenue, </h1>
          <h1 className="text-2xl text-white ">Des millions de films, émissions télévisées et artistes...</h1>
        </div>
        <SearchBarAndBtn />
      </div>
      <div className="flex flex-row">
        <div className="m-10 font-bold">Résultats de votre recherche</div>

        <SearchResult query={search} mediaType={currentMediaType} />
      </div>
    </div>
  );
}
