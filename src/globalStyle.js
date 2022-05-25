import { Global, css } from '@emotion/react';

export const GlobalStyle =()=>(
    <Global
        styles={css`
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            :focus{
                outline: none;
            }
        }
    `}
/>
)