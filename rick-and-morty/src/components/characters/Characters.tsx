import { FC, useState } from "react";
import { AllCharacters } from "./AllCharacters";
import { SearchForm } from "./SearchForm";
import { Pagination } from "../Pagination";

export const Characters: FC = () => {
  const [singleChar, setSingleChar] = useState();

  const handleSearch = (value: any) => {
    setSingleChar(value);
  };

  return (
    <section className="characters container">
      <h3 className="title">Characters</h3>
      <SearchForm handleSearch={handleSearch} />
      <AllCharacters singleChar={singleChar} />
      <Pagination />
    </section>
  );
};
