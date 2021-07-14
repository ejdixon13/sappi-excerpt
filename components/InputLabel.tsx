import { Popover } from 'antd';
import * as React from 'react';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

export interface IInputLabelProps {
  text: string | React.ReactNode;
  infoBubble?: string | React.ReactNode;
  position?: 'top' | 'side';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  htmlFor?: string;
  required?: boolean;
  isFetching?: boolean;
  labelClassName?: string;
  visuallyHidden?: boolean;
}

const InputLabel: React.FunctionComponent<IInputLabelProps> = ({
  position,
  text,
  infoBubble,
  size,
  children,
  className = '',
  style,
  required,
  isFetching,
  labelClassName = '',
  visuallyHidden = false,
  ...rest
}) => {
  return (
    <div
      className={`${className} ${visuallyHidden ? 'sr-only' : ''}`}
      style={style}
    >
      {position !== 'side' ? (
        <div>
          <label className={`flex my-2 ${labelClassName}`} {...rest}>
            <div
              className={`${size === 'lg' ? 'text-xl font-extrabold' : ''} ${
                size === 'md' ? 'text-lg' : ''
              }`}
            >
              {required && <span className="text-red-red pr-0.5">*</span>}
              {text}
            </div>
            {isFetching && <LoadingSpinner className="mt-1 ml-2" />}
            {infoBubble ? (
              <div className="ml-1">
                <Popover
                  placement="topLeft"
                  content={<div className="p-3">{infoBubble}</div>}
                  title="Title"
                >
                  <span className="fas fa-info-circle" />
                </Popover>
              </div>
            ) : (
              <></>
            )}
          </label>
          {children}
        </div>
      ) : (
        <div className="flex items-center">
          <label className={`flex mr-3 ${labelClassName || ''}`}>
            <div
              className={`${size === 'lg' ? 'text-xl font-extrabold' : ''} ${
                size === 'md' ? 'text-lg' : ''
              }`}
            >
              {required && <span className="text-red-red pr-0.5">*</span>}
              {text}
            </div>
            {infoBubble ? (
              <div className="ml-1">
                <Popover
                  placement="topLeft"
                  content={<div className="p-3">{infoBubble}</div>}
                >
                  <span className="fas fa-info-circle text-blue-pacific" />
                </Popover>
              </div>
            ) : (
              <></>
            )}
          </label>
          <div className="w-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default InputLabel;
