import * as React from 'react';

interface ISimpleCardProps {
  className?: string;
  style?: React.CSSProperties;
  borderColor?: string; // uses Tailwind class (i.e. green-pineTree))
}

const SimpleCard: React.FunctionComponent<ISimpleCardProps> = ({
  className,
  style,
  borderColor,
  children,
}) => {
  return (
    <div
      className={`${className} border-t-4 ${
        borderColor ? `border-${borderColor}` : 'border-green-pineTree'
      }`}
      style={style}
    >
      <div
        className="border-l border-r border-b border-gray-light400 py-4 px-6"
        style={{ marginTop: '-1px' }}
      >
        {children}
      </div>
    </div>
  );
};

export default SimpleCard;
