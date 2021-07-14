import 'antd/dist/antd.css';
import { t, Trans } from '@lingui/macro';
import { Space } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
// import useAnalytics from '../../hooks/useAnalytics';
import Examples from './Examples/Examples';
import Results from './Results';
import SearchForm from './SearchForm';
import { trackByLabelId } from './service';
import { TrackByLabelRequest } from './types/TrackByLabelRequest.interface';
import useTrackByLabelStore, {
  DEFAULT_REQUEST
} from './useTrackByLabelStore.store';

const MISSING_INPUT_ERROR = `Please be sure to supply parameters before submitting.`;
const NO_ORDERS_FOUND_ERROR = `No orders found for the given information.`;

interface ITrackByLabelIdProps {
  isWidget: boolean;
}

const TrackByLabelId: React.FunctionComponent<ITrackByLabelIdProps> = ({
  isWidget
}) => {
  // const { trackPageView } = useAnalytics();
  const request = useTrackByLabelStore(state => state.request);
  const response = useTrackByLabelStore(state => state.response);
  const error = useTrackByLabelStore(state => state.error);
  const { setError, setRequest, setResponse } = useTrackByLabelStore();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    getValues,
    trigger
  } = useForm<TrackByLabelRequest>({
    mode: 'all',
    defaultValues: request as TrackByLabelRequest
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (formData: TrackByLabelRequest) => {
    setRequest(formData);
    setResponse(null);
    setError(null);
    trackPageView('TRACKBYLABELID', 'SUBMIT');
    setIsSubmitting(true);
    try {
      setResponse(await trackByLabelId(formData));
    } catch (e) {
      if (e.response.status === 404) {
        setError(NO_ORDERS_FOUND_ERROR);
      } else {
        setError(MISSING_INPUT_ERROR);
      }
    }
    setIsSubmitting(false);
  });

  const onReset = () => {
    reset(DEFAULT_REQUEST);
    setResponse(null);
    setError(null);
  };

  const showExamples = !response && !isWidget && !isSubmitting && !error;

  return (
    <Space direction="vertical" size="large">
      {!isWidget && (
        <div className="w-1/2">
            Here you can find the correct purchase order by entering numbers
            linked to labels on shipments you have received. Simply enter the
            pallet, roll or mill order number identified and select Submit. Only
            one field needs to be filled to execute a search.
        </div>
      )}
      <Space size="large" align="start">
        <SearchForm
          onSubmit={onSubmit}
          onReset={onReset}
          isWidget={isWidget}
          register={register}
          formState={formState}
          getValues={getValues}
          trigger={trigger}
        />
        <div>
          {showExamples && <Examples />}
          {!!response && !isSubmitting && <Results result={response} />}
          {/* {isSubmitting && (
            <LoadingSpinner
              horizontal
              className="relative"
              style={{ top: '50px', left: '100px' }}
            />
          )} */}
          <div className="text-lg text-red-red mt-10">{error}</div>
        </div>
      </Space>
    </Space>
  );
};

export default TrackByLabelId;
