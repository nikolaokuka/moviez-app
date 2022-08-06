import {useDispatch, useSelector} from 'react-redux';

import {FaSun, FaMoon} from 'react-icons/fa';
import {ReactThemeSwitch} from './ThemeSwitch.styles';

import {toggleTheme} from '../../store/features/theme/themeSlice';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.themeSlice);

  const handleChange = () => {
    dispatch(toggleTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ReactThemeSwitch
      checked={theme === 'dark' ? true : false}
      onChange={handleChange}
      handleDiameter={29}
      uncheckedIcon={<FaMoon color='#fff' size={23} />}
      checkedIcon={<FaSun color='#ebc600' size={27} />}
      height={40}
      width={80}
      onColor='#131617'
      offColor='#cdcdcd'
      activeBoxShadow=''
      onHandleColor='#737373'
    />
  );
};

export default ThemeSwitch;
