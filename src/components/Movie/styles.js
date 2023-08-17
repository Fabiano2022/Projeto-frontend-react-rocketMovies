import styled from 'styled-components'

export const Container = styled.div`
  
  
  main {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};   
    border-radius: 16px ;
    padding: 32px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_05};
    margin-bottom: 8px;
  }

svg {
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-bottom: 15px;
}

p {
  color: ${({ theme }) => theme.COLORS.GRAY_20};
  font-size: 16px;
  text-align: justify;
}

footer {
  margin-top: 15px;
}
`;

