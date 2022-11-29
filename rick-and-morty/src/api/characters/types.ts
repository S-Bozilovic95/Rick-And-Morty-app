export type CharacterType = {
  info: {
    count: number;
    paages: number;
    next: string;
    prev: string | null;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        url: SVGStringList;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
  ];
};
