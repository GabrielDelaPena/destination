import { useState } from 'react'
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { FaBars, FaTimes } from 'react-icons/fa'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';
import { Link } from "react-scroll"


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return (
        <div className='w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white'>
            <div>
                <h1 className={logo ? 'hidden' : 'block'}>Destination.</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} className='cursor-pointer' duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='destination' smooth={true} className='cursor-pointer' duration={500}>Destinations</Link>
                </li>
                <li>
                    <Link to='travel' smooth={true} className='cursor-pointer' duration={500}>Travel</Link>
                </li>
                <li>
                    <Link to='view' smooth={true} className='cursor-pointer' duration={500}>View</Link>
                </li>
                <li>
                    <Link to='book' smooth={true} className='cursor-pointer' duration={500}>Book</Link>
                </li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>

            {/** Hamburger menu */}
            <div onClick={handleNav} className='md:hidden block z-10'>
                {nav ? <FaTimes className='text-black' size={20} /> : <FaBars size={20} />}
            </div>

            {/** Mobile menu dropdown */}
            <div className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>Destination.</h1>
                    <li>
                        <Link onClick={handleNav} to='home' className='border-b' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='destination' className='border-b' smooth={true} duration={500}>Destinations</Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='travel' className='border-b' smooth={true} duration={500}>Travel</Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='view' className='border-b' smooth={true} duration={500}>View</Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='book' className='border-b' smooth={true} duration={500}>Book</Link>
                    </li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar