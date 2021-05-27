import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }
    body {
        background-color: white;
        color: #312F2F;
    }
  /* ::-webkit-scrollbar {
    width:10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background:#312F2F;
  }

  ::-webkit-scrollbar-thumb {
    background: #44CF6C;
    border-radius: 10px;
  } */

    a{
        text-decoration: none;
        color: #312F2F;
    }

    html, body, #boby {
        height: 100%;
    }


    img {
        display: block;
        /* max-width: 100%; */
    }
    button, input {
        display: block;
        font-size: 1rem!important;
    }

    .containerHeader {
      max-width: 80rem;
      padding: 0 .8rem;
      margin: 0 auto;
    }

    .container {
        max-width: 65rem;
        padding: 0 .8rem;
        margin: 0 auto;
        padding-bottom: 5rem;
    }

    .select:after {
      content: "";
      display: block;
      width: 100%;
      background-color: #44CF6C;
      height: 2px;
    }

    .container-app {
      background-color: white;
      border-radius: 10px 4px 4px 4px;
    }

    .animeLeft {
        opacity: 0;
        transform:translateX(-20px);
        animation: animeLeft .35s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }

    .animeRight {
        opacity: 0;
        transform:translateX(20px);
        animation: animeRight .55s forwards;
    }

    @keyframes animeRight {
        to {
            opacity: 1;
            transform: initial;
        }
    }
`;