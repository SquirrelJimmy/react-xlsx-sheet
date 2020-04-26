import React from 'react';
import { Props } from './props-type';

export default class ExportSheet extends React.PureComponent<Props, any> {
  static defaultProps: {
    dataType: string;
    header: any[];
    headerOption: {
      skipHeader: boolean;
      dateNF: string;
    };
    dataSource: any[];
    extName: string;
    isRequiredNameDate: boolean;
    fileName: string;
    fileDate: string;
    tableElement?: HTMLTableElement;
  };
  render(): JSX.Element;
}
