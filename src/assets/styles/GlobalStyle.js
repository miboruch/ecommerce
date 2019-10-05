import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    margin-top: 64px;
  }
  
  body {    
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }
  
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), url('../../assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'Poppins';   
    src: local('Poppins'), url('../../assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
  }
`;

export default GlobalStyle;
