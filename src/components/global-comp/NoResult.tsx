import { FC } from "react";
import noResImg from "../../assets/img/no-results.png";

export const NoResult: FC = () => {
  return (
    <div className="no-result">
      <img className="no-result__image" src={noResImg} alt="no-result" />
      <h3 className="no-result__text">no results found</h3>
    </div>
  );
};
