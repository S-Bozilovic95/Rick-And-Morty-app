import { FC } from "react";

type SingleCharacterProps = {
  singleChar: any;
};

export const SingleCharacter: FC<SingleCharacterProps> = ({ singleChar }) => {
  console.log(singleChar);

  return (
    <>
      <h3 className="title">{singleChar?.name}</h3>
      <img src={singleChar?.image} alt="char" />
      <div>
        <p>Curent Status: {singleChar?.status}</p>
        <p>Species: {singleChar?.species}</p>
        <p>Gender: {singleChar?.gender}</p>
        <p>Place of Origin: {singleChar?.origin.name}</p>
        <p>Home: {singleChar?.location.name}</p>
        <p>Episode Appearance: {singleChar?.episode.length}</p>
      </div>
    </>
  );
};
