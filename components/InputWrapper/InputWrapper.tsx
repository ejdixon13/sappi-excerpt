import * as React from 'react';
import 'antd/dist/antd.css';
import { FieldError } from 'react-hook-form';
import getWidthCssClass, {
  defaultWidthKwd,
} from '../../services/Util/getWidthCssClass.util';
import styles from './InputWrapper.module.scss';

export const calculateInputWrapperWidth = (
  initialWidth: string | undefined
): string | undefined => {
  // If width is omitted use default width.
  if (!initialWidth) {
    return defaultWidthKwd;
  }

  // Otherwise, input wrapper width should always be the same as the initial
  // width.
  return initialWidth;
};

export const calculateWrappedInputWidth = (
  initialWidth: string | undefined
): string | undefined => {
  // If width is omitted use default width as basis for calculation.
  const basisWidth = initialWidth || defaultWidthKwd;

  // In the case of auto, min, and max width, the initial width (which will have
  // already been applied to the input wrapper) must also be applied to the
  // wrapped input. In all other cases, the input's width should be full, so it
  // will expand to fill the correctly sized input wrapper.
  switch (basisWidth) {
    case 'auto':
    case 'min':
    case 'max':
      return basisWidth;
    default:
      return 'full';
  }
};

interface IInputWrapperProps {
  omitBoxOutline?: boolean;
  solidOutline?: boolean;
  width?: string;
  error?: FieldError | { message: string } | undefined;
  errorMessageDisplay?: {
    icon?: boolean;
    belowInput?: boolean;
    tooltip?: boolean;
  };
}

const InputWrapper: React.FunctionComponent<IInputWrapperProps> = ({
  omitBoxOutline,
  solidOutline,
  width,
  children,
  error,
  errorMessageDisplay,
}) => {
  const widthCssClass = getWidthCssClass(width);
  const classes = `${styles['input-wrapper']} ${
    omitBoxOutline ? styles['input-wrapper--no-box-outline'] : ''
  } ${solidOutline ? styles['input-wrapper--solid-outline'] : ''} ${
    error ? styles['input-wrapper--error'] : ''
  } ${widthCssClass} ${styles[widthCssClass] || ''}`;

  const displayErrorIcon =
    errorMessageDisplay?.icon !== undefined ? errorMessageDisplay.icon : true;
  const displayErrorMsgBelow =
    errorMessageDisplay?.belowInput !== undefined
      ? errorMessageDisplay.belowInput
      : true;

  return (
    <div className={`${classes} ${styles.thing}`}>
      <div>
        {children}
        {error?.message && displayErrorIcon && (
          <i className="fa fa-exclamation-circle text-3xl text-red-red ml-2" />
        )}
      </div>
      {displayErrorMsgBelow && (
        <div className="text-red-red text-lg">{error?.message}</div>
      )}
    </div>
  );
};

export default InputWrapper;
