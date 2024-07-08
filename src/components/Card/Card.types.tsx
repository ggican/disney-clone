type ICardProps = {
  isLove?: boolean;
  image: React.ReactNode;
  content: React.ReactNode;
  onLove: (value: boolean) => any;
};
