import { Editor } from '@tiptap/react';
import { EditorExtensionsType } from './ext';

export interface CharacterCountProps extends EditorExtensionsType {
  editor: Editor;
}

const CharacterCount = ({ editor, useCharacterCount = false, limit }: CharacterCountProps) => (
  useCharacterCount && (
    <div className="character-count">
      {editor && `
        ${editor.getCharacterCount()}
        ${limit !== undefined ? `/${limit}` : ''}
        characters
        `}
    </div>
  )
);

export default CharacterCount;
