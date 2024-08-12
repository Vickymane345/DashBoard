import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Atm from './Components/Atm/Atm'

const App = () => {

    const [profileMenu,
        setProfileMenu] = useState(false)
    const ProfileMenu = () => {
        profileMenu
            ? setProfileMenu(false)
            : setProfileMenu(true)

    }

    return (
        <div className='grid-container'>
            <Navbar ProfileMenu={ProfileMenu}/>
            <div className='flex gap-3  '>
                <div className='border-r-2'>
                    <Sidebar className=""/>
                </div>
                <Atm className=""/>
                <Home className=" "/>
                <Profile profileMenu={profileMenu} setProfileMenu={setProfileMenu}/>

            </div>
        </div>
    )
}

export default App
