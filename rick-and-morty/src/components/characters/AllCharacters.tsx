import { FC } from "react";
// import { useQuery } from "react-query";
import { Link } from "react-router-dom";
// import { getAllCharacters } from "../../api/characters";

type AllCharactersProps = {
  singleChar: any;
  allChar: any;
};

export const AllCharacters: FC<AllCharactersProps> = ({
  singleChar,
  allChar,
}) => {
  return (
    <div className="characters__card-box">
      {singleChar?.data.results?.length > 0
        ? singleChar?.data.results?.map((el: any) => {
            return (
              <div className="card" key={el.id}>
                <img className="card__image" src={el?.image} alt="character" />
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
                <h4 className="card__name">
                  <Link to={`/CharacterDetails/${el.id}`}>{el?.name}</Link>
                </h4>
              </div>
            );
          })
        : allChar?.data.results?.map((el: any) => {
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
                <h4 className="card__name">
                  <Link to={`/CharacterDetails/${el.id}`}>{el?.name}</Link>
                </h4>
              </div>
            );
          })}
    </div>
  );
};
