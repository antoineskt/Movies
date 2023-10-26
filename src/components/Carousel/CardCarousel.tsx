import TitleTrend from './TitleTrend';
import DateTrend from './DateTrend';
import CardImgMovies from './CardImgMovies';
import { Media_typeType } from '../../type/type';

type CardProps = {
  mediaType: Media_typeType;
  id: number;
  titleMedia: string;
  circlePresence: boolean;
  rate?: number;
  title: string;
  subtitle: string;
  poster_path: string;
  imageNotFoundNumber: number;
  borderCard?: boolean;
};

export default function CardCarousel({
  mediaType,
  id,
  circlePresence = false,
  rate = 0,
  title,
  subtitle,
  poster_path,
  imageNotFoundNumber,
  borderCard = false,
}: CardProps) {
  return (
    <div key={id} id="card" className="mr-5">
      <CardImgMovies poster_path={poster_path} title={title} />
      <div>
        <TitleTrend title={title} />
        <DateTrend subtitle={subtitle} />
      </div>
    </div>
  );
}
