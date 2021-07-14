import { find, isNumber } from 'lodash';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import useDateFormatter from '../../hooks/useDateFormatter';
import getWidthCssClass from '../../services/Util/getWidthCssClass.util';
import Option from '../../types/Option.type';
import InputWrapper, {
  calculateInputWrapperWidth,
  calculateWrappedInputWidth,
} from '../InputWrapper/InputWrapper';
import styles from './Select.module.scss';

export type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Option[] | undefined;
  omitBoxOutline?: boolean;
  hideIfOneOption?: boolean;
  width?: string;
  required?: boolean;
  dateSelect?: boolean;
  error?: { message: string } | FieldError | undefined;
};

const getLabelByValue = (
  value: string | number | readonly string[],
  options: Option[]
) => {
  const selectedOption = find<Option>(options, { value });
  if (selectedOption) {
    return selectedOption.label;
  }
  return '';
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      name,
      options,
      omitBoxOutline,
      hideIfOneOption,
      value,
      disabled,
      width,
      required,
      className,
      dateSelect,
      error,
      ...rest
    },
    ref
  ) => {
    const { format } = useDateFormatter();
    return (
      <>
        {hideIfOneOption && options?.length === 1 ? (
          <strong className="ml-3">
            {value && options ? getLabelByValue(value, options) : ''}
          </strong>
        ) : (
          <InputWrapper
            omitBoxOutline={omitBoxOutline}
            error={error}
            width={calculateInputWrapperWidth(width)}
          >
            <span
              className={`${styles['dropdown-icon']} ${
                disabled ? styles['dropdown-icon--disabled'] : ''
              } relative`}
            >
              <select
                id={id || name}
                name={name}
                value={value}
                disabled={disabled}
                required={required}
                className={`${className || ''}  ${getWidthCssClass(
                  calculateWrappedInputWidth(width)
                )} max-w-full`}
                {...rest}
                ref={ref}
              >
                {options
                  ? options.map((option: Option) => (
                      <option
                        key={option.key || (option.value as string)}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {dateSelect && isNumber(option.label)
                          ? format(option.label as number)
                          : option.label}
                      </option>
                    ))
                  : null}
              </select>
            </span>
          </InputWrapper>
        )}
      </>
    );
  }
);

export default Select;
