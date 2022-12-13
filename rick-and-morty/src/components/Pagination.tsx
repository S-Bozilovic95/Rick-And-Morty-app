import { FC } from "react";

type PaginationProps = {};

export const Pagination: FC<PaginationProps> = ({}) => {
  return (
    <div>
      <button type="button">prev</button>
      <button type="button">next</button>
    </div>
  );
};
