import { FC } from "react";

export const Placeholder: FC = () => {
  return (
    <div className="skeleton-box">
      {[...Array(16)].map((el: any, index) => {
        return (
          <div className="skeleton-box__skeleton" key={index}>
            <span></span>
            <span></span>
          </div>
        );
      })}
    </div>
  );
};
