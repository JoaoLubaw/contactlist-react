
import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { Add } from '../../store/reducers/contacts'
import InputMask from 'react-input-mask'


const AddNew = () => {
    const dispatch = useDispatch()
    const [Open, setOpen] = useState(false)

    const [fullname, setFullname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const AddContact = (event: FormEvent) => {
        event.preventDefault()

        dispatch(
            Add({
            email,
            fullname,
            number
            })
        )
        setOpen(false)
    

        }

    if (!Open) {
        return (
            <S.ButtonAdd onClick={() => setOpen(true)} ><span>+</span></S.ButtonAdd>
        )
    }
    return (
    <>

    <S.Overlay onClick={() => setOpen(false)}></S.Overlay>
    <S.Form> 
        <h2>Adicionar um novo contato</h2>
        
        <form onSubmit={AddContact}>
            <input type="text" className="name" placeholder='Nome completo'
            onChange={(event) => setFullname(event.target.value)} />

            <div className="Infos">
            <input type="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
            <InputMask mask="(99) 99999-9999" type="tel" placeholder='Telefone' onChange={(event) => setNumber(event.target.value)}/>
            </div>

            <S.Button type="button" Cancel onClick={() => setOpen(false)}>Cancelar</S.Button>
            <S.Button type="submit" >Adicionar</S.Button>
            
        </form>


    </S.Form>
    </>
)}

export default AddNew