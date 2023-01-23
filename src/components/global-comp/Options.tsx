import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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
  const [activeOptions, setActiveOptions] = useState<boolean>(false);

  const handleActiveOptions = () => {
    setActiveOptions(!activeOptions);
  };

  return (
    <div className={activeOptions ? "options options-active" : "options"}>
      <div className="options__bar" onClick={() => handleActiveOptions()}>
        <span>{type + "s"}</span>
        <i>
          <FiChevronDown />
        </i>
      </div>
      <div className="options__item-box">
        {[...Array(totalNumber)].map((el, index) => {
          return (
            <p
              className="options__item-box__item"
              key={index}
              onClick={() => handleItemId(index + 1)}
            >
              {type} - {index + 1}
            </p>
          );
        })}
      </div>
    </div>
  );
};
