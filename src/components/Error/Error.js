import {useSelector} from 'react-redux';

import {ErrorContainer} from './Error.styles';

const Error = () => {
  const {error} = useSelector((state) => state.movies);

  return (
    <ErrorContainer>
      {error}
    </ErrorContainer>
  );
};

export default Error;
