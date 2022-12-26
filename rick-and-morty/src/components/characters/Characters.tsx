import { FC, useEffect, useState } from "react";
import { AllCharacters } from "./AllCharacters";
import { SearchForm } from "./SearchForm";
import { Pagination } from "../Pagination";
import { useQuery } from "react-query";
import { getAllCharacters } from "../../api/characters";
import { AxiosResponse } from "axios";

export const Characters: FC = () => {
  const [singleChar, setSingleChar] = useState();
  const [allChar, setAllChar] = useState<void | AxiosResponse>();

  const { data: allCharData } = useQuery(
    ["characters", allChar],
    () => getAllCharacters(),
    { enabled: false }
  );

  const handleSearch = (value: any) => {
    setSingleChar(value);
  };

  useEffect(() => {
    setAllChar(allCharData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCharData]);

  return (
    <section className="characters container">
      <h3 className="title">Characters</h3>
      <SearchForm handleSearch={handleSearch} />
      <AllCharacters allChar={allChar} singleChar={singleChar} />
      <Pagination setAllChar={setAllChar} searchType="character" />
    </section>
  );
};
