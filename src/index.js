import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import { Provider } from 'react-redux';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './Poppins.css'
import CreateWallet from './Pages/CreateWallet';
import ImportWallet from './Pages/ImportWallet';
import WalletHome from './Pages/WalletHome';
import Transaction from './Pages/Transaction';
import MarketCap from './Pages/MarketCap';
import Sidebar from './Components/Sidebar';


const AppLayout = () => {
  return (
    <div className='poppins-text'>
      <Navbar />
      <Outlet />
    </div>
  );
}

const AppLayoutWithSidebar = () => {
  return (
    <div className='poppins-text'>
      <Navbar />
      <div className='md:flex'>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}


const routerDom = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/signin', element: <ImportWallet /> },
      { path: '/signup', element: <CreateWallet /> },
    ]
  },
  {
    element: <AppLayoutWithSidebar />,
    children: [
      { path: '/walletHome', element: <WalletHome /> },
      { path: '/transaction', element: <Transaction /> },
      { path: '/marketCap', element: <MarketCap /> },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <RouterProvider router={routerDom} />
  // </Provider>
);