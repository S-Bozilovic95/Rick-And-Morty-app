import { FC, useState } from "react";
import { AllCharacters } from "./AllCharacters";
import { SearchForm } from "./SearchForm";
import { SingleCharacter } from "./SingleCharacter";

export const Characters: FC = () => {
  const [singleChar, setSingleChar] = useState();

  const handleSearch = (value: any) => {
    setSingleChar(value);
  };

  return (
    <section className="characters container">
      <SearchForm handleSearch={handleSearch} />
      {singleChar ? <SingleCharacter singleChar={singleChar} /> : null}

      <h3 className="characters__subtitle">All Characters:</h3>
      <AllCharacters />
    </section>
  );
};
