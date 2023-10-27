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
    <section className="mt-8 mb-8 ml-8">
      <div className="flex flex-row mb-5">
        <h1 className=" font-bold text-2xl mr-3">Tendances</h1>
        <div className="flex flex-row border border-black rounded-2xl overflow-hidden ">
          <ButtonTrend label="day" value={date} title="Aujourd'hui" handleClick={switchDateDay} />
          <ButtonTrend label="week" value={date} title="Cette semaine" handleClick={switchDateWeek} />
        </div>
      </div>

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
    </section>
  );
}
