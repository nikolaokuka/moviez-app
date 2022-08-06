import {useSelector} from 'react-redux';

import {ErrorContainer} from './Error.styles';

const Error = () => {
  const {error} = useSelector((state) => state.moviesSlice);

  return (
    <ErrorContainer>
      {error}
    </ErrorContainer>
  );
};

export default Error;
