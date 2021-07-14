import * as React from 'react';
import { HighlightCoordinates } from '../types/HighlightCoordinates.interface';

interface IImageWindowProps {
  highlighted: boolean;
  coordinates: HighlightCoordinates;
}

const ImageWindow: React.FunctionComponent<IImageWindowProps> = ({
  highlighted,
  coordinates,
}) => {
  return (
    <div
      className="absolute"
      style={{
        top: coordinates.yOffset,
        left: coordinates.xOffset,
      }}
    >
      {highlighted && (
        <div className="relative inline">
          {/* relative inline needed for Firefox */}
          <div
            className="absolute left-0 right-0 bottom-0 m-auto"
            style={{
              top: '3.75vh', // TODO: Had to use vh for Firefox. Investigate why Firefox handles percentages differently than the rest of the browsers
              height: coordinates.height,
              width: coordinates.width + 10,
              marginLeft: -coordinates.width,
              boxShadow: '0 0 0 9999px rgb(0 0 0 / 50%)',
            }}
          >
            &nbsp;
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWindow;
