import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../api/characters";
import { SearchForm } from "./SearchForm";
import { SingleCharacter } from "./SingleCharacter";

export const Characters: FC = () => {
  const { data: char } = useQuery("characters", () => getAllCharacters());
  const [singleChar, setSingleChar] = useState();

  const handleSearch = (value: any) => {
    setSingleChar(value);
  };

  return (
    <section className="characters container">
      <h3 className="characters__title">Characters:</h3>
      <SearchForm handleSearch={handleSearch} />
      <SingleCharacter singleChar={singleChar} />

      <h3 className="characters__subtitle">All Characters:</h3>
      <div className="characters__card-box">
        {char?.data.results?.map((el: any) => {
          return (
            <div className="characters__card-box__card" key={el.id}>
              <img
                className="characters__card-box__card__image"
                src={el?.image}
                alt="character"
              />
              <h4 className="characters__card-box__card__name">
                <Link to={`/CharacterDetails/${el.id}`}>{el.name}</Link>
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};
