import React, {useState} from 'react'
import './Navbar.css'
import {IoMenuOutline, IoPersonSharp, IoCloseSharp} from "react-icons/io5";
import {FaSearch, FaBell} from "react-icons/fa"
import {IoMdSettings} from "react-icons/io";

const Navbar = (props) => {
    const {ProfileMenu} = props
    const [mobileMenu,
        setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu
            ? setMobileMenu(false)
            : setMobileMenu(true)

    }
    return (
        <nav
            className='w-[124%] sm:w-[100%] md:w-full lg:w-full xl:w-full flex justify-between border-b-2 items-center   xl:px-5 lg:px-5 md:px-3 px-2   py-4'>
            <div
                className='flex xl:space-x-8 md:space-x-2 space-x-3  lg:space-x-8  items-center'>
                <div className='bg-[white] p-3 rounded-full'>
                    <IoMenuOutline onClick={toggleMenu} className='cursor-pointer'/>

                </div>
                <h1 className=' xl:text-sm lg:text-[12px] md:text-[9px]'>Constructor</h1>
            </div>

            <div className='nav_list lg:text-center md:text-center xl:text-center '>
                <ul
                    className={`list-none justify-between items-center xl:space-x-8 lg:space-x-4 md:space-x-5 md:inline-flex xl:inline-flex lg:inline-flex xl:text-sm lg:text-[12px] md:text-[9px] ${mobileMenu
                    ? ''
                    : 'hide-mobile-menu'} `}>
                    <li className='xl:hidden lg:hidden md:hidden '><IoCloseSharp
                        className='cursor-pointer'
                        onClick={() => {
            mobileMenu
                ? setMobileMenu(false)
                : setMobileMenu(true)
        }}/></li>
                    <li className='  '>Dashboard</li>
                    <li className='    '>Contact Us</li>
                    <li className='  '>News</li>
                    <li className='  '>User Profile</li>
                    <li className='  '>Contacts</li>

                    <li className='flex items-center '>
                        <FaSearch className='absolute text-gray-400  '/>
                        <textarea
                            className='text-center rounded-3xl resize-none md:w-32 xl:w-72 w-full lg:w-52 text-[11px]  pt-3'
                            type="text"
                            name=""
                            placeholder='Search Transaction and Documents'
                            id=""></textarea>
                    </li>
                    <li>
                        <IoPersonSharp/></li>
                    <li>
                        <p>Clayton Santos</p>
                    </li>
                    <li>
                        <FaBell/></li>

                </ul>

            </div>
            <div className='rounded-full p-1 bg-white text-gray-400'>
                <IoMdSettings className='cursor-pointer btn ' onClick={ProfileMenu}/>
            </div>

        </nav>
    )
}

export default Navbar
