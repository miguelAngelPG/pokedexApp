import React from 'react'
import { BsArrowUp } from "react-icons/bs"


export const FloatingButton = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button onClick={ () => scrollToTop() } className='floating-button' >
            <BsArrowUp/>
        </button>
    )
}
