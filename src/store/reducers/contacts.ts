import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../models/Contact'


type ContactState = {
    items: Contact[]
}

const initialState: ContactState = {
    items: [
    ]
}

const ContactsSlice = createSlice(
    {
    name: 'Contacts',
    initialState,
    reducers: {

    exclude: (state, action: PayloadAction<number>) => {
    state.items = state.items.filter((Contact) => Contact.id !== action.payload)
    },
    
    edit: (state, action: PayloadAction<Contact>) => {

    const indexDaContact = state.items.findIndex(
    (t) => t.id === action.payload.id
    )

    if (indexDaContact >= 0) {
        state.items[indexDaContact] = action.payload
    }
    },

    Add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
    }
    }
})

export const { Add, edit, exclude} = ContactsSlice.actions
export default ContactsSlice.reducer
