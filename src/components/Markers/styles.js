import styled from 'styled-components'

export const Container = styled.div`
  margin: 32px 0 24px;

  > h2 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_17};
    font-size: 36px;
    font-weight: 500;
  }
`