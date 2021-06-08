import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

`;

export const Retornador = styled(Link)`
h1{
    color: var(--green);
    font-weight: 400;
    padding-top: 2rem;
    padding-left: 5rem;
    font-size: 1.4rem;
    display:inline-block;
    text-decoration: none;


}
span{
    color: #999;
}

@media (max-width: 414px) {
    h1{
        padding-left: 3rem;
  }

  }
`

export const BlogContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

h1{
    color: var(--text);
    margin-bottom: 2rem;
    text-align:center;
    padding: 0.39rem;

}

p, img{
      width: 55%;
      font-size: 1.3rem;
  }

  @media (max-width: 414px) {
    p, img{
      width: 80%;
  }
  h1{
    text-align: left;
    padding-left: 2.7rem;
    font-size: 2.5rem;
    font-size: 2.2rem;
  }

  }
img{
margin-bottom: 1.3rem;

}
@media (min-width: 1080px) {
     img{
      width: 35%;
      height: 20%;
  }
}
  p{
      font-weight: 400;
      color: var(--text);
      margin-bottom: 3.5rem;
  }
`
