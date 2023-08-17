import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};

  margin-bottom: 8px;
  border-radius: 10px;
  
  
  > input {
    height: 55px;
    width: 100%;
    

    padding: 19px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_DARK};     
    }

    
    
  }

  > svg {
  margin-left: 16px;
}
`
