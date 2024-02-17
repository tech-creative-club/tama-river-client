import { Button } from './Button';
import { Label } from './Label';

interface TagButtonProps {
  tags: string[];
  selectedTag: string;
  onClick: (str: string) => void;
}

export const TagButton = (props: TagButtonProps) => {
  const { tags, selectedTag, onClick } = props;
  return (
    <>
      {tags?.map((tag, index) => {
        return (
          <Button key={index} onClick={() => onClick(tag)} active={selectedTag === tag}>
            <Label innerText={tag as string} size="secondary" weight="medium" />
          </Button>
        );
      })}
    </>
  );
};
