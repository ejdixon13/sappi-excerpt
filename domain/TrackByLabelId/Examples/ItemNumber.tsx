import * as React from 'react';

interface IItemNumberProps {
  number: string;
}

const ItemNumber: React.FunctionComponent<IItemNumberProps> = ({ number }) => {
  return (
    <div
      className="bg-blue-pacific text-white-white text-2xl border-white-white z-1 relative"
      style={{
        borderRadius: '100px',
        borderWidth: '3px',
        padding: '5px 10px',
        width: '40px',
        height: '40px',
        textAlign: 'center',
      }}
    >
      {number}
    </div>
  );
};

export default ItemNumber;
