import { FC } from "react";

type SingleCharacterProps = {
  singleChar: any;
};

export const SingleCharacter: FC<SingleCharacterProps> = ({ singleChar }) => {
  console.log(singleChar);

  return (
    <>
      <h3>{singleChar?.name}</h3>
      <img src={singleChar?.image} alt="char" />
    </>
  );
};
