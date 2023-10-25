import moviesHome from '../assets/moviesHome.png';
import { useEffect, useState } from 'react';

export default function Welcome() {
  const [state, setState] = useState([]); //initializing the state variable as an empty array

  const keyAPI = import.meta.env.VITE_KEY_API;
  const fetchSearch = async () => {
    const data = await fetch(`
      https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&api_key=${keyAPI}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setState(dataJ.results); //storing that data in the state
  };

  useEffect(() => {
    fetchSearch(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

  return (
    <div className="relative  bg-cover opacity-100" style={{ backgroundImage: `url(${moviesHome})` }}>
      <div className=" m-5 p-5 ">
        <h1 className="text-4xl text-white font-bold">Bienvenue, </h1>
        <h1 className="text-2xl text-white ">Des millions de films, émissions télévisées et artistes...</h1>
      </div>
      <div className="relative">
        <form action="/search" method="get">
          <label aria-label="Rechercher un film, serie, artiste" htmlFor="search">
            <input
              className="bg-white  rounded-3xl px-4 py-2 ml-10 mb-10 w-4/5"
              type="text"
              placeholder="Rechercher un film, une émission télévisée, un artiste..."
              id="search"
            />
          </label>
          <input className="bg-[#EFBF48] rounded-3xl px-4 py-2 " type="submit" value="Rechercher" />
        </form>
      </div>
    </div>
  );
}
