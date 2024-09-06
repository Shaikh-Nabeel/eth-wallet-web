import { LiaEthereum } from 'react-icons/lia';

const Footer = () => {
    return (
        <div>
        <div className="h-[2px] w-full bg-gray-400"></div>
        <div className="flex justify-normal md:justify-between bg-gradient-to-b to-gray-800 via-gray-700 from-[#37506c] md:items-center p-5 flex-col md:flex-row md:p-20">
        <div className="flex items-center justify-center ">
        <LiaEthereum className="size-12 md:size-16 text-gray-200" />
            <h2 className="text-[25px] md:text-[50px] font-bold text-white font-sans text-center md:items-start">
                <span className='text-blue-600'>Eth</span>
                    Wallet
            </h2>
            </div>
            <div className="flex flex-row justify-evenly w-full md:w-3/4">
                <div className="gap-2 mt-4 md:mt-0">
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">About</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Contact</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Terms</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Privacy</p>

                </div>
                <div className="gap-2 mt-4 md:mt-0">
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Create Wallet</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Load Wallet</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">Transfer ETH</p>
                    <p className="text-white text-[14px] md:text-[16px] m-1 cursor-pointer font-light">FAQs</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;