import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { FaBars } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { MdCatchingPokemon } from 'react-icons/md'

import { changeCurrentPokemon, changePage } from '../actions/ui'
import { dataSidebar } from '../data/dataSidebar'
import { useForm } from '../hooks/useForm'
import { getPokemonApi } from '../helpers/loadInfo'
import { Modal } from './Modal'
import { useModal } from '../hooks/useModal'
import { upperFirstLetter } from '../hooks/useUpperFirstLetter'


export const SideBar = () => {

    const dispatch = useDispatch()
    const { page, currentPokemon } = useSelector( state => state.ui )

    const [sidebar, setSidebar] = useState( false )
    const [ isOpen, openModal, closeModal ] = useModal( false )

    const showSideBar = () => setSidebar( !sidebar )
    
    const changeP = ( page ) => {
        dispatch( changePage( page )  )
    }
    
    const [ formValues, handleInputChange ] = useForm({
        search:'',
    })

    const { search } = formValues

    const onSubmit = async ( e ) => {
        e.preventDefault()
        if ( search.length > 2 ) {

            const data = await getPokemonApi( search.toLowerCase() )
            dispatch( changeCurrentPokemon( data ) )
            openModal()
        }
    }
    
    return (
        <>
            <IconContext.Provider value={{ color: 'red'}}>
                <div className='sidebar'>
                    <Link to='#' className='menu-items'>
                        <FaBars onClick={ showSideBar } />
                    </Link>
                    <p>Poke<MdCatchingPokemon/>Dex</p>
                    <div className='menu-search-content' >
                        <form onSubmit={ onSubmit }>
                            <input autoComplete='off' type='text' name='search' onChange={ handleInputChange } className='menu-search' placeholder='Buscar pokemon' /><FaSearch onClick={ onSubmit } /> 
                        </form>
                    </div>
                </div>
                <nav className={ sidebar ? 'nav-menu-active' : 'nav-menu' } >
                    <ul className='nav-menu-list'  >
                        <li>
                            <Link to='#' className='menu-items' onClick={ showSideBar }>
                                <AiOutlineClose/>
                            </Link>
                        </li>
                        {
                            dataSidebar.map(( item, index ) => {
                                return (
                                    <li key={ index } className={ (page === item.title) ? `${ item.cName } current` : item.cName }>
                                        <Link to={ item.path } onClick={ () => { 
                                            showSideBar()
                                            changeP( item.title )
                                          }} >
                                            { item.icon }
                                            <span>{ item.title }</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
            <Modal isOpen={isOpen} closeModal={closeModal} title={ upperFirstLetter( currentPokemon?.name ) }/>
        </>
    )
}
