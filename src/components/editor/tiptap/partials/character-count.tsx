import { useContext } from 'react';
import { EditorContext } from 'components/editor/tiptap';
import { EditorExtensionsType } from './ext';

export interface CharacterCountProps extends EditorExtensionsType {}

const CharacterCount = ({ useCharacterCount = false, limit }: CharacterCountProps) => {
  const { editor } = useContext(EditorContext);

  return useCharacterCount && (
    <div className="character-count">
      {editor && `
        ${editor.getCharacterCount()}
        ${limit !== undefined ? `/${limit}` : ''}
        characters
        `}
    </div>
  );
};

export default CharacterCount;
