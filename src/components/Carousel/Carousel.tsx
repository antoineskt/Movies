type Props = {
  children: React.ReactNode;
};

export default function Carousel({ children }: Props) {
  return <div className="flex flex-row ">{children}</div>;
}
