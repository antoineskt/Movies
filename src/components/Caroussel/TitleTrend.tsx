type Props = {
  title: string;
  name: string;
};

export default function TitleTrend({ title, name }: Props) {
  return <h5 className="font-bold ">{title || name}</h5>;
}
