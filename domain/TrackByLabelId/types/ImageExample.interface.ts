import { HighlightableImage } from './HighlightableImage.interface';
import ImageExampleKey from './ImageExampleKey.enum';
import { LegendItemData } from './LegendItemData.interface';

export interface ImageExample {
  key: ImageExampleKey;
  legend: LegendItemData[];
  images: HighlightableImage[];
}
