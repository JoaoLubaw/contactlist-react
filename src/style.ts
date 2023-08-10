import { createGlobalStyle } from "styled-components";

export const colors = {
    DarkGrey: '#1E1E1E',
    MeddiumGrey: '#636363',
    LightGrey: '#D9D9D9',
    Black: '#000000',
    DarkBrown: '#8D5F47',
    LightBrown: '#D1B5A0',
    Orange: '#B24004'
}

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Slab', serif;
    list-style:none;
    text-decoration: none;
}

body {
    background-color: ${colors.LightGrey};
}

.container {
margin:  0 48px;
position: relative;
}

`
export default GlobalStyle