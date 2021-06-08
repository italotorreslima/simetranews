import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
  --green:#0DADAE;
  --background: #E5E5E5;
  --text: #666666;
  --yellow:#FBB03F;
  --black: #444444;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Titillium Web", sans-serif;
}

html{
  @media (max-width: 1080px){
    font-size:93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
}


  margin: 0;
  padding:0;
  box-sizing: border-box;

`