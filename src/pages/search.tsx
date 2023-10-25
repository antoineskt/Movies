import moviesHome from '../assets/moviesHome.png';
import { img_300, unavailable } from '../components/config';
import { useEffect, useState } from 'react';
export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [content, setContent] = useState([]);

  const keyAPI = import.meta.env.VITE_KEY_API;
  const fetchSearch = async () => {
    const data = await fetch(`
      https://api.themoviedb.org/3/search/multi?include_adult=false&query=${searchText}&language=fr-FR&page=1&api_key=${keyAPI}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setContent(dataJ.results); //storing that data in the state
  };

  useEffect(() => {
    fetchSearch(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSearch();
  };
  return (
    <div>
      <div className="relative  bg-cover opacity-100" style={{ backgroundImage: `url(${moviesHome})` }}>
        <div className=" m-5 p-5 ">
          <h1 className="text-4xl text-white font-bold">Bienvenue, </h1>
          <h1 className="text-2xl text-white ">Des millions de films, émissions télévisées et artistes...</h1>
        </div>
        <div className="relative">
          <form onSubmit={handleSearch}>
            <label aria-label="Rechercher un film, serie, artiste">
              <input
                className="bg-white  rounded-3xl px-4 py-2 ml-10 mb-10 w-4/5 "
                type="text"
                placeholder="Rechercher un film, une émission télévisée, un artiste..."
                id="search"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
            </label>
            <button className="bg-[#EFBF48] rounded-3xl px-4 py-2 " type="submit">
              Rechercher
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="m-10 font-bold">Résultats de votre recherche</div>
        <div className="">
          {content &&
            content.map((Val) => {
              const { name, title, poster_path, first_air_date, release_date, media_type, id, overview } = Val;
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
            })}
        </div>
      </div>
    </div>
  );
}
