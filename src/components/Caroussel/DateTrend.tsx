type Props = {
  first_air_date: string;
  release_date: string;
};

export default function DateTrend({ first_air_date, release_date }: Props) {
  return <div className="text-gray-500">{first_air_date || release_date}</div>;
}
