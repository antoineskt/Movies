import { Media_typeType } from '../../type/type';
import { img_300, unavailable } from '../config';
import LinkPage from '../Router/LinkPage';
import { formatTitleUrl } from '../../utils/formatTitleUrl';

type Props = {
  mediaType: Media_typeType;
  title: string;
  date: string;
  overview: string;
  poster_path: string;
  id: number;
  isFetching: boolean;
  circlePresence: boolean;
  rate?: number;
};

export default function CardSearch({
  mediaType,
  title,
  date,
  overview,
  poster_path,
  id,
  isFetching,
  circlePresence = false,
  rate,
}: Props) {
  return (
    <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={formatTitleUrl(title)}>
      <div className="flex flex-row  border border-gray-300 rounded-lg m-10" key={id}>
        <div className="w-[150px] h-[225px] min-w-[150px] overflow-hidden rounded-lg mr-5">
          <img
            src={poster_path ? `${img_300}/${poster_path}` : unavailable}
            alt={title}
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="">
          <h5 className="font-bold">{title}</h5>
          <div className="text-gray-500 mb-5">
            <div>{date}</div>
          </div>
          <div>{overview}</div>
        </div>
      </div>
    </LinkPage>
  );
}
