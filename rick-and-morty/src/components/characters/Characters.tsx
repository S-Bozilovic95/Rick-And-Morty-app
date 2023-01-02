import { FC, useEffect, useState } from "react";
import { AllCharacters } from "./AllCharacters";
import { SearchForm } from "./SearchForm";
import { Pagination } from "../Pagination";
import { useQuery } from "react-query";
import { getAllCharacters } from "../../api/characters";
import { AxiosResponse } from "axios";

export const Characters: FC = () => {
  const [allChar, setAllChar] = useState<void | AxiosResponse>();
  const [selectedName, setSelectedName] = useState<string>("");

  const { data: allCharData } = useQuery("characters", () =>
    getAllCharacters()
  );

  const handleCharacterData = (value: any) => {
    setAllChar(value);
  };

  const handleName = (value: string) => {
    setSelectedName(value);
  };

  useEffect(() => {
    setAllChar(allCharData);
  }, [allCharData]);

  return (
    <section className="characters container">
      <h3 className="title">Characters</h3>
      <SearchForm
        handleCharacterData={handleCharacterData}
        handleName={handleName}
      />
      <AllCharacters allChar={allChar} />
      <Pagination
        handleCharacterData={handleCharacterData}
        selectedName={selectedName}
        searchType="character"
      />
    </section>
  );
};
