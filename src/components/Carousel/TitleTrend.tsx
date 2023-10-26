type Props = {
  title: string;
};

export default function TitleTrend({ title }: Props) {
  return <h5 className="font-bold ">{title}</h5>;
}
