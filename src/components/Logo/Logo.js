import {LogoContainer, Text} from './Logo.styles';

const Logo = () => {
  return (
    <LogoContainer onClick={() => window.location.reload()}>
      <Text>Moviez</Text>
    </LogoContainer>
  );
};

export default Logo;
