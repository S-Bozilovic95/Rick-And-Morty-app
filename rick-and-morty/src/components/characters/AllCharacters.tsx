import { FC } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../api/characters";

type AllCharactersProps = {
  singleChar: any;
};

export const AllCharacters: FC<AllCharactersProps> = ({ singleChar }) => {
  const { data: char } = useQuery("characters", () => getAllCharacters());

  return (
    <div className="characters__card-box">
      {singleChar?.length > 0
        ? singleChar?.map((el: any) => {
            return (
              <div className="characters__card-box__card" key={el.id}>
                <img
                  className="characters__card-box__card__image"
                  src={el?.image}
                  alt="character"
                />
                <h4 className="characters__card-box__card__name">
                  <Link to={`/CharacterDetails/${el.id}`}>{el?.name}</Link>
                </h4>
              </div>
            );
          })
        : char?.data.results?.map((el: any) => {
            return (
              <div className="characters__card-box__card" key={el.id}>
                <p
                  className="characters__card-box__card__status"
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
                <img
                  className="characters__card-box__card__image"
                  src={el?.image}
                  alt="character"
                />
                <h4 className="characters__card-box__card__name">
                  <Link to={`/CharacterDetails/${el.id}`}>{el?.name}</Link>
                </h4>
              </div>
            );
          })}
    </div>
  );
};
