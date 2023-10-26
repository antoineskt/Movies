import { img_300, unavailable } from './config';
import { useEffect, useState } from 'react';
import { Media_typeType, FetchTime_window } from '../type/type';
import ButtonTrend from '../components/ButtonTrend';
import CardImgMovies from './Carousel/CardImgMovies';
import { useGetTrendingQuery } from '../features/movies/trendingApi';
import Carousel from './Carousel/Carousel';
import CardCarousel from './Carousel/CardCarousel';
import formatDate from '../utils/formatDate';

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
      <Carousel>
        {data?.results.map((card) => (
          <CardCarousel
            imageNotFoundNumber={10}
            key={card.id}
            mediaType={mediaType}
            id={card.id}
            titleMedia={title}
            rate={card.vote_average}
            title={card.title || card.name}
            subtitle={formatDate(card.release_date || card.first_air_date)}
            poster_path={card.poster_path}
            circlePresence={true}
          />
        ))}
      </Carousel>
    </div>
  );
}
