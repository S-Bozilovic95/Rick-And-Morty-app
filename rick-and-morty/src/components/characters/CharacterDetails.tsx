import { FC } from "react";
import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleCharacter } from "../../api/characters";

export const CharacterDetails: FC = () => {
  const { charID } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const { data: singleChar } = useQuery("charDetails", () =>
    getSingleCharacter(charID)
  );

  return (
    <>
      <div>
        <img src={singleChar?.data.image} alt="character" />
        <h4>{singleChar?.data.name}</h4>
        <p>{singleChar?.data.species}</p>
      </div>

      <button onClick={() => handleBack()}>Back</button>
    </>
  );
};
