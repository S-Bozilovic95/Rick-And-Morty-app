import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllLocations, getSingleLocation } from "../../api/locations";
import { Options } from "../global-comp/Options";
import { CharactersTable } from "../global-comp/CharactersTable";

export const Locations: React.FC = () => {
  const [totalLocationNumber, setTotalLocationNumber] = useState<number>(0);
  const [selectedLocationId, setSelectedLocationId] = useState<number>(1);
  const [idArray, setIdArray] = useState<number[]>([]);

  // react query
  const { data: locationsData } = useQuery("locations", () =>
    getAllLocations()
  );

  const { data: singleLocation } = useQuery(
    ["singleItem", selectedLocationId],
    () => getSingleLocation(selectedLocationId)
  );

  // funcitons
  const handleTotalLocationNumber = (value: number) => {
    setTotalLocationNumber(value);
  };

  const handleLocationId = (value: number) => {
    setSelectedLocationId(value);
  };

  const extractNumber = () => {
    let arr = singleLocation?.data.residents
      ? singleLocation.data.residents.map((el: any) => el.match(/(\d+)/)[0])
      : [];
    setIdArray(arr);
  };

  // hooks
  useEffect(() => {
    handleTotalLocationNumber(locationsData?.data.info.count);
  }, [locationsData]);

  useEffect(() => {
    extractNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLocation]);

  return (
    <section className="global-sec container">
      <h3 className="title">Locations</h3>
      <div className="global-sec__text-box">
        <h3>
          <span>Name:</span>
          {singleLocation?.data.name}
        </h3>
        <h3>
          <span>Dimension:</span>
          {singleLocation?.data.dimension}
        </h3>
        <h3>
          <span>Type:</span>
          {singleLocation?.data.type
            ? singleLocation?.data.type
            : "No Specific Type"}
        </h3>
      </div>
      <div className="global-sec__main-box">
        <Options
          type={"Location"}
          totalNumber={totalLocationNumber}
          handleItemId={handleLocationId}
        />

        <CharactersTable idArray={idArray} />
      </div>
    </section>
  );
};
