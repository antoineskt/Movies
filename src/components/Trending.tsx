import { img_300, unavailable } from './config';
import { useEffect, useState } from 'react';
import { Media_typeType, FetchTime_window } from '../type/type';
import ButtonTrend from '../components/ButtonTrend';
import CardImgMovies from './Caroussel/CardImgMovies';
import { useGetTrendingQuery } from '../features/movies/trendingApi';
import TitleTrend from './TitleTrend';
import DateTrend from './DateTrend';

type Props = {
  title: string;
  mediaType: Media_typeType;
};

export default function Trending({ title, mediaType }: Props) {
  const [date, setDate] = useState<FetchTime_window>('day');
  const { data, isFetching, isLoading } = useGetTrendingQuery({
    mediaType,
    date,
  });

  const switchDateDay = () => setDate('day');
  const switchDateWeek = () => setDate('week');

  return (
    <div>
      <button value={date}></button>
      <h1 className="mb-5 mt-5 font-bold text-xl">Tendances</h1>
      <ButtonTrend label="day" value={date} title="Aujourd'hui" handleClick={switchDateDay} />
      <ButtonTrend label="week" value={date} title="Cette semaine" handleClick={switchDateWeek} />
      <div className="flex flex-row ">
        {data?.results.map((Val) => {
          const { name, title, poster_path, first_air_date, release_date, id } = Val;
          return (
            <div key={id} id="card" className="mr-5">
              <CardImgMovies poster_path={poster_path} title={title} />
              <div>
                <TitleTrend name={name} title={title} />
                <DateTrend first_air_date={first_air_date} release_date={release_date} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
