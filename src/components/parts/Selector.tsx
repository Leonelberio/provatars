type Props = {
  onSelectorClick: () => void;
};

export const Selector = ({ onSelectorClick }: Props) => {
  return (
    <div
      onClick={() => onSelectorClick()}
      className="cursor-pointer"
    />
  );
};
