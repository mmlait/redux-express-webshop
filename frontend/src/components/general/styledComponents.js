import styled from 'styled-components';
import WindowCloseIcon from 'mdi-react/WindowCloseIcon';
import colors from '../../colors';

const LightHeading = styled.h2`
  color: ${colors.fontLight}
  font-size: 1.5rem;
  text-align: center;
`

const DarkHeading = styled.h4`
  color: ${colors.fontDark}
  font-size: 1.1rem;
`

const StyledCloseIcon = styled(WindowCloseIcon)`
  fill: ${colors.primary};
  width: 20px;
  height: 20px;
`

export {
  LightHeading as default, 
  DarkHeading, 
  StyledCloseIcon
};