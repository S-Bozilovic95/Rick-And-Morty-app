import { FC, useEffect, useState } from "react";
import { NoResult } from "../global-comp/NoResult";
import { CharacterDetails } from "./CharacterDetails";
import AOS from "aos";
import "aos/dist/aos.css";

type AllCharactersProps = {
  allChar: any;
};

export const AllCharacters: FC<AllCharactersProps> = ({ allChar }) => {
  const [detailsActive, setDetailsActive] = useState<boolean>(false);
  const [details, setDetails] = useState<any>();

  // functions
  const handleDetails = (id: any, active: boolean) => {
    setDetailsActive(active);
    setDetails(id);
  };

  // hooks
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-quad",
      once: false,
    });
  }, []);

  return (
    <div>
      {allChar?.data.results.length > 0 ? (
        <div className="characters__main-box__card-box">
          {allChar?.data.results?.map((el: any) => {
            return (
              <div className="card" data-aos="fade-up" key={el.id}>
                <p
                  className="card__status"
                  style={{
                    backgroundColor:
                      el.status === "Alive"
                        ? "#2d8646"
                        : el.status === "Dead"
                        ? "#dc3546"
                        : "#6c757d",
                  }}
                >
                  {el?.status}
                </p>
                <img className="card__image" src={el?.image} alt="character" />
                <h4
                  className="card__name"
                  onClick={() => handleDetails(el.id, true)}
                >
                  {el?.name}
                </h4>
              </div>
            );
          })}
          {detailsActive && (
            <CharacterDetails details={details} handleDetails={handleDetails} />
          )}
        </div>
      ) : (
        <NoResult text="No Results" />
      )}
    </div>
  );
};
