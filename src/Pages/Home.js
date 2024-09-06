import { useSpring, animated } from "react-spring";
import cardImg from "../images/banner_img.png"
import web3Img from "../images/web3.png"
import dataImg from "../images/data.png"
import Footer from "../Components/Footer"


const Home = () => {
    const personalWalletAnim = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(20%)' },
        config: { duration: 500, tension: 150, friction: 22 }
    })

    const bannerDesctiptionAnim = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(-20%)' },
        config: { duration: 500, tension: 150, friction: 22 }
    })

    const createWalletAnim = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 } // Adjust duration as needed
    });

    return (
        <>
            <div className="bg-gradient-to-b from-gray-700 to-gray-800 flex flex-row justify-around" >
                <div className="h-[350px] md:h-[500px] w-full md:w-1/3 flex md:justify-center md:items-start flex-col md:ml-10">

                    <animated.h1 style={personalWalletAnim} className="text-gray-50 text-3xl m-3 mt-16 md:mt-0 font-extrabold w-3/4 md:w-fit">Your Personal Ethereum Wallet.</animated.h1>
                    <animated.p style={bannerDesctiptionAnim} className="text-base ml-3 w-2/3 text-gray-300"> Effortlessly manage and transfer ETH with your wallet.</animated.p>
                    <animated.div style={createWalletAnim} className="m-3 w-fit cursor-pointer border-2 border-blue-700 rounded-3xl bg-blue-800 py-2 px-3 text-white  hover:border-blue-600">
                        <p className='cursor-pointer font-semibold text-[14px] md:text-[18px]'>Create Wallet</p>
                    </animated.div>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <img src={cardImg} className="w-4/5" />
                </div>

            </div>

            <div className="bg-gradient-to-b from-gray-800 to-blue-950 flex flex-col md:flex-row md:justify-around" >
                <div className="flex justify-center items-center">
                    <img src={web3Img} className="w-5/6" />
                </div>

                <div className="h-[200px] md:h-[400px] w-full md:w-1/3 flex justify-center items-center text-center md:text-start md:items-start flex-col md:ml-10">

                    <h1 className="text-gray-50 text-2xl md:text-3xl m-3 font-extrabold w-5/6 md:w-fit">Welcome to Web3 Wallet.</h1>
                    <p className="text-base md:ml-3 w-2/3 text-gray-300">Web3 is most secured and latest technology that is reliable for blockchain technology.</p>

                </div>
            </div>

            <div className="bg-gradient-to-b from-blue-950 to-[#415a77] flex flex-col-reverse md:flex-row md:justify-around" >
                <div className="h-[200px] md:h-[400px] w-full md:w-1/3 flex justify-center items-center text-center md:text-start md:items-start flex-col md:ml-10">

                    <h1 className="text-gray-50 text-2xl md:text-3xl m-3 font-extrabold w-5/6 md:w-fit">Sole owner of data.</h1>
                    <p className="text-base md:ml-3 w-2/3 text-gray-300">Web3 is most secured and latest technology that is reliable for blockchain technology.</p>

                </div>
                <div className="flex justify-center items-center w-9/10 md:h-[400px] md:w-[680px] mt-10 md:mt-0">
                    <img src={dataImg} className="w-4/5" />
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;