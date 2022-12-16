import { FC } from "react";

type PaginationProps = { singleChar: any; allChar: any };

export const Pagination: FC<PaginationProps> = ({ singleChar, allChar }) => {
  console.log(allChar);
  return (
    <div>
      <button type="button">prev</button>
      <button type="button">next</button>
    </div>
  );
};
