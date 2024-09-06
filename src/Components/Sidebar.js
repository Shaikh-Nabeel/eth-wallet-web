import { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { TbTransactionEuro } from "react-icons/tb";
import { LuKeySquare } from "react-icons/lu";
import { TbGraph } from "react-icons/tb";


const Sidebar = () => {

    const [selectedOp, setSelectedOp] = useState(1)


    return (
        <>
          <div className="flex justify-between bottom-0 md:bottom-auto z-10 md:z-0 w-full h-fit md:block fixed md:top-100 md:left-0 md:w-[350px] bg-[#2a323d] p-1 md:p-5 md:h-full md:min-h-screen text-white">
            <div onClick={()=> setSelectedOp(1)} className="flex m-3 pt-2 pb-2 pr-4 pl-4 hover:bg-[#374151] border-0 rounded-md" style={{backgroundColor: selectedOp == 1?'#374151':''}}>
              <CiWallet size="24" className="text-white md:mr-4" />
              <p className="hidden md:flex text-[18px] font-semibold cursor-default">Wallet</p>
            </div>
            <div onClick={()=> setSelectedOp(2)} className="flex m-3 pt-2 pb-2 pr-4 pl-4 hover:bg-[#374151] border-0 rounded-md" style={{backgroundColor: selectedOp == 2?'#374151':''}}>
            <TbTransactionEuro size="24" className="text-white md:mr-4" />
              <p className="hidden md:flex text-[18px] font-semibold cursor-default">Transaction</p>
            </div>
            <div onClick={()=> setSelectedOp(3)} className="flex m-3 pt-2 pb-2 pr-4 pl-4 hover:bg-[#374151] border-0 rounded-md" style={{backgroundColor: selectedOp == 3?'#374151':''}}>
            <LuKeySquare size="24" className="text-white md:mr-4" />
              <p className="hidden md:flex text-[18px] font-semibold cursor-default">Private Key</p>
            </div>
            <div onClick={()=> setSelectedOp(4)} className="flex m-3 pt-2 pb-2 pr-4 pl-4 hover:bg-[#374151] border-0 rounded-md" style={{backgroundColor: selectedOp == 4?'#374151':''}}>
            <TbGraph size="24" className="text-white md:mr-4" />
              <p className="hidden md:flex text-[18px] font-semibold cursor-default">Market Cap</p>
            </div>
          </div>
          <div className="md:ml-[350px]">
            {/* Your page content goes here */}
          </div>
        </>
      );
      
}

export default Sidebar;