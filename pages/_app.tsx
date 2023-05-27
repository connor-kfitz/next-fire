import Navbar from '../components/Navbar';
import '../styles/globals.css';
import '../styles/main.scss';

import { GetServerSideProps } from 'next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
