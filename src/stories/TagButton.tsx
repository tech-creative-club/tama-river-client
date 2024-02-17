import { Button } from './Button';
import { Label } from './Label';

interface TagButtonProps {
  tags: string[];
  selectedTag: string;
  onClick: (str: string) => void;
}

export const TagButton = (props: TagButtonProps) => {
  return (
    <>
      <Button onClick={() => props.onClick('すべて')} active={props.selectedTag === 'すべて'}>
        <Label innerText="すべて" size="secondary" weight="medium" />
      </Button>
      {/* {props.tags.map((tag, index) => {
        return (
          <Button key={index} onClick={() => props.onClick(tag)} active={props.selectedTag === tag}>
            <Label innerText={tag as string} size="secondary" weight="medium" />
          </Button>
        );
      })} */}
    </>
  );
};
