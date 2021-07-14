// import { t } from '@lingui/macro';
import HighlightedSection from '../types/HighlightedSection.enum';
import { ImageExample } from '../types/ImageExample.interface';
import ImageExampleKey from '../types/ImageExampleKey.enum';

const PALLET_NUMBER_LABEL = `Pallet Number`;
const PALLET_ROLL_NUMBER_LABEL = `Pallet/Roll Number`;
const ROLL_NUMBER_LABEL = `Roll Number`;
const MILL_ORDER_NUMBER_LABEL = `Mill Order Number`;

const CASTING_AND_RELEASE: ImageExample = {
  key: ImageExampleKey.CASTING_AND_RELEASE,
  legend: [
    {
      key: '1',
      label: PALLET_ROLL_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'release-label-2020.jpg',
      alt: `${ImageExampleKey.CASTING_AND_RELEASE} label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 193,
          yOffset: 224,
          height: 29,
          width: 161,
        },
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 249,
          yOffset: 261,
          height: 32,
          width: 162,
        },
      ],
    },
  ],
};
const EUROPEAN_GALERIE_ROLL: ImageExample = {
  key: ImageExampleKey.EUROPEAN_GALERIE_ROLL,
  legend: [
    {
      key: '1',
      label: ROLL_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'Galerie_reel_lbl.jpg',
      alt: `${ImageExampleKey.EUROPEAN_GALERIE_ROLL} reel label`,
      isLandscape: true,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 93,
          yOffset: 121,
          height: 25,
          width: 85,
        },
      ],
    },
    {
      src: 'Galerie_ream_lbl.jpg',
      alt: `${ImageExampleKey.EUROPEAN_GALERIE_ROLL} ream label`,
      isLandscape: true,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 172,
          yOffset: 89,
          height: 23,
          width: 89,
        },
      ],
    },
  ],
};
const EUROPEAN_PALLET_LABEL: ImageExample = {
  key: ImageExampleKey.EUROPEAN_GRAPHICS_PALLET,
  legend: [
    {
      key: '1',
      label: PALLET_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'EU-pallet-label-2021.png',
      alt: `${ImageExampleKey.EUROPEAN_GRAPHICS_PALLET} pallet label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 246,
          yOffset: 213,
          height: 29,
          width: 130,
        },
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 120,
          yOffset: 310,
          height: 25,
          width: 75,
        },
      ],
    },
  ],
};
const EUROPEAN_REAM_LABEL: ImageExample = {
  key: ImageExampleKey.EUROPEAN_GRAPHICS_REAM,
  legend: [
    {
      key: '1',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
  ],
  images: [
    {
      src: 'eu-label-ream-2014.jpg',
      alt: `${ImageExampleKey.EUROPEAN_GRAPHICS_REAM} ream label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 200,
          yOffset: 0,
          height: 29,
          width: 95,
        },
      ],
    },
  ],
};
const EUROPEAN_ROLL_LABEL: ImageExample = {
  key: ImageExampleKey.EUROPEAN_GRAPHICS_ROLL,
  legend: [
    {
      key: '1',
      label: ROLL_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'EU-roll-label-2021.png',
      alt: `${ImageExampleKey.EUROPEAN_GRAPHICS_ROLL} roll label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 254,
          yOffset: 171,
          height: 33,
          width: 90,
        },
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 85,
          yOffset: 307,
          height: 31,
          width: 85,
        },
      ],
    },
  ],
};
const NA_PALLET_LABEL: ImageExample = {
  key: ImageExampleKey.NORTH_AMERICAN_PALLET,
  legend: [
    {
      key: '1',
      label: PALLET_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'NA-pallet-label-2021.jpg',
      alt: `${ImageExampleKey.NORTH_AMERICAN_PALLET} sheet label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 568,
          yOffset: 218,
          height: 40,
          width: 316,
        },
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 371,
          yOffset: 305,
          height: 31,
          width: 119,
        },
      ],
    },
  ],
};
const NA_ROLL_LABEL: ImageExample = {
  key: ImageExampleKey.NORTH_AMERICAN_ROLL,
  legend: [
    {
      key: '1',
      label: ROLL_NUMBER_LABEL,
      section: HighlightedSection.SECTION_1,
    },
    {
      key: '2',
      label: MILL_ORDER_NUMBER_LABEL,
      section: HighlightedSection.SECTION_2,
    },
  ],
  images: [
    {
      src: 'NA-roll-label-2021.jpg',
      alt: `${ImageExampleKey.NORTH_AMERICAN_ROLL} roll label`,
      isLandscape: false,
      highlightCoordinates: [
        {
          section: HighlightedSection.SECTION_1,
          xOffset: 500,
          yOffset: 195,
          height: 38,
          width: 252,
        },
        {
          section: HighlightedSection.SECTION_2,
          xOffset: 389,
          yOffset: 293,
          height: 32,
          width: 141,
        },
      ],
    },
  ],
};

export const EXAMPLES: ImageExample[] = [
  CASTING_AND_RELEASE,
  EUROPEAN_GALERIE_ROLL,
  EUROPEAN_PALLET_LABEL,
  EUROPEAN_REAM_LABEL,
  EUROPEAN_ROLL_LABEL,
  NA_PALLET_LABEL,
  NA_ROLL_LABEL,
];
