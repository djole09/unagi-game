import styled from 'styled-components';

export const CreateCardForm = styled.form`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[12]};
`;
