import { Tooltip } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';
import * as React from 'react';
import './ErrorTooltip.scss';

interface IErrorTooltipProps {
  hasError: boolean;
  message: React.ReactNode;
  placement?: TooltipPlacement;
}

const ErrorTooltip: React.FunctionComponent<IErrorTooltipProps> = ({
  hasError,
  message,
  children,
  ...rest
}) => {
  return (
    <Tooltip
      overlayClassName={`sappi-ant-tooltip-error ${hasError ? '' : 'hidden'}`}
      title={message}
      trigger="hover"
      {...rest}
    >
      {children}
    </Tooltip>
  );
};

export default ErrorTooltip;
