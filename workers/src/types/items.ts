export type Items = {
  title: string;
  sport: string[];
  tags: {
    name: string;
  };
  date: string;
  url: string;
  image_url: string;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};
