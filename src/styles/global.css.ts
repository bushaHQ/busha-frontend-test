import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-size:62.5%;
    }
    #root{
        margin:0 auto;
    }

    button {
        cursor: pointer;
        border:0;
    }

    a {
  cursor: pointer;
        text-decoration:none;
    }
 `
