import { useQuery } from "react-query";
import { getAllLocations } from "../../api/locations";

export const Locations: React.FC = () => {
  // react query
  const { data: local, refetch } = useQuery(
    "locations",
    () => getAllLocations(),
    {
      enabled: false,
    }
  );

  return (
    <>
      <button onClick={() => refetch()}>Fetch Locations</button>
      <h3>Locations:</h3>
      {local?.data.results?.map((el: any) => {
        return <p key={el.id}>{el.name}</p>;
      })}
    </>
  );
};
