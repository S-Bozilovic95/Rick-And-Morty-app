import { FC, useState } from "react";
import { useQuery } from "react-query";
import { getMultipleCharacters } from "../../api/characters";
import { CharacterDetails } from "../characters/CharacterDetails";
import { NoResult } from "./NoResult";
import { Placeholder } from "./Placeholder";

type CharactersTableProps = {
  idArray: number[];
};

export const CharactersTable: FC<CharactersTableProps> = ({ idArray }) => {
  const [detailsActive, setDetailsActive] = useState<boolean>(false);
  const [details, setDetails] = useState<any>();

  // react query
  const { data: characters, status } = useQuery(["singleItem", idArray], () =>
    getMultipleCharacters(idArray)
  );

  // functions
  const handleDetails = (id: any, active: boolean) => {
    setDetailsActive(active);
    setDetails(id);
  };

  return (
    <div>
      {characters?.data?.length > 0 ? (
        <div className="global-sec__card-box">
          {characters?.data.map((el: any) => {
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
                  {el?.name}
                </h4>
              </div>
            );
          })}
        </div>
      ) : typeof characters?.data === "object" &&
        typeof characters?.data.id === "number" ? (
        <div className="global-sec__card-box">
          <div className="card" key={characters?.data.id}>
            <p
              className="card__status"
              style={{
                backgroundColor:
                  characters?.data.status === "Alive"
                    ? "#2d8646"
                    : characters?.data.status === "Dead"
                    ? "#dc3546"
                    : "#6c757d",
              }}
            >
              {characters?.data?.status}
            </p>
            <img
              className="card__image"
              src={characters?.data?.image}
              alt="character"
            />
            <h4
              className="card__name"
              onClick={() => handleDetails(characters?.data.id, true)}
            >
              {characters?.data?.name}
            </h4>
          </div>
        </div>
      ) : status === "loading" ? (
        <Placeholder />
      ) : (
        <NoResult text="No Characters at This Location" />
      )}
      {detailsActive && (
        <CharacterDetails details={details} handleDetails={handleDetails} />
      )}
    </div>
  );
};
