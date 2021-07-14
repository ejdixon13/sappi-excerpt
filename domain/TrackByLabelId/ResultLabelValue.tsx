import * as React from 'react';
import LabelValue from '../../components/LabelValue/LabelValue';

interface IResultLabelValueProps {
  label: string;
  value: string;
}

const ResultLabelValue: React.FunctionComponent<IResultLabelValueProps> = ({
  label,
  value,
}) => {
  return (
    <LabelValue
      className="text-lg"
      inverse
      label={<div className="mb-3">{label}</div>}
      value={
        <div className="border-b border-gray-light400 w-full pb-2">{value}</div>
      }
    />
  );
};

export default ResultLabelValue;
