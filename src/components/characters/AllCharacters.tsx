import { FC, useState } from "react";
import { CharacterDetails } from "./CharacterDetails";

type AllCharactersProps = {
  allChar: any;
};

export const AllCharacters: FC<AllCharactersProps> = ({ allChar }) => {
  const [detailsActive, setDetailsActive] = useState<boolean>(false);
  const [details, setDetails] = useState<any>();

  const handleDetails = (id: any, active: boolean) => {
    setDetailsActive(active);
    setDetails(id);
  };

  return (
    <div className="characters__main-box__card-box">
      {allChar?.data.results?.map((el: any) => {
        return (
          <div className="card" key={el.id}>
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
              <a href="#"> {el?.name}</a>
            </h4>
          </div>
        );
      })}
      {detailsActive && (
        <CharacterDetails details={details} handleDetails={handleDetails} />
      )}
    </div>
  );
};
