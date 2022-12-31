import { AxiosResponse } from "axios";
import { FC, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCurrentPage } from "../api/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  searchType: string;
  handleCharacterData: React.Dispatch<
    React.SetStateAction<void | AxiosResponse<any, any> | undefined>
  >;
  selectedName: string;
};

export const Pagination: FC<PaginationProps> = ({
  handleCharacterData,
  searchType,
  selectedName,
}) => {
  const [activePage, setActivePage] = useState(1);

  const { data: selectedPageData } = useQuery(
    ["selectedPage", activePage, selectedName],
    () => getCurrentPage(activePage, searchType, selectedName),
    { keepPreviousData: true }
  );

  const handlePagination = (value: any) => {
    console.log(selectedPageData?.data.info.pages);

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
    handleCharacterData(selectedPageData);

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
        <FaChevronLeft />
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
      <span className="button-box__current-page">{activePage}</span>
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
        <FaChevronRight />
      </button>
    </div>
  );
};
