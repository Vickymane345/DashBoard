import React from 'react'
import './Sidebar.css'
import {FaLocationArrow, FaStar} from "react-icons/fa";
import {FaFacebookMessenger} from "react-icons/fa";
import {MdOutlineShowChart} from "react-icons/md";
import {BiWorld} from "react-icons/bi";
import {FaChartBar} from "react-icons/fa";
import image from '../../assets/profile pic.jpg'
import {FaPlusCircle} from "react-icons/fa";
const Sidebar = (props) => {
    return (
        <div className='w-10 h-full lg:mx-2 xl:mx-5 md:mx-2 ml-1 mr-1 mt-2 space-y-4  '>
            <div className='rounded-full bg-white p-3'>
                <FaLocationArrow/>
            </div>
            <div className='rounded-full bg-white p-3'>
                <FaStar/>
            </div>
            <div className='rounded-full bg-white p-3'>
                <FaFacebookMessenger/>
            </div>
            <div className='rounded-full bg-white p-3'>
                <MdOutlineShowChart/>
            </div>
            <div className='rounded-full bg-white p-3'>
                <BiWorld/>
            </div>
            <div className='rounded-full bg-white p-3'>
                <FaChartBar/>
            </div>

            <div className='space-y-3 pt-24   '>

                <img src={image} className='rounded-full ' alt=""/>

                <img src={image} className='rounded-full' alt=""/>

                <img src={image} className='rounded-full' alt=""/>

                <img src={image} className='rounded-full' alt=""/>

                <div className='rounded-full bg-white p-3'>
                    <FaPlusCircle className='cursor-pointer'/>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
