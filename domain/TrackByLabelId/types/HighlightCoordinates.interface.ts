import HighlightedSection from './HighlightedSection.enum';

export interface HighlightCoordinates {
  section: HighlightedSection;
  xOffset: number;
  yOffset: number;
  width: number;
  height: number;
}
