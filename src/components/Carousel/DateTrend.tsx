type Props = {
  subtitle: string;
};

export default function DateTrend({ subtitle }: Props) {
  return <div className="text-gray-500">{subtitle}</div>;
}
