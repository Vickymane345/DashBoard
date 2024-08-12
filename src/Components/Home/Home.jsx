import React from 'react'
import {FaChartColumn} from "react-icons/fa6";
import {BsThreeDots} from "react-icons/bs";
import face from '../../assets/HD-wallpaper-ian-somerhalder-vampire-diaries-black-man-damon-tv-series-face-blue-eyes-actor.jpg'
import couple from '../../assets/couple.jpg'
import Secondcouple from '../../assets/couple 2.jpg'
import family from '../../assets/family.jpg'
import Amazonlogo from '../../assets/amazon.png'
import image from '../../assets/space.png'
import './Home.css'

const Home = () => {
    return (
        <div className='xl:w-[50%] lg:w-[50%] md:w-[60%] home w-[115%]  '>
            <div
                className='bg-white mt-2 p-5 lg:p-0 xl:p-0 md:p-0 xl:w-full lg:w-full md:w-full w-[95%]  '>
                <div className='flex border-b-2 px-3 justify-between pt-3 items-center'>
                    <div className='bg-white rounded-full border shadow p-2 w-8 h-8   '>
                        <FaChartColumn/>
                    </div>
                    <div className='flex space-x-6 text-sm '>
                        <p className='py-3 border-b-2 text-purple-400 font-semibold border-purple-400'>Your Expenses</p>
                        <p className='py-3'>Receipts to the account</p>
                    </div>

                    <div className='bg-white rounded-full border shadow p-2 w-8 h-8 '>
                        <BsThreeDots/>
                    </div>
                </div>
                <div
                    className='lg:px-10 xl:px-16 md:px-6 px-0 pt-6 text-white font-bold    flex  border-b-2 border-gray-200  '>
                    <div className='h-60 w-24 bg-gradient-to-b from-yellow-100 rounded-t-full  '>
                        <div
                            className='rounded-full border-2 border-yellow-300 shadow absolute lg:p-10 xl:p-12 md:p-8 p-8 sm:p-10 bg-gradient-to-b from-yellow-400 '>
                            <p>$156</p>
                        </div>

                    </div>

                    <div className=' w-36 mt-4  bg-gradient-to-b from-red-100 rounded-t-full '>
                        <div
                            className=' rounded-full lg:p-10 xl:p-16 md:p-12 sm:p-14 p-10  border-2 border-red-300 shadow bg-gradient-to-b absolute from-red-400'>
                            <p>$156</p>
                        </div>
                    </div>
                    <div className=' w-24 bg-gradient-to-b from-purple-100 rounded-t-full '>
                        <div
                            className='lg:p-10 xl:p-12 md:p-8  rounded-full border-2 border-purple-300  p-8 sm:p-10 bg-gradient-to-b absolute from-purple-400 shadow'>
                            <p>$156</p>
                        </div>
                    </div>
                    <div className=' w-24 bg-gradient-to-b mt-4 from-blue-100 rounded-t-full '>
                        <div
                            className='rounded-full p-8 sm:p-10 lg:p-10 xl:p-12 md:p-8  border-2 border-blue-300 shadow bg-gradient-to-b from-blue-400 absolute'>
                            <p>$156</p>
                        </div>
                    </div>
                    <div className=' w-24 bg-gradient-to-b from-green-100 rounded-t-full '>
                        <div
                            className='rounded-full absolute border-2 border-green-300 shadow lg:p-10 xl:p-12  md:p-8 p-8 sm:p-10 bg-gradient-to-b from-green-500'>
                            <p>$156</p>
                        </div>
                    </div>
                    <div className=' bg-gradient-to-b from-orange-100 rounded-t-full mt-10 '>
                        <div
                            className='rounded-full border-2 shadow lg:p-10 xl:p-10 md:p-8 p-8 sm:p-10 bg-gradient-to-b from-orange-500'>
                            <p>$156</p>
                        </div>
                    </div>
                </div>
                <div
                    className='text-[10px] justify-center flex md:space-x-7 xl:space-x-16 sm:space-x-16 space-x-7  lg:space-x-10 text-gray-600 py-3 '>
                    <p>Fast Food
                    </p>
                    <p>Markets</p>
                    <p>Pharmacies</p>
                    <p>Fuel</p>
                    <p>Markets</p>
                    <p>food</p>
                </div>

            </div>

            <div
                className='grid md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 pr-3 md:pr-0 lg:pr-0 xl:pr-0 sm:grid-cols-4  gap-1 xl:gap-6 md:gap-2 lg:gap-6 pt-16 '>
                <div
                    className='rounded-3xl sm:w-[20px]  col-start-1 bg-no-repeat bg-center   bg-cover h-[240px]'
                    style={{
                    backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${face}) `,
                    width: "100%"
                }}>
                    <p className=' text-white text-sm text-center  pt-40 font-bold  '>What to see new<br/>
                        in the movie?</p>
                </div>
                <div
                    className='  rounded-3xl  bg-no-repeat bg-center   bg-cover h-[240px] '
                    style={{
                    backgroundImage: `url(${couple})`
                }}>
                    <p className=' text-white text-sm text-center  pt-40 font-bold '>How to protect<br/>
                        your accounts?</p>
                </div>
                <div
                    className='rounded-3xl   col-span-2 bg-no-repeat bg-center  bg-cover h-[240px]'
                    style={{
                    backgroundImage: `url(${family})`
                }}>
                    <p className=' text-white text-sm text-center  pt-40 font-bold '>How to protect your accounts?</p>

                </div>
            </div>
            <div
                className='grid md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 pr-3 md:pr-0 lg:pr-0 xl:pr-0 sm:grid-cols-4 gap-1 xl:gap-6 md:gap-2 lg:gap-6 pt-4'>
                <div
                    className='rounded-3xl w-100 col-start-1 col-span-2 bg-no-repeat bg-center   bg-cover h-[240px]'
                    style={{
                    backgroundImage: ` url(${Secondcouple})`
                }}>
                    <p className=' text-white text-sm text-center  pt-40 font-bold  '>What to see new<br/>
                        in the movie?</p>
                </div>
                <div className='  rounded-3xl   bg-indigo-400 h-[240px] '>
                    <img src={Amazonlogo} className='w-32' alt=""/>
                    <p className=' text-white text-sm text-center  font-bold '>What to buy on amazon for the holidays</p>
                </div>
                <div className='  rounded-3xl  bg-white h-[240px] '>
                    <img src={image} className='w-32 m-auto' alt=""/>
                    <p className=' text-black text-sm text-center  font-bold '>Analyze your<br/>
                        spending Now</p>
                </div>
            </div>

        </div>
    )
}

export default Home
