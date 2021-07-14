import { Space } from 'antd';
import { find } from 'lodash';
import React, { FC, useState } from 'react';
import Select from '../../../components/Select/Select';
import generateOptions from '../../../services/Util/generateOptions.util';
import { HighlightableImage } from '../types/HighlightableImage.interface';
import HighlightedSection from '../types/HighlightedSection.enum';
import ImageExampleKey from '../types/ImageExampleKey.enum';
import { LegendItemData } from '../types/LegendItemData.interface';
import ExampleImage from './ExampleImage';
import { EXAMPLES } from './Examples.data';
import ExamplesLegend from './ExamplesLegend';

const OPTIONS = generateOptions(EXAMPLES, (example) => ({
  label: example.key,
  value: example.key,
}));

const Examples: FC = () => {
  const [highlightedSection, setHighlightedSection] = useState<
    HighlightedSection
  >(HighlightedSection.NONE);
  const [legendItems, setLegendItems] = useState<LegendItemData[]>(
    EXAMPLES[0].legend
  );
  const [highlightableImages, setHighlightableImages] = useState<
    HighlightableImage[]
  >(EXAMPLES[0].images);

  const onSelectChange = (key: ImageExampleKey) => {
    const example = find(EXAMPLES, { key });
    if (example) {
      setHighlightableImages(example.images);
      setLegendItems(example.legend);
    }
  };

  return (
    <Space direction="vertical" size="middle">
      <h3 className="text-4xl">Examples</h3>
      <Select
        options={OPTIONS}
        defaultValue={OPTIONS[0].value}
        onChange={(e) => onSelectChange(e.target.value as ImageExampleKey)}
        width="96"
      />
      <ExamplesLegend
        legendItems={legendItems}
        onMouseOver={(section) => setHighlightedSection(section)}
        onMouseLeave={() => setHighlightedSection(HighlightedSection.NONE)}
      />
      <Space size="middle" style={{ minWidth: '620px' }}>
        {highlightableImages.map((image) => (
          <ExampleImage
            key={image.src}
            image={image}
            highlightedSection={highlightedSection}
          />
        ))}
      </Space>
    </Space>
  );
};

export default Examples;
