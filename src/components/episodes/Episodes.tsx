import { FC, useEffect, useState } from "react";
import { Options } from "../global-comp/Options";
import { CharactersTable } from "../global-comp/CharactersTable";
import { useQuery } from "react-query";
import { getAllEpisodes, getSingleEpisode } from "../../api/episodes";

export const Episodes: FC = () => {
  const [totalEpisodeNumber, setTotalEpisodeNumber] = useState<number>(0);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number>(1);
  const [idArray, setIdArray] = useState<number[]>([]);

  // react query
  const { data: episodeData } = useQuery("locations", () => getAllEpisodes());

  const { data: singleEpisode } = useQuery(
    ["singleItem", selectedEpisodeId],
    () => getSingleEpisode(selectedEpisodeId)
  );

  // funcitons
  const handleTotalEpisodeNumber = (value: number) => {
    setTotalEpisodeNumber(value);
  };

  const handleEpisodeId = (value: number) => {
    setSelectedEpisodeId(value);
  };

  // hooks
  useEffect(() => {
    handleTotalEpisodeNumber(episodeData?.data.info.count);
  }, [episodeData]);

  useEffect(() => {
    extractNumber();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleEpisode]);

  const extractNumber = () => {
    let arr = singleEpisode?.data.characters
      ? singleEpisode.data.characters.map((el: any) => el.match(/(\d+)/)[0])
      : [];
    setIdArray(arr);
  };

  return (
    <section className="global-sec container">
      <h3 className="title">Episodes</h3>
      <div className="global-sec__text-box">
        <h3>
          <span>Name:</span>
          {singleEpisode?.data.name}
        </h3>
        <h3>
          <span>Details:</span>
          {singleEpisode?.data.episode}
        </h3>
        <h3>
          <span>Air Date:</span>
          {singleEpisode?.data.air_date}
        </h3>
      </div>
      <div className="global-sec__main-box">
        <Options
          type={"Episode"}
          totalNumber={totalEpisodeNumber}
          handleItemId={handleEpisodeId}
        />

        <CharactersTable idArray={idArray} />
      </div>
    </section>
  );
};
