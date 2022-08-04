import {ErrorContainer} from './Error.styles';

const Error = ({errorMessage}) => {
  return (
    <ErrorContainer>
      {errorMessage}
    </ErrorContainer>
  );
};

export default Error;
