import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-left: 3.875rem;
  margin-right: 3.475rem;
  padding-bottom: 5rem;
  @media (max-width: 414px) {
      width:93%;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      
  }
`;

export const Box = styled(Link)`
 background: #FFFFFF;
 min-height: 14.375rem;

 display: flex;
 
 margin-top: 2.688rem;
 border-radius: 0.409rem;
 -webkit-box-shadow:  0px 3.2680413722991943px 16.340206146240234px 0px #0000001A;
 text-decoration: none; 




  img{
    flex-shrink: 0;
    min-height: 100%;
    width: 14rem;
    object-fit: cover;
    border-top-left-radius: 0.409rem;
    border-bottom-left-radius: 0.409rem;

    @media (max-width: 720px) {
      width: 10rem;
    }

  }
`



export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    align-self: flex-start; 
    padding-top: 3rem;
    padding-left: 2rem;
    font-weight: 700;
    color: var(--green);
    @media (max-width: 414px) {
      padding-left: 0.8rem;  
      font-size: 19px;
  }
  }

  p {
    padding-top: 0.5rem;
    padding-left: 2rem;

    text-align: left;
    font-weight: 400;
    color: var(--text);
    @media (max-width: 414px) {
      padding-left: 0.8rem;      
  }
  }

  button{
    border: none;
    background: none;
    color: var(--green);
    font-weight: 700;
    align-self: flex-end;
    padding-top: 3.5rem;
    padding-right: 1rem;
  }
`