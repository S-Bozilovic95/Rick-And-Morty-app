import { AxiosResponse } from "axios";
import { FC, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCurrentPage } from "../api/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";

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
  let numbers: number[] = [];

  // query
  const { data: selectedPageData } = useQuery(
    ["selectedPage", activePage, selectedName],
    () => getCurrentPage(activePage, searchType, selectedName),
    { keepPreviousData: true }
  );

  // functions
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

  const handlePageButtons = () => {
    for (let i = 1; i <= selectedPageData?.data.info.pages; i++) {
      numbers.push(i);
    }
  };
  handlePageButtons();

  // hooks
  useEffect(() => {
    handleCharacterData(selectedPageData);
  }, [handleCharacterData, selectedPageData]);

  useEffect(() => {
    setActivePage(1);
  }, [selectedName]);

  return (
    <div className="button-box">
      {/* <button
        className="button-box__navigation-btn"
        type="button"
        disabled={activePage === 1}
        onClick={() => handlePagination("decrease")}
      >
        <FaChevronLeft />
      </button>

      <span className="button-box__current-page">{activePage}</span>

      <button
        className="button-box__navigation-btn"
        type="button"
        disabled={activePage === selectedPageData?.data.info.pages}
        onClick={() => handlePagination("increase")}
      >
        <FaChevronRight />
      </button>
      <span className="button-box__current-page">
        {selectedPageData?.data.info.pages}
      </span> */}

      <Swiper
        effect={"coverflow"}
        spaceBetween={0}
        slidesPerView={3}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        className="button-box__swiper-box"
      >
        {numbers.map((el: any) => {
          return (
            <SwiperSlide key={el.id}>
              <button
                className="button-box__navigation-btn"
                type="button"
                onClick={() => handlePagination(el)}
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
