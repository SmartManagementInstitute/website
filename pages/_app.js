import Navbar from '../src/components/Header/Navbar/Navbar'
import css from '../src/assets/css/import.css'
import '../src/assets/css/root.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>)
}

export default MyApp
