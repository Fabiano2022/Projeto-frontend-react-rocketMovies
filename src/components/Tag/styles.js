
import styled from 'styled-components'

export const Container = styled.span`

    font-size: 12px;
    line-height: 14px;
    padding: 5px 16px;
    margin-right: 8px;
    border-radius: 8px;
    
    color: ${({ theme }) => theme.COLORS.GRAY_10};    

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    

`;