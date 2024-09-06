import { useRef, useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { ethers } from 'ethers';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseLocalStorage from '../Components/UseLocalStorage';
import { useNavigate } from 'react-router-dom';

const ImportWallet = () => {


    const [mnemonic, setMnemonic] = UseLocalStorage("Mnemonic", "");
    const [accounts, setAccounts] = UseLocalStorage("Accounts", {});
    const navigate = useNavigate();

    const showWrongPhraseAlert = () => {
        toast.error("Wrong Secret Recovery Phrase", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
    }

    const firstInput = useRef(null);
    useEffect(() => {
        if (firstInput.current) {
            firstInput.current.focus();
        }
    }, []);

    const handlePaste = (event) => {
        event.preventDefault();
        const pasteData = (event.clipboardData || window.clipboardData).getData('text');
        setMnemonic(pasteData);
        console.log(pasteData);
        const mnemonicWords = pasteData.trim().split(/\s+/);
        const inputs = document.querySelectorAll('.mnemonic-input');

        mnemonicWords.forEach((word, index) => {
            if (index < inputs.length) {
                inputs[index].value = word;
            }
        });
    }



    const handleGenerateKeys = async (event) => {
        console.log('got hitttt');
        try {
            event.preventDefault();
            //extracting phrase from input
            let pMnemonic = "";
            if (true) {
                const inputs = document.querySelectorAll('.mnemonic-input');
                inputs.forEach((input, index) => {
                    if (index < inputs.length) {
                        pMnemonic += " " + input.value;
                    }
                });
            }
            console.log("pMnemonic: " + pMnemonic);
            const mnemonicWallet = ethers.Wallet.fromPhrase(pMnemonic.trim());
            console.log("skjdflsjdfljslkdfjlksdjflksdjflksdjflksdjflks");
            setMnemonic(pMnemonic.trim());
            let tempAccounts = {
                current: 1,
                accountList: [
                    {
                        privatekey: mnemonicWallet.privateKey,
                        address: mnemonicWallet.address,
                        accountNo: 1,
                    }
                ]
            }
            setAccounts(tempAccounts)


        } catch (error) {
            console.error('Error generating keys:', error);
            showWrongPhraseAlert();
            const inputs = document.querySelectorAll('.mnemonic-input');
            inputs.forEach((input, index) => {
                if (index < inputs.length) {
                    input.value = "";
                }
            });
        }
    };

    useEffect(() => {
        if (accounts.current && accounts.accountList[accounts.current - 1]) {
            navigate('/walletHome');
        }
    }, [accounts]);

    return (
        <>
            <ToastContainer />
            <div className="flex flex-col justify-center items-center md:pt-10 md:pb-40 bg-gradient-to-b from-gray-700 to-gray-800 pb-20">
                <h2 className="text-[16px] font-bold md:text-[18px] m-4 text-white">Enter Your 12 word Secret Key Phrase</h2>
                <form className="text-center" onSubmit={handleGenerateKeys}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-md md:max-w-3xl p-4 mb-8">
                        <div>
                            <input
                                type="text"
                                ref={firstInput}
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                                onPaste={handlePaste}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="first_name"
                                className="mnemonic-input w-full pr-3 pl-3 pt-2 pb-2 text-[15px] md:text-[18px] bg-gray-600 border-gray-400 border-2 rounded-md text-white"
                                placeholder="key"
                                required
                            />
                        </div>

                    </div>
                    <button
                        type="submit"
                        className="pr-6 pl-6 pt-2 pb-2 border-1 border-blue-950 rounded-full bg-blue-800 text-white text-[16px] m-auto">
                        Confirm Secret Recovery Phrase
                    </button>
                </form>

            </div>
            <Footer />
        </>
    );
}

export default ImportWallet;