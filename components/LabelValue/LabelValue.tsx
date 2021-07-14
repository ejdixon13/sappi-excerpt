import * as React from 'react';

interface ILabelValueProps {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  inline?: boolean;
  center?: boolean;
  className?: string;
  inverse?: boolean;
  noBold?: boolean;
}

const LabelValue: React.FunctionComponent<ILabelValueProps> = ({
  label,
  value,
  inline,
  center,
  className,
  inverse,
  noBold,
}) => {
  const containerClass = `${inline ? 'flex flex-wrap' : ''} ${
    center ? 'mb-2' : ''
  } ${className || ''}`;
  const valueClass = `${inline ? 'ml-2' : ''} ${
    !inverse && !noBold ? 'font-bold' : ''
  }`;
  const labelClass = `${center ? 'w-1/2 text-right' : ''} ${
    inverse && !noBold ? 'font-bold' : ''
  } `;

  return (
    <div className={containerClass}>
      <div className={labelClass}>
        <label className="whitespace-nowrap">
          {label}
          {inline ? ':' : ''}
        </label>
      </div>
      <span className={valueClass}>{value}</span>
    </div>
  );
};

export default LabelValue;
