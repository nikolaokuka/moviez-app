export const moviesInitialState = {
  movies: [],
  error: '',
  loading: false,
  selectedMovie: {}
};

export const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    case 'fetching':
      return {
        ...state,
        loading: true
      };
    case 'success':
      return {
        ...state,
        movies: action.payload,
        error: '',
        loading: false,
      };
    case 'failure':
      return {
        ...state,
        error: action.payload,
        loading: false,
        movies: []
      };
    case 'selectMovie':
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      throw new Error('Action type not supported.');
  }
};
