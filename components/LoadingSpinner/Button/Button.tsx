import * as React from 'react';
import getWidthCssClass from '../../services/Util/getWidthCssClass.util';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import styles from './Button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?:
    | 'primary'
    | 'danger'
    | 'inverse'
    | 'clear'
    | 'round'
    | 'circle-danger'
    | 'tiny'
    | 'link';

  /**
   * Valid values consist of those used in tailwindCSS for width (i.e. w-*)
   */
  width?: string;
  loading?: boolean;
}

/**
 * Button.
 *
 * @param {ButtonProps} props button's props
 * @returns {React.ReactElement<ButtonProps>} Button.
 */
export function Button(props: ButtonProps): React.ReactElement<ButtonProps> {
  const {
    children,
    theme,
    width,
    type,
    className,
    onClick,
    loading,
    ...rest
  } = props;
  const buttonThemeClass = `button--${theme}`;
  const widthClass = getWidthCssClass(width);
  const buttonClasses =
    theme !== 'link'
      ? `${styles.button} ${styles[buttonThemeClass]} ${widthClass} ${className}`
      : `${styles.buttonLink} ${widthClass} ${className}`;
  return (
    <button
      type={type}
      {...rest}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
      className={buttonClasses}
    >
      {children}
      {loading && (
        <LoadingSpinner className="inline-block ml-2 relative top-1" />
      )}
    </button>
  );
}
