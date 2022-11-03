export const FETCH_TYPES = 'FETCH_TYPES';
export const RECEIVED_TYPES = 'RECEIVED_TYPES';

export const fetchTypes = () => ({
  type: FETCH_TYPES,
});

export const receivedTypes = (payload) => ({
  type: RECEIVED_TYPES,
  payload,
});
