import { Button } from './Button';
import { Label } from './Label';

interface TagButtonProps {
  tags: string[];
  selectedTag: string;
  onClick: (str: string) => void;
}

export const TagButton = ({ tags, onClick, selectedTag }: TagButtonProps) => {
  return (
    <>
      <Button onClick={() => onClick('すべて')} active={selectedTag === 'すべて'}>
        <Label innerText="すべて" size="secondary" weight="medium" />
      </Button>
      {tags.map((tag, index) => {
        return (
          <Button key={index} onClick={() => onClick(tag)} active={selectedTag === tag}>
            <Label innerText={tag as string} size="secondary" weight="medium" />
          </Button>
        );
      })}
    </>
  );
};
