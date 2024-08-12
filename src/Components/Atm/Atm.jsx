import React from 'react'
import './Atm.css'
import image from '../../assets/mastercard.png'
import GoogleLogo from '../../assets/GoogleLogo.png'
import McdonaldLogo from '../../assets/McdonaldLogo.png'
import NetflixLogo from '../../assets/NetflixLogo.png'
import NikeLogo from '../../assets/NikeLogo.png'
import AppleLogo from '../../assets/AppleLogo.png'
import Walmart from '../../assets/WalmartLogo.png'
import UpsLogo from '../../assets/UpsLogo.png'
import StarBucksLogo from '../../assets/StarbucksLogo.png'

const Atm = () => {
    return (
        <div
            className='my-2 xl:w-80  md:w-72 lg:w-80 atm lg:block xl:block md:block sm:hidden hidden    '>
            <div
                className='relative rounded-md   text-white bg-gradient-to-r px-3 py-4  from-purple-500 to-pink-500'>
                <div className='flex justify-between    '>
                    <p className=' xl:text-2xl lg:text-sm md:text-xs font-semibold'>$ 4560</p>
                    <p className='xl:text-xl lg:text-sm md:text-xs'>My bank</p>
                </div>
                <div>
                    <p className='xl:text-xl md:text-xs lg:text-sm'>**** **** **** 4456</p>
                </div>
                <div className='flex justify-between'>
                    <p className='xl:text-xl md:text-xs lg:text-sm'>Lloyd Lyons</p>
                    <img src={image} className='w-10' alt=""/>
                </div>
                <div
                    className='absolute flex xl:w-52 lg:w-44 md:w-44  xl:space-x-5 lg:space-x-2 md:space-x-3 py-2  '>
                    <div className='w-16 lg:h-full   bg-blue-400 px-1 py-1 '>
                        <p className='lg:text-sm xl:text-sm md:text-sm'>4565</p>
                        <div className='flex justify-end'>
                            <img src={image} className='w-6' alt=""/>

                        </div>
                    </div>
                    <div className='w-16 lg:h-full bg-yellow-400 px-1 py-1 '>
                        <p className='lg:text-sm xl:text-sm md:text-sm'>6753</p>
                        <div className='flex justify-end '>
                            <img src={image} className='w-6' alt=""/>

                        </div>
                    </div>
                    <div className=' w-16 lg:h-full   bg-black px-1 py-1'>
                        <p className='lg:text-sm xl:text-sm md:text-sm'>9875</p>
                        <div className='flex justify-end'>
                            <img src={image} className='w-6' alt=""/>

                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white  py-3 mt-20 rounded-xl'>
                <div
                    className='flex xl:px-5 lg:px-2 md:px-4  items-center  justify-between border-b-2 '>
                    <p
                        className='border-b-2 xl:text-[10px] lg:text-[10px] md:text-[10px] border-purple-400 py-2 '>Recent operations</p>
                    <p className='py-2 xl:text-[10px] lg:text-[10px] md:text-[10px] '>Income</p>
                    <p className='py-2 xl:text-[10px] lg:text-[10px] md:text-[10px] '>Costs</p>
                </div>

                <div className='   space-y-3 '>
                    <div
                        className='flex xl:px-5 lg:px-2 md:px-3 pb-2 py-3 justify-between items-center border-b-2  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2'>
                            <img className='w-7' src={GoogleLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p
                                className=' leading-6 text-gray-400 xl:text-[10px] lg:text-[10px] md:text-[10px] text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className='flex xl:px-5 lg:px-2 md:px-3 pb-2  justify-between items-center border-b-2  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2 '>
                            <img className='w-7' src={StarBucksLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className="flex xl:px-5 md:px-3 lg:px-2 pb-2 justify-between items-center border-b-2 ">
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2'>
                            <img className='w-7' src={NikeLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className='flex xl:px-5 lg:px-2 xl:p-5 md:px-3  pb-2 justify-between items-center border-b-2  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2'>
                            <img className='w-7' src={McdonaldLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className='flex xl:px-5 lg:px-2 md:px-3 pb-2 justify-between items-center border-b-2  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2 '>
                            <img className='w-7' src={NetflixLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className='flex xl:px-5 md:px-3 lg:px-2 pb-2 justify-between items-center border-b-2  '>
                        <div className='rounded-full xl:p-2 lg:p-2 md:p-2 bg-gray-300  '>
                            <img className='w-7' src={AppleLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div
                        className='flex xl:px-5 lg:px-2 pb-2 md:px-3 justify-between items-center border-b-2  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2 '>
                            <img className='w-7' src={Walmart} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>
                    <div className='flex xl:px-5 lg:px-2 md:px-3 justify-between items-center  '>
                        <div className='rounded-full bg-gray-300 xl:p-2 lg:p-2 md:p-2'>
                            <img className='w-7' src={UpsLogo} alt=""/>
                        </div>
                        <div className=''>
                            <p className=' leading-6 text-gray-400 text-[10px]'>Black Cart 8545</p>
                            <p className='text-[10px]'>Buying on Google</p>
                        </div>
                        <div>
                            <p
                                className='text-[10px] rounded-2xl font-semibold text-gray-600 bg-gray-200 p-2 '>$45</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Atm
