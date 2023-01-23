import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllLocations, getSingleLocation } from "../../api/locations";
import { Options } from "../global-comp/Options";
import { OverviewTable } from "../global-comp/OverviewTable";

export const Locations: React.FC = () => {
  const [totalNumber, setTotalNumber] = useState<number>(0);
  const [selectedItemId, setSelectedItemId] = useState<number>(1);

  // funcitons
  const handleTotalNumber = (value: number) => {
    setTotalNumber(value);
  };

  const handleItemId = (value: number) => {
    setSelectedItemId(value);
  };

  // react query
  const { data: locationsData } = useQuery("locations", () =>
    getAllLocations()
  );

  // hooks
  useEffect(() => {
    handleTotalNumber(locationsData?.data.info.count);
  }, [locationsData]);

  return (
    <section className="locations container">
      <h3 className="title">Locations</h3>
      <div className="locations__main-box">
        <Options
          type={"Location"}
          totalNumber={totalNumber}
          handleItemId={handleItemId}
        />
        <OverviewTable
          selectedItemId={selectedItemId}
          searchItemFn={getSingleLocation}
        />
      </div>
    </section>
  );
};
