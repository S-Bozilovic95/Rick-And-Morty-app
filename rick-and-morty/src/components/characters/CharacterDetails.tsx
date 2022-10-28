import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleCharacter } from "../../api/characters";

export const CharacterDetails: React.FC = () => {
  const { charID } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Characters");
  };

  const { data: singleChar } = useQuery("charDetails", () =>
    getSingleCharacter(charID)
  );
  // console.log(typeof charID);

  // const { data: singleChar } = useQuery("charDetails", async () => {
  //   const { data: res } = await getSingleCharacter(charID);
  //   return res.data;
  // });

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
