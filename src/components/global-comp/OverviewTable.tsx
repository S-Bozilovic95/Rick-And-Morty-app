import { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getMultipleCharacters } from "../../api/characters";
import { CharacterDetails } from "../characters/CharacterDetails";
import { NoResult } from "./NoResult";

type OverviewTableProps = {
  selectedItemId: number;
  searchItemFn: (param: number) => Promise<void | AxiosResponse<any, any>>;
};

export const OverviewTable: FC<OverviewTableProps> = ({
  selectedItemId,
  searchItemFn,
}) => {
  const [idArray, setIdArray] = useState<number[]>([]);
  const [detailsActive, setDetailsActive] = useState<boolean>(false);
  const [details, setDetails] = useState<any>();

  // react query
  const { data: singleItem } = useQuery(["singleItem", selectedItemId], () =>
    searchItemFn(selectedItemId)
  );

  const { data: characters } = useQuery(["singleItem", idArray], () =>
    getMultipleCharacters(idArray)
  );

  //   functions
  const extractNumber = () => {
    let arr = singleItem?.data.residents
      ? singleItem.data.residents.map((el: any) => el.match(/(\d+)/)[0])
      : [];
    setIdArray(arr);
  };

  const handleDetails = (id: any, active: boolean) => {
    setDetailsActive(active);
    setDetails(id);
  };

  // hooks
  useEffect(() => {
    extractNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleItem]);

  return (
    <div>
      <div className="locations__text-box">
        <h3>
          <span>Name:</span>
          {singleItem?.data.name}
        </h3>
        <h3>
          <span>Dimension:</span>
          {singleItem?.data.dimension}
        </h3>
        <h3>
          <span>Type:</span>
          {singleItem?.data.type ? singleItem?.data.type : "No Specific Type"}
        </h3>
      </div>

      {characters?.data.length > 0 ? (
        <div className="locations__card-box">
          {characters?.data.map((el: any) => {
            return (
              <div className="card" key={el.id}>
                <p
                  className="card__status"
                  style={{
                    backgroundColor:
                      el.status === "Alive"
                        ? "#2d8646"
                        : el.status === "Dead"
                        ? "#dc3546"
                        : "#6c757d",
                  }}
                >
                  {el?.status}
                </p>
                <img className="card__image" src={el?.image} alt="character" />
                <h4
                  className="card__name"
                  onClick={() => handleDetails(el.id, true)}
                >
                  {el?.name}
                </h4>
              </div>
            );
          })}
        </div>
      ) : (
        <NoResult text="No Residents at This Location" />
      )}
      {detailsActive && (
        <CharacterDetails details={details} handleDetails={handleDetails} />
      )}
    </div>
  );
};
