export type Items = {
  title: string;
  sport: string[];
  tags: tag[];
  date: string;
  url: string;
  image_url: string;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};

type tag = {
  name: string;
};
