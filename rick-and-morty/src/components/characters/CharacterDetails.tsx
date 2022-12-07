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
    <div className="characters__details-box container">
      <h4 className="subtitle">{singleChar?.data.name}</h4>
      <div className="card details-card">
        <p
          className="card__status"
          style={{
            backgroundColor:
              singleChar?.data.status === "Alive"
                ? "#2d8646"
                : singleChar?.data.status === "Dead"
                ? "#dc3546"
                : "#6c757d",
          }}
        >
          {singleChar?.data.status}
        </p>
        <img
          className="card__image"
          src={singleChar?.data.image}
          alt="character"
        />
        <div className="card__desc-box">
          <p className="card__desc-box__desc">
            Species: <span>{singleChar?.data.species}</span>
          </p>
          <p className="card__desc-box__desc">
            Gender: <span>{singleChar?.data.gender}</span>
          </p>
          <p className="card__desc-box__desc">
            Origin: <span>{singleChar?.data.origin.name}</span>
          </p>
          <p className="card__desc-box__desc">
            Home: <span>{singleChar?.data.location.name}</span>
          </p>
          <p className="card__desc-box__desc">
            Episode Appearance: <span>{singleChar?.data.episode.length}</span>
          </p>
        </div>
      </div>

      <button className="button" onClick={() => handleBack()}>
        Back
      </button>
    </div>
  );
};
