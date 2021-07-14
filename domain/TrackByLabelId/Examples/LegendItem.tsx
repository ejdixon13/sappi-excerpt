import { Space } from 'antd';
import * as React from 'react';
import HighlightedSection from '../types/HighlightedSection.enum';
import { LegendItemData } from '../types/LegendItemData.interface';
import ItemNumber from './ItemNumber';

interface ILegendItemProps {
  data: LegendItemData;
  onMouseOver: (section: HighlightedSection) => void;
  onMouseLeave: () => void;
}

const LegendItem: React.FunctionComponent<ILegendItemProps> = ({
  data,
  onMouseLeave,
  onMouseOver,
}) => {
  const { section, label } = data;
  return (
    <div
      onMouseOver={() => onMouseOver(section)}
      onFocus={() => onMouseOver(section)}
      onMouseLeave={onMouseLeave}
    >
      <Space>
        <ItemNumber number={section} />
        <h4 className="text-2xl">
          {label}
        </h4>
      </Space>
    </div>
  );
};

export default LegendItem;
