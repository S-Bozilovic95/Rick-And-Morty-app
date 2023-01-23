import { FC } from "react";
import noResImg from "../../assets/img/no-results.png";

type NoResultpROPS = {
  text: string;
};

export const NoResult: FC<NoResultpROPS> = ({ text }) => {
  return (
    <div className="no-result">
      <img className="no-result__image" src={noResImg} alt="no-result" />
      <h3 className="no-result__text">{text}</h3>
    </div>
  );
};
