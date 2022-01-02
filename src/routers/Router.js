import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom'
import { SideBar } from '../components/SideBar'
import { About } from '../pages/About'

// import { useDispatch } from 'react-redux'

import { Home } from '../pages/Home'
import { Pokemon } from '../pages/Pokemon'

export const Router = () => {

    // const dispatch = useDispatch();

    // const [ checking, setChecking ] = useState(true);
    // const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    return (
        <BrowserRouter>
            {/* <div className='blur' > */}
                <SideBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Pokemon" element={<Pokemon />} />
                    <Route path="About" element={<About />} />
                    <Route
                        path="*"
                        element={<Home />}
                    />
                </Routes>
            {/* </div> */}
        </BrowserRouter>
    )
}