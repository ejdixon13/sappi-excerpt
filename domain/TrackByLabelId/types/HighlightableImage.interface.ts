import { HighlightCoordinates } from './HighlightCoordinates.interface';

export interface HighlightableImage {
  src: string;
  alt: string;
  isLandscape: boolean;
  highlightCoordinates: HighlightCoordinates[];
}
