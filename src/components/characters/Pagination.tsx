/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosResponse } from "axios";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { getCurrentPage } from "../../api/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Choices } from "./Characters";

type PaginationProps = {
  searchType: string;
  handleCharacterData: React.Dispatch<
    React.SetStateAction<void | AxiosResponse<any, any> | undefined>
  >;
  selectedName: string;
  choices: Choices;
  activePage: number;
  handlePage: (value: any) => void;
};

export const Pagination: FC<PaginationProps> = ({
  handleCharacterData,
  searchType,
  selectedName,
  choices,
  activePage,
  handlePage,
}) => {
  let numbers: number[] = [];

  // query
  const { data: selectedPageData, isSuccess } = useQuery(
    ["selectedPage", activePage, selectedName, choices],
    () => getCurrentPage(activePage, searchType, selectedName, choices),
    { keepPreviousData: true }
  );

  // functions
  const handlePageButtons = () => {
    for (let i = 1; i <= selectedPageData?.data.info.pages; i++) {
      numbers.push(i);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // hooks
  useEffect(() => {
    handleCharacterData(selectedPageData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPageData]);

  if (isSuccess) {
    handlePageButtons();
  }

  return (
    <div className="button-box">
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        className="button-box__swiper-box"
      >
        {numbers.map((el: any, index) => {
          return (
            <SwiperSlide key={index}>
              <button
                className={
                  el === activePage
                    ? "active-btn button-box__navigation-btn"
                    : "button-box__navigation-btn"
                }
                type="button"
                onClick={() => handlePage(el)}
              >
                {el}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
