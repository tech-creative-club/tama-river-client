type SummaryCard = {
  id: string;
  name: string;
  sport: string[];
  date: string;
  url: string;
  image?: string;
  location: {
    name: string;
    address: string;
    capacity: number | string;
  };
};
export default SummaryCard;
