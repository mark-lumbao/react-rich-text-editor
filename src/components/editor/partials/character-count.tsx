import { useContext } from 'react';
import { EditorContext } from 'components/editor';
import { IEditorExtensionOptions } from '../types/ext';

const CharacterCount = ({ useCharacterCount = false, limit }: Partial<IEditorExtensionOptions>) => {
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
