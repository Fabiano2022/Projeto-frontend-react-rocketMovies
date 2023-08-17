import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: grid;
    grid-template-rows: 115px auto;
    grid-template-areas: 
    'header'
    'content';

    >main {
        grid-area: content;
        overflow-y: scroll;
        padding: 40px 123px;
    }

    main::-webkit-scrollbar {
    width: 8px;
  }
  
    main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

`;

export const Content = styled.div`
    button {
        margin-bottom: 24px;
    }

    >div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 19px;
        margin-bottom: 14px;
    }

    h1 {
        font-size: 36px;
        color: ${({ theme }) => theme.COLORS.GRAY_05};
    }

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    .profile {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: justify;
        flex-wrap: nowrap;
        gap: 8px;
        margin-bottom: 40px;
        font-size: 16px;

    }

    img {       
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    p {
        margin-top: 40px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_05};
        text-align: justify;
    }
    
    `;

    
    


