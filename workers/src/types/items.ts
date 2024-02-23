export type Items = {
  FQDN: string;
  data: Data[];
};

type tag = {
  name: string;
};

type Data = {
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
