import { Space } from 'antd';
import * as React from 'react';
import HighlightedSection from '../types/HighlightedSection.enum';
import { LegendItemData } from '../types/LegendItemData.interface';
import LegendItem from './LegendItem';

interface IExamplesLegendProps {
  legendItems: LegendItemData[];
  onMouseOver: (section: HighlightedSection) => void;
  onMouseLeave: () => void;
}

const ExamplesLegend: React.FunctionComponent<IExamplesLegendProps> = ({
  legendItems,
  onMouseOver,
  onMouseLeave,
}) => {
  return (
    <Space size="large">
      {legendItems.map((item) => (
        <LegendItem
          key={item.key}
          data={item}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </Space>
  );
};

export default ExamplesLegend;
