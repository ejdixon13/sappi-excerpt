import create from 'zustand';
import { TrackByLabelRequest } from './types/TrackByLabelRequest.interface';
import { TrackByLabelResponse } from './types/TrackByLabelResponse.interface';

export const DEFAULT_REQUEST: TrackByLabelRequest = {
  pallet: '',
  mics: '',
  reel: '',
};

type TrackByLabelState = {
  error: string | null;
  request: TrackByLabelRequest | null;
  response: TrackByLabelResponse | null;
  setError: (error: string | null) => void;
  setRequest: (request: TrackByLabelRequest | null) => void;
  setResponse: (response: TrackByLabelResponse | null) => void;
};

const useTrackByLabelStore = create<TrackByLabelState>((set) => ({
  error: null,
  request: DEFAULT_REQUEST,
  response: null,
  setError: (error: string | null) => set(() => ({ error })),
  setRequest: (request: TrackByLabelRequest | null) => set(() => ({ request })),
  setResponse: (response: TrackByLabelResponse | null) =>
    set(() => ({ response })),
}));

export default useTrackByLabelStore;
