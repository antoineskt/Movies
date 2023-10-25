import { img_300, unavailable } from './config';
import { useEffect, useState } from 'react';

export default function Trending() {
  const [state, setState] = useState([]); //initializing the state variable as an empty array

  const keyAPI = import.meta.env.VITE_KEY_API;
  const fetchTrending = async () => {
    const data = await fetch(`
      https://api.themoviedb.org/3/trending/all/day?api_key=${keyAPI}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setState(dataJ.results); //storing that data in the state
  };

  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);
  return (
    <div>
      <h1 className="mb-5 mt-5 font-bold text-xl">Tendances</h1>
      <div className="flex flex-row ">
        {state.map((Val) => {
          const { name, title, poster_path, first_air_date, release_date, media_type, id } = Val;
          return (
            <div key={id} id="card" className="mr-5">
              <div className="w-[150px] h-[225px] overflow-hidden rounded-lg mb-5">
                <img
                  src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                  className=" w-full h-full object-cover "
                  alt={title}
                />
              </div>
              <div>
                <h5 className="font-bold ">{title || name}</h5>
                <div>
                  <div className="text-gray-500">{first_air_date || release_date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
