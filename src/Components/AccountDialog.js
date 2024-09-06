import UseLocalStorage from "./UseLocalStorage";
import { ethers } from 'ethers';
import { IoMdClose } from "react-icons/io";
import crab_profile from "../images/crab_profile.png"
import dog_profile from "../images/dog_profile.png"
import squirrel_profile from "../images/squirrel_profile.png"


const AccountDialog = ({ setAccountDialogOpen, accounts, setAccounts, mnemonic }) => {
    // const [accounts, seAccounts] = UseLocalStorage("accounts", "");

    const profileImg = [crab_profile, dog_profile, squirrel_profile];

    function addAccount() {

        const mnenomicInstance = ethers.Mnemonic.fromPhrase(mnemonic);

        const masterNode = ethers.HDNodeWallet.fromMnemonic(mnenomicInstance, "44'/60'/0'/0");
        console.log(masterNode);
        const deriveChild = masterNode.deriveChild(accounts.accountList.length);
        const tempAccount = {...accounts};
        tempAccount.accountList.push({
            privateKey: deriveChild.privateKey,
            address: deriveChild.address,
            accountNo: accounts.accountList.length +1
        })
        console.log("4");
        setAccounts(tempAccount);
        console.log("5");
    }

    return (
        <div className="flex-col bg-slate-800 p-5 border-0 rounded-md w-[250px] h-fit overflow-y-scroll custom-scrollbar">
            <div className="flex justify-between m-2 items-center mb-3"><p className="text-lg font-bold m-auto">Accounts</p>
                <IoMdClose onClick={() => setAccountDialogOpen(false)} ></IoMdClose>
            </div>

            <div className="h-[1px] w-full bg-gray-600 mb-4"></div>

            {accounts.accountList.map((element, index, accountList) => (
                <div key={index} className="flex p-3 border-gray-400 items-center hover:bg-slate-900">
                    <img src={profileImg[index%accountList.length]} className="h-[24px] w-[24px] mr-4" alt="image" />
                    <p className="text-[16px] font-semibold">Account {element.accountNo}</p>
                </div>
            ))
            }

            <div className="flex items-center justify-center mt-5">
                <button onClick={addAccount} className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-900 rounded-md">Add Account</button>

            </div>
        </div>
    );
}

export default AccountDialog;