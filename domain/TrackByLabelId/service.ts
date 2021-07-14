import Axios from 'axios';
import { TrackByLabelRequest } from './types/TrackByLabelRequest.interface';
import { TrackByLabelResponse } from './types/TrackByLabelResponse.interface';

export const trackByLabelId = async (
  params: TrackByLabelRequest
): Promise<TrackByLabelResponse> => {
  const { data } = await Axios.get('/portal/resources/trackByLabel', {
    params,
  });
  return data;
};
