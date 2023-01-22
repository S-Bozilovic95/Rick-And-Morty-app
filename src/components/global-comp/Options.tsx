import { FC } from "react";

type OptionsProps = {
  type: string;
  totalNumber: number;
  handleItemId: (value: number) => void;
};

export const Options: FC<OptionsProps> = ({
  type,
  totalNumber,
  handleItemId,
}) => {
  return (
    <div>
      {[...Array(totalNumber)].map((el, index) => {
        return (
          <div key={index} onClick={() => handleItemId(index + 1)}>
            {type}-{index + 1}
          </div>
        );
      })}
    </div>
  );
};
