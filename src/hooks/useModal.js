import { useState } from 'react'

export const useModal = ( initialState = false) => {
    
    const [isOpen, setisOpen] = useState(initialState)

    const openModal = () => setisOpen( true )    
    const closeModal = () => setisOpen( false )

    return [ isOpen, openModal, closeModal ]
}