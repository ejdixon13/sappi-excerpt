import * as React from 'react';
import 'antd/dist/antd.css';
import { FieldError } from 'react-hook-form';
import getWidthCssClass from '../../services/Util/getWidthCssClass.util';
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import InputWrapper, {
  calculateInputWrapperWidth,
  calculateWrappedInputWidth,
} from '../InputWrapper/InputWrapper';

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  omitBoxOutline?: boolean;
  solidOutline?: boolean;
  error?: FieldError | { message: string } | undefined;
  errorMessageDisplay?: {
    icon?: boolean;
    belowInput?: boolean;
    tooltip?: boolean;
  };
  width?: string;
  maxLength?: number;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      omitBoxOutline,
      solidOutline,
      error,
      errorMessageDisplay,
      width,
      maxLength,
      className,
      ...rest
    },
    ref
  ) => {
    const displayErrorTooltip =
      errorMessageDisplay?.tooltip !== undefined
        ? errorMessageDisplay?.tooltip
        : false;

    return (
      <InputWrapper
        error={error}
        errorMessageDisplay={errorMessageDisplay}
        omitBoxOutline={omitBoxOutline}
        solidOutline={solidOutline}
        width={calculateInputWrapperWidth(width)}
      >
        <ErrorTooltip
          hasError={displayErrorTooltip && !!error}
          message={displayErrorTooltip && error?.message}
          placement="bottom"
        >
          <input
            id={id || name}
            name={name}
            maxLength={maxLength}
            className={`${className || ''} ${getWidthCssClass(
              calculateWrappedInputWidth(width)
            )} max-w-full`}
            {...rest}
            ref={ref}
          />
        </ErrorTooltip>
      </InputWrapper>
    );
  }
);

export default Input;
