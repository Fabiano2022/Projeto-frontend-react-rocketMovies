import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 115px auto;
    grid-template-areas: 
    'header'
    'content';

    main {
        grid-area: content;
        overflow-y: scroll;
        padding: 40px 123px;
    }

    > main::-webkit-scrollbar {
    width: 0.8rem;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }    
`;

export const Content = styled.div`
   
   > button {
    margin-bottom: 24px;
    font-size: 16px;    
  }

  h1 {
    margin-bottom: 40px;
    font-size: 36px;
  }
    
   .inputs {
    display: flex;
    
    flex-wrap: nowrap;
    gap: 40px;
    margin-bottom: 40px;
   }

   .markers {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
    border-radius: 8px;

    padding: 16px 16px;

    display: flex;     
    gap: 24px;    
   }

   .buttons {
      display: flex;
      justify-content: space-between;
      gap: 40px;       
    
      button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px; 
        font-weight: 500;   
      }

      button:nth-child(2) {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
        font-size: 16px; 
        font-weight: 500;
     }
   
   }   
`;



