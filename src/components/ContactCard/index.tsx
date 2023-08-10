import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Contact } from '../../models/Contact'
import { edit, exclude } from '../../store/reducers/contacts'

import * as S from './styles'
import Phone from '../../assets/images/phone_icon.png'
import Email from '../../assets/images/email_icon.png'
import Perfil from '../../assets/images/contact.jpg'
import EditIcon from '../../assets/images/pencil_icon.svg'
import TrashIcon from '../../assets/images/trash_icon.png'
import Save from '../../assets/images/checked.png'
import Cancel from '../../assets/images/cancel.png'

type Props = Contact

const ContactCard = ({email: emailOrigin, fullname: fullnameOrigin, id, number: numberOrigin}:Props) => {
const dispatch = useDispatch()

const [ShowButtons, setShowButtons] = useState(false)
const [IsEditing, setIsEditing] = useState(false)

const [fullname, setFullname] = useState('')
const [email, setEmail] = useState('')
const [number, setNumber] = useState('')

useEffect(() => {
    if (fullnameOrigin.length > 0) {
        setFullname(fullnameOrigin)
    }
    }, [fullnameOrigin])

    useEffect(() => {
        if (emailOrigin.length > 0) {
            setEmail(emailOrigin)
        }
        }, [emailOrigin])

        useEffect(() => {
            if (numberOrigin.length > 0) {
                setNumber(numberOrigin)
            }
            }, [numberOrigin])

    return (
        <S.ContainerGeral>
        <S.ContactContainer className={IsEditing ? 'editing' : ''} onClick={() => setShowButtons(!ShowButtons)}>

            <div className='Name'>
            <S.Avatar src={Perfil} alt="Imagem de perfil" />   
                <S.Name disabled={!IsEditing} value={fullname} onChange={(event) => setFullname(event.target.value)}/>
            </div>

            <div className="Informations">
                <S.Information>
                    <img src={Phone} alt="Ícone de telefone"/>
                    <textarea disabled={!IsEditing} value={number} onChange={(event) => setNumber(event.target.value)} >{number}</textarea>
                    </S.Information>

                <S.Information>
                    <img src={Email} alt="Ícone de email"/>
                    <textarea disabled={!IsEditing} value={email} onChange={(event) => setEmail(event.target.value)}>{email}</textarea>
                </S.Information>
            </div>
        </S.ContactContainer>

        {IsEditing ? (
            <S.EditContainer className='Show'>
            <button onClick={() => {
                dispatch(
                edit({
                    id,
                    email,
                    fullname,
                    number
                })
                )
                setIsEditing(false)}
                } ><img src={Save} alt="Clique aqui para salvar alterações no contato" /></button>
            <button onClick={() => setIsEditing(false)}><img src={Cancel} alt="Clique aqui para cancelar alterações no contato" /></button>
            </S.EditContainer>
        ) : (
        <S.EditContainer className={ShowButtons ? 'Show' : ''}>
            <button onClick={() => setIsEditing(true)} ><img src={EditIcon} alt="Clique aqui para editar o contato" /></button>
            <button onClick={() => dispatch(exclude(id))}><img src={TrashIcon} alt="Clique aqui para exluir o contato" /></button>
        </S.EditContainer>
        )
        }

        </S.ContainerGeral>
    )
}

export default ContactCard