import {LoaderOverlay} from './Loader.styles';
import {HashLoader} from 'react-spinners';

const Loader = () => {
  return (
    <LoaderOverlay>
      <HashLoader size={100} color='#bb2e1f' />
    </LoaderOverlay>
  );
};

export default Loader;
