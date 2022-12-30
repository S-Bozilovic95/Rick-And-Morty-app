import { AxiosResponse } from "axios";
import { FC, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCurrentPage } from "../api/pagination";

type PaginationProps = {
  searchType: string;
  setAllChar: React.Dispatch<
    React.SetStateAction<void | AxiosResponse<any, any> | undefined>
  >;
};

export const Pagination: FC<PaginationProps> = ({ setAllChar, searchType }) => {
  const [activePage, setActivePage] = useState(1);

  const { data: selectedPageData } = useQuery(
    ["selectedPage", activePage],
    () => getCurrentPage(activePage, searchType),
    { keepPreviousData: true }
  );

  const handlePagination = (value: any) => {
    if (
      activePage < selectedPageData?.data.info.pages &&
      value === "increase"
    ) {
      setActivePage(activePage + 1);
    } else if (activePage > 1 && value === "decrease") {
      setActivePage(activePage - 1);
    } else {
      setActivePage(value);
    }
  };

  useEffect(() => {
    setAllChar(selectedPageData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPageData]);

  return (
    <div className="button-box">
      <button
        className="button-box__navigation-btn"
        type="button"
        disabled={activePage === 1}
        onClick={() => handlePagination("decrease")}
      >
        prev
      </button>
      <button
        className="button-box__number-btn"
        type="button"
        onClick={() => handlePagination(1)}
      >
        1
      </button>
      ...
      <button
        className="button-box__number-btn"
        type="button"
        onClick={() => handlePagination(activePage <= 1 ? 1 : activePage - 1)}
      >
        {activePage <= 1 ? 1 : activePage - 1}
      </button>
      <span>{activePage}</span>
      <button
        className="button-box__number-btn"
        type="button"
        onClick={() =>
          handlePagination(
            activePage >= selectedPageData?.data.info.pages
              ? selectedPageData?.data.info.pages
              : activePage + 1
          )
        }
      >
        {activePage >= selectedPageData?.data.info.pages
          ? selectedPageData?.data.info.pages
          : activePage + 1}
      </button>
      ...
      <button
        className="button-box__number-btn"
        type="button"
        onClick={() => handlePagination(selectedPageData?.data.info.pages)}
      >
        {selectedPageData?.data.info.pages}
      </button>
      <button
        className="button-box__navigation-btn"
        type="button"
        disabled={activePage === selectedPageData?.data.info.pages}
        onClick={() => handlePagination("increase")}
      >
        next
      </button>
    </div>
  );
};
