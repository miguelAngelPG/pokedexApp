import { FaBars } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'

export const dataSidebar = [
    {
        title: 'Home',
        path: '/',
        icon: <FaBars />,
        cName: 'nav-item',
    },
    // {
    //     title: 'Pokemon',
    //     path: 'Pokemon',
    //     icon: <FaBars />,
    //     cName: 'nav-item',
    // },
    {
        title: 'About',
        path: 'About',
        icon: <FcAbout />,
        cName: 'nav-item',
    },
]