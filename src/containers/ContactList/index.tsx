import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import ContactCard from "../../components/ContactCard"

const ContactList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts)

    return (
        <>
        <ul>
        { items.map((t) => (
        <li key={t.id}>
            <ContactCard
            id={t.id}
            fullname={t.fullname}
            email={t.email}
            number={t.number}/>
        </li>
        ))}
        </ul>
        </>
    )
}

export default ContactList