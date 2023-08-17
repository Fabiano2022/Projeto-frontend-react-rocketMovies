import styled from 'styled-components'
import backgroundImg from '../../Assets/background.png'

export const Container = styled.div`
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: stretch
    ;
`;

export const Form = styled.form`
padding: 0 134px;
display: flex;
flex-direction: column;
justify-content: center;


> h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;    
}

p{
    color: ${({ theme }) => theme.COLORS.GRAY_15};
    font-size: 14px;
    margin-bottom: 48px;      
}

> h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_05};
    font-size: 24px;
    margin-bottom: 48px;  
}

Input {
    color: ${({ theme }) => theme.COLORS.GRAY_17};
    font-size: 16px;
    margin-right: 8px;
}

> a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 42px;
    font-size: 16px;
}
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`;