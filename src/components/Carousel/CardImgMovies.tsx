import { img_300, unavailable } from '../config';

type Props = {
  poster_path: string;
  title: string;
};

export default function CardImgMovies({ poster_path, title }: Props) {
  return (
    <div className="w-[150px] h-[225px] overflow-hidden rounded-lg mb-5">
      <img
        src={poster_path ? `${img_300}/${poster_path}` : unavailable}
        className=" w-full h-full object-cover "
        alt={title}
      />
    </div>
  );
}
