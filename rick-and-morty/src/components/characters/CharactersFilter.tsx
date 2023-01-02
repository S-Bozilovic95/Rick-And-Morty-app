import { AxiosResponse } from "axios";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { getFilteredCharacters } from "../../api/characters";
import { Choices } from "./Characters";

type CharactersFilterProps = {
  handleCharacterData: React.Dispatch<
    React.SetStateAction<void | AxiosResponse<any, any> | undefined>
  >;
  selectedName: string;
  handleFilter: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  choices: Choices;
  activePage: number;
};

export const CharactersFilter: FC<CharactersFilterProps> = ({
  handleCharacterData,
  selectedName,
  handleFilter,
  choices,
  activePage,
}) => {
  // functions
  const { data: filteredData } = useQuery(
    ["filteredData", choices, selectedName, activePage],
    () => getFilteredCharacters(choices, selectedName, activePage),
    { keepPreviousData: true }
  );

  useEffect(() => {
    handleCharacterData(filteredData);
  }, [filteredData, handleCharacterData]);

  return (
    <div>
      <button
        value={"dead"}
        name="status"
        onClick={(event) => handleFilter(event)}
      >
        Dead
      </button>
      <button
        value={"alive"}
        name="status"
        onClick={(event) => handleFilter(event)}
      >
        Alive
      </button>
      <button
        value={"unknown"}
        name="status"
        onClick={(event) => handleFilter(event)}
      >
        Unknown
      </button>
      <button
        value={"male"}
        name="gender"
        onClick={(event) => handleFilter(event)}
      >
        Male
      </button>
      <button
        value={"female"}
        name="gender"
        onClick={(event) => handleFilter(event)}
      >
        Female
      </button>
      <button
        value={"genderless"}
        name="gender"
        onClick={(event) => handleFilter(event)}
      >
        Genderless
      </button>
      <button
        value={"unknown"}
        name="gender"
        onClick={(event) => handleFilter(event)}
      >
        Unknown
      </button>
    </div>
  );
};
