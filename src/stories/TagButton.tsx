import { Button } from './Button';
import { Label } from './Label';

type TagButtonVariant = 'normal' | 'wrapped';

interface TagButtonProps {
  tags: string[];
  selectedTag: string;
  onClick: (str: string) => void;
  variant?: TagButtonVariant;
}

const variantType = {
  normal: 'normal',
  wrapped: 'wrapped',
};

function NomalTagButton(props: TagButtonProps) {
  const { tags, selectedTag, onClick } = props;
  return (
    <div className="flex flex-row space-x-3">
      {tags.map((tag, index) => {
        return (
          <Button key={index} onClick={() => onClick(tag)} active={selectedTag === tag}>
            <Label type="small">{tag}</Label>
          </Button>
        );
      })}
    </div>
  );
}

const WappedTagButton = (props: TagButtonProps) => {
  const { tags, selectedTag, onClick } = props;
  return (
    <div className="hidden-scrollbar w-full overflow-scroll">
      <div className="flex flex-row space-x-3">
        {tags.map((tag, index) => {
          return (
            <Button key={index} onClick={() => onClick(tag)} active={selectedTag === tag}>
              <Label type="small">{tag}</Label>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export function TagButton(props: TagButtonProps) {
  const { variant } = props;
  return (
    <>{variant === variantType.wrapped ? <WappedTagButton {...props} /> : <NomalTagButton {...props} />}</>
  );
}
