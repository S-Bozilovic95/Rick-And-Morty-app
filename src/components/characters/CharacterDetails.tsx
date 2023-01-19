import { FC } from "react";
import { useQuery } from "react-query";
import { getSingleCharacter } from "../../api/characters";
import { RiCloseCircleLine } from "react-icons/ri";

type CharacterDetailsProps = {
  details: any;
  handleDetails: (id: any, active: any) => void;
};

export const CharacterDetails: FC<CharacterDetailsProps> = ({
  details,
  handleDetails,
}) => {
  const { data: singleChar } = useQuery("charDetails", () =>
    getSingleCharacter(details)
  );

  return (
    <div className="characters__details-box">
      <div className="characters__details-box__char-box">
        <RiCloseCircleLine
          className="characters__details-box__char-box__icon"
          onClick={() => handleDetails("", false)}
        />

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
      </div>
    </div>
  );
};
