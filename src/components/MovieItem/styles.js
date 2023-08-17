import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items:center;
  

  height: 56px;
  width: ${({ isNew }) => (isNew ? '180px' : '114px')};

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.RED};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_17}` : 'none'};
  

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;
  

  > button {
    border: none;
    background: none;    
  }  
  
  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};    
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  input {
    height: 56px;
    width: 100%;

    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_17};
    }
  }
`