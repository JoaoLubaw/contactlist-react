import styled from "styled-components";
import { colors } from "../../style";

export type Props ={
Cancel? : boolean
}

export const Form = styled.div`
text-align: center;
width: 600px;
background-color: ${colors.LightGrey};
position: fixed;
justify-content:center;
top:40%;
left: 35%;
padding: 32px 0;
border-radius: 8px;


h2 {
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 16px;
}

form {
    max-width: 400px;
    margin: 0 auto;

    input {
        background-color: transparent;
        border-radius: 2px;
        border: 1px solid ${colors.MeddiumGrey};
        padding: 4px;
        font-size:14px;
        margin: 4px;
    }

    .name {
        width: 370px;
    }

    .Infos {
        justify-content: space-between;
    }
}

`

export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: ${colors.DarkGrey};
opacity: 0.7;
`

export const Button = styled.button<Props>`
border: 0.5px solid ${colors.DarkGrey};
border-radius: 2px;
padding: 8px;
font-size: 12px;
font-weight: bold;
background-color: ${(Props) => (Props.Cancel ? colors.Orange : colors.LightBrown)};
margin-top: 16px;
margin-left: 8px;
cursor: pointer;
`

export const ButtonAdd = styled.button`
background-color: ${colors.DarkBrown};
position: fixed;
bottom: 64px;
right: 64px;
cursor: pointer;

border: 1px solid ${colors.LightBrown};
border-radius: 50%;
width: 64px;
height: 64px;


span {
    font-weight: bold;
    font-size:40px;
    color: ${colors.LightBrown};
}
`
