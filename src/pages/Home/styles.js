import styled from 'styled-components'

import { Link } from "react-router-dom"



export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';
    
      
    main {
        grid-area: content;
        overflow-y: auto;        
        padding: 51px 123px;                
    } 
    
    main::-webkit-scrollbar {
    width: 8px;
  }
  
    main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
    
    header {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        margin-bottom:41px;       
    }

    h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
  }    
`; 

export const Content = styled.div`
  grid-area: content;  
  overflow-y: auto;
`


export const AddMovie = styled(Link)`

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;

    

  display: flex;
     align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 16px;
    padding: 14px 38px;
    border-radius: 8px;

    cursor: pointer;

    > svg {
    margin-right: 8px; 
    }
    
`


    

  