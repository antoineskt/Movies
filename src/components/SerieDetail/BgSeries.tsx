import { TvDetailType } from '../../type/Tv';
import { getPosterPathImage } from '../config';
import GenreDetail from '../MoviesDetails/GenreDetail';

import CircularButton from '../CircularButton';
type Props = {
  data: TvDetailType;
};

export default function BgSerie({ data }: Props) {
  const { backdrop_path, name, poster_path, first_air_date, genres, vote_average, tagline, overview } = data;

  const BASE_URL_IMAGE = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces';

  const finalUrl = BASE_URL_IMAGE + backdrop_path;
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(to bottom right, rgb(15, 32, 42, 1), rgb(15, 32, 42, 0.2)), url(${
          BASE_URL_IMAGE + backdrop_path
        })   `,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left calc((52vw - 170px) - 340px) top',
        backgroundSize: 'cover',
      }}
      className="h-full bg-slate-900 flex flex-col relative  w-full "
    >
      <div
        style={{
          backgroundImage: ` linear-gradient(to bottom right, rgb(15, 32, 42, 1), rgb(15, 32, 42, 0.2))   `,
        }}
        className=" w-full h-full text-white "
      >
        {' '}
        <div className=" w-full flex max-w-screen-xl mx-auto p-8 gap-8 h-full">
          <img src={getPosterPathImage(poster_path)} alt="Poster du film" />
          <div className="flex flex-col ">
            <div className="text-3xl">{name}</div>
            <div className="flex flex-row gap-5 mb-3">
              {' '}
              <div>{first_air_date}</div>
              {genres.length >= 1 && <GenreDetail allGenders={genres} />}
            </div>
            <CircularButton rate={vote_average} />
            <div className="mt-3 mb-3 italic text-gray-500">{tagline}</div>
            <div className="text-2xl mb-2 ">Synopsis</div>
            <div>{overview}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
