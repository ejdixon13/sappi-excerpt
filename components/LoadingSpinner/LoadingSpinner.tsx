import * as React from 'react';
import styles from './LoadingSpinner.module.scss';

interface ILoadingSpinnerProps {
  className?: string;
  style?: React.CSSProperties;
  horizontal?: boolean;
  ajax?: boolean;
}

const LoadingSpinner: React.FunctionComponent<ILoadingSpinnerProps> = ({
  horizontal,
  ajax,
  className,
  style,
}) => {
  const ajaxOrDefault = ajax ? styles.loadingAjax : styles.loadingSpinner;
  const classes = `${className} ${
    horizontal ? styles.loadingHorizontal : ajaxOrDefault
  }`;

  return <div className={classes} style={style} />;
};

export default LoadingSpinner;
