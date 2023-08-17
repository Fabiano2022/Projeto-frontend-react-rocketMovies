import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_20};

    
    padding: 0 123px;    
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 64px;
`;

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 64px;
    flex-grow: 1;

    input {
        
        width: 630px;
       height: 56px;
       background: none;
       border: none;
       border-radius: 10px;
       background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
    
       margin-right: 64px;
    
       color: ${({ theme }) => theme.COLORS.GRAY_17};
       padding: 24px;
       font-size: 14px; 
    }

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;      
      

           
    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        margin-right: 9px;
        line-height: 18px;
        height: 40px;                            
    }

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_05};
    }
    
    a {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_17};        
    }

    a:hover {
        color: yellow;
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;