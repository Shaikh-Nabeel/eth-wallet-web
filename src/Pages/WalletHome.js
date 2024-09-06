import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineFileCopy } from "react-icons/md";
import { RiSendPlaneLine } from "react-icons/ri";
import CommonDialog from "../Dialogs/CommonDialog";
import NetworkDialog from "../Components/NetworkDialog";
import TranHistory from "../Components/TranHistory";
import AccountDialog from "../Components/AccountDialog";
import UseLocalStorage from "../Components/UseLocalStorage";

const WalletHome = () => {
    const [ethBalance, setEthBalance] = useState("8.90");
    const [accounts, setAccounts] = UseLocalStorage("Accounts", "");
    const [mnemonic, setMnemonic] = UseLocalStorage("Mnemonic", "");
    const [isNetDialogOpen, setNetDialogOpen] = useState(false);
    const [isAccountDialogOpen, setAccountDialogOpen] = useState(false);
    const API_KEY = process.env.REACT_APP_INFURA_API_KEY;
    const wallet = { address: "" }


    const tranHistory = [
        {
            "hash": "0x34694452770607a0eb9095e31c456be3aa504831a54a89812f3f42d5417a6dfa",
            "nonce": "281",
            "transaction_index": "14",
            "from_address_entity": null,
            "from_address_entity_logo": null,
            "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
            "from_address_label": null,
            "to_address_entity": null,
            "to_address_entity_logo": null,
            "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
            "to_address_label": null,
            "value": "0",
            "gas": "27000000",
            "gas_price": "8200000000",
            "input": "0xb2a43c8c",
            "receipt_cumulative_gas_used": "1528513",
            "receipt_gas_used": "184697",
            "receipt_contract_address": null,
            "receipt_root": null,
            "receipt_status": "1",
            "block_timestamp": "2024-06-21T09:09:24.000Z",
            "block_number": "6153742",
            "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
            "transfer_index": [
                6153742,
                14
            ],
            "transaction_fee": "0.0015145154"
        },
        {
            "hash": "0x85a91775da936112bf43022e21dd1ddf99dbc0a64fb99c4ed8c745c5feca2e12",
            "nonce": "280",
            "transaction_index": "13",
            "from_address_entity": null,
            "from_address_entity_logo": null,
            "from_address": "0x0abd2b345f2b06c8830b097851801c527cf697e9",
            "from_address_label": null,
            "to_address_entity": null,
            "to_address_entity_logo": null,
            "to_address": "0x5d52b5ef49db2d275c882f6cb968ca9c54ddced9",
            "to_address_label": null,
            "value": "0",
            "gas": "27000000",
            "gas_price": "8200000000",
            "input": "0xb2a43c8c",
            "receipt_cumulative_gas_used": "1343816",
            "receipt_gas_used": "184697",
            "receipt_contract_address": null,
            "receipt_root": null,
            "receipt_status": "1",
            "block_timestamp": "2024-06-21T09:09:24.000Z",
            "block_number": "6153742",
            "block_hash": "0x11ad121b9166c4bc095146853fc7ac278373914d66ef799c53bffc7b63a7e4f5",
            "transfer_index": [
                6153742,
                13
            ],
            "transaction_fee": "0.0015145154"
        }
    ];

    console.log(accounts);
    // console.log(accounts.accountList);

    return (
        <>

            <div className="relative bg-[#374151] min-h-screen max-h-full text-white p-[1px]">

                <CommonDialog isOpen={isNetDialogOpen} >
                    <NetworkDialog setNetDialogOpen={setNetDialogOpen} apiKey={API_KEY} />
                </CommonDialog>

                <CommonDialog isOpen={isAccountDialogOpen} >
                    <AccountDialog setAccountDialogOpen={setAccountDialogOpen} accounts={accounts} setAccounts={setAccounts} mnemonic={mnemonic} />
                </CommonDialog>

                <div className="flex flex-col-reverse md:flex-row md:justify-between md:ml-10 md:mr-10 items-center mt-3 md:mt-8">
                    <div onClick={() => setAccountDialogOpen(true)} className="mt-2 md:mt-0 bg-slate-800 pt-2 pb-2 pr-5 pl-5 border-0 rounded-md flex justify-between items-center w-[200px]">
                        <p className="text-[18px] md:text-[20px] ">Account 1 </p>
                        <BiDownArrow className="text-white" size="15" />
                    </div>
                    <div onClick={() => setNetDialogOpen(true)} className="bg-slate-800 pt-2 pb-2 pr-3 pl-3 border-0 rounded-full flex justify-around items-center w-[200px]">
                        <p className="text-[12px] md:text-[14px]">Ethereum Main Net </p>
                        <GoDotFill className="text-green-600" size="12" />
                        <MdKeyboardArrowDown className="text-white" size="18" />
                    </div>
                </div>

                <div className="text-center h-fit pb-10 md:h-[300px] flex-col mt-10 md:mt-20 text-white">
                    <div className="bg-[#2a323d] pt-2 pb-2 pr-5 pl-5 border-0 rounded-2xl flex justify-between items-center w-fit m-auto">
                        <p className="text-[14px] mr-4">0x23...k3a2</p>
                        <div className="bg-[#374151] cursor-default pt-1 pb-1 pr-2 pl-2 border-0 rounded-2xl flex justify-between items-center w-fit">
                            <p className="text-[13px] m-1">Copy</p>
                            <MdOutlineFileCopy className="text-white" size="17" />
                        </div>
                    </div>
                    <div className="mt-2 md:mt-10 text-center">
                        <p className="text-[25px] font-bold">{ethBalance} SepEth</p>
                    </div>

                    <div className="mt-10 text-center flex justify-center">
                        <div className="flex items-center justify-center mr-10 md:mr-16 w-[130px] cursor-pointer border-2 border-blue-800 rounded-3xl bg-blue-800 py-2 px-3 text-white  hover:border-blue-950">
                            <p className='cursor-pointer font-semibold text-[18px] mr-2'>Send</p>
                            <RiSendPlaneLine className="text-white" size="20" />
                        </div>
                        <div className="flex items-center w-[130px] cursor-pointer border-2 border-blue-800 rounded-3xl bg-blue-800 py-2 px-3 text-white  hover:border-blue-950">
                            <p className='cursor-pointer font-semibold text-[18px] mr-2'>Receive</p>
                            <RiSendPlaneLine className="text-white -rotate-180" size="20" />
                        </div>
                    </div>



                </div>

                <div className="mt-4 h-[1px] bg-gray-500"></div>
                <div className="m-5 flex">
                    <p className="text-[25px] font-semibold">Recent Activity</p>
                </div>
                <div className="mt-5 h-[1px] bg-gray-500"></div>

                <TranHistory from={"walletHome"} apiKey={API_KEY} address={wallet.address} />

                <div className="flex items-center justify-center mt-4 mb-2">
                    <p className='cursor-pointer font-semibold text-[18px] w-[130px] border-2 border-blue-800 rounded-3xl bg-blue-800 py-2 px-3 text-white  hover:border-blue-950'>View More</p>
                </div>
            </div>
        </>
    );
}

export default WalletHome;