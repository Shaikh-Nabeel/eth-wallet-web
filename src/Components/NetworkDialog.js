import { IoMdClose } from "react-icons/io";



const NetworkDialog = ({setNetDialogOpen, apiKey}) => {

    const infuraNetworks = [
        {
            name: "Ethereum Mainnet",
            chainId: 1,
            rpcUrl: "https://mainnet.infura.io/v3/"+ apiKey ,
            explorer: "https://etherscan.io"
        },
        {
            name: "Goerli Testnet",
            chainId: 5,
            rpcUrl: "https://goerli.infura.io/v3/YOUR-PROJECT-ID",
            explorer: "https://goerli.etherscan.io"
        },
        {
            name: "Sepolia Testnet",
            chainId: 11155111,
            rpcUrl: "https://sepolia.infura.io/v3/YOUR-PROJECT-ID",
            explorer: "https://sepolia.etherscan.io"
        },
        {
            name: "Polygon Mainnet",
            chainId: 137,
            rpcUrl: "https://polygon-mainnet.infura.io/v3/YOUR-PROJECT-ID",
            explorer: "https://polygonscan.com"
        },
        {
            name: "Polygon Mumbai Testnet",
            chainId: 80001,
            rpcUrl: "https://polygon-mumbai.infura.io/v3/YOUR-PROJECT-ID",
            explorer: "https://mumbai.polygonscan.com"
        }
    ];
    console.log(infuraNetworks[0].rpcUrl);
    return (
        <div className="flex-col bg-slate-800 p-5 border-0 rounded-md w-[350px] h-fit overflow-y-scroll custom-scrollbar">
            <div className="flex justify-between m-2 items-center mb-5"><p className="text-lg font-bold m-auto">Networks</p>
                <IoMdClose onClick={() => setNetDialogOpen(false)} ></IoMdClose>
            </div>

            {infuraNetworks.map((element, index) => (
                <div key={index} className="p-3 border-b-[1px] border-gray-400 hover:bg-slate-900">
                    <p className="text-[14px] font-semibold">{element.name}</p>
                    <p className="text-[12px]">Chain Id: {element.chainId}</p>
                </div>
            ))
            }
        </div>
    )
}


export default NetworkDialog;