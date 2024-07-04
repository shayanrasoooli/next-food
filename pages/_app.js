import '../styles/globals.css'
import LAYOUT from '../component/layout/LayOut.js'
function MyApp({ Component, pageProps }) {
  return(
<LAYOUT>
<Component {...pageProps} />
</LAYOUT>

  ) 
}

export default MyApp
