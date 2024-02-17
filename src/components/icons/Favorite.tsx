import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface FavIconPropsType {
  active?: boolean;
}

export default function Favorite(props: FavIconPropsType) {
  const { active = false } = props;
  return <>{active ? <FavoriteIcon /> : <FavoriteBorderIcon />}</>;
}
