import { IEditorConfig } from './types';

export const sanitizeConfig = ({
  nodes = {},
  extensions = {},
  marks = {},
}: Partial<IEditorConfig>): IEditorConfig => {
  const nodesConfig = nodes;
  const extensionsConfig = extensions;
  const marksConfig = marks;

  const refinedExtConfig = {
    ...extensionsConfig,
    limit: nodesConfig.disableTable
      ? extensionsConfig.limit
      : undefined,
  };

  return ({
    nodes: nodesConfig,
    extensions: refinedExtConfig,
    marks: marksConfig,
  });
};

const util = {
  sanitizeConfig,
};

export default util;
