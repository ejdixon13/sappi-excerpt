// import { t, Trans } from '@lingui/macro';
import { Space } from 'antd';
import * as React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import useAnalytics from '../../hooks/useAnalytics';
import useRole from '../../hooks/useRole';
import stripZeros from '../../services/Util/stripZeros.util';
import { AuthorityRole } from '../../types/Authority.interface';
import ResultLabelValue from './ResultLabelValue';
import { TrackByLabelResponse } from './types/TrackByLabelResponse.interface';

interface IResultsProps {
  result: TrackByLabelResponse;
}

const Results: React.FunctionComponent<IResultsProps> = ({ result }) => {
  const { hasRole } = useRole();
  // const { trackPageView } = useAnalytics();
  // const history = useHistory();

  const navigateToOrderDetails = () => {
    // trackPageView('TRACKBYLABELID', 'ORDERDETAILS');
    // history.push(
    //   `/orderTracking/details/${result.documentNumber}/${result.documentPosition}`
    // );
  };

  const navigateToFileAClaim = () => {
    // trackPageView('TRACKBYLABELID', 'FILECLAIM');
    // history.push(
    //   `/claim/file/${result.documentNumber}/${result.documentPosition}`
    // );
  };

  return (
    <Space
      className="border border-gray-light400 py-5 px-7"
      size="middle"
      direction="vertical"
      style={{ width: '350px', borderWidth: '5px' }}
    >
      <h2 className="text-4xl mb-2">Results</h2>
      <ResultLabelValue
        label={`Sappi Order Number`}
        value={`${stripZeros(result.documentNumber)} / ${stripZeros(
          result.documentPosition
        )}`}
      />
      <ResultLabelValue
        label={`My Order Number`}
        value={result.customerOrderNumber}
      />
      <Space size="middle">
        <Button theme="primary" onClick={navigateToOrderDetails}>
          Order Details
        </Button>
        {hasRole(AuthorityRole.ROLE_COMPLAINT_CREATE) && (
          <Button theme="primary" onClick={navigateToFileAClaim}>
            File a Claim
          </Button>
        )}
      </Space>
    </Space>
  );
};

export default Results;
