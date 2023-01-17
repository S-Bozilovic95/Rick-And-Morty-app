import { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
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
  const [activeFilter1, setActiveFilter1] = useState<boolean>();
  const [activeFilter2, setActiveFilter2] = useState<boolean>();
  const [activeFilter3, setActiveFilter3] = useState<boolean>();

  // functions
  const { data: filteredData } = useQuery(
    ["filteredData", choices, selectedName, activePage],
    () => getFilteredCharacters(choices, selectedName, activePage),
    { keepPreviousData: true }
  );

  const handleActiveBar = (value: number) => {
    if (value === 1) {
      setActiveFilter1(!activeFilter1);
    } else if (value === 2) {
      setActiveFilter2(!activeFilter2);
    } else if (value === 3) {
      setActiveFilter3(!activeFilter3);
    }
  };

  useEffect(() => {
    handleCharacterData(filteredData);
  }, [filteredData, handleCharacterData]);

  return (
    <div className="characters__main-box__filter-box">
      <div
        className="characters__main-box__filter-box__options-bar"
        onClick={() => handleActiveBar(1)}
      >
        Status
      </div>
      <div
        className={
          activeFilter1
            ? "characters__main-box__filter-box__options-box options-box-active"
            : "characters__main-box__filter-box__options-box"
        }
      >
        <button
          value={"dead"}
          name="status"
          onClick={(event) => handleFilter(event)}
          className={choices.status === "dead" ? "active-filter" : ""}
        >
          Dead
        </button>
        <button
          value={"alive"}
          name="status"
          onClick={(event) => handleFilter(event)}
          className={choices.status === "alive" ? "active-filter" : ""}
        >
          Alive
        </button>
        <button
          value={"unknown"}
          name="status"
          onClick={(event) => handleFilter(event)}
          className={choices.status === "unknown" ? "active-filter" : ""}
        >
          Unknown
        </button>
      </div>

      <div
        className="characters__main-box__filter-box__options-bar"
        onClick={() => handleActiveBar(2)}
      >
        Gender
      </div>
      <div
        className={
          activeFilter2
            ? "characters__main-box__filter-box__options-box options-box-active"
            : "characters__main-box__filter-box__options-box"
        }
      >
        <button
          value={"male"}
          name="gender"
          onClick={(event) => handleFilter(event)}
          className={choices.gender === "male" ? "active-filter" : ""}
        >
          Male
        </button>
        <button
          value={"female"}
          name="gender"
          onClick={(event) => handleFilter(event)}
          className={choices.gender === "female" ? "active-filter" : ""}
        >
          Female
        </button>
        <button
          value={"genderless"}
          name="gender"
          onClick={(event) => handleFilter(event)}
          className={choices.gender === "genderless" ? "active-filter" : ""}
        >
          Genderless
        </button>
        <button
          value={"unknown"}
          name="gender"
          onClick={(event) => handleFilter(event)}
          className={choices.gender === "unknown" ? "active-filter" : ""}
        >
          Unknown
        </button>
      </div>

      <div
        className="characters__main-box__filter-box__options-bar"
        onClick={() => handleActiveBar(3)}
      >
        Species
      </div>
      <div
        className={
          activeFilter3
            ? "characters__main-box__filter-box__options-box options-box-active"
            : "characters__main-box__filter-box__options-box"
        }
      >
        <button
          value={"human"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "human" ? "active-filter" : ""}
        >
          Human
        </button>
        <button
          value={"alien"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "alien" ? "active-filter" : ""}
        >
          Alien
        </button>
        <button
          value={"humanoid"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "humanoid" ? "active-filter" : ""}
        >
          Humanoid
        </button>
        <button
          value={"poopybutthole"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "poopybutthole" ? "active-filter" : ""}
        >
          Poopybutthole
        </button>
        <button
          value={"mythological"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "mythological" ? "active-filter" : ""}
        >
          Mythological
        </button>
        <button
          value={"unknown"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "unknown" ? "active-filter" : ""}
        >
          Unknown
        </button>
        <button
          value={"animal"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "animal" ? "active-filter" : ""}
        >
          Animal
        </button>
        <button
          value={"disease"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "disease" ? "active-filter" : ""}
        >
          Disease
        </button>
        <button
          value={"robot"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "robot" ? "active-filter" : ""}
        >
          Robot
        </button>
        <button
          value={"cronenberg"}
          name="species"
          onClick={(event) => handleFilter(event)}
          className={choices.species === "cronenberg" ? "active-filter" : ""}
        >
          Cronenberg
        </button>
      </div>
    </div>
  );
};
