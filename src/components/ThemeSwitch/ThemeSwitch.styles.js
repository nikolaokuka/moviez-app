import styled from 'styled-components';
import Switch from 'react-switch';

export const ReactThemeSwitch = styled(Switch)`
  margin-right: 4rem;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
`;
