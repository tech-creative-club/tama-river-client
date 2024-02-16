import { Button } from './Button';
import { Label } from './Label';

interface TagListProps {
  tags: string[];
  selectedTag: string;
  onChange: (str: string) => void;
}

export const TagList = ({ tags, onChange, selectedTag }: TagListProps) => {
  return (
    <>
      <Button onClick={() => onChange('すべて')} active={selectedTag === 'すべて'}>
        <Label innerText="すべて" size="secondary" weight="medium" />
      </Button>
      {tags.map((tag, index) => {
        return (
          <Button key={index} onClick={() => onChange(tag)} active={selectedTag === tag}>
            <Label innerText={tag as string} size="secondary" weight="medium" />
          </Button>
        );
      })}
    </>
  );
};
