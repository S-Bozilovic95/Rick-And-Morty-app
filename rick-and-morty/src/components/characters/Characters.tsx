import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAllCharacters } from "../../api/characters";

export const Characters: React.FC = () => {
  const { data: char } = useQuery("characters", () => getAllCharacters());

  return (
    <>
      <h3>Characters:</h3>
      {char?.data.results?.map((el: any) => {
        return (
          <Link to={`/CharacterDetails/${el.id}`} key={el.id}>
            {el.name}
          </Link>
        );
      })}
    </>
  );
};
