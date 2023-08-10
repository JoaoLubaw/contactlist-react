import { styled } from "styled-components";
import { colors } from "../../style";


export const ContainerGeral = styled.div`
display: flex;
max-width: 100px;
margin: 32px;

.Show {
    display: block;
}

.editing {
    border: 2px solid ${colors.Orange}
}

`

export const ContactContainer = styled.div`
display:flex;
border: 2px solid  ${colors.MeddiumGrey};
border-radius: 5px;
margin-right: 8px;
padding: 8px;
justify-content: space-between;
width: 900px;
cursor: pointer;
heigth: 64px;
height: 100%;
resize: none;
user-select: none;

.Name {
    display: flex;
    text-align: center;
    align-items: center;
}

.Informations {
    display:block;
    text-align: end;
}

`

export const Avatar = styled.img`
border-radius: 50%;
height: 56px;
display:flex;
align-items: center;
margin-right: 16px;
`

export const Information = styled.div`
display: flex;
font-size: 14px;
margin: 8px;
align-items: center;
justify-content: end;

img {
    height: 16px;
    margin-right: 4px;
}

textarea {
    color: ${colors.DarkGrey};
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    resize: none;
    background-color: transparent;
    border: none;
    height: 20px;
    max-width:100%;
    

    &:disabled {
    color: ${colors.DarkGrey};
    }
    
`

export const Name = styled.textarea`
    font-size: 16px;
    font-weight: normal;
    background-color: transparent;
    border: none;
    text-align: left;
    height: 24px;
    width: 500px;
    resize: none;

    &:disabled {
    color: ${colors.Black};
    }
    `

export const EditContainer = styled.div`
display: none;
max-width: 33px;
margin-left:4px;

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-top: 4px;

    img {
        height: 33px;
    }
}
`



