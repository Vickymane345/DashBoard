import React, {useState} from 'react'
import './Profile.css'
import {IoPersonSharp} from "react-icons/io5";
import image from '../../assets/profile_pic-removebg-preview.png'
import {FaPlusCircle} from "react-icons/fa";
import {BsThreeDots} from "react-icons/bs";
import {FaArrowRight, FaBook} from "react-icons/fa";
import mastercard from '../../assets/mastercard.png'
import {IoLockClosedSharp, IoCloseSharp} from "react-icons/io5";
import {IoMdSettings} from "react-icons/io";
import hand from "../../assets/hand.png"

const Profile = (props) => {

    return (
        <div
            className={` w-80 border-l-2 p-3 xl:block profile ${props.profileMenu
            ? ""
            : 'hide-mobile'}`}>
            <IoCloseSharp
                onClick={() => {
                props.profileMenu
                    ? props.setProfileMenu(false)
                    : props.setProfileMenu(true)
            }}
                className='cursor-pointer'/>

            <IoPersonSharp className='text-gray-500'/>
            <div className=''>
                <div
                    className=' m-auto rounded-full bg-white border-2 border-solid border-r-0 border-t-0 outline-8 border-purple-400 w-24 px-2 py-1'>
                    <div
                        className='relative items-center flex rounded-full bg-blue-100  shadow-inner px-2 py-1 '>
                        <img src={image} className=' rounded-full   ' alt=""/>
                        <div className=' p-2  w-full h-8 rounded-full text-white bg-orange-500 '>
                            <FaPlusCircle/>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-7'>Clayton Santos</p>

            <div className='lg:px-1 xl:px-2'>
                <div className='flex justify-between items-center'>
                    <p className='lg:text-xs xl:text-sm font-semibold text-gray-500'>Accounts and Cards</p>
                    <div className='text-gray-400 xl:text-2xl text-sm lg:text-sm'>
                        <BsThreeDots/>
                    </div>

                </div>
                <div className='space-y-6 pt-10'>
                    <div className='flex justify-between items-center'>
                        <div
                            className='xl:w-16 lg:w-12 bg-gradient-to-b from-indigo-500 to-indigo-200 px-1 py-1 rounded-md'>
                            <p className='xl:text-sm lg:text-xs'>4565</p>
                            <div className='flex justify-end'>
                                <img src={mastercard} className='w-5' alt=""/>

                            </div>
                        </div>
                        <div className=' leading-2'>
                            <p className='text-gray-400 font-semibold xl:text-sm lg:text-xs'>Master Card</p>
                            <p className='text-gray-400 font-bold xl:text-sm lg:text-xs'>4560 $</p>
                        </div>
                        <div className='rounded-full xl:p-3 p-3 text-gray-400 bg-white'>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div
                            className='xl:w-16 lg:w-12 bg-gradient-to-b from-yellow-500 to-indigo-200 px-1 py-1 rounded-md'>
                            <p className='xl:text-sm lg:text-xs'>4565</p>
                            <div className='flex justify-end'>
                                <img src={mastercard} className='w-5' alt=""/>

                            </div>
                        </div>
                        <div className=' leading-2'>
                            <p className='text-gray-400 font-semibold xl:text-sm lg:text-xs'>Master Card</p>
                            <p className='text-gray-400 font-bold xl:text-sm lg:text-xs'>4560 $</p>
                        </div>
                        <div className='rounded-full xl:p-3 p-3 text-gray-400 bg-white'>
                            <FaArrowRight/>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div
                            className='xl:w-16 lg:w-12 bg-gradient-to-b from-black to-indigo-200 px-1 py-1 rounded-md'>
                            <p className='xl:text-sm lg:text-xs'>4565</p>
                            <div className='flex justify-end'>
                                <img src={mastercard} className='w-5' alt=""/>

                            </div>
                        </div>
                        <div className=' leading-2'>
                            <p className='text-gray-400 font-semibold xl:text-sm lg:text-xs'>Master Card</p>
                            <p className='text-gray-400 font-bold xl:text-sm lg:text-xs'>4560 $</p>
                        </div>
                        <div className='rounded-full xl:p-3 p-3 text-gray-400 bg-white'>
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-8'>
                <div className='flex items-center justify-between p-2'>
                    <p className='text-gray-400 text-sm font-bold'>Settings</p>
                    <BsThreeDots className='text-2xl text-gray-500'/>

                </div>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-6'>
                        <div className='rounded-full p-3 bg-white'>
                            <IoPersonSharp className='text-gray-500'/>

                        </div>
                        <p className='text-[12px] text-gray-600 font-semibold'>Personal Information</p>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='rounded-full p-3 bg-white'>
                            <FaBook className='text-gray-500'/>

                        </div>
                        <p className='text-[12px] text-gray-600 font-semibold'>Documentation and References</p>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='rounded-full p-3 bg-white'>
                            <IoLockClosedSharp className='text-gray-500'/>

                        </div>
                        <p className='text-[12px] text-gray-600 font-semibold'>Security & Codes</p>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='rounded-full p-3 bg-white'>
                            <IoMdSettings className='text-gray-500'/>

                        </div>
                        <p className='text-sm text-gray-600 font-semibold'>Account settings</p>
                    </div>
                </div>
            </div>
            <div
                className='text-center lg:hidden sm:hidden md:hidden hidden xl:block bg-orange-200 p-4 '>
                <img src={hand} alt="" className='m-auto'/>

                <p>Do you need help?</p>
                <p>1-800-MY-BANK</p>
            </div>
        </div>
    )
}

export default Profile