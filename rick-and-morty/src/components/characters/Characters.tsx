import React, { useEffect, useState } from "react";
import API from "../../assets/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../api/characters";

export const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<any | undefined>();
  const { data: char } = useQuery("characters", () => getAllCharacters());

  useEffect(() => {
    if (char) {
      setCharacters(char.data.results);
    }
  }, [char]);

  return (
    <>
      <h3>Characters:</h3>
      {characters?.map((el: any) => {
        return (
          <Link to={`/CharacterDetails/${el.id}`} key={el.id}>
            {el.name}
          </Link>
        );
      })}
    </>
  );
};
