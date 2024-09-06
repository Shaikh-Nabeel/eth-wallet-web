import { useRef, useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { ethers } from 'ethers';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateWallet = () => {

    const [recoveryPhrase, setRecoveryPhrase] = useState('');

    const showInfoAlert = () => {
        toast.info("Save Key & Keep it private", {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme : "dark",
            transition: Slide,
        });
    }

    const showWrongPhraseAlert = () => {
        toast.error("You have entered Wrong Key", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme : "dark",
            transition: Slide,
        });
    }

    const firstInput = useRef(null);

    useEffect(() => {
        if (firstInput.current) {
            firstInput.current.focus();
        }
    }, []);

    const handleGenerateKeys = async (event) => {
        try {
            event.preventDefault();
            let pMnemonic = "";

            const inputs = document.querySelectorAll('.mnemonic-input');
            inputs.forEach((input, index) => {
                if (index < inputs.length) {
                    pMnemonic += " " + input.value;
                }
            });

            console.log(pMnemonic);


            const mnemonicWallet = ethers.Wallet.fromPhrase(pMnemonic.trim());
            const privKey = mnemonicWallet.privateKey;
            const pubKey = mnemonicWallet.publicKey;
            const address = mnemonicWallet.address;
            // Update state with keys
            console.log(privKey + "  public key: " + pubKey + "  adress: " + address);
            // setPrivateKey(privKey);
            // setPublicKey(pubKey);
            // setAddress(account.address);
        } catch (error) {
            console.error('Error generating keys:', error);
            showWrongPhraseAlert();
        }
    };

    const generateKeys = () => {
        const gMnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
        setRecoveryPhrase(gMnemonic);
        showInfoAlert();
    }


    return (
        <>
        <ToastContainer />
            <div className="flex flex-col justify-center items-center md:pt-10 md:pb-40 bg-gradient-to-b from-gray-700 to-gray-800 pb-20" style={{height: recoveryPhrase == ''?'600px':'fit-content'}}>
                <div style={{ display: recoveryPhrase !== '' ? 'none' : 'block' }} className='text-center'>
                    <h1 className="text-[18px] md:text-[24px] font-bold text-white">Create a New Ethereum Wallet</h1>
                    <p className="text-[14px] md:text-[16px] text-white m-10">
                        Create a new Ethereum wallet using your 12 word secret key phrase.
                        <br/>This will allow you to securely manage your cryptographic assets.
                    </p>
                    <button onClick={generateKeys}
                        className="pr-6 pl-6 pt-2 pb-2 border-1 border-blue-950 rounded-full bg-blue-800 text-white text-[16px] m-auto">
                        Generate Secret Recovery Phrase
                    </button>
                </div>
                <div style={{ display: recoveryPhrase !== '' ? 'block' : 'none' }} className='mt-5'>
                    <div className='border rounded-lg p-5 text-center bg-blue-950 w-10/12 md:w-auto m-auto'>
                        <p className='text-[16px] font-semibold text-white'>{recoveryPhrase}</p>
                    </div>
                    <h2 className="text-[16px] font-bold md:text-[18px] mt-4 text-white w-full text-center">Enter Given 12 word Secret Key Phrase</h2>
                    <form className="text-center" onSubmit={handleGenerateKeys}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-md md:max-w-3xl p-4 mb-8">
                            <div>
                                <input
                                    type="text"
                                    ref={firstInput}
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
            </div>
            <Footer />
        </>
    );
}

export default CreateWallet;