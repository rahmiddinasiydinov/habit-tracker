import { NavLink } from 'react-router-dom'

type Props = {}

const NAVBAR_LINKS = [
    { path: '/', name: 'Home' },
    { path: '/stats', name: 'Statistics' },
    { path: '/settings', name: 'Settings' },
]

export default function SidebarLinks({ }: Props) {
    return (
        <ul className='mt-5 md:mt-10 px-5 md:px-10 pt-1'>
            {
                NAVBAR_LINKS.map(link => {
                    return <li key={link.path + link.name} className='my-3 w-[100%]'  >
                        <NavLink to={link.path} className={(({isActive}) => isActive ? 'navbar__active' : 'navbar')}>{link.name}</NavLink>
                    </li>
                })
            }

        </ul>
    )
}