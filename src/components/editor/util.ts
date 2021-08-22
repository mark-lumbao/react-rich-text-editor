import { IEditorConfig } from './types';

export const sanitizeConfig = ({
  nodes = {},
  extensions = {},
  marks = {},
  menubar = { position: 'top' },
}: Partial<IEditorConfig>): IEditorConfig => {
  const extensionsConfig = extensions;

  const refinedExtConfig = {
    ...extensionsConfig,
    limit: nodes.disableTable
      ? extensionsConfig.limit
      : undefined,
  };

  return ({
    extensions: refinedExtConfig,
    nodes,
    marks,
    menubar,
  });
};

const util = {
  sanitizeConfig,
};

export default util;
