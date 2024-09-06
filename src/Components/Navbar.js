
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LiaEthereum } from 'react-icons/lia';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSpring, animated, useTrail } from 'react-spring';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    //features drop down animations
    const slideInStyles = useSpring({
        transform: isDropdownOpen ? 'translateY(0%)' : 'translateY(-20%)',
        opacity: isDropdownOpen ? 1 : 0,
        from: { transform: 'translateY(-100%)', opacity: 0 },
        config: { tension: 100, friction: 20 }, // for smooth animation
    });

    //title animation
    const wallet = "Wallet";
    const trailWallet = useTrail(wallet.length, {
        from: { opacity: 0, transform: 'translateX(-20px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { mass: 1, tension: 150, friction: 20 },
    });


    const mobileSlider = useSpring({
        transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)',
        opacity: isMobileMenuOpen ? 1 : 0,
        config: isMobileMenuOpen ? { tension: 180, friction: 22 } : { tension: 180, friction: 22 },
    });


    const mobileSliderCover = useSpring({
        transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(100%)',

    });


    const toggleDropdown = (state) => {
        setDropdownOpen(state);
    };

    const toggleMobileMenu = () => {
        console.log("hit");
        setMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className="flex justify-between items-center pl-2 pr-5 md:pl-5 md:pr-10 py-2 shadow-lg top-0 bg-gray-800 sticky z-10">
            {/* Logo and Title */}
            <div className="flex items-center">
                <LiaEthereum className="size-12 md:size-16 text-gray-200" />
                <h2 className="text-[25px] md:text-[50px] font-bold text-white font-sans">
                    <Link to="/"><h1><span className='text-blue-600'>Eth</span>
                        {trailWallet.map((style, index) => (
                            <animated.span key={index} style={style} >
                                {wallet[index]}
                            </animated.span>
                        ))}
                    </h1></Link>
                </h2>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-gray-400">
                    {isMobileMenuOpen ? <FaTimes size="24px" /> : <FaBars size="24px" />}
                </button>
            </div>

            {/* Desktop Navigation */}
            <navitems className='hidden md:flex text-[20px] gap-5 text-gray-400 items-center'>
                {/* Features Dropdown */}
                <div
                    className="group relative cursor-pointer"
                    onMouseEnter={() => toggleDropdown(true)}
                    onMouseLeave={() => toggleDropdown(false)}
                >
                    <p className="cursor-pointer font-medium hover:text-white">Features</p>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>

                    {isDropdownOpen && (
                        <animated.div style={slideInStyles}>
                            <div className="absolute left-0 w-[200px]">
                                <div className='mt-2 bg-gray-700 shadow-lg rounded-lg py-2 transition-transform transform duration-700 ease-in-out text-white'>
                                    <h2 className='font-bold py-2 px-3'>Docs </h2>
                                    <Link to="/create-wallet" className="block px-4 py-2 hover:bg-gray-800 text-[15px]">Create Wallet</Link>
                                    <Link to="/load-wallet" className="block px-4 py-2 hover:bg-gray-800 text-[15px]">Load Wallet</Link>
                                    <Link to="/transfer-eth" className="block px-4 py-2 hover:bg-gray-800 text-[15px]">Transfer ETH</Link>
                                </div>
                            </div>
                        </animated.div>
                    )}
                </div>

                <Link to='/about' className="group relative">
                    <p className="cursor-pointer font-medium  hover:text-white">About</p>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to='/contact' className="group relative">
                    <p className="cursor-pointer font-medium  hover:text-white">Contact</p>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <div onClick={() => navigate('/signin')} className=" relative cursor-pointer border-2 border-gray-600 rounded-3xl bg-gray-700 py-2 px-3 hover:text-white  hover:border-gray-400">
                    <p className='cursor-pointer font-semibold text-[18px]'>Sign in</p>
                </div>

                <div onClick={() => navigate('/signup')} className=" relative cursor-pointer border-2 border-blue-800 rounded-3xl bg-blue-800 py-2 px-3 text-white  hover:border-blue-950">
                    <p className='cursor-pointer font-semibold text-[18px]'>Sign up</p>
                </div>
            </navitems>

            {/* Mobile Menu */}

            <animated.div className="md:hidden fixed inset-0 z-20 flex justify-end" style={mobileSliderCover}>

                <animated.div className="w-3/4 sm:w-1/2 md:w-1/3 h-full bg-gray-900 shadow-lg text-white" style={mobileSlider}>
                    {/* <animated.div style={mobileSlider}> */}
                    <div className="flex flex-col gap-5 p-5 border-b-gray-400">
                        <div className='flex justify-between items-center'>
                            <div onClick={() => {toggleMobileMenu(); navigate('/signin')}} className="cursor-pointer border-2 border-gray-600 rounded-3xl bg-gray-700 py-2 px-3 w-fit hover:text-white  hover:border-gray-400">
                                <p className='cursor-pointer font-semibold text-[18px]'>Sign in</p>
                            </div>

                            <div onClick={() => {toggleMobileMenu(); navigate('/signup')}} className="cursor-pointer border-2 border-blue-800 rounded-3xl w-fit bg-blue-800 py-2 px-3 text-white  hover:border-blue-950">
                                <p className='cursor-pointer font-semibold text-[18px]'>Sign up</p>
                            </div>
                            <FaTimes className='mr-2' size="24px" onClick={toggleMobileMenu}></FaTimes>
                        </div>
                       
                            <Link to="/" onClick={toggleMobileMenu} className="text-[20px]">Home</Link>
                            
                        <div className="group relative cursor-pointer"
                            onClick={() => toggleDropdown(!isDropdownOpen)}
                        >
                            <div className='flex justify-between pr-1'>
                                <p className="cursor-pointer text-[20px]">Features </p>
                                <RiArrowDropDownLine className='inline-block' size="40" style={{
                                    transform: isDropdownOpen ? 'rotate(0deg)' : 'rotate(90deg)',
                                    transition: 'transform 0.3s ease',
                                    color: 'gray'
                                }}>
                                </RiArrowDropDownLine>
                            </div>

                            {isDropdownOpen && (
                                <animated.div style={slideInStyles} >
                                    <div className={`relative left-0 w-full`}>
                                        <div className='mt-2 bg-gray-700 py-2 text-white'>
                                            <Link to="/create-wallet" className="block px-4 py-2 text-[15px]">Create Wallet</Link>
                                            <Link to="/load-wallet" className="block px-4 py-2 text-[15px]">Load Wallet</Link>
                                            <Link to="/transfer-eth" className="block px-4 py-2 text-[15px]">Transfer ETH</Link>
                                        </div>
                                    </div>
                                </animated.div>
                            )}
                        </div>
                        <Link to="/about" onClick={toggleMobileMenu} className="text-[20px]">About</Link>
                        <Link to="/contact" onClick={toggleMobileMenu} className="text-[20px]">Watchlist</Link>
                        <Link to="/contact" onClick={toggleMobileMenu} className="text-[20px]">Contact</Link>

                    </div>
                    {/* </animated.div> */}
                </animated.div>

            </animated.div>
        </div>
    );
}

export default Navbar;
