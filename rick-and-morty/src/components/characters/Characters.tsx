import { FC, useEffect, useState } from "react";
import { AllCharacters } from "./AllCharacters";
import { SearchForm } from "./SearchForm";
import { Pagination } from "./Pagination";
import { useQuery } from "react-query";
import { getAllCharacters } from "../../api/characters";
import { AxiosResponse } from "axios";
import { CharactersFilter } from "./CharactersFilter";

export type Choices = {
  status: string;
  gender: string;
  species: string;
};

export const Characters: FC = () => {
  const [allChar, setAllChar] = useState<void | AxiosResponse>();
  const [selectedName, setSelectedName] = useState<string>("");
  const [activePage, setActivePage] = useState<any>(1);
  const [choices, setChoices] = useState<Choices>({
    status: "",
    gender: "",
    species: "",
  });

  // query
  const { data: allCharData } = useQuery("characters", () =>
    getAllCharacters()
  );

  // functions
  const handleCharacterData = (value: any) => {
    setAllChar(value);
  };

  const handleName = (value: string) => {
    setSelectedName(value);
  };

  const handlePage = (value: any) => {
    setActivePage(value);
  };

  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { value, name } = event.target as HTMLButtonElement;

    if (choices[name as keyof Choices] === value) {
      setChoices({ ...choices, [name]: "" });
    } else {
      setChoices({ ...choices, [name]: value });
    }
  };

  // hooks
  useEffect(() => {
    setAllChar(allCharData);
  }, [allCharData]);

  return (
    <section className="characters container">
      <h3 className="title">Characters</h3>
      <SearchForm
        handleCharacterData={handleCharacterData}
        handleName={handleName}
        choices={choices}
      />
      <div className="characters__main-box">
        <CharactersFilter
          handleCharacterData={handleCharacterData}
          selectedName={selectedName}
          handleFilter={handleFilter}
          choices={choices}
          activePage={activePage}
        />
        <AllCharacters allChar={allChar} />
        <Pagination
          activePage={activePage}
          handlePage={handlePage}
          handleCharacterData={handleCharacterData}
          selectedName={selectedName}
          searchType="character"
          choices={choices}
        />
      </div>
    </section>
  );
};
