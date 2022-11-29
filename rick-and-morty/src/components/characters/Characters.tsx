import { FC, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../api/characters";
import { SearchForm } from "./SearchForm";
import { SingleCharacter } from "./SingleCharacter";

export const Characters: FC = () => {
  const { data: char } = useQuery("characters", () => getAllCharacters());
  const [singleChar, setSingleChar] = useState();

  return (
    <section className="characters container">
      <h3 className="characters__title">Characters:</h3>
      <SearchForm setSingleChar={setSingleChar} />
      <SingleCharacter singleChar={singleChar} />

      <h3>All Characters:</h3>
      {char?.data.results?.map((el: any) => {
        return (
          <div key={el.id}>
            <img src={el?.image} alt="character" />
            <h4>{el?.name}</h4>
            <Link to={`/CharacterDetails/${el.id}`}>{el.name}</Link>
          </div>
        );
      })}
    </section>
  );
};
