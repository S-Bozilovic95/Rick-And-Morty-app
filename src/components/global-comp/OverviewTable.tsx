import { AxiosResponse } from "axios";
import { FC } from "react";
import { useQuery } from "react-query";

type OverviewTableProps = {
  selectedItemId: number;
  searchItemFn: (param: number) => Promise<void | AxiosResponse<any, any>>;
};

export const OverviewTable: FC<OverviewTableProps> = ({
  selectedItemId,
  searchItemFn,
}) => {
  // react query
  const { data: singleItem } = useQuery(["singleItem", selectedItemId], () =>
    searchItemFn(selectedItemId)
  );

  return (
    <div>
      <h2 style={{ color: "white" }}>{singleItem?.data.name}</h2>
    </div>
  );
};
