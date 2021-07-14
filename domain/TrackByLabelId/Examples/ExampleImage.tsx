import React, { useEffect, useState } from 'react';
import { HighlightableImage } from '../types/HighlightableImage.interface';
import HighlightedSection from '../types/HighlightedSection.enum';
import ImageWindow from './ImageWindow';
import ItemNumber from './ItemNumber';

interface IExampleImageProps {
  highlightedSection: HighlightedSection;
  image: HighlightableImage;
}

const ExampleImage: React.FunctionComponent<IExampleImageProps> = ({
  highlightedSection,
  image,
}) => {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    import(image.src).then(
      (importedImage) => {
        setImageSrc(importedImage.default);
      }
    );
  }, [image]);

  const { highlightCoordinates, isLandscape } = image;
  return (
    <div className="border border-black-black relative">
      <div className="overflow-hidden relative">
        {highlightCoordinates.map((coord) => (
          <ImageWindow
            highlighted={highlightedSection === coord.section}
            key={coord.section}
            coordinates={coord}
          />
        ))}
        <img
          src={imageSrc}
          alt={image.alt}
          style={{ maxHeight: isLandscape ? '215px' : '400px' }}
        />
      </div>
      {highlightCoordinates.map((coord) => (
        <div
          className="absolute"
          style={{
            top: coord.yOffset,
            left: coord.xOffset,
          }}
          key={coord.section}
        >
          {(highlightedSection === coord.section ||
            highlightedSection === HighlightedSection.NONE) && (
            <ItemNumber number={coord.section} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExampleImage;
