import styled, { css } from 'styled-components';
import WarningIcon from '../../icons/warning';
import CheckIcon from '../../icons/check';

export const Label = styled.label`
  ${props => props.darkBg && css`color: white`};
`;

export const Required = styled.span`
  color: ${props => props.theme.colors.digitalDarkRed};
`;

export const AssistiveText = styled.span`
  margin-top: 3px;
  display: inline-block;
  ${props => props.darkBg && css`color: white`};
`;

const validationIcon = css`
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  height: 24px;
`;

export const StyledWarningIcon = styled(WarningIcon)`
  ${validationIcon};
`;

export const StyledCheckIcon = styled(CheckIcon)`
  ${validationIcon};
`;
